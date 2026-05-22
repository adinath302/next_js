import { db } from "@/config/db";
import { unstable_cache } from "next/cache";

// 1. Force Next.js to bake this into a flat HTML file during build time
export const dynamic = "force-static";

// 2. Wrap the query so Next.js saves the database result to disk
const getStaticDoctors = unstable_cache(
    async () => {
        const [rows] = await db.execute("SELECT * FROM Doctors");
        return rows;
    },
    ["my-doctors-cache-key"] // Unique name for this cache packet
);

export default async function StaticPage() {
    // 3. Fetch data from the saved disk cache instead of hitting MySQL live
    const doctors = await getStaticDoctors();

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>Doctors Directory (True Static)</h1>
            <p style={{ color: 'gray' }}>This data is frozen. Changing the DB won't update this screen.</p>
            
            <ul>
                {doctors.map((doctor) => (
                    <li key={doctor.DoctorID} style={{ margin: '10px 0' }}>
                        <strong>{doctor.Name}</strong> - {doctor.Specialization}
                    </li>
                ))}
            </ul>
        </div>
    );
}
