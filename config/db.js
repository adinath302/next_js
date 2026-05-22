import mysql from 'mysql2/promise';

// 1. Initialize the connection pool immediately (Safe, non-blocking)
export const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'hospital_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// 2. Wrap the connection test inside an asynchronous function 
// This prevents Next.js from crashing during build or initialization
export const verifyConnection = async () => {
    try {
        const connection = await db.getConnection();
        console.log("🟢 [Database] Connection successful!");
        connection.release(); // Always release the connection back to the pool
        return { connected: true };
    } catch (error) {
        console.error("🔴 [Database] Connection failed:", error.message);
        return { connected: false, error: error.message };
    }
};

// 3. Run the check safely in the background without blocking the application bundle
verifyConnection();

export default db;