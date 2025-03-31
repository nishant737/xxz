import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import {} from "./error/error.js"
import reservationRouter from "./routes/reservationRoute.js";


const app = express();
dotenv.config({ path: "./.env" });
console.log('FRONTEND_URL',process.env.FRONTEND_URL)
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/reservation', reservationRouter)


dbConnection();

app.use(errorMiddleware)
app.use("/reservation", reservationRouter);

export default app;