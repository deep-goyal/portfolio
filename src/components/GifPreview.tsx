import React, { useEffect, useState } from "react";

interface GifPreviewProps {
  isHovered: boolean;
  media: string | null;
}

const GifPreview = ({ isHovered, media }: GifPreviewProps) => {
  const [cachedMedia, setCachedMedia] = useState<string | null>(null);

  // Map for subtitles
  const subtitleMap: Record<string, string> = {
    "/verbalist.mp4": "/verbalist-sub.vtt", // Add more subtitles here if needed
  };

  useEffect(() => {
    if (media) {
      (async () => {
        try {
          const response = await fetch(media, {
            cache: "force-cache", // Cache the media for optimal performance
          });
          if (response.ok) {
            const url = URL.createObjectURL(await response.blob());
            setCachedMedia(url);
          }
        } catch (error) {
          console.error("Failed to preload media:", error);
        }
      })();
    }
  }, [media]);

  if (!cachedMedia || !isHovered) {
    return null; // Do not render if media is not ready or not hovered
  }
  const isVideo = media ? media.endsWith(".mp4") : false; // Check if media is a video
  const subtitles = media ? subtitleMap[media] : undefined; // Check if there's a subtitle file

  return (
    <div
      className={`fixed top-1/2 right-[10%] -translate-y-1/2 transition-opacity ease-in-out duration-500 ${
        isHovered
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      style={{ width: "70vw", maxWidth: "50vw" }}
    >
      {isVideo ? (
        <video
          src={cachedMedia}
          className="rounded-lg shadow-lg w-full"
          autoPlay
          muted
          loop
        >
          {subtitles && (
            <track
              src={subtitles}
              kind="subtitles"
              srcLang="en"
              label="English"
              default
            />
          )}
        </video>
      ) : (
        <img
          src={cachedMedia}
          alt="media preview"
          className="object-contain w-full"
        />
      )}
    </div>
  );
};

export default GifPreview;
