import React, { useState } from 'react'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import SimpleTable from '../components/simpleTable'

function Contact() {



    const [data, setData] = useState([
        {
            name: "Conatact",
            age: 28,
            occupation: "Software Engineer"
        },
        {
            name: "About",
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
                    <h1 className='text-3xl font-bold'>Hello Contact</h1>
                    <SimpleTable dataToPass={data} />
                </div>
            </div>
        </div>
    )
}

export default Contact