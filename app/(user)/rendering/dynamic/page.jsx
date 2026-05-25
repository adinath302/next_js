import { db, verifyConnection } from "@/config/db";
import { cache } from "react";

export const dynamic = "force-dynamic"; // it makes the page dynamic

const Page = async () => {

    const rows = await getallDoctors();

    console.log("featching doctors ");
    return (
        <div style={{ padding: '24px', maxWidth: '600px', margin: '40px auto', fontFamily: 'system-ui, sans-serif' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0' }}>
                <DoctorsList rows={rows} />
            </ul>
        </div>
    );
};

export default Page;

const DoctorsList = async ({rows}) => {

console.log("doctors_list");

    return (
        <ul>
            {
                rows.map((doctor) => (
                    <li
                        key={doctor.DoctorID}
                        style={{ padding: '12px', marginBottom: '8px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                    >
                        <strong style={{ fontSize: '18px', color: '#0f172a' }}>{doctor.Name}</strong>
                        <span style={{ marginLeft: '12px', padding: '2px 8px', backgroundColor: '#e0f2fe', color: '#0369a1', borderRadius: '9999px', fontSize: '14px' }}>
                            {doctor.Specialization}
                        </span>
                    </li>
                ))
            }
        </ul>
    )
}

const getallDoctors = cache(async () => {
    const [rows] = await db.execute("SELECT * FROM Doctors");
    console.log("featching doctors ");
    return rows;
});