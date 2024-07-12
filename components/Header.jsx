"use client";

import { useState, useEffect } from "react";

function useJumbledText(text, interval) {
  const [displayedText, setDisplayedText] = useState(text);

  useEffect(() => {
    const chars =
      "abcdefghijklmnopqrstuvwxyぬふあうえおやゆよわほへたていすかんなにらぜむちとしはきくまのりれけつさそひこみもねるめ";
    let iterations = 0;
    const jumbleInterval = setInterval(() => {
      if (iterations >= 20) {
        clearInterval(jumbleInterval);
        setDisplayedText(text);
        return;
      }

      setDisplayedText((prevText) =>
        text
          .split("")
          .map((char, i) =>
            i <= iterations
              ? char
              : chars[Math.floor(Math.random() * chars.length)]
          )
          .join("")
      );

      iterations += 1;
    }, interval / 20);

    return () => clearInterval(jumbleInterval);
  }, [text, interval]);

  return displayedText;
}

export default function Header() {
  const translations = [
    "Hi, I'm Deep!",
    "Hi, I'm Deep!",
    "hallo, ich bin deep!",
    // "こんにちは、ディープです！",
    // "hola, soy deep!",
  ];

  const [currentTranslation, setCurrentTranslation] = useState(translations[0]);
  const jumbledText = useJumbledText(currentTranslation, 3000);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTranslation((prevTranslation) => {
        const currentIndex = translations.indexOf(prevTranslation);
        const nextIndex = (currentIndex + 1) % translations.length;
        return translations[nextIndex];
      });
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-start main-container header-container mt-40">
      <div className="flex flex-col gap-10 px-2xl">
        <p className="text-6xl ml-40 mt-40 font-bold goudy">{jumbledText}</p>
        <div className="flex ml-40">
          <p className="text-2xl max-w-lg font-normal goudy">
            I'm a Full Stack Developer with a distinct passion in designing and
            building frontend interfaces. I'm also a Junior and a Teaching
            Assistant at Arizona State University.
          </p>
        </div>
      </div>
    </div>
  );
}
