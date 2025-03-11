import React from "react";

const Programming = () => {
  return (
    <div>
      {/* Courses Section */}
      <div className="min-h-screen bg-gradient-to-tr from-red-300 to-yellow-200 flex justify-center items-center py-8 font-[sans-serif]">
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          {/* Python Programming Syllabus and Fee */}
          <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <div className="relative">{/* Python Course Syllabus */}</div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
              Python Programming Course
            </h1>
            <div className="mt-4  text-xl  cursor-pointer">
              <li>Introduction</li>
              <li>List</li>
              <li>Tuple ,Set ,Dictionary</li>

              <li>String</li>
              <li>Arithmatic Operators</li>
              <li>Conditional Control Statements</li>
              <li>Function Scope</li>
              <li>Array</li>
              <li>Stack & Queues</li>
              <li>Comprehensions</li>
              <li>Exception Handling</li>
              <li>OOPs Concepts</li>
              <li>Modules & Packages</li>
            </div>

            <div className="my-4">
            <button className="mt-12 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
               <a href="/user/register">Register Now</a> 
              </button>
            </div>
          </div>

          {/* Java Programming Syllabus and Fee */}
          <div className="max-w-sm bg-white px-6 pt-6 pb-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 mt-4">
            <div className="relative">
              <h3 className="mb-4 text-xl font-bold text-indigo-600"></h3>
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
              Java Programming Course
            </h1>
            <div className="mt-4  text-xl  cursor-pointer">
              <li>Introduction</li>
              <li>JAVA Basic</li>
              <li>Control & Conditionals</li>

              <li>OOPS + Collection</li>
              <li>JDBC</li>
              <li>Servlets & JSP</li>
              <li>MVC</li>
              <li>Spring Framework</li>
              <li>Exception Handling</li>
              <li>Multi Threading</li>
              <li>Hibernate</li>
              <li>Session Management</li>
              <li>API</li>
            </div>
            <div className="my-4">
            <button className="mt-12 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
               <a href="/user/register">Register Now</a> 
              </button>
            </div>
          </div>

          {/* C/C++ Programming Syllabus and Fee */}
          <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <div className="relative"></div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
              C/C++ Programing Course
            </h1>
            <div className="my-4">
              <div className="mt-4  text-xl  cursor-pointer">
                <li>Introduction to C/C++</li>
                <li>Basic Syntax and Structure</li>
                <li>Control Structures</li>
                <li>Conditionals</li>
                <li>Functions in C/C++</li>
                <li>Arrays and Strings</li>
                <li>Pointers</li>
                <li>Structures and Unions</li>
                <li>Object-Oriented Programming</li>
                <li>File Handling</li>
                <li>Dynamic Memory Management</li>
                <li>Exception Handling (C++)</li>
                <li>Templates (C++)</li>
                <li>Standard Template Library </li>
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
          <a className="hover:text-gray-900" href="#">
            Home
          </a>
          <a className="hover:text-gray-900" href="#">
            About
          </a>
          <a className="hover:text-gray-900" href="#">
            Courses
          </a>
          <a className="hover:text-gray-900" href="#">
            Register
          </a>
          <a className="hover:text-gray-900" href="#">
            Gallery
          </a>
          <a className="hover:text-gray-900" href="#">
            Contact
          </a>
        </nav>
        <div className="flex justify-center space-x-5">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
          </a>
          <a
            href="https://messenger.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
          </a>
        </div>
        <p className="text-center text-gray-700 text-lg font-semibold">
          © 2022 Company Ltd. All rights reservered.
        </p>
      </footer>
    </div>
  );
};

export default Programming;