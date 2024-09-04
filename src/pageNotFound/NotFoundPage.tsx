import React from 'react';
import { Link } from 'react-router-dom'; // or 'next/link' for Next.js

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
      <p className="text-2xl font-semibold text-gray-600 mt-4">Page Not Found</p>
      <p className="text-gray-500 mt-2 text-center">
        The page you're looking for doesn't exist. It might have been removed or the URL might be incorrect.
      </p>
      <Link
        to="/"
        className="mt-6 px-8 py-3 bg-blue-600 text-white text-lg font-medium rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
      >
        Go Home
      </Link>
      <div className="mt-8">
        <img
          src="https://via.placeholder.com/400x300" // Replace with your desired image URL
          alt="Not Found"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
