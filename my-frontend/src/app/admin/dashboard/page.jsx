"use client";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="max-w-2xl mx-auto text-center font-[sans-serif]">
        <h2 className="text-3xl font-bold leading-tight text-indigo-600 sm:text-4xl lg:text-5xl">
          Welcome to Admin Panel
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg leading-relaxed text-gray-600">
          This Dashboard allows you to manage users, courses, payments,
          attendance, and website content. It provides a dashboard for key
          stats, handles student inquiries, and ensures security through
          role-based access. 🚀
        </p>
      </div>
    </div>
  );
};

export default page;
