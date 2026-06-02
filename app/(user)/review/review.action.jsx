'use server';
import { db } from '@/config/db';

export const reviewAction = async (formData) => {

    const { fullName, email, rating } = Object.fromEntries(formData.entries()); // Extract form data from the FormData object
    await db.execute(`insert into Reviews (fullName, email, rating) values (?,?,?)`, [fullName, email, rating]); // Insert the form data into the Reviews table in the database

}