import React from "react";
import { useNavigate } from "react-router";
import error from "/src/assets/error.png";


const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-5 bg-gray-100">
      <img
        src={error}
        alt="404 Error"
        className="w-72 mb-5"
      />
      <h1 className="text-2xl md:text-4xl font-semibold mb-2">
        Oops, page not found!
      </h1>
      <p className="text-base md:text-lg text-gray-500 mb-5">
        The page you are looking for is not available.
      </p>
      <button
        onClick={() => navigate(-1)}
        className="bg-indigo-600 text-white px-5 py-2 rounded-lg cursor-pointer text-base md:text-lg hover:bg-indigo-700 transition"
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
