import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video, pageId }) => {
    const { title, thumbnail, duration, id } = video
    return (
    <Link to={`/page/${pageId}/video/${id}`}>
        <div className="bg-white rounded-lg overflow-hidden shadow-md w-72  transition duration-300 ease-in-out transform hover:scale-105">
            {/* Thumbnail of the video */}
            <img src={thumbnail} alt="Video Thumbnail" className="w-full h-40 object-cover" />
    
            {/* Content container */}
            <div className="p-4">
            {/* Video title */}
            <h4 className="text-lg font-bold mb-2">{title}</h4>
            
            {/* Duration */}
            <p className="text-gray-500">{duration}</p>
            </div>
        </div>
    </Link>
    );
  };

  export default VideoCard;
