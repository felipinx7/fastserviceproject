import { Router } from "express";
import { BalconistaController } from "../controllers/BalconistaControllers";

export const balconistaRouter = Router();
const ControlersBalconista = new BalconistaController();

balconistaRouter.get("/list", (req, res) => {
  ControlersBalconista.getBalconista({req, res});
});

balconistaRouter.post("/register", (req, res) => {
  ControlersBalconista.createBalconista({req, res});
});

balconistaRouter.post("/login", (req, res) => {
  ControlersBalconista.loginBalconista({req, res});
});