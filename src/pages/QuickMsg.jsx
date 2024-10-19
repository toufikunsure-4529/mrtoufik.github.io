import React from "react";
import QuickChatBot from "../components/common/QuickChatBot";

function QuickMsg() {
  return (
    <div
      className="w-full min-h-screen bg-white relative"
      style={{
        background: `url("/bg-visual.avif")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute bottom-44 w-full md:w-1/2 pl-5 md:pl-20">
        <h3 className="text-gray-100 text-2xl md:text-3xl font-semibold text-center md:text-left">
          Have a question? Contact us now using{" "}
          <span className="text-green-500 font-bold">Quick Chat!</span> We're
          here to assist you right away.
        </h3>
      </div>
      <div className="flex justify-end items-end pt-10 px-3">
        <QuickChatBot />
      </div>
    </div>
  );
}

export default QuickMsg;
