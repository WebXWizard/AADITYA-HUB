import React from "react";

const Courses = () => {
  return (
    <div>
      {/* Courses */}
      <div className="min-h-screen bg-gradient-to-tr from-red-300 to-yellow-200 flex justify-center items-center py-8 font-[sans-serif]">
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <div className="relative">
              <img
                className="w-full rounded-xl"
                src="https://i.pinimg.com/736x/04/3b/66/043b662b3e472e3efcea36ca7aaca6bf.jpg"
                alt="Colors"
              />
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
              Entry Level | Basic Courses for Beginners
            </h1>
            <div className="my-4">
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <p>6-12 Months</p>
              </div>
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <p>2-4 Parts</p>
              </div>
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </span>
                <p>BCC, DCA, ADCA, PGDCA, etc</p>
              </div>
              <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
                <a href="/user/basicCourse">View Courses</a>
              </button>
            </div>
          </div>
          <div className="max-w-sm bg-white px-6 pt-6 pb-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 mt-4">
            <div className="relative">
              <h3 className="mb-4 text-xl font-bold text-indigo-600"></h3>

              <img
                className="w-full rounded-xl"
                src="https://media.licdn.com/dms/image/D4D12AQFUR3bhVHYCIA/article-cover_image-shrink_720_1280/0/1690538366337?e=2147483647&v=beta&t=awe1ciOaEqXWQrKpaBNX3L_0EqTrAZIK9cQuIiwVzi8"
                alt="Colors"
              />
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
              Programming Courses for Absolute Beginners
            </h1>
            <div className="my-4">
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <p> 6-18 Months</p>
              </div>
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <p> 3 Parts</p>
              </div>
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </span>
                <p>Python, Java, JavaScript, etc </p>
              </div>
              <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
                <a href="/user/programming">View Courses</a>
              </button>
            </div>
          </div>
          <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <div className="relative">
              <img
                className="w-full rounded-xl"
                src="https://i.pinimg.com/736x/94/45/87/944587765b84192a97a68576bf481760.jpg"
                alt="Colors"
              />
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
              Web Development Courses
            </h1>
            <div className="my-4">
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <p>3-12 Months</p>
              </div>
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <p>4 Parts</p>
              </div>
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </span>
                <p>HTML, CSS, JS, Express, Node, React, etc</p>
              </div>
              <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
                <a href="/user/webDev">View Courses</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Courses */}
      <div className="flex justify-center items-center bg-indigo-100 font-[sans-serif]">
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0 mt-8 mb-4">
          <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <div className="relative">
              <img
                className="w-full rounded-xl"
                src="https://mimitmalout.ac.in/NIELIT.png"
                alt="Colors"
              />
            </div>
            <h1 className="mt-12 text-gray-800 text-2xl font-bold cursor-pointer">
              NIELIT Offered Courses
            </h1>
            <div className="my-4">
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <p>6-12 Months</p>
              </div>
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <p>2-4 Parts</p>
              </div>
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </span>
                <p>BCC, O'LEVEL , CCC , etc</p>
              </div>
              <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
                <a href="/user/nielit">View Courses</a>
              </button>
            </div>
          </div>
          <div className="max-w-sm bg-white px-6 pt-6 pb-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 mt-4">
            <div className="relative">
              <h3 className="mb-4 text-xl font-bold text-indigo-600"></h3>
              <img
                className="w-full rounded-xl"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnshwVYILXORvcccCFjBzrSAkBaHHCGkltYvy4Mrwtd3xPEHp04hIRLf28WEsWk2pLpPg&usqp=CAU"
                alt="Colors"
              />
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
              Digital Marketing & Graphic Design Courses
            </h1>
            <div className="my-4">
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <p> 6-10 Months</p>
              </div>
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <p> 3 Parts</p>
              </div>
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </span>
                <p>Marketing, SEO, Adobe, Animation etc </p>
              </div>
              <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
                <a href="/user/digitalMarketing">View Courses</a>
              </button>
            </div>
          </div>
          <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <div className="relative">
              <img
                className="w-full rounded-xl"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MS_jQ9Z9i3eTzikHM43K3mxGne85p0w4LA&s"
                alt="Colors"
              />
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
              Skill India Certification Courses
            </h1>
            <div className="my-4">
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <p>3-6 Months</p>
              </div>
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <p>4 Parts</p>
              </div>
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </span>
                <p>Data Entry, Angular & Python Fullstack, etc</p>
              </div>
              <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
                <a href="/user/skillIndia">View Courses</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto font-[sans-serif]">
        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {/* Card */}
          <a
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-white dark:border-neutral-800"
            href="/user/contact"
          >
            <div className="p-4 md:p-5">
              <div className="flex gap-x-5">
                <svg
                  className="mt-1 shrink-0 size-5 text-gray-800 dark:text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx={9} cy={7} r={4} />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <div className="grow">
                  <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-gray-800">
                    Ask our community
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-neutral-500">
                    Get help from Our Community
                  </p>
                </div>
              </div>
            </div>
          </a>
          {/* End Card */}
          {/* Card */}
          <a
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-white dark:border-neutral-800"
            href="#"
          >
            <div className="p-4 md:p-5">
              <div className="flex gap-x-5">
                <svg
                  className="mt-1 shrink-0 size-5 text-gray-800 dark:text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={12} cy={12} r={10} />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
                <div className="grow">
                  <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-gray-800">
                    Get help by our Team
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-neutral-500">
                    📞 +91 80900 68623 / 79858 10921
                  </p>
                </div>
              </div>
            </div>
          </a>
          {/* End Card */}
          {/* Card */}
          <a
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-white dark:border-neutral-800"
            href="#"
          >
            <div className="p-4 md:p-5">
              <div className="flex gap-x-5">
                <svg
                  className="mt-1 shrink-0 size-5 text-gray-800 dark:text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                  <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                </svg>
                <div className="grow">
                  <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-gray-800">
                    Email us
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-neutral-500">
                    <span className="text-blue-600 decoration-2 group-hover:underline font-medium dark:text-blue-500">
                      📧 aadityaacomputer9@gmail.com
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </a>
          {/* End Card */}
        </div>
        {/* End Grid */}
      </div>
    </div>
  );
};

export default Courses;
