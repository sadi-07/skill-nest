import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import { Link } from "react-router";

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 100, 
      once: true,
    });
  }, []);

  const steps = [
    {
      title: "1. Create an Account",
      desc: "Join SkillNest and create your personal profile to start exploring new skills or sharing your own expertise with others in your community.",
      icon: "👤",
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "2. Browse Available Skills",
      desc: "Explore hundreds of listings — from guitar lessons to coding sessions. Filter by interest and find the perfect learning partner or mentor.",
      icon: "🔍",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "3. Book a Session",
      desc: "Select a skill you love, pick your preferred time slot, and confirm your booking with just one click — all from within the platform.",
      icon: "📅",
      color: "from-pink-500 to-blue-500",
    },
    {
      title: "4. Learn and Grow",
      desc: "Attend your session, gain new skills, and exchange feedback. Keep learning, growing, and sharing your knowledge through SkillNest.",
      icon: "🚀",
      color: "from-blue-500 to-pink-500",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto pt-5 pb-20 px-6 text-center">
      <h2
        className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 animate__animated animate__fadeInDown"
        data-aos="fade-down"
      >
        How It Works
      </h2>
      <p
        className="text-gray-600 text-lg max-w-2xl mx-auto mb-12 animate__animated animate__fadeInUp"
        data-aos="fade-up"
      >
        Discover how SkillNest makes learning and teaching skills easier than ever — all in just four simple steps.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
            data-aos="zoom-in"
            data-aos-delay={index * 200}
          >
            <div
              className={`w-16 h-16 flex items-center justify-center mx-auto mb-4 rounded-full text-3xl bg-gradient-to-r ${step.color} text-white`}
            >
              {step.icon}
            </div>
            <h3 className="font-semibold text-xl text-gray-800 mb-2 animate__animated animate__fadeIn">
              {step.title}
            </h3>
            <p className="text-gray-600 text-base animate__animated animate__fadeIn">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-14" data-aos="fade-up">
        <Link className="px-8 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 animate__animated animate__pulse animate__infinite cursor-pointer">
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default HowItWorks;
