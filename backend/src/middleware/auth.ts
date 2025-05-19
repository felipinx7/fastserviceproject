import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { ServerParamsDTO } from "../dto/server.params";
import { NextFunction, Request, Response } from "express";

const JWT_SECRET = env.JWT_SECRET;

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(400).json({ error: "Acesso Negado" });
    return;
  }

  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);

    console.log(decoded)

    next();
  } catch (error) {
    res.status(401).json({ error: "Token Inválido" });
  }
};
