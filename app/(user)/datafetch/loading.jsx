'use client';

import { promises } from "node:dns";
import { useEffect } from "react";

const loading = () => {
    useEffect(() => {
        const runway = async((resolve) => {
            await new promises((resolve) => setTimeout(resolve, 3000))
        })
        runway();
    }, [])

    return (
        <div>
            <h1>Loading...</h1>
        </div>
    )
}

export default loading;