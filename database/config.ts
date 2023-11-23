const Sequelize = require('sequelize');

const PORTDATABASE = process.env.PORTDATABASE
const HOSTNAME: any = process.env.HOSTNAME
const USERNAME: any = process.env.USERNAME
const PASSWORD: any = process.env.PASSWORD
const DATABASE: any = process.env.DATABASE


const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
    host: HOSTNAME,
    dialect: 'mysql'
});

export default { sequelize };
