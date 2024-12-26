import Image from "next/image";
import React, { useEffect, useState } from "react";

interface GifPreviewProps {
  isHovered: boolean;
  media: string | null;
}

const GifPreview = ({ isHovered, media }: GifPreviewProps) => {
  const [cachedMedia, setCachedMedia] = useState<string | null>(null);

  // map media to subtitles
  const subtitleMap: Record<string, string> = {
    "/verbalist.mp4": "/verbalist-sub.vtt",
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
  const isVideo = media ? media.endsWith(".mp4") : false; // video switcher
  const subtitles = media ? subtitleMap[media] : undefined; // use subtitles if found

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
        <Image
          src={cachedMedia}
          alt="media preview"
          className="object-contain w-full"
          width={150}
          height={400}
          priority={true}
        />
      )}
    </div>
  );
};

export default GifPreview;
