import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import CodingGallery from "../components/common/CodingGallery";
function Faq() {
  const [toggleFaq, setToggleFaq] = useState({});

  const FaqData = [
    {
      id: 1,
      question: "- What are your primary skills as a Frontend Developer?",
      answer:
        "I specialize in creating responsive, user-friendly web interfaces. My core skills include HTML, CSS, JavaScript, and React. Additionally, I'm skilled in frameworks like Bootstrap, Tailwind CSS, and Material UI, with experience using tools such as Git and NPM for efficient project management. I also have experience integrating APIs and implementing Redux for state management.",
    },
    {
      id: 2,
      question:
        "- What projects have you completed that demonstrate your frontend skills?",
      answer: `Food Delivery E-commerce Website: This project involved building a shopping cart and integrating features like live chat and restricted ordering hours.
GitHub Profile Details Fetcher: A React app that retrieves GitHub user profiles and repositories using the GitHub API.
Zomato Clone: A clone website developed with React and Redux, which integrates user authentication and order management via Appwrite.`,
    },
    {
      id: 3,
      question: "- What work experience do you have in web development?",
      answer:
        "I interned as a Web Development Intern with CodSoft, where I developed an eCommerce landing page, a personal portfolio website, and a functional calculator. This experience helped me strengthen my skills in HTML, CSS, JavaScript, and responsive design principles.",
    },
  ];

  const toggleItem = (id) => {
    setToggleFaq((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="bg-gradient-to-r from-indigo-50 via-white to-indigo-50 w-full ">
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
