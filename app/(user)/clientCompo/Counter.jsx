import React, { useState } from 'react'

const Counter = () => {
    const [inc, setInc] = useState(0);
    return (
        <div className='bg-red-500 text-black p-5 cursor-pointer select-none' onClick={() => setInc(inc + 1)}>Add - {inc}</div>
    )
}

export default Counter