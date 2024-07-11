"use client";

import React, { useState } from "react";
import { LuArrowUpRightFromCircle } from "react-icons/lu";

const Feedback = () => {
  const [inputValue, setInputValue] = useState("");
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [feedbackSent, setFeedbackSent] = useState(false);

  // Handle input change and show submit button
  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    if (value.length > 0) {
      setShowSubmitButton(true);
    } else {
      setShowSubmitButton(false);
    }
  };

  // Handle feedback submission
  const handleSubmit = async () => {
    const response = await fetch(
      "https://feedback-seven-beige.vercel.app/api/feedback",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ feedback: inputValue }),
      }
    );

    if (response.ok) {
      setInputValue("");
      setShowSubmitButton(false);
      setFeedbackSent(true);
    }
  };

  return (
    <div className="flex flex-col w-screen h-screen justify-center gap-5 items-start pl-40">
      <label className="text-white mb-2 text-lg">
        thanks for stopping by! <br /> feel free to type out an anonymous
        feedback below
      </label>
      <div
        className="relative mt-2"
        onMouseLeave={() => document.body.classList.remove("no-cursor")}
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="enter your feedback"
          className="bg-[#121117] p-2 rounded-[4px] w-80 h-10 cursor-none text-sm focus:outline-none pr-10"
        />
        {showSubmitButton && (
          <div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 flex items-center justify-center hover:text-xl hover:text-gray-500"
            onMouseEnter={() => document.body.classList.add("no-cursor")}
            onMouseLeave={() => document.body.classList.remove("no-cursor")}
            onClick={handleSubmit}
          >
            <LuArrowUpRightFromCircle />
          </div>
        )}
      </div>
      {feedbackSent && (
        <div className="text-green-500 text-sm mt-2">
          feedback submitted successfully! thanks!
        </div>
      )}
    </div>
  );
};

export default Feedback;
