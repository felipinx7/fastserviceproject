import { Router } from "express";
import { ProductControllers } from "../controllers/ProductControllers";

export const ProductRouter = Router();
const productControllers = new ProductControllers();


//Show all products in database
ProductRouter.get("/show-products", (req, res) => {
  productControllers.getProduct({ req, res });
});

ProductRouter.post("/create-products", (req, res) => {
    productControllers.createdProduct({req, res});
});


