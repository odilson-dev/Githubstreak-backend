import express from "express";
import cors from "cors";
import "dotenv/config";
import v1Api from "./routes/index.js";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET"],
  }),
);

const port = process.env.PORT || 3001;

app.use("/v1", v1Api);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});