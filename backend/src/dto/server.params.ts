import { Request, Response } from "express";

export interface ServerParamsDTO {
  res: Response;
  req: Request;
}
