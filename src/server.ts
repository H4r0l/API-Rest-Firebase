import "dotenv/config";
import express from "express";
import cors from "cors";
import {router} from "./network/index";
import db from "./utils/mongo";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors({
    origin: "*"
}));

app.use(express.json());
app.use(router)

db().then(() => console.log("Database connected successfully"));
app.listen(PORT, () => {
    console.log("Listening on Port " + PORT);
})