import React, { useState } from 'react'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import SimpleTable from '../components/simpleTable'

function Service() {

    
        
            const [data, setData] = useState([
                {
                    name: "Noman",
                    age: 28,
                    occupation: "Software Engineer"
                },
                {
                    name: "Salman",
                    age: 25,
                    occupation: "SQA"
                },
                {
                    name: "Junaid",
                    age: 30,
                    occupation: "Manager"
                },
                {
                    name: "Bilal",
                    age: 30,
                    occupation: "Fullstack Developer "
                },
            ]);
        


    return (
        <div>
            <Header />
            <div className='flex'>
                <Sidebar />
                <div className='w-full p-2'>
                    <h1 className='text-3xl font-bold'>Hello Service</h1>
                    <SimpleTable dataToPass={data} />
                </div>
            </div>
        </div>
    )
}

export default Service