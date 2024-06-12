import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { sequelize } from "./db";

import models from './models/models'
models;

import cors from 'cors'
import { router } from './routes'

const PORT = process.env.PORT || 5000;


const app = express();
app.use(cors())
app.use(express.json())
app.use('/api', router)


const connectDB = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync();
        console.log('All models were synchronized successfully.');

        app.listen(PORT, () => {
            console.log(`Server start on port: ${PORT}`);
        });
    } catch (error: unknown) {
        console.log(error);
    }
};

connectDB()