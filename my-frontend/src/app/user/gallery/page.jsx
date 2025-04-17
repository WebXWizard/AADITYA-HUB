import React from "react";

const gallery = () => {
  return (
    <div>
      <section className="py-4 bg-gray-50 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  font-[sans-serif]">
          <div className="px-4 mx-auto sm:px-6 lg:px-12 max-w-7xl ">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold leading-tight text-indigo-600 sm:text-4xl lg:text-5xl">
                Showcasing Innovation: Our Computer Centre Gallery
              </h2>
              <p className="max-w-2xl mx-auto mt-4 text-lg leading-relaxed text-gray-600">
                Explore our gallery to see our modern classrooms, events, and
                the equipment that power our programs. Join us in shaping the
                future of technology!
              </p>
            </div>
          </div>

          <div className="bg-white h-screen py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                {/* image - start */}
                <a
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                  <img
                    src="../images/B2.jpg"
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                  <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    {/* Our Logo */}
                  </span>
                </a>
                {/* image - end */}
                {/* image - start */}
                <a
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                >
                  <img
                    src="../images/Full.jpg"
                    loading="lazy"
                    alt="Photo by Magicle"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                  <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                   {/* Computer Lab */}
                  </span>
                </a>
                {/* image - end */}
                {/* image - start */}
                <a
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                >
                  <img
                    src="../images/Theory.jpg"
                    loading="lazy"
                    alt="Photo by Martin Sanchez"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                  <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    {/* Theory Class */}
                  </span>
                </a>
                {/* image - end */}
                {/* image - start */}
                <a
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                  <img
                    src="../images/T.jpg"
                    loading="lazy"
                    alt="Photo by Lorenzo Herrera"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                  <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    {/* Retro */}
                  </span>
                </a>
                {/* image - end */}
              </div>
            </div>
          </div>

          <div className="container max-w-screen-4xl mx-auto px-5 py-2 lg:px-32 lg:pt-48 ">
            <div className="m-1 flex flex-wrap md:-m-2">
              <div className="flex w-1/2 flex-wrap">
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="../images/Lab1.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="../images/Maam.jpg"
                  />
                </div>

                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="../images/2.jpg"
                  />
                </div>
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="../images/Cabin.jpg"
                  />
                </div>
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="../images/g.jpg"
                  />
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-auto w-auto rounded-lg object-cover object-center"
                    src="../images/We.jpg"
                  />
                </div>

                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-auto w-auto rounded-lg object-cover object-center"
                    src="../images/Sir.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default gallery;