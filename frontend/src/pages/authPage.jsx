import { useState } from "react";
import { Link } from "react-router-dom";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form className="space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input type="text" className="w-full p-3 border rounded-lg" placeholder="Enter your name" />
            </div>
          )}
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-3 border rounded-lg" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full p-3 border rounded-lg" placeholder="Enter your password" />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg">
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 ml-2"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>

        <div className="text-center mt-6">
          <Link to="/" className="text-gray-500 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
