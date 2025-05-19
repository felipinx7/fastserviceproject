import express, { Router } from "express";
import { routes } from "./routes";
import cors from "cors"

const app = express();

app.use(express.json())
app.use(cors())
app.use(routes);

app.listen(3030, () => {
  console.log("Server started on port 3030!");
});
