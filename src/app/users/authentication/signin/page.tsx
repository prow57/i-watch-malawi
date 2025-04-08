"use client";
import React from "react";
import Link from "next/link";
import { FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa";

const LoginPage: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Sign In
        </h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
            required
          />
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>

        <div className="relative text-center">
          <span className="text-gray-400 text-sm bg-white px-2 z-10 relative">
            or continue with
          </span>
          <div className="absolute left-0 top-1/2 w-full h-px bg-gray-200 -z-0 transform -translate-y-1/2" />
        </div>

        <div className="flex justify-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600">
            <FaGoogle />
            Google
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
            <FaFacebookF />
            Facebook
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-400 rounded-lg hover:bg-blue-500">
            <FaTwitter />
            Twitter
          </button>
        </div>

        <p className="text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/users/authentication/signup"
            className="text-blue-500 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
