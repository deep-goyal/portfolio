import React from "react";
import Avatar from "../../public/avatar.png";
import Image from "next/image";
import { useReward } from "react-rewards";
import Signature from "../../public/signature.png";

const Letter = () => {
  const { reward, isAnimating } = useReward("rewardId", "emoji");

  return (
    <div className="flex items-center flex-col gap-10 min-h-screen min-w-screen">
      <button disabled={isAnimating}>
        <Image
          src={Avatar}
          alt="avatar"
          width={200}
          height={200}
          onClick={reward}
        />
      </button>

      <div className="fixed top-[50%]">
        <span id="rewardId" />
      </div>

      <div className="flex gap-10 items-center flex-col text-gray-300 max-w-md">
        <p className="cursor-blue-line text-lg">
          Greetings, human! If you reading this, you are one of the first few
          people who actually looked at my résumé. I want you to know that I am
          really grateful for that &lt;3
        </p>
        <p className="cursor-blue-line text-lg">
          I&apos;m from Mysore, a small town in India. It&apos;s a cozy place
          with a lot of history and culture. You should visit it sometime!
          Anyway, I flew to the United States to pursue my Bachelor&apos;s
          degree in Computer Science— a field that I truly believe is my
          calling.
        </p>
        <p className="cursor-blue-line text-lg">
          I&apos;m proficient in all popular programming paradigms and
          development procedures, especially agile development. I also
          absolutely love teaching data structures and algorithms. I have been a
          teaching assistant for over a year now, and I love every bit of the
          experience.
        </p>
        <div className="self-start">
          <p className="text-lg cursor-blue-line self-start">
            Thanks for stopping by!
          </p>
          <Image
            src={Signature}
            alt="signature"
            width={250}
            height={200}
            className="self-start cursor-blue-line"
          />
        </div>
      </div>
      <p className="self-end text-gray-500 px-20 pt-10 text-sm cursor-blue-line">
        Last updated by Deep on December 29, 2024 5:06AM MST
      </p>
    </div>
  );
};

export default Letter;
