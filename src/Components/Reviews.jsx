import React from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Maria S",
    initials: "MS",
    role: "Frontend Learner — California, USA",
    preview:
      "SkillNest made learning React approachable — project-based lessons & 1:1 feedback accelerated my portfolio.",
    full:
      "I joined SkillNest to build real-world React projects. The lessons are concise, each assignment has clear acceptance criteria, and mentors gave practical code reviews that helped me land freelance work within two months.",
  },
  {
    id: 2,
    name: "David Smith",
    initials: "DS",
    role: "Data Learner — Austin, TX",
    preview:
      "Personalized learning paths helped me shift from spreadsheets to production ML pipelines.",
    full:
      "SkillNest’s data pathway walked me from exploratory analysis to deploying a small model. Mentors suggested industry-standard tools and code patterns, and the capstone project gave me something to show employers.",
  },
  {
    id: 3,
    name: "Emily P",
    initials: "EP",
    role: "UX Learner — New York, USA",
    preview:
      "Real-world lessons and design critiques sharpened my portfolio work and interviewing skills.",
    full:
      "The design assignments mimic client briefs and the critique sessions taught me how to defend and iterate on my decisions. My interview outcomes improved noticeably after applying SkillNest feedback.",
  },
  {
    id: 4,
    name: "David L.",
    initials: "DL",
    role: "Full-Stack Learner — London, UK",
    preview:
      "Having mentor support available made learning full-stack development practical and focused.",
    full:
      "Before SkillNest I struggled to merge backend logic and frontend UX. The guided projects and mentor walk-throughs removed guesswork and helped me complete a deployable app in weeks.",
  },
  {
    id: 5,
    name: "Marsh",
    initials: "M",
    role: "Mobile Learner — Berlin, Germany",
    preview:
      "Focused feedback and short iterative tasks helped me ship my first mobile app.",
    full:
      "SkillNest’s mobile lessons are task-orientated and short, which kept momentum. The mentors gave concrete improvements—performance tips and UI polishing—that made my app feel professional.",
  },
  {
    id: 6,
    name: "Nunnez",
    initials: "N",
    role: "Career Switcher — Manchester, UK",
    preview:
      "Structured roadmap + mock interviews gave me confidence to apply for junior roles.",
    full:
      "I loved the mix of hands-on coding and soft-skills prep. Mock interviews were realistic and the feedback was actionable — I got my first junior developer offer shortly after.",
  },
];

const Avatar = ({ initials, index }) => {

    const gradients = [
    "from-purple-400 via-purple-500 to-pink-400",
    "from-indigo-400 to-violet-400",
    "from-amber-400 to-rose-400",
    "from-sky-400 to-indigo-400",
    "from-emerald-400 to-teal-400",
    "from-fuchsia-400 to-pink-400",
  ];
  const grad = gradients[index % gradients.length];
  return (
    <div
      className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm bg-gradient-to-br ${grad} shadow-md`}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
};


const Reviews = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight flex items-center justify-center gap-3">
            <span className="text-gray-900">Our Happy</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Learners
            </span>
          </h2>
          <p className="mt-2 text-gray-500 font-semibold">See how our learners are talking about us</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.article
              key={r.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="relative group"
            >
              <div
                className="rounded-xl p-5 bg-white shadow-sm border border-gray-200 hover:shadow-2xl transition-shadow transform hover:-translate-y-1"
                style={{ minHeight: 160 }}
              >
                <div className="flex items-start gap-4">
                  <Avatar initials={r.initials} index={i} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{r.name}</h3>
                        <p className="text-sm text-gray-500 mt-0.5">{r.role}</p>
                      </div>
                    </div>

                    <p className="mt-3 text-base text-gray-700 line-clamp-3">
                      {r.preview}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <span className="inline-flex items-center gap-2 text-xs text-gray-600 bg-gray-200 px-2 py-1 rounded-full border border-gray-100">
                    ★ ★ ★ ★ ☆
                  </span>
                  <span className="text-sm text-gray-400">Verified learner</span>
                </div>
              </div>

              {/* hover popup: appears above card on hover */}
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.98 }}
                whileHover={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="pointer-events-none opacity-0 group-hover:opacity-100 absolute left-1/2 transform -translate-x-1/2 -translate-y-full w-[92%] md:w-full lg:w-[95%]"
                aria-hidden="true"
              >
                <div className="bg-white shadow-2xl border border-gray-100 rounded-2xl p-4 -mt-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-none">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-sm font-semibold text-gray-900">
                        {r.initials}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-900">{r.name}</div>
                      <div className="text-xs text-gray-500">{r.role}</div>
                    </div>
                  </div>

                  <div className="mt-3 text-sm text-gray-700 leading-relaxed">
                    {r.full}
                  </div>
                </div>
              </motion.div>

              <div className="absolute inset-0 pointer-events-none">
                <div className="rounded-xl border border-transparent group-hover:border-gray-200 opacity-60 m-1"></div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Reviews;
