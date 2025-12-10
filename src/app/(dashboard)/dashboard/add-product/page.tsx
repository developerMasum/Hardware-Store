"use client";
import { useCreateProductMutation } from "@/redux/api/productApi";
import React from "react";

const AddProduct = () => {
  const [createProduct] = useCreateProductMutation();

  //here use image uploader //
  // use upload imageto cloudinary and get the url //

  return <div>AddProduct</div>;
};

export default AddProduct;
