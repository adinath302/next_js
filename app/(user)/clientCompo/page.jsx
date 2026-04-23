'use client';  // to convert server component to "client component"

import { useEffect, useState } from "react";
import Counter from "./Counter";


const url = "https://jsonplaceholder.typicode.com/posts";


const clientCompo = () => {

    const [postData, setPostData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url);
            const data = await res.json();

            console.log(data);
            setPostData(data)

            return data
        }
        fetchData();
    }, [])

    return (
        <>
            <h1>client compo</h1>
            <button
                className="cursor-pointer bg-amber-300 p-5 text-black"
                onClick={() => alert("hii")}
            >
                click me
            </button>

            <Counter />

            <ul className="grid grid-cols-3 gap-5">
                {
                    postData.map((ds, index) => {
                        return <li key={index}> {ds.body}</li>
                    })
                }
            </ul>
        </>
    )
}

export default clientCompo;