'use server';
import {db} from '@/config/db';

export const contactAction = async (formData) => {
console.log(formData.get("fullName")); // Log the form data to the console for debugging purposes
console.log(formData.get("email"));
console.log(formData.get("message"));

try{
    const { fullName, email, message } = Object.fromEntries(formData.entries())
    console.log(fullName, email, message);
}catch(error){
    console.error("Error parsing form data:", error);
    return;
}
// Here you can add your logic to handle the form submission, such as sending an email or saving the data to a database.
await db.execute(`insert into contact_form (fullName, email, message) values (?,?,?)`, [fullName, email, message]); // Insert the form data into the contact_form table in the database
}

