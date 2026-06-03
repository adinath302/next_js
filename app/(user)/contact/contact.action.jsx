'use server';
import { db } from '@/config/db';


export const contactAction = async (previousState, formData) => {

    try {
        const { fullName, email, message } = Object.fromEntries(formData.entries())
        console.log(fullName, email, message);

        await db.execute(`insert into contact_form (fullName, email, message) values (?,?,?)`, [fullName, email, message]); // Insert the form data into the contact_form table in the database
        return { success: true, message: "Your message has been sent successfully!" };
    } catch (error) {
        console.error("Error inserting contact form data:", error);
        return { success: false, message: "Error while submitting your message. Please try again later." };
    }
    // Here you can add your logic to handle the form submission, such as sending an email or saving the data to a database.

}

