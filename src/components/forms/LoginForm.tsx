"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import { storeUserInfo } from "@/services/actions/auth.services";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data: any) => {
    console.log("data", data);
    try {
      const res = await axios.post(
        "https://hardware-store-nine.vercel.app/api/auth/login",
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(res.data);

      if (res.data?.accessToken) {
        alert(res.data.message || "Login successful!");
        storeUserInfo({ accessToken: res.data.accessToken });
        router.refresh();
      } else {
        alert("Login failed!");
      }
    } catch (err: any) {
      console.error(err.response || err);
      alert(err.response?.data?.message || "Account does not exist!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gray-900">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-12 space-y-10">
        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold text-white tracking-wide">
            Welcome Back
          </h1>
          <p className="text-gray-300 text-sm">Please login to continue</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
          {/* Email */}
          <div>
            <label className="text-sm text-gray-200 font-medium">
              Email or Phone
            </label>
            <input
              {...register("email", { required: "Email or phone is required" })}
              type="text"
              placeholder="Enter your email or phone"
              className={`w-full h-12 px-4 bg-gray-800/50 text-gray-100 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition ${
                errors.email ? "border-red-500" : "border-gray-600"
              }`}
            />
            {errors.email && (
              <span className="text-red-400 text-sm">
                {String(errors.email.message)}
              </span>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-200 font-medium">
              Password
            </label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              placeholder="Enter your password"
              className={`w-full h-12 px-4 bg-gray-800/50 text-gray-100 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition ${
                errors.password ? "border-red-500" : "border-gray-600"
              }`}
            />
            {errors.password && (
              <span className="text-red-400 text-sm">
                {String(errors.password.message)}
              </span>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:opacity-95 active:scale-[0.98] transition-all duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
