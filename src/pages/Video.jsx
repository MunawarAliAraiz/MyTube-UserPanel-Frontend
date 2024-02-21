import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { pages } from '../utils/data'; // Import your data source

const VideoPage = () => {
  // Accessing the 'id' parameter from the URL
  const { pageId, videoId } = useParams();
  const navigate = useNavigate();

  // Find the page with the matching ID
  const page = pages.find((page) => page.id === Number(pageId));

  if (!page) {
    // Handle case when the page is not found
    console.log(pageId, videoId);
    return <div>Page not found</div>;
  }

  // Find the video with the matching ID within the page
  const video = page.videos.find((video) => video.id === Number(videoId));

  if (!video) {
    // Handle case when the video is not found
    return <div>Video not found</div>;
  }

  // Destructuring video details
  const { title, description, thumbnail, duration, src, views, createdDate } = video;

  // Get related videos excluding the current video
  const relatedVideos = page.videos.filter((v) => v.id !== Number(videoId));

  return (
    <div className="container mx-auto p-4">
      {/* Video Title */}
      <h2 className="text-2xl font-bold mb-2">{title}</h2>

      {/* Video Iframe (Assuming 'src' is an embedded video link) */}
      <div className="mb-4">
        <iframe
          width="100%"
          height="400"
          src={src}
          title={title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* Video Details */}
      <div className="mb-4">
        <p className="text-gray-500">{duration}</p>
        <p className="text-gray-500">Views: {views}</p>
        <p className="text-gray-500">Created Date: {createdDate}</p>
      </div>

      {/* Video Description */}
      <p className="text-gray-600 mb-4">{description}</p>

      {/* Back to Page Link */}
      <p className="text-blue-500 cursor-pointer" onClick={() => navigate(`/page/${pageId}`)}>
        ← Back to Page: {page.title}
      </p>

      {/* Related Videos */}
      <h3 className="text-xl font-bold mb-2">Related Videos</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {relatedVideos.map((relatedVideo) => (
          <VideoCard key={relatedVideo.id} video={relatedVideo} pageId={pageId} />
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
