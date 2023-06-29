import express from "express";
import * as dotenv from "dotenv";

dotenv.config({ path: "./src/config/config.env" });

const app = express();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server listening on Port: ${PORT}`);
});
