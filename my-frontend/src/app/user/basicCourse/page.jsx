import React from "react";

const Basic = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-tr from-red-300 to-yellow-200 flex justify-center items-center py-8 font-[sans-serif]">
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <div className="relative"></div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
              BCC (Basic Computer Course)
            </h1>
            <div className="my-4">
              <div className="mt-4  text-xl  cursor-pointer">
                <li>Computer Fundamentals</li>
                <li>Operating System</li>
                <li>Introduction to Windows</li>
                <li>MS Word</li>
                <li>MS Excel</li>
                <li>MS PowerPoint</li>
                <li>Internet and Web Browsing</li>
                <li>E-Mail and Communication</li>
                <li>Introduction to Cyber Security</li>
                <li>Digital Financial Literacy</li>
                <li>Basics of IT in Governance and e-Governance</li>
              </div>
              <button className="mt-12 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
               <a href="/user/register">Register Now</a> 
              </button>
            </div>
          </div>
          <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <div className="relative">{/* Python Course Syllabus */}</div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
              ADCA / DCA (Diploma in Computer Applications)
            </h1>
            <div className="mt-4  text-xl  cursor-pointer">
              <li>Computer Fundamentals</li>
              <li>Operating System</li>
              <li>Eng/Hindi Typing</li>
              <li>Notepad|Paint</li>
              <li>MS Word</li>
              <li>MS Excel</li>
              <li>Power Point</li>
              <li>MS Access</li>
              <li>Tally</li>
              <li>Internet</li>
              <li>HTML5</li>
              <li>Photoshop</li>
              <li>Project</li>
            </div>
            <div className="my-4">
            <button className="mt-12 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
               <a href="/user/register">Register Now</a> 
              </button>
            </div>
          </div>

          <div className="max-w-sm bg-white px-6 pt-6 pb-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 mt-4">
            <div className="relative">
              <h3 className="mb-4 text-xl font-bold text-indigo-600"></h3>
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
              PGDCA (Post Graduate Diploma in Computer Applications)
            </h1>
            <div className="mt-4  text-xl  cursor-pointer">
              <li>Fundamental of computer IT</li>
              <li>Introduction to OS</li>
              <li>PC packages</li>
              <li>Elactive 1,Foxpro</li>
              <li>MS Accses</li>
              <li>System Analysis & Design</li>
              <li>Programming with .Net</li>
              <li>Internet & E-Commerce</li>
              <li>Elactive 2</li>
              <li>OOPs Programming with C++</li>
              <li>Financial Accounting with Tally</li>
              <li>Project</li>
            </div>
            <div className="my-4">
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

export default Basic;