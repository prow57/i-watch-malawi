"use client";
import Header from "./users/_components/header";
import Footer from "./users/_components/footer";
import { useState, useEffect } from "react";

interface Video {
  id: number;
  title: string;
  url: string;
}

const Home: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setVideos([
        { id: 1, title: "Video 1", url: "https://www.example.com/video1.mp4" },
        { id: 2, title: "Video 2", url: "https://www.example.com/video2.mp4" },
        { id: 3, title: "Video 3", url: "https://www.example.com/video3.mp4" },
        { id: 4, title: "Video 4", url: "https://www.example.com/video4.mp4" },
        { id: 5, title: "Video 5", url: "https://www.example.com/video5.mp4" },
        { id: 6, title: "Video 6", url: "https://www.example.com/video6.mp4" },
      ]);
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <Header />

      <div className="p-4">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 animate-pulse">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="bg-gray-700 w-full aspect-video rounded-lg"></div>
              ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {videos.map((video) => (
              <div key={video.id} className="rounded-lg w-full">
                <video controls className="w-full aspect-video rounded-lg">
                  <source src={video.url} type="video/mp4" />
                </video>
                <p className="text-white text-center mt-2">{video.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
