import { createPool } from 'mysql2'
const PORTDATABASE = process.env.PORTDATABASE
const HOSTNAME = process.env.HOSTNAME
const USERNAME = process.env.USERNAME
const PASSWORD = process.env.PASSWORD
const DATABASE = process.env.DATABASE

const dbConnection = createPool({
    host: HOSTNAME,
    user: USERNAME,
    password: PASSWORD,
    port: PORTDATABASE,
    database: DATABASE
})

module.exports = {
    dbConnection
}