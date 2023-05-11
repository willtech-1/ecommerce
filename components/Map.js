import React from "react";

const Map = () => {
  return (
    <>
      <h2 className="capitalize text-2xl py-5 text-center text-3xl tracking-tight font-extrabold text-center text-gray-900">
        Physical Store
      </h2>
      <div className="flex justify-center p-5 mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.07090224647!2d31.031699215108805!3d-29.775591281980848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7065f88e74453%3A0xa79cbac1238e585d!2sHlunga%20Group%20of%20Companies!5e0!3m2!1sen!2sza!4v1683644877263!5m2!1sen!2sza"
          width="700"
          height="400"
          style={{ border: "2px solid #F4F6F6", borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Map;
