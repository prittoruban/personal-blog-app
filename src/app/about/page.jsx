"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-5">
      <motion.div
        className="max-w-6xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 transition-all"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <motion.h1
          className="text-4xl font-bold text-center text-teal-600 dark:text-teal-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Updated: 2024 Dec, To know more about me, visit my{" "}
          <a
            href="https://prittoruban.vercel.app/"
            className="text-gray-500 dark:text-gray-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </motion.h1>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {[
              {
                title: "🎯 About Me",
                content:
                  "Hi! I'm R. Pritto Ruban, a passionate developer with expertise in Java programming, Full-Stack Web Development, and Cyber Security. I aim to create innovative, scalable solutions, tackle real-world challenges, and contribute to open-source projects.",
              },
              {
                title: "📚 Education",
                content: (
                  <p>
                    <strong>Institution:</strong> R.M.K College of Engineering
                    and Technology
                    <br />
                    <strong>Degree:</strong> Bachelor of Engineering in Computer
                    Science
                    <br />
                    <strong>Specialization:</strong> Cyber Security
                    <br />
                    <strong>Graduation:</strong> May 2027
                  </p>
                ),
              },
              {
                title: "💼 Experience",
                content: (
                  <ul className="list-disc ml-5 space-y-2">
                    <li>
                      <strong>Technical Content Engineer Intern</strong> @
                      Kalvium (Remote)
                      <p>
                        Developed engaging content for 1,000+ students,
                        enhancing course ratings by 15%.
                      </p>
                    </li>
                    <li>
                      <strong>Freelancer</strong> (Remote)
                      <p>
                        Built responsive websites and APIs, ensuring optimal
                        user experiences.
                      </p>
                    </li>
                    <li>
                      <strong>Open Source Contributor</strong> (Remote)
                      <p>
                        Collaborated on open-source projects, improving
                        technology and community collaboration.
                      </p>
                    </li>
                  </ul>
                ),
              },
            ].map(({ title, content }, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg shadow transition-all transform hover:scale-105 hover:shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 + index * 0.2 }}
              >
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">{content}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {[
              {
                title: "🛠️ My Skills",
                content: (
                  <ul className="list-disc ml-5 space-y-2">
                    <li>Languages: Java, TypeScript, SQL, Python, C++</li>
                    <li>Frontend: React, HTML, CSS, Tailwind CSS</li>
                    <li>Backend: Node.js, Express.js</li>
                    <li>Tools: Git, GitHub, MongoDB Atlas, Postman</li>
                  </ul>
                ),
              },
              {
                title: "🏆 Achievements",
                content: (
                  <ul className="list-disc ml-5 space-y-2">
                    <li>
                      Champion, Sairam Engineering College Hackathon 2024
                      <p>
                        Led the creation of a restaurant reservation system with
                        real-time AI chatbot.
                      </p>
                    </li>
                    <li>
                      1st Place in Coding Contest, SRM Eswari Engineering
                      College
                      <p>Displayed exceptional problem-solving skills.</p>
                    </li>
                    <li>
                      2nd Place in Web Design, Rajalakshmi Engineering College
                    </li>
                    <li>
                      1st Place in AI-powered Web Design, Sairam Institute of
                      Technology
                    </li>
                  </ul>
                ),
              },
              {
                title: "📫 Contact Me",
                content: (
                  <p>
                    <strong>LinkedIn:</strong>{" "}
                    <a
                      href="https://linkedin.com/in/prittoruban"
                      className="text-teal-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Connect with me
                    </a>
                    <br />
                    <strong>GitHub:</strong>{" "}
                    <a
                      href="https://github.com/prittoruban"
                      className="text-teal-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Follow me
                    </a>
                  </p>
                ),
              },
            ].map(({ title, content }, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg shadow transition-all transform hover:scale-105 hover:shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 + index * 0.2 }}
              >
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {title}
                </h2>
                {content}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
