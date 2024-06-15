import dotenv from "dotenv";
import path from 'path';
dotenv.config();

import express from "express";
import fileUpload from "express-fileupload";
import { sequelize } from "./db";

import models from './models/models'
models;

import cors from 'cors'
import { router } from './routes'

import { errorHandlingMiddleware } from './middlewares/ErrorHandlingMiddleware'

const PORT = process.env.PORT || 5000;


const app = express();
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, '..', 'static')))
app.use(fileUpload({}))
app.use('/api', router)

app.use(errorHandlingMiddleware)


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