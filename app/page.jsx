"use client";

import { useEffect, useState } from "react";

import Grid from "./Grid";
import Header from "./Header";
import LoadingScreen from "./LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen fadeOut={fadeOut} />;
  }

  return (
    <div className="flex flex-col items-start main-container">
      <Header />
      <Grid />
    </div>
  );
}
