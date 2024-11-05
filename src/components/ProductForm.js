import React from "react";
import { useState } from "react";

const ProductForm = ({ product, onSave }) => {
    const [productForm, setProduct] = useState({
        product_name: "",
        price: "",
        image: "",
        description: ""
    });

    const handleChange = (e) => {
        setProduct({
            ...productForm,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(productForm);
      };

    return (

        <section className="py-20 justify-center">
            <div className="container mx-auto">
                <h1 className="text-3xl font-semibold text-left">Add Product</h1>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <label htmlFor="product_name" className="block text-sm font-medium text-gray-700">Product Name</label>
                        <input type="text" name="product_name" id="product_name" className="mt-1 p-2 w-full border border-gray-300 rounded-md" onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                        <input type="text" name="price" id="price" className="mt-1 p-2 w-full border border-gray-300 rounded-md" onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
                        <input type="text" name="image" id="image" className="mt-1 p-2 w-full border border-gray-300 rounded-md" onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea name="description" id="description" className="mt-1 p-2 w-full border border-gray-300 rounded-md" onChange={handleChange}></textarea>
                    </div>
                    <button type="submit" className="bg-primary text-white p-2 rounded-md">Add Product</button>
                </form>
            </div>
        </section>
    );
};

export default ProductForm;