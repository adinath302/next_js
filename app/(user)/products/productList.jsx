'use client';
import React from 'react'
import { useSearchParams } from 'next/navigation'
const ProductList = () => {
    const searchParams = useSearchParams();
    const pages = searchParams.getAll("page");
    const category = searchParams.getAll("category");
    // const entries = Object.fromEntries(searchParams.entries());
    

    console.log("page:", pages);
    console.log("category:", category);
    console.log("entries:", entries);

    return (
        <div>
            <h1>client - {pages} - {category}</h1>
        </div>
    )
}

export default ProductList;
