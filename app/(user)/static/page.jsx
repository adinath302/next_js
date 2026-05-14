import { db } from "../../../config/db"

const page = async () => {
    const doctors = await db.execute("SELECT * FROM doctors");
    console.log(doctors);
    
    return (
        <div>
            <h1>Doctors</h1>
            <ul>
                {/* {doctors.map((doctor) => (
                    <li key={doctor.id}>{doctor.name}</li>
                ))} */}
            </ul>
        </div>
    )
}

export default page