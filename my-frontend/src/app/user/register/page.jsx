"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Name is required"),

  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .required("Password is required"),

  phone: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required("A phone number is required"),
});

const Register = () => {
  const router = useRouter();
  const signUpForm = useFormik({
    initialValues: {
      name: "",
      category: "",
      email: "",
      password: "",
      phone: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      axios
        .post("http://localhost:5000/user/add", values)
        .then((response) => {
          console.log(response.status);
          resetForm();
          toast.success("User Added Successfully");
          router.push("/");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Failed to add User");
        });
    },
    validationSchema: SignUpSchema,
  });

  return (
    <div>
      <div className="font-[sans-serif] flex items-center md:h-fit py-4 rounded-lg bg-gray-50 ">
        <div className="w-full max-w-5xl mx-auto ">
          <div className="grid md:grid-cols-2 gap-20 shadow w-full p-4 border border-gray-200 rounded-xl relative  ">
            <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-2xl shadow-md dark:bg-gray-800 font-[sans-serif]">
              <div className="px-8 py-8">
                <div className="flex justify-center mx-auto">
                  <h3 className="mt-0 text-2xl lg:text-3xl font-semibold text-center text-indigo-600 dark:text-gray-200">
                    Register Now
                  </h3>
                </div>
                <div className="mt-6 justify-between"></div>
                <form onSubmit={signUpForm.handleSubmit}>
                  <div className="w-full mt-5">
                    <label className="block mb-2 text-xl "></label>
                    {signUpForm.errors.name && signUpForm.touched.name ? (
                      <div className="text-red-500 text-sm">
                        {signUpForm.errors.name}
                      </div>
                    ) : null}
                    <input
                      className="block w-full px-4 py-2 mt-2 text-gray-600 placeholder-gray-500 bg-white border rounded-xl dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                      type="text"
                      placeholder="Enter Your Name"
                      aria-label="Email Address"
                      id="name"
                      onChange={signUpForm.handleChange}
                      value={signUpForm.values.name}
                    />
                  </div>
                  <div className="w-full mt-4">
                    <label className="block mb-2 text-xl "></label>
                    {signUpForm.errors.category &&
                    signUpForm.touched.category ? (
                      <div className="text-red-500 text-sm">
                        {signUpForm.errors.category}
                      </div>
                    ) : null}
                    <select
                      id="category"
                      onChange={signUpForm.handleChange}
                      value={signUpForm.values.category}
                      className="block w-full px-4 py-2 mt-2 text-gray-600 placeholder-gray-500 bg-white border rounded-xl dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                      <option value="">Select Your Course</option>
                      <option>Entry Level Courses</option>
                      <option>Programming</option>
                      <option>Web Development</option>
                      <option>NIELIT Courses</option>
                      <option>SkillIndia Courses</option>
                      <option>Digital Marketing</option>
                      <option>Graphic Designing</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div className="w-full mt-4">
                    <label className="block mb-2 text-xl "></label>
                    {signUpForm.errors.email && signUpForm.touched.email ? (
                      <div className="text-red-500 text-sm">
                        {signUpForm.errors.email}
                      </div>
                    ) : null}
                    <input
                      className="block w-full px-4 py-2 mt-2 text-black placeholder-gray-500 bg-white border rounded-xl dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                      type="email"
                      placeholder="Email Address"
                      aria-label="Email Address"
                      id="email"
                      onChange={signUpForm.handleChange}
                      value={signUpForm.values.email}
                    />
                  </div>
                  <div className="w-full mt-4">
                    <label className="block mb-2 text-xl "></label>

                    {signUpForm.errors.password &&
                    signUpForm.touched.password ? (
                      <div className="text-red-500 text-sm">
                        {signUpForm.errors.password}
                      </div>
                    ) : null}
                    <input
                      className="block w-full px-4 py-2 mt-2 text-black placeholder-gray-500 bg-white border rounded-xl dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                      type="password"
                      placeholder="Enter Password"
                      aria-label="Password"
                      id="password"
                      onChange={signUpForm.handleChange}
                      value={signUpForm.values.password}
                    />
                  </div>
                  <div className="w-full mt-4">
                    <label className="block mb-2 text-xl "></label>

                    {signUpForm.errors.phone && signUpForm.touched.phone ? (
                      <div className="text-red-500 text-sm">
                        {signUpForm.errors.phone}
                      </div>
                    ) : null}
                    <input
                      className="block w-full px-4 py-2 mt-2 text-black placeholder-gray-500 bg-white border rounded-xl dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                      type="number"
                      placeholder="Enter Your Number"
                      aria-label="Password"
                      id="phone"
                      onChange={signUpForm.handleChange}
                      value={signUpForm.values.phone}
                    />
                  </div>

                  <div className="flex items-center justify-center mt-4">
                    <button className="flex items-center justify-center w-full px-4 py-3 mx-2 text-lg font-medium text-white transition-colors duration-300 transform bg-blue-600 rounded-xl hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                      Register Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="grid grid-cols-1">
              <div className="">
                <div className="">
                  <div className=" mt-10 lg:mt-8">
                    <img
                      className="hidden md:block w-full rounded-xl "
                      src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-illustration-download-in-svg-png-gif-file-formats--log-register-form-user-interface-pack-design-development-illustrations-6430773.png"
                      alt="Hero Image"
                    />
                  </div>
                  <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
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
                  </div>
                </div>
              </div>
            </div>
            <div className="divider absolute left-0 right-0 mx-auto w-1 h-full border-2 border-gray-400 max-md:hidden" />
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

export default Register;