import { useState } from "react";

const SimpleTable = ({dataToPass}: any) => {


    return (
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
                <tr>
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">Age</th>
                    <th className="p-3 text-left">Occupation</th>
                </tr>
            </thead>
            <tbody>
                {
                    dataToPass.map((entity: any) => {
                        return (
                            <tr className="border-b">
                                <td className="p-3">{entity.name}</td>
                                <td className="p-3">{entity.age}</td>
                                <td className="p-3">{entity.occupation}</td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>
    )
}

export default SimpleTable