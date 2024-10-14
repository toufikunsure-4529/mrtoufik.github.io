import React from "react";

function CodingGallery() {
  const imgContainer = [
    {
      slug: "/coding/img1.jpg",
      width: "w-1/2",
    },
    {
      slug: "/coding/img2.jpg",
      width: "w-1/2",
    },
    {
      slug: "/coding/img3.webp",
      width: "w-full",
    },
  ];

  const secondImgContainer = [
    {
      slug: "/coding/img4.jpg",
      width: "w-full",
    },
    {
      slug: "/coding/img5.jpg",
      width: "w-1/2",
    },
    {
      slug: "/coding/img6.jpg",
      width: "w-1/2",
    },
  ];

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="mx-auto mb-7 text-center">
            <h1 className="sm:text-4xl text-3xl font-bold title-font text-gray-900 mb-4">
              Memory of my Coding Journey
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              A glimpse into my coding experiences, featuring projects and
              moments that shaped my journey.
            </p>
            <div className="heading-line mb-1 "></div>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              {imgContainer.map((imgList, index) => (
                <div className={`md:p-2 p-1 ${imgList.width}`} key={index}>
                  <img
                    alt={`gallery ${index}`}
                    className="w-full object-cover h-full object-center block transition-transform duration-300 hover:scale-105 cursor-pointer"
                    src={imgList.slug}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-wrap w-1/2">
              {secondImgContainer.map((imgList, index) => (
                <div className={`md:p-2 p-1 ${imgList.width} `} key={index}>
                  <img
                    alt={`gallery ${index}`}
                    className="w-full object-cover h-full object-center block transition-transform duration-300 hover:scale-105 cursor-pointer"
                    src={imgList.slug}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CodingGallery;
