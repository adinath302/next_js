'use client';

import { useActionState } from "react";
import { contactAction } from "./contact.action";
import { useFormStatus } from "react-dom";

// export const metadata = {
//   title: "Contact page",
//   description: "Get in touch with us through our contact form. We value your feedback and inquiries, and we're here to assist you with any questions or concerns you may have. Please fill out the form below, and we'll get back to you as soon as possible.",
// };

// const contactAction = (formData) => { 
//   const { fullName, email, message } = Object.fromEntries(formData.entries())
//   console.log(fullName, email, message);
// }

const ContactPage = () => {

  const [state, Formaction, isPending] = useActionState(contactAction, null);

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Contact</h1>

      <form action={Formaction} className="space-y-4">
        <div className="space-y-1">
          <label htmlFor="fullName" className="block text-sm font-medium">
            Full name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Your full name"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className="block text-sm font-medium">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message..."
            rows={5}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <Submit />
      </form>
      <section>{
        state && (
          <p className={` p-2 font-semibold flex items-center justify-center ${state.success ? "bg-green-500" : "bg-red-500"}`}>{state.message}</p>
        )
      }</section>
    </div>
  );
};

export default ContactPage;

const Submit = () => {

  const { pending, data, method, action } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-black text-white font-medium rounded px-4 py-2 hover:opacity-90"
    >
      {
        pending ? <span>Loading...</span> : <span>Send message</span>
      }
    </button>
  )
}
