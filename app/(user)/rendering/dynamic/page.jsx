import Link from "next/link";
import { db, verifyConnection } from "@/config/db";
import { cache } from "react";


export const dynamic = "force-dynamic"; // it makes the page dynamic

const Page = async () => {

    const rows = await getallDoctors();

    console.log("featching doctors ");
return (
        <div style={{ padding: '24px', maxWidth: '600px', margin: '40px auto', fontFamily: 'system-ui, sans-serif' }}>
            <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>Doctors</h1>
            <div style={{ color: '#64748b', marginBottom: 20 }}>
              First doctor route: <span style={{ fontFamily: 'monospace' }}>/rendering/dynamic/1</span>
            </div>
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
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <strong style={{ fontSize: '18px', color: '#0f172a' }}>{doctor.Name}</strong>
                            <span style={{ marginLeft: '0', padding: '2px 8px', backgroundColor: '#e0f2fe', color: '#0369a1', borderRadius: '9999px', fontSize: '14px', width: 'fit-content' }}>
                                {doctor.Specialization}
                            </span>
                            <Link
                                href={`/rendering/dynamic/${doctor.DoctorID}`}
                                style={{
                                    width: 'fit-content',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '6px 10px',
                                    borderRadius: '10px',
                                    backgroundColor: '#0f172a',
                                    color: '#fff',
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    textDecoration: 'none'
                                }}
                            >
                                View
                            </Link>
                        </div>
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