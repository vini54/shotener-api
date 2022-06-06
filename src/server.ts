import express from "express";
import { Router } from "./routes";
import "dotenv/config";

const port = process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(Router);

app.get("/", (req, res) => {
  return res.status(200).json("access successful");
});

app.listen(port || 8080, () => {
  console.log(`Server running on ${port || 8080}`);
});
