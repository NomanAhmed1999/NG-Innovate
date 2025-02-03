import React, { useState } from 'react'
import SimpleTable from './simpleTable'

function HomeCom() {



    const [data, setData] = useState([
        {
            name: "Khateeb",
            age: 28,
            occupation: "Software Engineer"
        },
        {
            name: "Abdul Rehman",
            age: 25,
            occupation: "SQA"
        },
        {
            name: "Abdul Raheem",
            age: 30,
            occupation: "Manager"
        },
        {
            name: "Noman",
            age: 30,
            occupation: "Fullstack Developer "
        },
    ]);



    return (
        <div className="p-2 bg-gray-100 min-h-screen">
            <section>
                <h2 className="text-2xl font-bold mb-4">Simple Table</h2>
                {/* Child */}
                <SimpleTable dataToPass={data} />
            </section>
        </div>
    )
}

export default HomeCom