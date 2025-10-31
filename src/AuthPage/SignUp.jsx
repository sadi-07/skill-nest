// RegisterWithTheme.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sun,
  Moon,
  User,
  Mail,
  Image as ImageIcon,
  Lock,
  Eye,
  EyeOff,
  Sparkles,
  AlertCircle,
} from "lucide-react";
import { Link } from "react-router";
import Navbar from "../Components/Navbar";

const SignUp = ({ onSubmit }) => {
  const [theme, setTheme] = useState("dark");
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    photo: "",
    password: "",
  });
  const [error, setError] = useState("");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const isDark = theme === "dark";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validatePassword = (password) => {
    if (password.length < 6)
      return "Password must be at least 6 characters long";
    if (!/[A-Z]/.test(password))
      return "Password must contain at least one uppercase letter";
    if (!/[a-z]/.test(password))
      return "Password must contain at least one lowercase letter";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validatePassword(form.password);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");
    if (onSubmit) onSubmit(form);
  };

  return (
      <div
      className={` mt-16 min-h-screen flex items-center justify-center p-6 transition-colors duration-500 ${
          isDark
          ? "bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800"
          : "bg-gradient-to-br from-indigo-100 via-white to-blue-100"
        }`}
        >
        <Navbar></Navbar>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`w-full max-w-md p-8 rounded-2xl shadow-2xl backdrop-blur-lg border ${
          isDark ? "bg-white/5 border-white/10" : "bg-white/70 border-gray-200"
        }`}
      >
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
            Create an Account
          </h1>
          <p
            className={`mt-1 text-sm ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Join SkillNest and start your learning adventure
          </p>
        </div>

        
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className={`block mb-2 text-sm font-medium ${
                isDark ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Name
            </label>
            <div className="relative">
              <User
                className={`absolute left-3 top-3.5 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
                size={18}
              />
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className={`w-full pl-10 pr-3 py-3 rounded-lg focus:outline-none transition-all ${
                  isDark
                    ? "bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-400"
                    : "bg-white text-gray-900 placeholder-gray-500 border border-gray-200 focus:ring-2 focus:ring-indigo-500"
                }`}
              />
            </div>
          </div>

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
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@skillnest.com"
                className={`w-full pl-10 pr-3 py-3 rounded-lg focus:outline-none transition-all ${
                  isDark
                    ? "bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-400"
                    : "bg-white text-gray-900 placeholder-gray-500 border border-gray-200 focus:ring-2 focus:ring-indigo-500"
                }`}
              />
            </div>
          </div>

          {/* Photo URL */}
          <div>
            <label
              htmlFor="photo"
              className={`block mb-2 text-sm font-medium ${
                isDark ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Photo URL
            </label>
            <div className="relative">
              <ImageIcon
                className={`absolute left-3 top-3.5 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
                size={18}
              />
              <input
                id="photo"
                name="photo"
                type="url"
                value={form.photo}
                onChange={handleChange}
                placeholder="https://your-photo.com/me.jpg"
                className={`w-full pl-10 pr-3 py-3 rounded-lg focus:outline-none transition-all ${
                  isDark
                    ? "bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-400"
                    : "bg-white text-gray-900 placeholder-gray-500 border border-gray-200 focus:ring-2 focus:ring-indigo-500"
                }`}
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
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                className={`w-full pl-10 pr-10 py-3 rounded-lg focus:outline-none transition-all ${
                  isDark
                    ? "bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-400"
                    : "bg-white text-gray-900 placeholder-gray-500 border border-gray-200 focus:ring-2 focus:ring-indigo-500"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-1 mt-2 text-sm text-red-400"
              >
                <AlertCircle size={14} /> {error}
              </motion.p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-indigo-500/30 transition-all"
          >
            Register
          </motion.button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-lg">
          <p className={isDark ? "text-gray-400" : "text-gray-600"}>
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            >
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}


export default SignUp;