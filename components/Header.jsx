"use client";

import { useState, useEffect } from "react";

function useJumbledText(text, interval) {
  const [displayedText, setDisplayedText] = useState(text);

  useEffect(() => {
    const chars =
      "abcdefghijklmnopqrstuvwxyźщертыуиопасдфгхйкл;зхцвбнмぬふあうえおやゆよわほへたていすかんなにらぜむちとしはきくまのりれけつさそひこみもねるめ";
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
    "hi, i'm deep!",
    "hallo, ich bin deep!",
    "こんにちは、ディープです！",
    "salut, je suis deep!",
    "hola, soy deep!",
    "привет, я дип!",
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
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-start main-container header-container mt-40">
      <div className="flex flex-col gap-10 px-2xl">
        <p className="text-4xl ml-40 mt-40">{jumbledText}</p>
        <div className="flex ml-40">
          <p className="text-xl max-w-lg">
            i'm a junior at arizona state. i love building software and teaching
            cs, and i hold a distinct passion for building memorable experiences
            through front-end interfaces! i aspire to be a great web engineer!
          </p>
        </div>
      </div>
    </div>
  );
}
