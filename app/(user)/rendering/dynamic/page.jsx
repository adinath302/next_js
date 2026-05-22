import { db, verifyConnection } from "@/config/db";

export const dynamic = "force-dynamic"; // it makes the page dynamic

const Page = async () => {
    const connectionCheck = await verifyConnection();
    console.log("dynamic page");
    
    if (!connectionCheck.connected) {
        return (
            <div style={{ padding: '24px', maxWidth: '600px', margin: '40px auto', backgroundColor: '#fef2f2', border: '1px solid #f87171', borderRadius: '12px', fontFamily: 'system-ui, sans-serif' }}>
                <h1 style={{ color: '#dc2626', margin: '0 0 12px 0', fontSize: '20px' }}>🔌 Database Connection Failed</h1>
                <p style={{ color: '#7f1d1d', fontWeight: '500' }}>Error: {connectionCheck.error}</p>
            </div>
        );
    }

    // 1. Declare variables outside the try block
    let doctors = [];
    let queryError = null;

    // 2. Wrap ONLY the database fetching in the try-catch block
    try {
        const [rows] = await db.execute("SELECT * FROM Doctors");
        doctors = rows;
    } catch (err) {
        console.error("🔴 SQL Query Crash:", err);
        queryError = err.message;
    }

    // 3. Keep all JSX return structures safely outside the try-catch block
    if (queryError) {
        return (
            <div style={{ padding: '24px', maxWidth: '600px', margin: '40px auto', backgroundColor: '#fffbeb', border: '1px solid #f59e0b', borderRadius: '12px', fontFamily: 'system-ui, sans-serif' }}>
                <h1 style={{ color: '#b45309', margin: '0 0 12px 0', fontSize: '20px' }}>⚠️ Query Execution Failed</h1>
                <p style={{ color: '#78350f', fontWeight: '500' }}>Error: {queryError}</p>
            </div>
        );
    }

    if (!doctors || doctors.length === 0) {
        return (
            <div style={{ padding: '24px', fontFamily: 'system-ui, sans-serif' }}>
                <h1>Doctors Directory</h1>
                <p style={{ color: '#6b7280' }}>Database connected successfully, but your Doctors table is empty.</p>
            </div>
        );
    }

    return (
        <div style={{ padding: '24px', maxWidth: '600px', margin: '40px auto', fontFamily: 'system-ui, sans-serif' }}>
            <h1 style={{ color: '#1e293b', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px' }}>Doctors Directory</h1>
            <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0' }}>
                {doctors.map((doctor) => (
                    <li 
                        key={doctor.DoctorID} 
                        style={{ padding: '12px', marginBottom: '8px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                    >
                        <strong style={{ fontSize: '18px', color: '#0f172a' }}>{doctor.Name}</strong>
                        <span style={{ marginLeft: '12px', padding: '2px 8px', backgroundColor: '#e0f2fe', color: '#0369a1', borderRadius: '9999px', fontSize: '14px' }}>
                            {doctor.Specialization}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Page;
