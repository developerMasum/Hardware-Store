import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full text-center border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-blue-600">HS</span> Hardware
        </h1>

        <p className="text-gray-600 mb-8">
          Your trusted partner for premium hardware and tools.
        </p>

        <Button variant="link" asChild className={cn("bg-blue-600 text-white max-w-sm w-full hover:no-underline")}>
          <Link href="/login">Login Here</Link>
        </Button>
      </main>
    </div>
  );
};

export default HomePage;
