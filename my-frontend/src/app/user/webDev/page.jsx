import React from "react";

const WebDev = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-tr from-red-300 to-yellow-200 flex justify-center items-center py-8 font-[sans-serif]">
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <div className="relative">{/* Python Course Syllabus */}</div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
              MERN / MEAN FullStack
            </h1>
            <div className="mt-4  text-xl  cursor-pointer">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Tailwind </li>
              <li>JavaScript</li>
              <li>ES6</li>

              <li>MongoDB</li>
              <li>Express</li>
              <li>Angular/React</li>
              <li>Node js</li>
              <li>Mini project</li>
              <li>Major Project</li>
              <li>Version Control(GIT)</li>
            </div>

            <div className="my-4">
              <button className="mt-12 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
                <a href="/user/register">Register Now</a>
              </button>
            </div>
          </div>

          {/* JAVA COURSE SYLLABUS */}

          <div className="max-w-sm bg-white px-6 pt-6 pb-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 mt-4">
            <div className="relative">
              <h3 className="mb-4 text-xl font-bold text-indigo-600"></h3>
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
              Python Fullstack
            </h1>
            <div className="mt-4  text-xl  cursor-pointer">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Tailwind</li>

              <li>JavaScript</li>
              <li>React js(Framework)</li>
              <li>Python Basics</li>
              <li>Django</li>
              <li>Flask(optional)</li>
              <li>SQL/NoSQL Database</li>
              <li>Version Control Git & GitHub</li>
              <li>Mini Project</li>
              <li>Major Project</li>
            </div>
            <div className="my-4">
              <button className="mt-12 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
                <a href="/user/register">Register Now</a>
              </button>
            </div>
          </div>
          <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <div className="relative"></div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
              Java FullStack
            </h1>
            <div className="my-4">
              <div className="mt-4  text-xl  cursor-pointer">
                <li>Core Java</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Tailwind</li>
                <li>JavaScript</li>
                <li>React(Framework)</li>
                <li>MySQL</li>
                <li>JDBC</li>
                <li>Servlets & JSP</li>
                <li>Spring Boot</li>
                <li>Hibernate</li>
                <li>MicroServices</li>
                <li>Rest API</li>
              </div>
              <button className="mt-12 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
                <a href="/user/register">Register Now</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="flex  flex-col space-y-10 justify-center m-10 font-[sans-serif]">
        <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-semibold text-lg">
          <a className="hover:text-gray-900" href="/">
            Home
          </a>
          <a className="hover:text-gray-900" href="/user/about">
            About
          </a>
          <a className="hover:text-gray-900" href="/user/courses">
            Courses
          </a>
          <a className="hover:text-gray-900" href="/user/register">
            Register
          </a>
          <a className="hover:text-gray-900" href="/user/gallery">
            Gallery
          </a>
          <a className="hover:text-gray-900" href="/user/contact">
            Contact
          </a>
        </nav>
        <div className="flex justify-center gap-8 hover:cursor-pointer mt-8">
          <a href="https://www.facebook.com/aadityaacomputerl1">
            {" "}
            <img
              src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
              width={30}
              height={30}
              alt="fb"
            />
          </a>
          <a href="https://whatsapp.com/channel/0029Vb9111MDOQIeLgyR6n3x">
            <img
              src="https://www.svgrepo.com/show/452133/whatsapp.svg"
              width={30}
              height={30}
              alt="tw"
            />
          </a>
          <a href="https://www.instagram.com/aadityaacomputerl1/?hl=en">
            <img
              src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
              width={30}
              height={30}
              alt="inst"
            />
          </a>
          <a href="https://www.youtube.com/@AADITYAACOMPUTER9">
            <img
              src="https://www.svgrepo.com/show/452138/youtube.svg"
              className=""
              width={30}
              height={30}
              alt="gt"
            />
          </a>
        </div>
        <p className="text-center text-gray-700 text-lg font-semibold">
          © 2025 Aadityaa Computer's & Digital Hub. All rights reservered.
        </p>
      </footer>
    </div>
  );
};

export default WebDev;
