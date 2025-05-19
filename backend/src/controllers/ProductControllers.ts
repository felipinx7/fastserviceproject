import { env } from "../config/env";
import { prisma } from "../config/prisma";
import { dataproductsDTO } from "../dto/dataproductsDTO";
import { ServerParamsDTO } from "../dto/server.params";
import jwt from "jsonwebtoken";

export class ProductControllers {
  // Show all produts in database
  public async getProduct(express: ServerParamsDTO) {
    const products = await prisma.product.findMany();
    return express.res.status(200).json(products);
  }
  // Method for created Product
  public async createdProduct(express: ServerParamsDTO) {
    try {
      const authHeader = express.req.headers["authorization"];
      const token = authHeader?.split(" ")[1];
      const JWT_SECRET = env.JWT_SECRET;

      if (!token) {
        return express.res.status(401).json({ error: "Token não enviado" });
      }

      let user;
      try {
        const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload
        const userId = decoded.id;
      } catch (err) {
        return express.res
          .status(401)
          .json({ error: "Token inválido ou expirado" });
      }

      const data = express.req.body as dataproductsDTO;
      const { name, price, Photo, OrderId } = data;

      if (!data) {
        return express.res
          .status(401)
          .json({ error: "Preencha todos os dados" });
      }

      const findTable = await prisma.table.findUnique({
        where: { id: OrderId },
      });

      if (!findTable) return express.res.send("Mesa não encontrada");

      const newProduct = await prisma.product.create({
        data: {
          name,
          price,
          Photo,
          OrderId: findTable.OrderId,
        },
      });
      return express.res
        .status(201)
        .send({ message: "Produto criado com sucesso!", data });
    } catch (error) {
      console.log(error);
      return express.res
        .status(401)
        .json({ error: "Não foi possivel cadastrar esse produto!" });
    }
  }
}
