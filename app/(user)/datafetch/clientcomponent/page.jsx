'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
const DataFetchServer = () => {
    const [userInfo, setUserInfo] = useState({});

    const searchParams = useSearchParams();
    let userName = searchParams.get('name');

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

    useEffect(() => {

        export const revealUserGender = async () => {
            const res = await fetch(`https://api.genderize.io/?name=${userName}`)
            const userData = await res.json()
            setUserInfo(userData);
        }

        revealUserGender();

    }, [])
    console.log(userInfo);

    if (!userInfo.gender) return null
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full animate-pulse-glow animate-fade-in-up">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">
                        Gender Prediction
                    </h1>
                    <p className="text-lg text-gray-700 mb-2">
                        Name: <span className="font-semibold">{userInfo.name}</span>
                    </p>
                    <p className="text-lg text-gray-700 mb-2">
                        Gender: <span className="font-semibold capitalize">{userInfo.gender}</span>
                    </p>
                    <p className="text-lg text-gray-700">
                        Confidence: <span className="font-semibold">{userInfo.probability * 100}%</span>
                    </p>
                    <p className="text-sm text-gray-500 mt-4">
                        Based on {userInfo.count.toLocaleString()} records
                    </p>
                    <div style={{ width: '100%', height: '12px', backgroundColor: '#e5e7eb', borderRadius: '9999px', marginTop: '16px', overflow: 'hidden' }}>
                        <div style={{ width: `${userInfo.probability * 100}%`, height: '100%', borderRadius: '9999px', background: 'linear-gradient(to right, #ec4899, #eab308)', transition: 'width 0.5s ease' }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default DataFetchServer;