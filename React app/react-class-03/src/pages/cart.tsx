import React from 'react'
import { useProductsStore } from '../zustand/store'

function Cart() {
    const products = useProductsStore((state: any) => state.products)



    return (
        <div className='w-full'>
            <h1>Products</h1>
            <div className='flex gap-4 justify-center items-center flex-wrap'>
                {
                    products.map((product: any) => {
                        return (
                            <div key={product.id} className="max-w-sm w-[300px] h-[400px] border p-2 bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                                <img className="w-full h-56 object-cover" src={product.image} alt="Product Image" />
                                <div className="p-4">
                                    <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
                                    <p className="text-gray-600 text-sm">${product.price}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Cart