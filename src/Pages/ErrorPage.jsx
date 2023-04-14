import React from "react";

const ErrorPage = () => {
  return (
    <div className="h-screen flex items-center justify-center font-poppins">
      <h1 className=" font-bold uppercase text-center">
        <span className=" text-stroke block sm:text-9xl text-7xl sm:tracking-[-10px]">
          404!
        </span>
        <span className="sm:text-3xl text-xl text-white">Page Not Found</span>
      </h1>
    </div>
  );
};

export default ErrorPage;
