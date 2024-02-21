import React from 'react';
import { pages } from '../utils/data';
import { useParams, useNavigate } from 'react-router-dom';
import VideoCard from '../components/VideoCard';

const PageDetail = () => {
  // Accessing the 'id' parameter from the URL
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the page with the matching ID
  const page = pages.find((page) => page.id === Number(id));

  if (!page) {
    // Handle case when the page is not found
    return <div>Page not found</div>;
  }

  // Destructuring page details
  const { bannerImage, pageLogo, title, description, dateCreated, categories, videos } = page;

  return (
    <div className="container mx-auto p-4">

      {/* Back to Home Link */}
      <p className="text-blue-500 cursor-pointer" onClick={() => navigate(`/home`)}>
        ← Back to All Pages
      </p>

      {/* Banner Image */}
      <img src={bannerImage} alt="Page Banner" className="w-full h-40 object-cover mb-4" />

      {/* Page Logo, Title, Description, and Date Created */}
      <div className="flex items-center mb-4">
        <img src={pageLogo} alt="Page Logo" className="h-14 w-14 mr-4 rounded-full" />
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-gray-600">{description}</p>
          <p className="text-gray-500">Date Created: {dateCreated}</p>
        </div>
      </div>

      {/* Categories Pills */}
      <div className="mb-4">
        {categories.map((category, index) => (
          <span key={index} className="bg-blue-200 text-blue-800 px-2 py-1 mr-2 rounded-full cursor-pointer">
            {category}
          </span>
        ))}
      </div>

      {/* Videos Cards */}
      <h3 className="text-xl font-bold mb-2">Videos</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} pageId={id} />
        ))}
      </div>
    </div>
  );
};



export default PageDetail;
