import React from "react";
import { Link } from "react-scroll";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Arrow = () => {
  return (
    <div className="arrow">
      <div className="flex justify-center py-12">
        <Link to="homePage" smooth={true} duration={800}>
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Arrow;
