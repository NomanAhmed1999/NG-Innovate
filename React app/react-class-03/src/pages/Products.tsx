import React, { useEffect, useState } from 'react'
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import { useProductsStore } from '../zustand/store';

function Products() {
    const updateProduct = useProductsStore((state: any) => state.updateProduct)
    const [products, setProducts] = useState<any>([]);

    const fetchData = async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        console.log(data);

        setProducts(data);
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div>
            <Header />
            <div className='flex'>
                <Sidebar />
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
                                            <button onClick={() => {updateProduct(product)}} className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Add to Cart</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Products