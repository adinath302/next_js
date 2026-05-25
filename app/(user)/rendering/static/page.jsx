import { cache } from "react";
import { db } from "@/config/db";

export const dynamic = "force-dynamic";

const getDoctors = cache(async () => {
  const [rows] = await db.execute("SELECT * FROM Doctors");
  return rows;
});

export default async function StaticPage() {
  const doctors = await getDoctors();

  return (
    <main
      style={{
        padding: "24px",
        maxWidth: "700px",
        margin: "60px auto",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 16 }}>Doctors Directory</h1>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {Array.isArray(doctors) && doctors.length > 0 ? (
          doctors.map((doctor) => (
            <li
              key={doctor.DoctorID}
              style={{
                padding: "12px",
                marginBottom: "10px",
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: 12,
              }}
            >
              <div style={{ fontWeight: 800, color: "#0f172a" }}>{doctor.Name}</div>
              <div style={{ color: "#0369a1" }}>{doctor.Specialization}</div>
            </li>
          ))
        ) : (
          <li style={{ color: "#64748b" }}>No doctors found.</li>
        )}
      </ul>
    </main>
  );
}

