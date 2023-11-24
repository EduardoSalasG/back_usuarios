import { Sequelize } from 'sequelize';
import fs from 'fs';

const PORTDATABASE: any = process.env.PORTDATABASE
const HOSTNAME: any = process.env.HOSTNAME
const USERNAME: any = process.env.USERNAME
const PASSWORD: any = process.env.PASSWORD
const DATABASE: any = process.env.DATABASE


const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
    host: HOSTNAME,
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
            ca: fs.readFileSync('../DigiCertGlobalRootCA.crt.pem'),
            rejectUnauthorized: false
        },
        port: PORTDATABASE
    },
});
const testConection = async (sequelizeInstance: any) => {
    try {
        await sequelizeInstance.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};


export { sequelize, testConection };
