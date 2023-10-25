import express from "express";
import { handle } from "./controllers/handle.ts";
import { HashVerify } from "./middlewares/HashVerify.ts";
import serverless from 'serverless-http';
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(HashVerify)
app.post("/", handle);

// app.listen(3000, () => console.log("Server is running..."));

export const handler = serverless(app);