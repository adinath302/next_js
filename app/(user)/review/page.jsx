import React from "react";
import { reviewAction } from "./review.action";
export const metadata = {
    title: "Review",
    description: "Leave your review.",
};

export default function ReviewPage() {
    return (
        <div className="max-w-xl mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-4">Review</h1>

            <form className="space-y-4" action={reviewAction}>
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
                    <label htmlFor="rating" className="block text-sm font-medium">
                        Rating (1-5)
                    </label>
                    <input
                        id="rating"
                        name="rating"
                        type="number"
                        min={1}
                        max={5}
                        step={1}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-black text-white font-medium rounded px-4 py-2 hover:opacity-90"
                >
                    Submit Review
                </button>
            </form>
        </div>
    );
}

