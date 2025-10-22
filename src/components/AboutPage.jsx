import React from "react";

/**
 * AboutPage - Displays information about the Simple Task Tracker app
 * Fully responsive with clear sections for purpose, tech stack, and team info
 */
function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50/30 py-8 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-300 to-rose-300 rounded-xl flex items-center justify-center shadow-lg">
              <svg
                className="w-7 h-7 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              About Simple Task Tracker
            </h1>
          </div>
          <p className="text-lg text-gray-600 ml-15">
            A modern, lightweight React SPA for seamless task management
          </p>
        </header>

        {/* Purpose Section */}
        <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Purpose</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Simple Task Tracker is designed to demonstrate core front-end
            development skills including component-based architecture,
            client-side routing, RESTful API interaction, real-time state
            updates, toast notifications, and responsive styling. This project
            serves as an MVP showcasing clean code practices and modern React
            development with json-server for backend persistence.
          </p>
        </section>

        {/* Tech Stack Section */}
        <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Tech Stack</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend */}
            <div className="bg-gradient-to-br from-sky-50 to-sky-100/50 rounded-xl p-6 border border-sky-200">
              <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                Frontend
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>✅ React 19</li>
                <li>✅ React Router DOM 7</li>
                <li>✅ React Hot Toast 2</li>
                <li>✅ Axios for HTTP requests</li>
              </ul>
            </div>

            {/* Styling & Build */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-6 border border-purple-200">
              <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                Styling & Build
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>✅ Tailwind CSS 4</li>
                <li>✅ Vite 7</li>
                <li>✅ PostCSS & Autoprefixer</li>
                <li>✅ JSON Server for API</li>
              </ul>
            </div>
          </div>
        </section>

        {/* MVP Highlights */}
        <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">MVP Highlights</h2>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
            <li>✅ RESTful API with json-server</li>
            <li>✅ Real-time state management</li>
            <li>✅ Client-side routing</li>
            <li>✅ Fully responsive design</li>
            <li>✅ Form validation</li>
            <li>✅ Toast notifications</li>
          </ul>
        </section>

        {/* Team Section + Acknowledgements */}
        <section className="bg-gradient-to-br from-orange-300 to-rose-300 rounded-2xl shadow-xl p-6 sm:p-8 border border-orange-400 text-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white/50 backdrop-blur rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Development Team</h2>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Developed as a school group project MVP, demonstrating collaborative
            development and agile methodologies. This project highlights best
            practices in modern web development with a focus on clean,
            maintainable code following the KISS philosophy and showcasing
            professional-grade UI/UX design.
          </p>

          {/* Acknowledgments */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Acknowledgments</h3>
            <p className="text-gray-700 leading-relaxed">
              This project was made by:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>
                <strong>Ibrahim Nawir</strong>
              </li>
              <li>
                <strong>Abigail Seenoi</strong>
              </li>
              <li>
                <strong>Ayman Abdi</strong>
              </li>
              <li>
                <strong>Ephrahim Peace</strong>
              </li>
              <li>
                <strong>Emmanuel Hongo</strong>
              </li>
              <li>
                <strong>Fredrick Rangara</strong>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
