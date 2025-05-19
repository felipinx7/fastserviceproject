import { prisma } from "../config/prisma";
import { DataBalconistaDTO } from "../dto/dataBalconistaDTO";
import { ServerParamsDTO } from "../dto/server.params";
import { env } from "../config/env";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export class BalconistaController {
  //Method show all Users
  public async getBalconista(express: ServerParamsDTO) {
    const balconistas = await prisma.balconista.findMany();
    return express.res.status(200).json(balconistas);
  }

  //Method for create balconista
  public async createBalconista(express: ServerParamsDTO) {
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const data = express.req.body as DataBalconistaDTO;

      // Validation of data
      if (!data.email || !data.password) {
        return express.res.status(400).json({ error: "Preencha todos os dados!" });
      }

      if (data.password.length < 6) {
        return express.res.status(400).json({ error: "A senha deve ter no mínimo 6 caracteres!" });
      }

      if (!emailRegex.test(data.email)) {
        return express.res.status(400).json({ error: "Email inválido!" });
      }

      //Password encryption
      const hashedPassword = await bcrypt.hash(data.password, 10);


      //Creation of Balconista
      const newBalconista = await prisma.balconista.create({
        data: {
          email: data.email,
          password: hashedPassword,
        },
      });

      //Returning Balconista
      return express.res.status(201).json({ message: "Conta Criada com sucesso!" });

    } catch (error) {
      console.log(error);
      return express.res.status(400).json({ error: "Falha ao Criar sua conta, tente novamente!" });
    }
  }

  //Method Login Balconista
  public async loginBalconista(express: ServerParamsDTO) {
    try {
      const data = express.req.body as DataBalconistaDTO;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      const JWT_SECRET = env.JWT_SECRET

      //Validatio of data
      if (!data.email || !data.password) {
        return express.res.status(400).json({ error: "Preeencha todos os campos!" })
      }

      if (data.password.length < 6) {
        return express.res.status(400).json({ error: "A senha deve ter no mínimo 6 caracteres!" });
      }

      if (!emailRegex.test(data.email)) {
        return express.res.status(400).json({ error: "Email inválido!" });
      }

      const user = await prisma.balconista.findUnique({
        where: {
          email: data.email,
        }
      })

      if (!user) {
        return express.res.status(400).json({ error: "Usuário não encontrado!" })
      }

      const isPasswordCorrect = await bcrypt.compare(data.password, user?.password!)

      if (!isPasswordCorrect) {
        return express.res.status(400).json({ error: "Credenciais Inválida!" })
      }
      
      const token = jwt.sign( {id: user.id  }, JWT_SECRET, {expiresIn: "7h"})

      return express.res.status(200).json(token)

    } catch (error) {
      console.log(error)
      return express.res.status(400).json({ error: "Falha ao logar!" })
    }
  }
}
