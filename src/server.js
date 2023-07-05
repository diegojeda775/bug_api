import express from "express";
import * as dotenv from "dotenv";
import connectDB from "./config/db.js";
import errorHandler from "./middleware/errorHandler.js";
import logger from "./middleware/logger.js";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config({ path: "./src/config/config.env" });

connectDB();

const app = express();

app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
  })
);
app.use(logger);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server listening on Port: ${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.stack}`);
  server.close(() => process.exit(1));
});
