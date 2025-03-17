import React from "react";
const DATA_ROW1 = [
  "Help & Contact Us",
  "Returns & Refunds",
  "Online Stores",
  "Terms & Conditions",
];
const DATA_ROW2 = [
   " What We Do",
    "Available Services",
    "Latest Posts",
   " FAQS"
];
const DATA_ROW3 = [
    "witter",
    "Instagram",
    "Facebook",
    "Pinterest"
];

const Footer = () => {
    const Renderfoter =(DATA)=>{
   return DATA.map((item,index)=>{
      return <p className="text-gray-400" key={index}>{item}</p>
      
   })
    }
  return (
    <div className="bg-black">
      <div
        style={{ width: "1200px", margin: "0px auto" }}
        className="grid grid-cols-3 gap-1"
      >
        <div>
          <h6 className="justify-start" style={{ color: "white" }}>
            CUTOMER SERVICES
          </h6>
          {Renderfoter(DATA_ROW1)}
        </div>
        <div>
          <h6 className="text-white">COMPANY</h6>
          {Renderfoter(DATA_ROW2)}
        </div>
        <div>
          <h6 className="text-white">SOCIAL MEDIA</h6>
          {Renderfoter(DATA_ROW3)}
        </div>
      </div>
    </div>
  );
};

export default Footer;