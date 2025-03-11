import React from "react";

const About = () => {
  return (
    <div>
      {/* About Us */}
      <section className="py-4 bg-gray-100 sm:py-4 lg:py-8 font-[sans-serif]">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-6xl">
                <span className="text-indigo-600">About Us</span>
              </h2>
            </div>
          </div>
          <div className="grid items-center grid-cols-1 mt-4 gap-y-10 lg:grid-cols-5 sm:mt-12 gap-x-4">
            <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
              <div className="flex items-start">
                <svg
                  className="flex-shrink-0 text-green-500 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-black">
                    Computing Resources &amp; Networking Infrastructure
                  </h3>
                  <p className="mt-3 text-base text-gray-600">
                    Provides access to computing resources for students,
                    employees, or researchers.Internet access, local area
                    networks (LAN).
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <svg
                  className="flex-shrink-0 text-blue-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-black">
                    Software and Applications
                  </h3>
                  <p className="mt-3 text-base text-gray-600">
                    Operating systems, productivity tools, and specialized
                    software for various fields.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <svg
                  className="flex-shrink-0 text-red-500 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-black">
                    Security Measures, Training &amp; Learning
                  </h3>
                  <p className="mt-3 text-base text-gray-600">
                    Ensures cybersecurity and data management. Enhances
                    productivity in businesses and academic institutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <img
                className="w-full rounded-lg "
                src="https://img.freepik.com/free-vector/man-sysadmine-computer-programmer-working-computer_575670-70.jpg?t=st=1740815097~exp=1740818697~hmac=8c134401a8d5102bf191293bb58901509d624c3140adcd268cfc25628fc7f7d6&w=996"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-white dark:bg-gray-900 font-[sans-serif]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-indigo-600 sm:text-4xl lg:text-5xl">
              Meet Our Team
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg leading-relaxed text-gray-600">
              Our team is a group of dedicated professionals committed to
              providing top-notch services. Our passion for excellence drives us
              to support our community and help individuals achieve their goals.
            </p>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-auto h-60 rounded-xl"
                src="../images/MD.jpg"
                alt="Bonnie Avatar"
              />
              <h3 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Mr. Bhanu Prakash Mishra Sir</a>
              </h3>
              <p>Managing Director</p>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-auto h-60 rounded-xl"
                src="../images/Suraj.jpg"
                alt="Helene Avatar"
              />
              <h3 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Mr. Suraj Kumar Yadav Sir</a>
              </h3>
              <p>Head of Institute</p>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-auto h-60 rounded-xl"
                src="../images/NN.jpg"
                alt="Jese Avatar"
              />
              <h3 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Ms. Nainsi Mishra Ma'am</a>
              </h3>
              <p>Specialist Trainer</p>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-auto h-60 rounded-xl"
                src="../images/Nj.jpeg"
                alt="Joseph Avatar"
              />
              <h3 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Ms. Anjali Gautam Ma'am</a>
              </h3>
              <p>Computer Trainer</p>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-auto h-60 rounded-xl"
                src="../images/BS1.jpg"
                alt="Sofia Avatar"
              />
              <h3 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Ms. Bhawna Ma'am</a>
              </h3>
              <p>CS Programmer and Trainer</p>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-auto h-60 rounded-xl"
                src="../images/SA.jpg"
                alt="Leslie Avatar"
              />
              <h3 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Mr. Shahe Alam Sir</a>
              </h3>
              <p>CS Programmer and Trainer</p>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-auto h-60 rounded-xl"
                src="../images/Vikas.jpg"
                alt="Michael Avatar"
              />
              <h3 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Mr. Vikas Tiwari</a>
              </h3>
              <p>Digital Marketing Expert</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Facilities */}
      <section className="bg-indigo-50 font-[sans-serif] py-4">
        <div className="container px-16 py-10 mx-auto">
          <h2 className="text-5xl font-semibold text-center text-blue-700 capitalize lg:text-7xl">
            Our Facilities
          </h2>
          <div className="grid grid-cols-1 gap-8 mt-4 xl:mt-8 xl:gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div className="flex flex-col items-center p-12 space-y-6 text-start bg-gray-100 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-semibold text-gray-800">
                1:1 Computer Ratio for Students
              </h3>
              <p className="text-gray-700 text-md">
                We provide you the atmosphere and Fully equipped computer lab
                with high-speed internet and up-to-date software.
              </p>
            </div>
            <div className="flex flex-col items-center p-12 space-y-6 text-start bg-gray-100 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-semibold text-gray-800">
                Online Certificate Verification
              </h3>
              <p className="text-gray-700 text-md">
                We provide you the gateway to verify your certificate online as
                well as offline for your future.
              </p>
            </div>
            <div className="flex flex-col items-center p-12 space-y-6 text-start bg-gray-100 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-semibold text-gray-800">
                Specialist Faculty and Trainer
              </h3>
              <p className="text-gray-700 text-md">
                We have 7+ Specialist Faculties for your respective courses &Get
                expert tech support to help you resolve any technical issues.
              </p>
            </div>
            <div className="flex flex-col items-center p-12 space-y-6 text-start bg-gray-100 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-semibold text-gray-800">
                Career Development Courses
              </h3>
              <p className="text-gray-700 text-md">
                Get expert tech support to help you resolve any technical issues
                you might encounter
              </p>
            </div>
            <div className="flex flex-col items-center p-12 space-y-6 text-start bg-gray-100 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-semibold text-gray-800">
                Smart Class with Smart Devices
              </h3>
              <p className="text-gray-700 text-md">
                We provide classes according to student's abilities and
                performance.
              </p>
            </div>
            <div className="flex flex-col items-center p-12 space-y-6 text-start bg-gray-100 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-semibold text-gray-800">
                24x7 CCTV Monitoring
              </h3>
              <p className="text-gray-700 text-md">
                We always monitor all your activity through CCTV 24x7 and Our
                premises are monitored by us for your safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 lg:py-4 mx-auto font-[sans-serif] bg-gradient-to-tl from-indigo-900 via-transparent">
        <div className="relative p-6 md:p-16 mt-4">
          {/* Grid */}
          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center ">
            <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2 ">
              <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl capitalize">
                Why Choose Us?
              </h2>
              <p className="text-gray-500 text-md font-normal leading-relaxed lg:text-start text-center mt-4 ">
                At Aadityaa Computer and Digital Hub Institute, we offer wide
                range of certification courses in computer applications,
                programming, graphic design, digital marketing, hardware &
                networking, and more.{" "}
              </p>
              {/* Tab Navs */}
              <nav
                className="grid gap-4 mt-5 md:mt-10"
                aria-label="Tabs"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  type="button"
                  className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl active"
                  id="tabs-with-card-item-1"
                  aria-selected="true"
                  data-hs-tab="#tabs-with-card-1"
                  aria-controls="tabs-with-card-1"
                  role="tab"
                >
                  <span className="flex gap-x-6">
                    <svg
                      className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800"
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
                      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                    </svg>
                    <span className="grow">
                      <a
                        href="/user/courses"
                        className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800"
                      >
                        Comprehensive Courses
                      </a>
                      <span className="block mt-1 text-gray-800">
                        Covering everything from basic computer literacy to
                        advanced IT training.
                      </span>
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl"
                  id="tabs-with-card-item-2"
                  aria-selected="false"
                  data-hs-tab="#tabs-with-card-2"
                  aria-controls="tabs-with-card-2"
                  role="tab"
                >
                  <span className="flex gap-x-6">
                    <svg
                      className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800"
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
                      <path d="m12 14 4-4" />
                      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                    </svg>
                    <span className="grow">
                      <a
                        href="/"
                        className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800"
                      >
                        Experienced Faculty
                      </a>
                      <span className="block mt-1 text-gray-800">
                        Learn from industry experts with hands-on training.
                      </span>
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl"
                  id="tabs-with-card-item-3"
                  aria-selected="false"
                  data-hs-tab="#tabs-with-card-3"
                  aria-controls="tabs-with-card-3"
                  role="tab"
                >
                  <span className="flex gap-x-6">
                    <svg
                      className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800"
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
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                      <path d="M5 3v4" />
                      <path d="M19 17v4" />
                      <path d="M3 5h4" />
                      <path d="M17 19h4" />
                    </svg>
                    <span className="grow">
                      <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800">
                        Affordable Fees & Flexible Timings
                      </span>
                      <span className="block mt-1 text-gray-800">
                        Real-world projects and live sessions for better
                        understanding. Quality education at an affordable cost.
                      </span>
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl"
                  id="tabs-with-card-item-3"
                  aria-selected="false"
                  data-hs-tab="#tabs-with-card-3"
                  aria-controls="tabs-with-card-3"
                  role="tab"
                >
                  <span className="flex gap-x-6">
                    <svg
                      className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800"
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
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                      <path d="M5 3v4" />
                      <path d="M19 17v4" />
                      <path d="M3 5h4" />
                      <path d="M17 19h4" />
                    </svg>
                    <span className="grow">
                      <span className="block text-lg font-semibold hs-tab-active:text-blue-600 ">
                        Practical Learning Approach
                      </span>
                      <span className="block mt-1 text-gray-800">
                        Join Aadityaa Computer and Digital Hub Institute and
                        take a step towards a brighter future in the digital
                        world!
                      </span>
                    </span>
                  </span>
                </button>
              </nav>
              {/* End Tab Navs */}
            </div>
            {/* End Col */}
            <div className="lg:col-span-6">
              <div className="relative">
                {/* Tab Content */}
                <div>
                  <div
                    id="tabs-with-card-1"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-1"
                  >
                    <img
                      className="shadow-xl shadow-gray-200 rounded-xl"
                      src="https://i.pinimg.com/736x/b3/54/1c/b3541cddc615e88477effa3a99d8a34b.jpg"
                      alt="Features Image"
                    />
                  </div>
                  <div
                    id="tabs-with-card-2"
                    className="hidden"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-2"
                  >
                    <img
                      className="shadow-xl shadow-gray-200 rounded-xl"
                      src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80"
                      alt="Features Image"
                    />
                  </div>
                  <div
                    id="tabs-with-card-3"
                    className="hidden"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-3"
                  >
                    <img
                      className="shadow-xl shadow-gray-200 rounded-xl"
                      src="https://i.pinimg.com/736x/b3/54/1c/b3541cddc615e88477effa3a99d8a34b.jpg"
                      alt="Features Image"
                    />
                  </div>
                </div>
                {/* End Tab Content */}
                {/* SVG Element */}
                {/* <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                    <svg
                      className="w-16 h-auto text-orange-500"
                      width={121}
                      height={135}
                      viewBox="0 0 121 135"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                        stroke="currentColor"
                        strokeWidth={10}
                        strokeLinecap="round"
                      />
                      <path
                        d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                        stroke="currentColor"
                        strokeWidth={10}
                        strokeLinecap="round"
                      />
                      <path
                        d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                        stroke="currentColor"
                        strokeWidth={10}
                        strokeLinecap="round"
                      />
                    </svg>
                  </div> */}
                {/* End SVG Element */}
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
          {/* Background Color */}
          <div className="absolute inset-0 grid grid-cols-12 size-full">
            <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full" />
          </div>
          {/* End Background Color */}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-blue-100/80 font-[sans-serif] dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
                Subscribe our newsletter to get an update.
              </h1>
              <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                <input
                  id="email"
                  type="text"
                  className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="Email Address"
                />
                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                  Subscribe
                </button>
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-800 dark:text-white text-md lg:text-xl">
                Quick Link
              </p>
              <div className="flex flex-col items-start mt-5 space-y-2 lg:text-lg">
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
                >
                  Home
                </a>
                <a
                  href="/user/about"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
                >
                  About Us
                </a>
                <a
                  href="/user/courses"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
                >
                  Our Courses
                </a>
                <a
                  href="/user/gallery"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
                >
                  Gallery
                </a>
              </div>
            </div>
            <div>
              <p className="font-semibold text-md lg:text-xl text-gray-800 dark:text-white ">
                Contact Us
              </p>
              <div className="flex flex-col items-start mt-5 space-y-2 lg:text-lg">
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                  📧 aadityaacomputer9@gmail.com
                </p>
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                  📞+91 79858 10921 / 80900 68623
                </p>
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
            </div>
          </div>
          <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />

          <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500 text-lg">
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
          <p className="font-[sans-serif] p-8 text-start md:text-center md:text-lg text-xl md:p-4">
            © 2025 Aaditya Computer's and Digital Hub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;