"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Header from "./users/_components/header";
import Footer from "./users/_components/footer";

interface Video {
  id: number;
  title: string;
  url: string;
}

const Home: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});
  const router = useRouter();

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
    <div className="relative">
      <Header />

      <div className="p-4">
        <button
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          onClick={() => router.push("/users/authentication/signin")}
        >
          Go to Login
        </button>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-pulse">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="bg-gray-700 w-full aspect-[9/16] rounded-lg"></div>
              ))}
          </div>
        ) : (
          <div className="flex flex-col space-y-4 snap-y snap-mandatory overflow-y-auto h-screen">
            {videos.map((video) => (
              <div key={video.id} className="relative snap-start">
                <video
                  ref={(el) => (videoRefs.current[video.id] = el)}
                  controls
                  playsInline
                  className="w-full aspect-[9/16] rounded-lg"
                  autoPlay={window.innerWidth <= 640}
                  muted={window.innerWidth <= 640}
                  loop
                >
                  <source src={video.url} type="video/mp4" />
                </video>
                <button
                  className="absolute bottom-4 right-4 bg-black bg-opacity-50 p-2 rounded-full text-white"
                  onClick={() => videoRefs.current[video.id]?.requestFullscreen()}
                >
                  Fullscreen
                </button>
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
