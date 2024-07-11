import React, { useState } from "react";
import { LuArrowUpRightFromCircle } from "react-icons/lu";

const Feedback = () => {
  const [inputValue, setInputValue] = useState("");
  const [feedbackSent, setFeedbackSent] = useState(false);

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
      setFeedbackSent(true);
    }
  };

  return (
    <div className="flex flex-col w-screen h-screen justify-start goudy pt-20 gap-5 items-start pl-40">
      <p className="text-white mb-2 text-xl goudy">
        thoughts? feel free to type anything here.
      </p>

      <textarea
        value={inputValue}
        placeholder="enter your message..."
        className="bg-[#121117] p-2 rounded-[4px] w-96 h-40 cursor-none text-lg focus:outline-none pr-10"
        onChange={(e) => setInputValue(e.target.value)}
      />

      <div
        onMouseEnter={() => document.body.classList.add("no-cursor")}
        onMouseLeave={() => document.body.classList.remove("no-cursor")}
        onClick={handleSubmit}
        className="flex gap-1 text-sm justify-center items-center bg-[#121117] hover:bg-gray-700 transition-opacity duration-400 px-4 py-2 rounded-2xl"
      >
        <p className="text-lg"> send</p>
        <LuArrowUpRightFromCircle className="pb-[2px]" />
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
