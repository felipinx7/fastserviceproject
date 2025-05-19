import { Router } from "express";
import { balconistaRouter } from "./balconistaRouter";
import { ProductRouter } from "./productRouter";

export const routes = Router();

routes.use('/balconista', balconistaRouter)
routes.use('/products', ProductRouter)