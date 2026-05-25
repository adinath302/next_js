// import { db } from "@/config/db";

// // 2. Set the global ISR revalidation timer
// // export const revalidate = 30;


// // 3. Create a cached function to fetch doctors with a specific cache key
// export default async function StaticPage() {

//     const doctors = await getDoctorsCached();


//     return (
//         <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
//             <h1>Doctors Directory (True ISR Active)</h1>
//             <ul>
//                 {doctors.map((doctor, index) => (
//                     <li key={doctor.doctor_id ?? index}>
//                         {doctor.Name ?? "Unnamed Doctor"}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
