import {
  ChevronRightIcon,
  InboxIcon,
  MapPinIcon,
  PhoneArrowUpRightIcon,
} from "@heroicons/react/24/solid";
import React from "react";

function Footer() {
  const aboutUsLinks = [
    {
      menu: "Home",
      link: "/",
    },
    {
      menu: "About Us",
      link: "/",
    },
    {
      menu: "Our Services",
      link: "/",
    },
    {
      menu: "Terms & Condition",
      link: "/",
    },
    {
      menu: "Privacy Policy",
      link: "/",
    },
  ];

  const usefulLinks = [
    {
      menu: "Portfolio",
      link: "/",
    },
    {
      menu: "Team",
      link: "/",
    },
    {
      menu: "Career",
      link: "/",
    },
    {
      menu: "Contact",
      link: "/",
    },
    {
      menu: "Help",
      link: "/",
    },
  ];

  const year = new Date().getFullYear();

  return (
<<<<<<< HEAD
    <div
      className="w-full text-white "
      style={{
        background: `url("/images/footer_bg.webp")`,
        backgroundColor: "#082643",
        backgroundBlendMode: "overlay",
      }}
    >
=======
    <div className="bg-black w-full text-white ">
>>>>>>> 8c1c3357b0628e1f76595761a20bc83d2eca4efe
      <div className="max-w-5xl mx-auto py-7 px-2">
        {/* Contact info div */}
        <div className="flex gap-3 items-center justify-between flex-col md:flex-row">
          {/* PHONE */}
          <div className="flex items-center">
            <div className="">
              <PhoneArrowUpRightIcon className="w-10 h-10 text-blue-600" />
            </div>
            <div className="text-center">
              <a href="#" className="text-xl font-semibold">
                +91 8001074096
              </a>
              <p className="text-gray-500">Mon-Fri 9am-6pm</p>
            </div>
          </div>
          {/* EMAIL */}
          <div className="flex gap-3 items-center">
            <div className="">
              <InboxIcon className="w-10 h-10 text-blue-600" />
            </div>
            <div className="text-center">
              <a href="#" className="text-xl font-semibold">
                toufiksk.ab3@gmail.com
              </a>
              <p className="text-gray-500">Online support</p>
            </div>
          </div>

          {/* location */}

          <div className="flex gap-3 items-center">
            <div className="">
              <MapPinIcon className="w-10 h-10 text-blue-600" />
            </div>
            <div className="text-center">
              <a href="#" className="text-xl font-semibold">
                Newtown,West Bengal
              </a>
              <p className="text-gray-500">West Bengal 700136</p>
            </div>
          </div>
        </div>

        {/* second section about/link others */}
        <div className="flex w-full text-white mt-10  justify-between flex-col md:flex-row md:gap-0 gap-10">
          {/* About Us */}
          {/* About us section url link */}
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold ">ABOUT US</h2>
            <hr className="w-1/3 " />
            {aboutUsLinks.map((data, index) => (
              <div className="flex flex-col gap-2" key={index}>
                <div>
                  <a
                    href={data.link}
                    className="hover:underline hover:text-blue-600 hover:font-semibold"
                  >
                    <ChevronRightIcon className="w-5 h-5 inline" />
                    {data.menu}
                  </a>
                  <hr className="mt-2" />
                </div>
              </div>
            ))}
          </div>

          {/* Useful links  section url link */}

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold ">USEFUL LINKS</h2>
            <hr className="w-1/3 " />
            {usefulLinks.map((data, index) => (
              <div className="flex flex-col gap-2" key={index}>
                <div>
                  <a
                    href={data.link}
                    className="hover:underline hover:text-blue-600 hover:font-semibold"
                  >
                    <ChevronRightIcon className="w-5 h-5 inline" />
                    {data.menu}
                  </a>
                  <hr className="mt-2" />
                </div>
              </div>
            ))}
          </div>

          {/* contact us */}

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold ">CONTACT US</h2>
            <hr className="w-1/3 " />
            <div className="flex flex-col gap-2">
              <div>
                <p>Kolkata</p>
                <p>West Bengal 700136</p>
                <p>
                  <strong>Phone:</strong> +91: 8001-0740-96
                </p>
                <p>
                  <strong>Email:</strong> toufiksk.ab3@gmail.com
                </p>
                <div className="flex">
                  {/* Add more generic social icons as needed */}
                </div>
              </div>
            </div>
          </div>

          {/* subscription */}
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold ">SUBSCRIPTION</h2>
            <hr className="w-1/3 " />
            <div className="flex flex-col gap-2">
              <div>
                <p>Subscribe to more update</p>
                <p>News Later</p>
                <p>Subscribe Here To Get Our Latest Updates.</p>
                <p>Everything Your Brand Needs.</p>
                <input
                  type="text"
                  className="text-black px-2 mt-3 rounded"
                  placeholder="Email"
                />
<<<<<<< HEAD
                <button
                  type="button"
                  className="bg-red-900 px-2 mt-3 py-2  cursor-pointer hover:bg-red-800 transition-all duration-200 ease-in"
                >
                  Subscribe
                </button>
=======
                <input
                  type="button"
                  value="Subscribe"
                  className="bg-blue-900 px-3 rounded cursor-pointer"
                />
>>>>>>> 8c1c3357b0628e1f76595761a20bc83d2eca4efe
              </div>
            </div>
          </div>
        </div>

        {/* bottm footer copy right */}
      </div>
<<<<<<< HEAD
      <div className="bg-gray-950 w-full mx-auto py-4">
=======
      <div className="bg-[#212121] w-full mx-auto py-7">
>>>>>>> 8c1c3357b0628e1f76595761a20bc83d2eca4efe
        <p className="text-center text-sm">
          © Copyright {year} | Designed and Developed by{" "}
          <a
            href="https://www.linkedin.com/in/toufik-sk/"
            target="_blank"
            className="underline text-blue-500"
          >
            Toufik
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Footer;
