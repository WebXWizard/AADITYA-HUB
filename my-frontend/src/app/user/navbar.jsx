"use client";
// import React from "react";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  // const { loggedIn, logout } = useAppContext();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      {/* Shows on Every Page */}

      {/* Top Navbar */}
      <div className="bg-indigo-400 text-center py-2 lg:px-4 font-[sans-serif]">
        <div
          className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span className="flex rounded-full bg-indigo-500  px-2 py-1 text-xs font-bold mr-3">
            <span className="md:block hidden"> 📧 </span>{" "}
            aadityaacomputer9@gmail.com
          </span>
          <span className=" font-semibold mr-2 text-xs text-left flex-auto">
            📞 +91 7985810921 / 8090068623 
          </span>
          <span className="sm:block hidden font-semibold mr-2 text-xs text-left flex-auto">
          📍 J S Complex, Dewa Road, near
          Ramswaroop University, Barabanki-225003
          </span>
          <svg
            className="fill-current opacity-75 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </div>
      </div>

      {/* Navbar with Logo */}
      <nav className="w-full max-w-screen-3xl px-8 mx-auto lg:py-0 font-[sans-serif] bg-indigo-50">
        <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
          <a
            href="/"
            className="block cursor-pointer text-base text-slate-800 font-semibold"
          >
            <img className="w-auto h-16" src="../images/Doc1.png" alt="" />
          </a>

          <div className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
            <ul className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 md:flex-row sm:flex-row">
              <li className="flex items-center p-1 text-lg gap-x-2 text-slate-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-slate-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 9l9-6 9 6"
                  />
                  <rect
                    x={4}
                    y={9}
                    width={16}
                    height={11}
                    rx={2}
                    stroke="currentColor"
                  />
                  <rect
                    x={10}
                    y={14}
                    width={4}
                    height={6}
                    rx={1}
                    stroke="currentColor"
                  />
                </svg>
                <a href="/" className="flex items-center">
                  Home
                </a>
              </li>
              <li className="flex items-center p-1 text-lg gap-x-2 text-slate-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={12} cy={8} r={4} />
                  <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                  <circle cx={18} cy={18} r={3} />
                  <path d="M18 16v2" />
                  <path d="M18 21h.01" />
                </svg>
                <a href="/user/about" className="flex items-center">
                  About Us
                </a>
              </li>
              <li className="flex items-center p-1 text-lg gap-x-2 text-slate-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13.5" />
                  <path d="M4 19.5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" />
                  <path d="M8 7h8" />
                  <path d="M8 11h8" />
                  <path d="M12 15l3 2-3 2v-4z" />
                </svg>
                <a href="/user/courses" className="flex items-center">
                  Our Courses
                </a>
              </li>
              <li className="flex items-center p-1 text-lg gap-x-2 text-slate-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-slate-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
                  />
                </svg>
                <a href="/user/gallery" className="flex items-center">
                  Gallery
                </a>
              </li>
              <li className="flex items-center p-1 text-lg gap-x-2 text-slate-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-slate-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 4.75C3 4.336 3.336 4 3.75 4h16.5c.414 0 .75.336.75.75v14.5c0 .414-.336.75-.75.75H3.75A.75.75 0 0 1 3 19.25V4.75z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 5.25h9m-9 3h9"
                  />
                </svg>
                <a href="/user/contact" className="flex items-center">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="items-center hidden gap-x-2 lg:flex">
            <a
              href="/user/register"
              className="rounded-xl bg-slate-700 py-2 px-4 border border-transparent text-center text-md text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-blue-500 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none font-bold"
              type="button"
            >
              Get Started
            </a>
            <a
              href="/user/login"
              className="rounded-xl bg-blue-500 py-2 px-4 border border-transparent text-center text-md text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none font-bold"
              type="button"
            >
              Login
            </a>
          </div>
          <button
            className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            type="button"
            onClick={toggleMenu}
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
