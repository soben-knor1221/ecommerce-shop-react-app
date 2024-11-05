import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const EditProduct = () => {
    const { id } = useParams();
    const route = useNavigate();
    const [productData, setProductData] = useState({
        name: "",
        price: "",
        image: "",
        description: "",
    });
    useEffect(() => {
        fetchProduct();
    }, []);
    const fetchProduct = async () => {
        const response = await axios.get(`http://react-ecomerce.api/api/products/${id}`);
        const data = await response.data;
        setProductData(data);
    }

    const handleChange = (e) => {
        setProductData({
            ...productData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const res = axios.put(`http://react-ecomerce.api/api/products/${id}`, productData);
        res.then((res) => {
            if (res.status === 200) {
                route("/");
            }
        })
    }

    return (
        <section className="py-36 justify-center relative">
            <div className="container mx-auto">
                <h1 className="text-3xl font-semibold text-left">Edit Product</h1>
                <form onSubmit={handleSubmit} className="max-w-full mx-auto p-5">
                    <div className="mb-4">
                        <label htmlFor="product_name" className="block text-sm font-medium text-gray-700">Product Name</label>
                        <input
                            type="text"
                            name="name"
                            id="product_name"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            value={productData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                        <input
                            type="text"
                            name="price"
                            id="price"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            value={productData.price}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
                        <input
                            type="text"
                            name="image"
                            id="image"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            value={productData.image}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            name="description"
                            id="description"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            value={productData.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <button type="submit" className="bg-green-600 text-white p-2 rounded-md">Save</button>
                    <button onClick={() => route("/")} className="bg-blue-600 text-white p-2 rounded-md ml-2">Back</button>
                </form>
            </div>
        </section>
    )
}
export default EditProduct;
