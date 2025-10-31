import React, { useState } from "react";
import { Link, NavLink } from 'react-router';
import { motion } from "framer-motion";
import { Sun, Moon, Mail, Lock, Eye, EyeOff, Sparkles } from "lucide-react";
import Navbar from "../Components/Navbar";

const Login = ({ onSubmit }) => {
  const [theme, setTheme] = useState("dark");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(email, password);
  };

  const isDark = theme === "dark";

  return (
    <div
      className={`mt-16 min-h-screen flex items-center justify-center p-6 transition-colors duration-500 ${
        isDark
          ? "bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800"
          : "bg-gradient-to-br from-indigo-100 via-white to-blue-100"
      }`}
    >
        <Navbar></Navbar>      

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`w-full max-w-md p-8 rounded-2xl shadow-2xl backdrop-blur-lg border ${
          isDark ? "bg-white/5 border-white/10" : "bg-white/70 border-gray-200"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 shadow-lg"
          >
            <Sparkles size={28} className="text-white" />
          </motion.div>
          <h1
            className={`mt-5 text-3xl font-bold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Welcome Back
          </h1>
          <p
            className={`mt-1 text-sm ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Sign in to continue your SkillNest journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className={`block mb-2 text-sm font-medium ${
                isDark ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Email
            </label>
            <div className="relative">
              <Mail
                className={`absolute left-3 top-3.5 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
                size={18}
              />
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full pl-10 pr-3 py-3 rounded-lg focus:outline-none transition-all ${
                  isDark
                    ? "bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-400"
                    : "bg-white text-gray-900 placeholder-gray-500 border border-gray-200 focus:ring-2 focus:ring-indigo-500"
                }`}
                placeholder="you@skillnest.com"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className={`block mb-2 text-sm font-medium ${
                isDark ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Password
            </label>
            <div className="relative">
              <Lock
                className={`absolute left-3 top-3.5 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
                size={18}
              />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full pl-10 pr-10 py-3 rounded-lg focus:outline-none transition-all ${
                  isDark
                    ? "bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-400"
                    : "bg-white text-gray-900 placeholder-gray-500 border border-gray-200 focus:ring-2 focus:ring-indigo-500"
                }`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-3 top-3.5 text-gray-400"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <p className="text-right text-gray-400 hover:underline cursor-pointer">Forgotten Password ?</p>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-indigo-500/30 transition-all"
          >
            Sign In
          </motion.button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-lg">
          <p className={isDark ? "text-gray-400" : "text-gray-600"}>
            Don’t have an account?{" "}
            <Link to="/signup"
              
              className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            >
              Create one
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;