const authDB = {
    host: process.env.DB_HOST as string,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME as string,
    user: process.env.DB_USER as string,
    pass: process.env.DB_PASS as string,
    env: "development"
}
export default authDB;