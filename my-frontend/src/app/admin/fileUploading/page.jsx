"use client";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const FileUploading = () => {
  const uploadFile = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append("file", file);
    fd.append("upload_preset", "Minor_Project");
    fd.append("cloud_name", "drcqjpqlv");

    axios
      .post("https://api.cloudinary.com/v1_1/drcqjpqlv/image/upload", fd)
      .then((result) => {
        toast.success("File Upload Successfully");
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to Upload File");
      });
  };
  return (
    <div className="flex justify-center items-center h-[90vh] px-4">
      <label
        htmlFor="upload-file"
        className="block rounded-xl border-2 border-dashed p-6 text-center cursor-pointer text-blue-600 text-lg sm:text-xl md:text-2xl w-full max-w-md"
      >
        Click Here to Upload File
      </label>
      <input
        id="upload-file"
        type="file"
        onChange={uploadFile}
        className="hidden"
      />
    </div>
  );
};

export default FileUploading;
