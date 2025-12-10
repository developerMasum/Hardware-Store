import LoginForm from "@/components/forms/LoginForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Login | HS Hardware",
  description: "Login to your HS Hardware account",
};

const LoginPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-gray-50 to-gray-200 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-sm text-gray-500">Login to continue</p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
