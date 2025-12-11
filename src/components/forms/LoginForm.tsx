"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signInUser } from "@/services/actions/userLogin";
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
      const res = await signInUser(data);
      console.log(res);

      if (res?.data?.accessToken) {
        alert(res?.message);
        storeUserInfo({ accessToken: res?.data?.accessToken });
        router.refresh();
      }
    } catch (err) {
      alert("Account does not exist!");
    }
  };

  return (
    <div className="flex items-center justify-center px-6 text-black">
      <div className="w bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-12 space-y-10 transform transition duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]">
        {/* Title */}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
          {/* Email */}
          <div>
            <label className="text-sm text-gray-700 font-medium">
              Email or Phone
            </label>
            <input
              {...register("email", { required: "Email or phone is required" })}
              type="text"
              placeholder="Enter your email or phone"
              className={`w-full h-12 px-4 bg-gray-800/40 text-gray-100 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition ${
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
            <label className="text-sm text-gray-700 font-medium">
              Password
            </label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              placeholder="Enter your password"
              className={`w-full h-12 px-4 bg-gray-800/40 text-gray-100 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition ${
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
