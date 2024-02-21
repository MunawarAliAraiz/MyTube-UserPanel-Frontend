import React from 'react';
import { Link } from 'react-router-dom';

const PageCard = ({ page }) => {
  const { bannerImage, pageLogo, title, id } = page;

  return (
    <Link to={{ pathname: `/page/${id}` }}>
      <div className="bg-white rounded-lg overflow-hidden shadow-md w-72 mx-4 my-8 transition duration-300 ease-in-out transform hover:scale-105">
        {/* Image of the page */}
        <img src={bannerImage} alt="Page Image" className="w-full h-40 object-cover" />

        {/* Content container */}
        <div className="p-4 flex gap-2 items-center">
          {/* Avatar icon */}
          <img
            src={pageLogo}
            alt="avatar"
            className="rounded-full h-8 w-8 mb-2 object-cover object-center"
          />

          {/* Page title */}
          <div className="text-lg font-bold text-center">{title}</div>
        </div>
      </div>
    </Link>
  );
};

export default PageCard;
