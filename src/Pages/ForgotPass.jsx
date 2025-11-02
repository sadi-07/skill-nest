import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import toast from "react-hot-toast";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const emailFromQuery = params.get("email");
    if (emailFromQuery) setEmail(emailFromQuery);
  }, [location.search]);

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email");

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent!");
        window.location.href = "https://mail.google.com";
      })
      .catch((err) => toast.error("Please Try Again!!"));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800">
      <form onSubmit={handleReset} className="p-6 bg-white rounded-2xl shadow-lg w-110">
        <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-full mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit" className="btn btn-primary font-bold w-full">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPass;
