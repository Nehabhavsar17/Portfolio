import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import spring from "../../public/spring.png";

function PortFolio() {
  const cardItem = [
    { id: 1, logo: mongoDB, name: "Dynamic Resume Builder",link:"https://github.com/Nehabhavsar17/Dynamic-Resume-Builder " },
    { id: 2, logo: express, name: "Email Sending Feature",link:"https://github.com/Nehabhavsar17/email-sending-with-nodemailer" },
    { id: 3, logo: reactjs, name: "Inventory Management System",link: "https://github.com/Nehabhavsar17/Inventory-Management-System" },
    { id: 4, logo: spring, name: "Service Provider App",link:""},
    { id: 5, logo: python, name: "Weather Web App",link:" https://github.com/Nehabhavsar17/Weather-Web-App"},
    { id: 6, logo: java, name: "Vehicle Rental App",link:"https://github.com/Nehabhavsar17/Vehicle-Rental-App" },
  ];

  return (
    <div
      name="Project"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        {/* <span className="underline font-semibold"></span> */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name ,link}) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg cursor-pointer hover:scale-110 duration-300 flex flex-col justify-center items-center"
              key={id}
            >
              {/* Image */}
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt={name}
              />

              {/* Name and Description */}
              <div className="text-center mt-3">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-sm">
                  {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. */}
                </p>
              </div>

              {/* Source Code Button */}
              <a href={link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                      Source Code
                  </button>
                  
              </a>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
