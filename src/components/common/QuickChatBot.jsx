import React, { useRef, useState, useEffect } from "react";

function QuickChatBot() {
  const [startChatBot, setStartChatBot] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userFormData, setUserFormData] = useState({
    name: "",
    mobile: "",
    email: "",
  });
  const [userInputMsgTxt, setUserInputMsgTxt] = useState("");
  const [message, setMessage] = useState([]);
  const userInputMsgTxtRef = useRef(null);

  const sendMsg = () => {
    if (userInputMsgTxt.trim().length <= 0) return; // Prevent sending empty messages
    setMessage((prevMsg) => [...prevMsg, userInputMsgTxt]);
    setUserInputMsgTxt("");
    userInputMsgTxtRef.current.focus();
  };

  //enter key to send msg
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMsg();
    }
  };

  //pre chat user form logic start button
  const handleStartBot = (e) => {
    e.preventDefault();
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      setStartChatBot(true);
      console.log(userFormData);
    }, 2000);
    return () => clearTimeout(timer);
  };
  //pre form user handle change
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  //geting preform to user Frist name
  const userFristName =
    userFormData.name.split(" ")[0].charAt(0).toUpperCase() +
    userFormData.name.split(" ")[0].slice(1).toLowerCase();

  //   const [botAutoMsg, setBotAutoMsg] = useState([
  //     `Thank you for reaching out! I will get back to you within 2 hours via email or phone.`,
  //   ]);

  const handleBotAutoMsg = () => {};

  return (
    <div className="bg-white mt-10 mr-3 mb-3 w-full max-w-xs sm:max-w-md rounded-md shadow-lg flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white py-4 px-5 rounded-t-md">
        <h2 className="text-2xl font-bold text-center">Quick Chat</h2>
        <div className="mt-2 h-1 w-24 mx-auto bg-gray-100 rounded-full"></div>
        <img src="/new.gif" alt="new" />
      </div>

      {/* Pre-chat Form */}
      {!startChatBot && (
        <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col gap-5">
          <p className="text-center text-gray-600"><span></span>
            Interested in working together? Let’s start a conversation!
          </p>
          <form className="flex flex-col gap-4" onSubmit={handleStartBot}>
            <input
              type="text"
              name="name"
              value={userFormData.name}
              onChange={handleOnChange}
              placeholder="Your Name"
              className="w-full border py-3 px-4 rounded-md focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="tel"
              name="mobile"
              value={userFormData.mobile}
              onChange={handleOnChange}
              placeholder="Mobile Number"
              className="w-full border py-3 px-4 rounded-md focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              name="email"
              value={userFormData.email}
              onChange={handleOnChange}
              placeholder="Email Address"
              className="w-full border py-3 px-4 rounded-md focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className={`w-full bg-blue-600 text-white py-3 rounded-md flex justify-center items-center ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  <span>Please Wait...</span>
                </>
              ) : (
                "Start Chat"
              )}
            </button>
          </form>
        </div>
      )}

      {/* Chatbox */}
      {startChatBot && (
        <div className="flex flex-col h-96 overflow-hidden">
          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            <div className="bg-gray-100 p-3 rounded-lg max-w-xs shadow-md">
              Hello {userFristName}! How can I assist you today?
            </div>
            {/* {botAutoMsg.map((botMsg, index) => (
              <div
                className="bg-gray-100 p-3 rounded-lg max-w-xs shadow-md"
                key={index}
              >
                {botMsg}
              </div>
            ))} */}

            {message.map((msg, index) => (
              <div key={index} className="flex justify-end">
                <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs shadow-md">
                  {msg}
                </div>
              </div>
            ))}
            <div className="mt-4 text-center text-sm">
              ⚠️ <strong>Notice:</strong> We are currently undergoing
              maintenance. Our chatbot system is under construction and will be
              available soon. Thank you for your understanding!
            </div>
          </div>

          {/* Input Field */}
          <div className="flex p-4 border-t border-gray-200">
            <input
              type="text"
              value={userInputMsgTxt}
              ref={userInputMsgTxtRef} // Reference input field
              onChange={(e) => setUserInputMsgTxt(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-0"
            />
            <button
              className="bg-blue-500 hover:bg-blue-300 transition-colors duration-300 text-white px-4 py-2 rounded-r-md focus:outline-none focus:ring-0"
              onClick={sendMsg}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuickChatBot;
