"use client";
import { useGetAllProductsQuery } from "@/redux/api/productApi";
import React from "react";

const productPage = () => {
  const { data } = useGetAllProductsQuery({});
  console.log(data);
  return (
    <div className="text-white ">
      welcome to dashboard
      <div className="mt-4 text-white">
        {data?.length} products found
        {data?.map((product: any) => (
          <div key={product.id} className="border p-4 my-2">
            <h2 className="text-xl font-bold">{product.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default productPage;
