import { db } from "@/config/db";
import { unstable_cache } from "next/cache";

// FORCE Next.js to register this page as an ISR route at build time
export const revalidate = 30;

const getCachedDoctors = unstable_cache(
    async () => {
        const [rows] = await db.execute("select * from doctors");
        return rows;
    },
    ["doctors-list-key"],
    { revalidate: 30 } // Must match the export above
);

export default async function StaticPage() {
    const doctors = await getCachedDoctors();

    console.log("=== STATIC DOCTORS FETCH TRIGGERED ===");

    return (
        <ul>
            {doctors.map((doctor) => (
                <li key={doctor.doctor_id}>{doctor.first_name}</li>
            ))}
        </ul>
    );
}
