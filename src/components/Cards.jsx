import React from "react";

import Blog from "../assets/icons/blog.png";
import Employee from "../assets/icons/employee.png";
import Evidence from "../assets/icons/evidence.png";

const Cards = () => {
  const cardData = [
    {
      imagePath: Evidence,
      title: "Discover Projects to Contribute",
      body: "Find exciting projects to contribute your skills and make a positive impact in the open source community.",
    },
    {
      imagePath: Employee,
      title: "Connect with Skilled Developers",
      body: "Network and collaborate with talented developers to enhance your skills and explore new opportunities.",
    },
    {
      imagePath: Blog,
      title: "Share Your Projects and Profile",
      body: "Showcase your projects and expertise, connecting with others and gaining recognition in the developer community.",
    },
  ];

  return (
    <>
      <h1
        className="text-3xl font-bold text-center text-white pt-24 pb-24"
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        Connect & Create
      </h1>
      <div className="flex md:flex-row xs:flex-col items-center justify-center max-w-[1440px] px-4 md:space-x-20 md:space-y-0 xs:space-y-10">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-[25vw] min-w-[200px] h-[30vh] min-h-[273px] pt-10 pb-10 pl-1 pr-1 space-y-2 rounded-[36px] shadow-md"
            style={{
              fontFamily: "Roboto, sans-serif",
              background:
                "linear-gradient(122.11deg, rgba(82, 109, 130, 0.5) 15.69%, rgba(12, 19, 79, 0.5) 130.86%)",
            }}
          >
            <img src={card.imagePath} alt={card.title} className="h-[35%]" />
            <h2 className="lg:text-2xl md:text-lg sm:text-sm xs:text-md font-bold text-center text-[#DDE6ED]">
              {card.title}
            </h2>
            <p className="lg:text-lg xs:text-sm text-center text-[#DDE6ED]">
              {card.body}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
