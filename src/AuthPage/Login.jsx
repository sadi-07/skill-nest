import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, Sparkles } from "lucide-react";
import Navbar from "../Components/Navbar";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const LogIn = ({ onSubmit }) => {
  const {logInUser} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
    logInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(`${location.state? location.state: "/"}`)
      })
      .catch(error => {
        toast.error("Login Failed!! Please Try again!");
      })
  }

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  return (
    <div className="mt-16 min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800">
      <Navbar></Navbar>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md p-8 rounded-2xl shadow-2xl backdrop-blur-lg border bg-white/5 border-white/10"
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
          <h1 className="mt-5 text-3xl font-bold text-white">Welcome Back</h1>
          <p className="mt-1 text-sm text-gray-300">
            Sign in to continue your SkillNest journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogIn} className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-200"
            >
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
              <input
                name="email"
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
                placeholder="you@skillnest.com"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-200"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-gray-400" size={18} />
              <input
                name="password"
                id="password"
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-200"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>


          <p className="text-lg text-right">
            <Link to={`/forgot-password?email=${encodeURIComponent(email)}`} className="text-right text-gray-400 hover:underline cursor-pointer ">Forgotten Password ?</Link>
          </p>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-indigo-500/30 transition-all cursor-pointer"
          >
            Sign In
          </motion.button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-base">
          <p className="text-gray-400">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            >
              Create One
            </Link>
          </p>
        </div>

        <button className="btn text-black border-none w-full mt-3 text-lg py-6 bg-white shadow-lg hover:shadow-indigo-500/30 transition-all">
          <svg
            aria-label="Google logo"
            width="22"
            height="22"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Signup with Google
        </button>
      </motion.div>
    </div>
  );
}

export default LogIn;