import React, { useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import Hero from "../components/Hero";
import Product from "../components/Product";
import  { ProductContext }  from "../contexts/ProductContext";
const Home = () => {
  const route = useNavigate();
  const { products } = useContext(ProductContext);  
  return (
    <div>
      <Hero />
      <section className="py-20 static ">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center">Explore Our Products</h1>
          <div className="flex justify-end gap-4 mb-10">
            <button onClick={() => route("/product/create")} className=' flex bg-green-500 py-4 px-8 text-white rounded-md ml-2 justify-center items-center'>Create <BsPlus className="text-3xl" /></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {products.map((product) => {
              return (
                <Product product={product} key={product.id} />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
