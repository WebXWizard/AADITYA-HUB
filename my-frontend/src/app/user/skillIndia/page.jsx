import React from "react";

const SkillIndia = () => {
  return (
    <div>
      {/* Courses Section */}
      <div className="min-h-screen bg-gradient-to-tr from-red-300 to-yellow-200 flex justify-center items-center py-8 font-[sans-serif]">
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          {/*Skill India Courses Syllabus  */}
          <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
              Python Full Stack Course
            </h1>
            <div className="mt-4  text-xl  cursor-pointer">
              <li>Introduction</li>
              <li>List</li>
              <li>Tuple ,Set ,Dictionary</li>
              <li>String</li>
              <li>Arithmetic Operators</li>
              <li>Conditional Control Statements</li>
              <li>Function Scope</li>
              <li>Python Modules</li>
              <li>Packages</li>
              <li>Exceptions & Multithreading</li>
              <li>Garbage Collection</li>
              <li>Django</li>
              <li>HTML, CSS , SQL</li>
              <li>Project</li>
            </div>
            <div className="my-4">
            <button className="mt-12 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
               <a href="/user/register">Register Now</a> 
              </button>
            </div>
          </div>

          {/*Skill India Courses Syllabus  */}
          <div className="max-w-sm bg-white px-6 pt-6 pb-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 mt-4">
            <div className="relative">
              <h3 className="mb-4 text-xl font-bold text-indigo-600"></h3>
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
              Angular Full Stack Course
            </h1>
            <div className="mt-4  text-xl  cursor-pointer">
              <li>HTML Basic </li>
              <li>CSS Basics</li>
              <li>SCSS Basic </li>
              <li>JS Basic </li>
              <li>TypeScript </li>
              <li>Bootstrap </li>
              <li>Angular Basic</li>
              <li>History</li>
              <li>How it works</li>
              <li>Comparison with React</li>
              <li>Structure</li>
              <li>Features</li>
              <li>Routing</li>
              <li>Project with all concepts</li>
            </div>
            <div className="my-4">
            <button className="mt-12 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
               <a href="/user/register">Register Now</a> 
              </button>
            </div>
          </div>

          {/*Skill India Courses Syllabus  */}
          <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <div className="relative"></div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
              Other Courses of Skill India
            </h1>
            <div className="my-4">
              <div className="mt-4  text-xl  cursor-pointer">
                <li className="mt-4 text-gray-800 text-xl  cursor-pointer">
                  Domestic Data Entry Operator
                </li>
                <li className="mt-4 text-gray-800 text-xl  cursor-pointer">
                  AI - Business Intelligence Analyst
                </li>
                <li className="mt-4 text-gray-800 text-xl  cursor-pointer">
                  Web Developer
                </li>
                <li className="mt-4 text-gray-800 text-xl  cursor-pointer">
                  Software Developer - IT Services
                </li>
                <li className="mt-4 text-gray-800 text-xl  cursor-pointer">
                  Courses on Computer Applications
                </li>
                <li className="mt-4 text-gray-800 text-xl  cursor-pointer">
                  Digital Marketing
                </li>
                <li className="mt-4 text-gray-800 text-xl  cursor-pointer">
                  Basic Computer Courses
                </li>
                <li className="mt-4 text-gray-800 text-xl  cursor-pointer">
                  SAP
                </li>
                <li className="mt-4 text-gray-800 text-xl  cursor-pointer">
                  Skill Acquisition and Knowledge Awareness for Livelihood
                  Promotion
                </li>
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

export default SkillIndia;