"use client";
import React from "react";
import Link from "next/link";

const AuthPage: React.FC<{ isSignUp: boolean }> = ({ isSignUp }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          {isSignUp ? "Create an Account" : "Sign In"}
        </h2>
        <form className="space-y-4">
          {isSignUp && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
              required
            />
          )}
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
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          {isSignUp ? "Already have an account?" : "Don't have an account?"} {" "}
          <Link
            href={isSignUp ? "/signin" : "/signup"}
            className="text-blue-500 hover:underline"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export const SignIn = () => <AuthPage isSignUp={false} />;
export const SignUp = () => <AuthPage isSignUp={true} />;
