import { db } from "@/config/db";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function DoctorDetailsPage({ params }) {
    const doctorId = params?.doctorId;

    const [rows] = await db.execute(
        "SELECT * FROM Doctors WHERE DoctorID = ? LIMIT 1",
        [doctorId]
    );

    const doctor = Array.isArray(rows) ? rows[0] : undefined;

    if (!doctor) return notFound();

    return (
        <main
            style={{
                padding: "24px",
                maxWidth: "700px",
                margin: "60px auto",
                fontFamily: "system-ui, sans-serif",
            }}
        >
            <div
                style={{
                    background: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: 16,
                    padding: 24,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                }}
            >
                <div style={{ fontSize: 14, color: "#64748b", marginBottom: 8 }}>
                    Doctor Details
                </div>
                <h1 style={{ fontSize: 32, marginBottom: 8 }}>{doctor.Name}</h1>
                <div
                    style={{
                        display: "inline-block",
                        padding: "6px 12px",
                        borderRadius: 9999,
                        background: "#e0f2fe",
                        color: "#0369a1",
                        fontWeight: 600,
                        marginBottom: 16,
                    }}
                >
                    {doctor.Specialization}
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#334155" }}>
                    <li style={{ marginBottom: 8 }}>
                        <strong>Doctor ID:</strong> {doctor.DoctorID}
                    </li>
                </ul>
            </div>
        </main>
    );
}

