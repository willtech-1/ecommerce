import React from "react";
import whatsapp from "../public/products/whatsapp.png";
import arrow from "../public/products/whatsapp.png";
import Image from "next/image";
import ReactWhatsapp from "react-whatsapp";

const Icons = () => {
  return (
    <>
      <div className="chat">
        <ReactWhatsapp
          number="+27 677827144"
          message="I want to buy your product but I have a question"
        >
          <Image src={whatsapp} alt="logo" />
        </ReactWhatsapp>
      </div>
    </>
  );
};

export default Icons;
