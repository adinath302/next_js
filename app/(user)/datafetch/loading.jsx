'use client';
import { useEffect } from "react";

const Loading = () => {
    useEffect(() => {
        const runway = async (resolve) => {
            await new Promise((resolve) => setTimeout(resolve, 3000))
        }
        runway();
    }, [])

    return (
        <div>
            <h1>Loading...</h1>
        </div>
    )
}

export default Loading;