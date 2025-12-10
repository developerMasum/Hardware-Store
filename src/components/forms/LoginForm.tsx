"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInUser } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/actions/auth.services";

export default function Login() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      const res = await signInUser(data);

      if (res?.data?.accessToken) {
        alert(res?.message);
        storeUserInfo({ accessToken: res?.data?.accessToken });
        router.refresh();
      }
    } catch (err) {
      alert("Account does not exist, please register first!");
    }
  };

  const fillDemoCredentials = (type: "admin" | "user") => {
    if (type === "admin") {
      setValue("email", "admin@gmail.com");
      setValue("password", "123456");
    } else {
      setValue("email", "user@gmail.com");
      setValue("password", "123456");
    }
    handleSubmit(onSubmit)();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4 py-8">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-8 space-y-8">
        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-amber-400 tracking-wide">
            Welcome Back
          </h1>
          <p className="text-zinc-400 text-sm">Login to continue</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-zinc-300 font-medium">
              Email or Phone Number
            </label>
            <input
              {...register("email", {
                required: "Email or phone number is required",
              })}
              type="text"
              placeholder="Enter your email or phone number"
              className={`w-full h-11 px-4 bg-gray-800/50 text-zinc-200 border rounded-md focus:ring-2 focus:ring-amber-500 focus:outline-none ${
                errors.email ? "border-red-500" : "border-zinc-600"
              }`}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {String(errors.email.message)}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-zinc-300 font-medium">
              Password
            </label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              placeholder="Enter your password"
              className={`w-full h-11 px-4 bg-gray-800/50 text-zinc-200 border rounded-md focus:ring-2 focus:ring-amber-500 focus:outline-none ${
                errors.password ? "border-red-500" : "border-zinc-600"
              }`}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {String(errors.password.message)}
              </span>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-amber-500 to-red-600 text-white font-semibold uppercase rounded-md hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        {/* Demo Login Buttons */}
        <div className="flex gap-3 justify-between">
          <button
            onClick={() => fillDemoCredentials("admin")}
            className="w-1/2 py-2 bg-gradient-to-r from-red-600 to-amber-500 text-white uppercase text-sm rounded-md hover:opacity-90 transition"
          >
            Admin Demo
          </button>

          <button
            onClick={() => fillDemoCredentials("user")}
            className="w-1/2 py-2 bg-gradient-to-r from-amber-500 to-red-600 text-white uppercase text-sm rounded-md hover:opacity-90 transition"
          >
            User Demo
          </button>
        </div>

        {/* Register Link */}
        <p className="text-center text-sm text-zinc-400">
          New here?{" "}
          <Link
            href="/register"
            className="text-amber-400 font-medium hover:underline"
          >
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
}
