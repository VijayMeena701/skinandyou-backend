import dotenv from 'dotenv';
dotenv.config();
import express, { Application } from 'express';
import cors from 'cors';
import { sequelize } from "../config/database";
import apiRoutes from "../routes/api";


const app: Application = express();
const port = Number(process.env.PORT) || 5000;

app.use(cors());
app.use(express.json());


// Sync Database
// remove force on production as it will drop and recreate tables whenever server restarts
sequelize.sync({ force: false }).then(() => {
    console.log('Database & tables created!');
});

app.use('/api', apiRoutes);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
