"use client";
// import React from "react";
import React, { useState } from "react";
import Image from "next/image";

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="">
      {/* Top Bar for Contact */}
      <div className="bg-indigo-400 text-center py-2 lg:px-4 font-[sans-serif]">
        <div
          className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span className="flex rounded-full bg-indigo-500  px-2 py-1 text-xs font-bold mr-3">
            <span className="md:block hidden"> 📧 </span>{" "}
            aadityaacomputer9@gmail.com
          </span>
          <span className="sm:block hidden font-semibold mr-2 text-xs text-left flex-auto">
            📍 J S Complex, Dewa Road, near Ramswaroop University,
            Barabanki-225003{" "}
          </span>{" "}
          <span className="font-semibold mr-2 text-xs text-left flex-auto">
            {" "}
            📞+91 7985810921 / 8090068623
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
              href="/user/adminLogin"
              className="rounded-xl bg-blue-500 py-2 px-4 border border-transparent text-center text-md text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none font-bold"
              type="button"
            >
              Admin
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

      {/* Header Section */}
      <header className="bg-white lg:py-12 p-12 font-[sans-serif] bg-[url('https://img.freepik.com/premium-photo/modern-workspace-white-background-top-view-flat-lay-style_641503-286873.jpg')] bg-cover bg-no-repeat">
        <div className="grid min-h-[60vh] md:min-h-[40vh] sm:min-h-[20vh] w-full  place-items-stretch ">
          <div className="container mx-auto px-4 text-center font-[sans-serif]">
            <p className="antialiased leading-relaxed text-inherit inline-flex md:text-md lg:text-lg rounded-lg border-[1.5px] border-blue-gray-50 bg-indigo-50 py-1 lg:px-8 px-1 font-medium text-primary capitalize text-slate-800">
              " Har Click 👆 Par Nayi Shuruaat 💡 "
            </p>
            <h1 className="block antialiased tracking-normal font-semibold text-blue-gray-900 mx-auto my-2 w-full leading-snug !text-2xl lg:max-w-3xl lg:!text-5xl text-sky-900">
              Welcome to{" "}
              <span className="text-sky-900 leading-snug">
                Aadityaa <br /> Computer's &
              </span>{" "}
              <span className="leading-snug text-sky-900">Digital Hub</span>.
            </h1>
            <p className="block  antialiased font-normal leading-relaxed text-inherit mx-auto w-full !text-gray-800 md:text-md  lg:text-lg text-base max-w-3xl ">
              Aaditya Computer's and Digital Hub is a comprehensive tech center
              which provides high-quality education in computer literacy,
              programming, digital marketing, and IT skills.
              <span className="">
                {" "}
                We are catering to individuals and businesses seeking to enhance
                their digital capabilities.
              </span>
            </p>
            <button
              className="mt-8 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-lg font-semibold text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
              type="button"
            >
              <a href="/user/register">Register Now</a>
            </button>
          </div>
        </div>
      </header>

      {/* Our Facilities */}
      <section className="bg-indigo-100 font-[sans-serif] py-8">
        <div className="px-4 mx-auto sm:px-6 lg:px-12 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-indigo-600 sm:text-4xl lg:text-5xl">
              Our Facilities and Features
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-lg leading-relaxed text-gray-600">
              Explore the various features and services offered at our computer
              centre to support your learning and productivity.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-8 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <div className="flex items-center">
                  {/* <img
                    className="flex-shrink-0 w-12 h-auto"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/computer-lab-icon.png"
                    alt=""
                  /> */}
                  <div className="ml-3 mr-auto">
                    <p className="text-2xl font-semibold text-black">
                      Computer Lab
                    </p>
                    <p className="mt-px text-sm text-gray-600">
                      State-of-the-art equipment
                    </p>
                  </div>
                  <svg
                    className="hidden w-5 h-5 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed text-gray-600 mt-7">
                  Fully equipped computer lab with high-speed internet and
                  up-to-date software.
                </p>
              </div>
            </div>
            <div className="overflow-hidden bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <div className="flex items-center">
                  {/* <img
                    className="flex-shrink-0 w-12 h-auto"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/internet-icon.png"
                    alt=""
                  /> */}
                  <div className="ml-3 mr-auto">
                    <p className="text-2xl font-semibold text-black">
                      High-Speed Internet
                    </p>
                    <p className="mt-px text-sm text-gray-600">24/7 Access</p>
                  </div>
                  <svg
                    className="block w-6 h-6 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed text-gray-600 mt-7">
                  Access the fastest internet connection to enhance your
                  browsing and research experience.
                </p>
              </div>
            </div>
            <div className="overflow-hidden bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <div className="flex items-center">
                  {/* <img
                    className="flex-shrink-0 w-12 h-auto"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/printer-icon.png"
                    alt=""
                  /> */}
                  <div className="ml-3 mr-auto">
                    <p className="text-2xl font-semibold text-black">
                      Printing Services
                    </p>
                    <p className="mt-px text-sm text-gray-600">
                      Affordable & Reliable
                    </p>
                  </div>
                  <svg
                    className="hidden w-5 h-5 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed text-gray-600 mt-7">
                  Easy access to high-quality printing services for your
                  academic and personal needs.
                </p>
              </div>
            </div>
            <div className="overflow-hidden bg-white rounded shadow">
              <div className="p-8">
                <div className="flex items-center">
                  {/* <img
                    className="flex-shrink-0 w-12 h-auto"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/tech-support-icon.png"
                    alt=""
                  /> */}
                  <div className="ml-3 mr-auto">
                    <p className="text-2xl font-semibold text-black">
                      Tech Support
                    </p>
                    <p className="mt-px text-sm text-gray-600">
                      On-site Assistance
                    </p>
                  </div>
                  <svg
                    className="hidden w-5 h-5 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed text-gray-600 mt-7">
                  Get expert tech support to help you resolve any technical
                  issues you might encounter.
                </p>
              </div>
            </div>
            <div className="overflow-hidden bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <div className="flex items-center">
                  {/* <img
                    className="flex-shrink-0 w-12 h-auto"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/meeting-room-icon.png"
                    alt=""
                  /> */}
                  <div className="ml-3 mr-auto">
                    <p className="text-2xl font-semibold text-black">
                      Meeting Rooms
                    </p>
                    <p className="mt-px text-sm text-gray-600">
                      Collaboration Spaces
                    </p>
                  </div>
                  <svg
                    className="hidden w-5 h-5 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed text-gray-600 mt-7">
                  Bookable meeting rooms equipped with projectors, whiteboards,
                  and other tools for collaboration.
                </p>
              </div>
            </div>
            <div className="overflow-hidden bg-white rounded shadow">
              <div className="p-8">
                <div className="flex items-center">
                  {/* <img
                    className="flex-shrink-0 w-12 h-auto"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/security-icon.png"
                    alt=""
                  /> */}
                  <div className="ml-3 mr-auto">
                    <p className="text-2xl font-semibold text-black">
                      24/7 Security
                    </p>
                    <p className="mt-px text-sm text-gray-600">
                      Safe and Secure Environment
                    </p>
                  </div>
                  <svg
                    className="hidden w-5 h-5 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed text-gray-600 mt-7">
                  Our premises are monitored by CCTV and security personnel 24/7
                  for your safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="bg-indigo-100 py-8 font-[sans-serif]">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-end justify-between">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl text-center font-bold leading-tight text-indigo-600 sm:text-4xl lg:text-5xl">
                Explore Our Certified Courses
              </h2>
            </div>
          </div>
          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-8 lg:grid-cols-3 lg:max-w-full">
            {/* <!-- Course 1: Programming --> */}
            <div className="overflow-hidden bg-white rounded shadow">
              <div className="p-5">
                <div className="relative">
                  <a
                    href="/user/courses"
                    title=""
                    className="block aspect-w-4 aspect-h-3"
                  >
                    <img
                      className="object-cover rounded-xl w-full h-full"
                      src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Programming Course"
                    />
                  </a>
                  <div className="absolute top-4 left-4">
                    {/* <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
                      Programming
                    </span> */}
                  </div>
                </div>

                <p className="mt-5 text-2xl font-semibold">
                  <a href="/user/courses" title="" className="text-black">
                    Master the Art of Computer Programming
                  </a>
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  Learn the fundamentals of programming languages like Python,
                  Java, and C++. Perfect for beginners and professionals.
                </p>
                <a
                  href="/user/courses"
                  title=""
                  className="inline-flex items-center justify-center pb-0.5 mt-5 text-md font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
                >
                  Browse More
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* 
      <!-- Course 2: Web Development --> */}
            <div className="overflow-hidden bg-white rounded shadow">
              <div className="p-5">
                <div className="relative">
                  <a
                    href="/user/courses"
                    title=""
                    className="block aspect-w-4 aspect-h-3"
                  >
                    <img
                      className="object-cover w-full h-full rounded-xl"
                      src="https://admin.12grids.com/uploads/blogs/original_cover_images/Webp/benefits-of-custom-web-development-and-web-design-12grids.webp"
                      alt="Web Development Course"
                    />
                  </a>
                  <div className="absolute top-4 left-4">
                    {/* <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
                      Web Development
                    </span> */}
                  </div>
                </div>
                <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"></span>
                <p className="mt-5 text-2xl font-semibold">
                  <a href="/user/courses" title="" className="text-black">
                    Build Websites with HTML, CSS, and JavaScript
                  </a>
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  Learn how to build responsive websites and modern web
                  applications from scratch using popular technologies.
                </p>
                <a
                  href="/user/courses"
                  title=""
                  className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
                >
                  Browse More
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* <!-- Course 3: Data Science --> */}
            <div className="overflow-hidden bg-white rounded shadow">
              <div className="p-5">
                <div className="relative">
                  <a
                    href="/user/courses"
                    title=""
                    className="block aspect-w-4 aspect-h-3"
                  >
                    <img
                      className="object-cover w-full h-full rounded-xl"
                      src="https://5.imimg.com/data5/WE/UJ/CC/SELLER-23321079/whatsapp-image-2020-04-14-at-12-11-54-am-1--500x500.jpeg"
                      alt="Data Science Course"
                    />
                  </a>
                  <div className="absolute top-4 left-4">
                    {/* <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
                      Data Science
                    </span> */}
                  </div>
                </div>
                <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"></span>
                <p className="mt-5 text-2xl font-semibold">
                  <a href="/user/courses" title="" className="text-black">
                    Introduction to Basic Computer Courses
                  </a>
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  Learn fundamental computer skills, office tools, typing, and
                  internet usage essential for beginners.
                </p>
                <a
                  href="/user/courses"
                  title=""
                  className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
                >
                  Browse More
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director Speaks */}
      <div className="max-w-[85rem] bg-gray-50 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
          <div className="hidden md:block mb-24 md:mb-0 sm:px-6">
            <div className="relative">
              <img className="rounded-xl" src="../images/MD.jpg" alt="Avatar" />
              {/* SVG Element */}
              <div className="absolute bottom-0 start-0 -z-1 translate-y-10 -translate-x-14">
                <svg
                  className="max-w-40 h-auto text-gray-400"
                  width={696}
                  height={653}
                  viewBox="0 0 696 653"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="72.5" cy="29.5" r="29.5" fill="currentColor" />
                  <circle cx="171.5" cy="29.5" r="29.5" fill="currentColor" />
                  <circle cx="270.5" cy="29.5" r="29.5" fill="currentColor" />
                  <circle cx="369.5" cy="29.5" r="29.5" fill="currentColor" />
                  <circle cx="468.5" cy="29.5" r="29.5" fill="currentColor" />
                  <circle cx="567.5" cy="29.5" r="29.5" fill="currentColor" />
                  <circle cx="666.5" cy="29.5" r="29.5" fill="currentColor" />
                  <circle cx="29.5" cy="128.5" r="29.5" fill="currentColor" />
                  <circle cx="128.5" cy="128.5" r="29.5" fill="currentColor" />
                  <circle cx="227.5" cy="128.5" r="29.5" fill="currentColor" />
                  <circle cx="326.5" cy="128.5" r="29.5" fill="currentColor" />
                  <circle cx="425.5" cy="128.5" r="29.5" fill="currentColor" />
                  <circle cx="524.5" cy="128.5" r="29.5" fill="currentColor" />
                  <circle cx="623.5" cy="128.5" r="29.5" fill="currentColor" />
                  <circle cx="72.5" cy="227.5" r="29.5" fill="currentColor" />
                  <circle cx="171.5" cy="227.5" r="29.5" fill="currentColor" />
                  <circle cx="270.5" cy="227.5" r="29.5" fill="currentColor" />
                  <circle cx="369.5" cy="227.5" r="29.5" fill="currentColor" />
                  <circle cx="468.5" cy="227.5" r="29.5" fill="currentColor" />
                  <circle cx="567.5" cy="227.5" r="29.5" fill="currentColor" />
                  <circle cx="666.5" cy="227.5" r="29.5" fill="currentColor" />
                  <circle cx="29.5" cy="326.5" r="29.5" fill="currentColor" />
                  <circle cx="128.5" cy="326.5" r="29.5" fill="currentColor" />
                  <circle cx="227.5" cy="326.5" r="29.5" fill="currentColor" />
                  <circle cx="326.5" cy="326.5" r="29.5" fill="currentColor" />
                  <circle cx="425.5" cy="326.5" r="29.5" fill="currentColor" />
                  <circle cx="524.5" cy="326.5" r="29.5" fill="currentColor" />
                  <circle cx="623.5" cy="326.5" r="29.5" fill="currentColor" />
                  <circle cx="72.5" cy="425.5" r="29.5" fill="currentColor" />
                  <circle cx="171.5" cy="425.5" r="29.5" fill="currentColor" />
                  <circle cx="270.5" cy="425.5" r="29.5" fill="currentColor" />
                  <circle cx="369.5" cy="425.5" r="29.5" fill="currentColor" />
                  <circle cx="468.5" cy="425.5" r="29.5" fill="currentColor" />
                  <circle cx="567.5" cy="425.5" r="29.5" fill="currentColor" />
                  <circle cx="666.5" cy="425.5" r="29.5" fill="currentColor" />
                  <circle cx="29.5" cy="524.5" r="29.5" fill="currentColor" />
                  <circle cx="128.5" cy="524.5" r="29.5" fill="currentColor" />
                  <circle cx="227.5" cy="524.5" r="29.5" fill="currentColor" />
                  <circle cx="326.5" cy="524.5" r="29.5" fill="currentColor" />
                  <circle cx="425.5" cy="524.5" r="29.5" fill="currentColor" />
                  <circle cx="524.5" cy="524.5" r="29.5" fill="currentColor" />
                  <circle cx="623.5" cy="524.5" r="29.5" fill="currentColor" />
                  <circle cx="72.5" cy="623.5" r="29.5" fill="currentColor" />
                  <circle cx="171.5" cy="623.5" r="29.5" fill="currentColor" />
                  <circle cx="270.5" cy="623.5" r="29.5" fill="currentColor" />
                  <circle cx="369.5" cy="623.5" r="29.5" fill="currentColor" />
                  <circle cx="468.5" cy="623.5" r="29.5" fill="currentColor" />
                  <circle cx="567.5" cy="623.5" r="29.5" fill="currentColor" />
                  <circle cx="666.5" cy="623.5" r="29.5" fill="currentColor" />
                </svg>
              </div>
              {/* End SVG Element */}
            </div>
          </div>
          {/* End Col */}
          <div>
            {/* Blockquote */}
            <blockquote className="relative">
              <svg
                className="absolute top-0 start-0 transform -translate-x-8 -translate-y-4 size-24 text-gray-200"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                  fill="currentColor"
                />
              </svg>
              <div className="relative z-10 font-[sans-serif]">
                <p className="text-xl font-semibold text-gray-500 uppercase mb-3">
                  Director’s Speaks
                </p>
                <p className="text-sm font-medium italic text-gray-800 md:text-md md:leading-normal xl:text-xl xl:leading-normal">
                  Ladies and gentlemen!! <br /> "It is an honor to introduce our
                  Computer Centre and Digital Hub, a space dedicated to
                  technological excellence and innovation. In today’s
                  fast-changing digital world, staying ahead is crucial. This
                  hub provides cutting-edge resources for learning,
                  collaboration, and entrepreneurship. Our Computer Centre
                  offers the latest tools for programming, AI, cybersecurity,
                  and more, empowering individuals to develop essential digital
                  skills.We are committed to bridging the digital divide,
                  ensuring technology is accessible to all. I encourage you to
                  make the most of this opportunity and join us in shaping a
                  brighter digital future." <br />
                  Thank you!
                </p>
              </div>
              <footer className="mt-6">
                <div className="flex items-center">
                  <div className="md:hidden shrink-0">
                    <img
                      className="size-8 rounded-full"
                      src="../images/MD.jpg"
                      alt="Avatar"
                    />
                  </div>
                  <div className="ms-4 md:ms-0 font-[sans-serif]">
                    <div className="text-2xl font-bold text-indigo-700">
                      Mr. Bhanu Prakash Mishra
                    </div>
                    <div className="text-md  text-gray-500">
                      Managing Director - Aadityaa Computer's & Digital Hub
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
            {/* End Blockquote */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>

      {/* Message from our Institute */}
      <section className="py-4 bg-gray-100 font-[sans-serif] ">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
              Message from the <span className="text-blue-600">Team</span> of
              Our Institute
            </h2>
          </div>

          <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-12 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
            <div className="overflow-hidden bg-white rounded-md shadow">
              <div className="px-8 py-12">
                <div className="relative w-24 h-24 mx-auto">
                  <img
                    className="relative object-cover w-24 h-24 mx-auto rounded-full"
                    src="../images/Suraj.jpg"
                    alt=""
                  />
                  <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                    <svg
                      className="w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z" />
                    </svg>
                  </div>
                </div>
                <blockquote className="mt-7">
                  <p className="text-lg text-black">
                    "Our mission is to empower individuals with essential
                    digital skills and advanced technical knowledge.We are
                    committed to shaping the future of technology learners."
                  </p>
                </blockquote>
                <p className="text-base font-semibold tex-black mt-9">
                  Mr. Suraj Yadav
                </p>
                <p className="mt-1 text-base text-gray-600">
                  Head of Institute
                </p>
              </div>
            </div>
            <div className="overflow-hidden bg-white rounded-md shadow">
              <div className="px-8 py-12">
                <div className="relative w-24 h-24 mx-auto">
                  <img
                    className="relative object-cover w-24 h-24 mx-auto rounded-full"
                    src="../images/Vikas.jpg"
                    alt=""
                  />
                  <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                    <svg
                      className="w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z" />
                    </svg>
                  </div>
                </div>
                <blockquote className="mt-7">
                  <p className="text-lg text-black">
                    "Being at [Aadityaa Computer's and Digital Hub] has helped
                    me enhance my skills and share my knowledge.My ultimate goal
                    is to drive a customer or buyer towards a purchase. "
                  </p>
                </blockquote>
                <p className="text-base font-semibold text-black mt-9">
                  Mr. Vikas Tiwari
                </p>
                <p className="mt-1 text-base text-gray-600">
                  Digital Marketing Expert
                </p>
              </div>
            </div>
            <div className="overflow-hidden bg-white rounded-md shadow">
              <div className="px-8 py-12">
                <div className="relative w-24 h-24 mx-auto">
                  <img
                    className="relative object-cover w-24 h-24 mx-auto rounded-full"
                    src="../images/Nancy.jpg"
                    alt=""
                  />
                  <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                    <svg
                      className="w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z" />
                    </svg>
                  </div>
                </div>
                <blockquote className="mt-7">
                  <p className="text-lg text-black">
                    "Teaching the basics of computers to beginners is a
                    rewarding experience. Seeing students gain confidence in
                    using technology is what makes my job truly satisfying."
                  </p>
                </blockquote>
                <p className="text-base font-semibold tex-tblack mt-9">
                  Miss.Nainsi Mishra
                </p>
                <p className="mt-1 text-base text-gray-600">
                  Specialist Trainer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials by Students */}
      <section className="py-4 bg-gray-50  font-[sans-serif]">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj capitalize">
                Our happy students say about us
              </h2>
            </div>

            <div className="relative mt-5 md:mt-12 md:order-2">
              <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                <div
                  className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                  style={{
                    background:
                      "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                  }}
                />
              </div>
              <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3 ">
                <div className="flex flex-col overflow-hidden shadow-2xl rounded-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py- lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">
                          "Excellent facilities and expert trainers. The lab is
                          well-equipped, and the staff is always ready to help.
                          I landed my first internship thanks to their career
                          support!"
                        </p>
                      </blockquote>
                    </div>
                    <div className="flex items-center mt-8">
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">
                          Rahul Sharma
                        </p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">
                          🎓 Web Development Student
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col overflow-hidden shadow-2xl rounded-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">
                          "I had no prior computer knowledge, but after
                          completing the Basic Computer Course here, I can
                          confidently use MS Office.The trainers were very
                          patient and helpful!"
                        </p>
                      </blockquote>
                    </div>
                    <div className="flex items-center mt-8">
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">
                          Ramesh K.
                        </p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">
                          💻 Computer Basics Student
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col overflow-hidden shadow-2xl rounded-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">
                          "I struggled with emails and online transactions
                          before, but after taking this course, I can now send
                          emails, fill out online forms, and even pay bills
                          online without any help!"
                        </p>
                      </blockquote>
                    </div>
                    <div className="flex items-center mt-8">
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">
                          Amit V.
                        </p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">
                          🌐 Internet & Email Training
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="mt-auto bg-indigo-100  w-full max-w-[90rem] py-10 px-4 sm:px-6 lg:px-12 mx-auto font-[sans-serif]">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="col-span-full hidden lg:col-span-1 lg:block">
            <a href="/" className="flex items-center space-x-3">
              <img
                src="../images/Doc1.png"
                className="w-28 h-24 ml-0 lg:ml-20"
                alt="Logo"
              />
            </a>

            <p className="text-gray-800 text-2xl text-center">
              Aadityaa Computer's &amp; Digital Hub
            </p>
          </div>
          {/* End Col */}

          <div>
            <h4 className="text-lg font-bold text-gray-900 uppercase dark:text-neutral-800 ">
              Company
            </h4>
            <div className="mt-3 grid space-y-2 text-lg">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-blue-800 focus:outline-none focus:text-gray-800 dark:text-neutral-800  dark:focus:text-neutral-200"
                  href="/"
                >
                  Home
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-blue-800 focus:outline-none focus:text-gray-800 dark:text-neutral-800  dark:focus:text-neutral-200"
                  href="/user/about"
                >
                  About Us
                </a>
              </p>

              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-blue-800 focus:outline-none focus:text-gray-800 dark:text-neutral-800  dark:focus:text-neutral-200"
                  href="/user/courses"
                >
                  Our Certified Courses
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-blue-800 focus:outline-none focus:text-gray-800 dark:text-neutral-800  dark:focus:text-neutral-200"
                  href="/user/contact"
                >
                  Send Query
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-900 uppercase dark:text-neutral-800">
              Our Courses
            </h4>
            <div className="mt-3 grid space-y-3 text-lg">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-blue-800 focus:outline-none focus:text-gray-800 dark:text-neutral-800  dark:focus:text-neutral-200"
                  href="/user/courses"
                >
                  NIELIT Courses
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-blue-800 focus:outline-none focus:text-gray-800 dark:text-neutral-800  dark:focus:text-neutral-200"
                  href="/user/courses"
                >
                  Web Development
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-blue-800 focus:outline-none focus:text-gray-800 dark:text-neutral-800  dark:focus:text-neutral-200"
                  href="/user/courses"
                >
                  Digital Marketing
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-blue-800 focus:outline-none focus:text-gray-800 dark:text-neutral-800  dark:focus:text-neutral-200"
                  href="/user/courses"
                >
                  Programming Courses
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-900 uppercase dark:text-neutral-800">
              Contact Us
            </h4>
            <div className="mt-3 grid space-y-3 text-lg">
              <h1>
                <p
                  className="inline-flex gap-x-2 text-gray-600 hover:text-blue-800 focus:outline-none focus:text-gray-800 dark:text-neutral-800  dark:focus:text-neutral-200"
                  href="#"
                >
                  <span className="md:block hidden">📧</span>{" "}
                  aadityaacomputer9@gmail.com
                </p>
              </h1>
              <h1>
                <p
                  className="inline-flex gap-x-2 text-gray-600 hover:text-blue-800 focus:outline-none focus:text-gray-800 dark:text-neutral-800  dark:focus:text-neutral-200"
                  href="#"
                >
                  <img
                    src="https://www.svgrepo.com/show/452133/whatsapp.svg"
                    width={25}
                    height={25}
                    alt="tw"
                  />
                  +91 7985810921 / 8090068623
                </p>
              </h1>
              <h1>
                <p
                  className="inline-flex gap-x-2 text-gray-600 hover:text-blue-800 focus:outline-none focus:text-gray-800 dark:text-neutral-800  dark:focus:text-neutral-200"
                  href="/user/courses"
                >
                  🕘 : Mon-Sat: 8 AM - 7 PM
                </p>
              </h1>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />

        <p className="text-gray-600 transition-colors duration-300 dark:text-gray-800 dark:hover:text-blue-400 hover:underline hover:text-blue-500 text-lg">
          📍 J S Complex, Dewa Road, near Ramswaroop University,
          Barabanki-225003
        </p>

        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-1 gap-4 hover:cursor-pointer">
            <iframe
              className="w-full h-72 mt-2 rounded-xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.4479533319795!2d81.09969077544089!3d26.952710249665355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25bb50747be4f5a1%3A0xa79d292d913da320!2saadityaa%20computers%20%26%20digital%20hub!5e0!3m2!1sen!2sin!4v1741076159237!5m2!1sen!2sin"
              // allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Copyright and Social Media Section */}
        <div className="pt-5 border-t border-gray-200 dark:border-neutral-700">
          <div className="sm:flex sm:justify-between sm:items-center">
            <div className="flex flex-wrap items-center gap-3">
              <div className="space-x-4 text-lg text-center mb-2">
                <a
                  className="inline-flex gap-x-2 text-gray-600 transition-colors duration-300 dark:text-gray-800 dark:hover:text-blue-400 hover:underline hover:text-blue-500 text-lg"
                  href="#"
                >
                  © 2025 Aadityaa Computer's & Digital Hub Center, All rights
                  reserved.
                </a>
              </div>
            </div>
          </div>

          <div className="flex gap-4 hover:cursor-pointer mt-8">
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
        </div>
      </footer>
    </div>
  );
};

export default Page;
