import { Suspense } from "react";
import DataCard from "./DataCard";

const DataFetchServer = async (props) => {
    const searchParams = await props.searchParams;
    let userName = searchParams?.name || "";

    // Remove quotes from the name if present
    userName = userName.replace(/^["']|["']$/g, '').trim();

    if (!userName || userName.length === 0) {
        return (
            <div className="min-h-screen bg-gradient-to-brfrom-purple-50 via-blue-50 Ito-indigo-100 fl
items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">
                            No Name Provided
                        </h1>
                        <p className="text-gray-600">
                            Please add ?name=yourname to the URL
                            "yourname": Unknown word.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 gap-3 h-full">
            <div className="h-full flex justify-center items-center ">
                <h2>
                    Hii I am 1st component. In Loading.jsx I have to wait but in Suspense I don't. I support partial rendering. This means you can show a fallback UI (like a loading spinner or skeleton) for specific components while the rest of your application renders and remains interactive.
                </h2>
            </div>
            <Suspense fallback={<div className="h-full flex justify-center items-center">
                <div className="animate-pulse text-gray-500">Loading...</div>
            </div>}>
                <DataCard userName={userName} />
            </Suspense>
        </div>
    );
}

export default DataFetchServer;