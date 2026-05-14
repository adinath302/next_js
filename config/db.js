import { log } from 'console';
import mysql from 'mysql2/promise';

// mysql.createConnection()

export const db = mysql.createPool({
host: 'localhost',
user:"root",
password:"root",
database:"hospital_db"
})

try{
    const connection = await db.getConnection();
    console.log("Database connection successful!");
    connection.release();
}catch(error){
    console.error("Database connection failed:", error);    
    process.exit(1);
}