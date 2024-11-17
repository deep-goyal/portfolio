"use client";

import LoadingScreen from "../components/LoadingScreen";
import Gallery from "@/components/Gallery";

const Home = () => {
  return (
    <>
      <LoadingScreen />

      <div className="content flex flex-col items-center justify-center min-h-screen text-gray-300">
        <Gallery />
      </div>
    </>
  );
};

export default Home;
