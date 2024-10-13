import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

function Faq() {
  const [toggleFaq, setToggleFaq] = useState({});

  const FaqData = [
    {
      id: 1,
      question: "- What are the main features?",
      answer:
        "This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      id: 2,
      question: "- How Much Will It Cost?",
      answer:
        "To Get A Better Idea Of The Cost Of What You Want To Build, Give Us A Quick Phone Call. We’ll Ask You A Few Questions About The Nature Of The Site, What Sort Of Interactivity The Site Will Have, Your Graphic Design Needs, Etc. Then We’ll Be Able To Give You A Ballpark Figure. If You’re Still Interested, We’ll Come To Your Place Of Business And Come Up With A Firm Quote.",
    },
    {
      id: 3,
      question: "- How Do I Associate With IT Company?",
      answer:
        "The Process Begins When You Contact Us With Your Requirements. We Analyze Your Requirements And Respond To You. On The Basis Of The Further Discussion, You Can Choose An Engagement Model That Suits You The Best. After That, We Begin The Process Of Development.",
    },
  ];

  const toggleItem = (id) => {
    setToggleFaq((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="bg-[#F2F2F2] w-full " data-aos="fade-up">
      <div className="max-w-4xl mx-auto py-6 px-2">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-900">
          FAQ
        </h1>
        <div className="heading-line mb-1 "></div>
        <p className="text-center">
          Frequently asked questions, get knowledge beforehand
        </p>
        {FaqData.map((faq) => (
          <div className="mt-2" key={faq.id}>
            <div
              className="w-3xl mx-auto bg-white py-4 px-3 rounded border shadow-xl cursor-pointer flex items-center justify-between transition-all duration-300"
              onClick={() => toggleItem(faq.id)}
            >
              <p>{faq.question}</p>
              {toggleFaq[faq.id] ? (
                <MinusCircleIcon className="h-6 w-6" />
              ) : (
                <PlusCircleIcon className="h-6 w-6" />
              )}
            </div>

            {toggleFaq[faq.id] && (
              <div className="w-3xl mx-auto bg-white px-3 py-3 rounded border shadow-xl mt-0 transition-all ease-out duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
