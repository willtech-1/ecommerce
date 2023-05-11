// hooks
import { useState, useEffect } from "react";
// import react scroll link
import Link from "next/link";
// react icon for mobile view
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
//import useRouter from next router
import { useRouter } from "next/router";
import { useContext } from "react";
import { ProductsContext } from "./ProductsContext";
import logo from "../public/products/logo-2.png";
import Image from "next/image";

const Header = () => {
  // toggle mobile nav state
  const [openNav, setOpenNav] = useState(false);
  // nav shadow state
  const [navShadow, setNavShadow] = useState(false);
  // dynamically navbar background style
  const [navBcg, setNavBcg] = useState("#F4F6F6");
  const [linkColour, setLinkColour] = useState("#1f2837");
  const router = useRouter();

  const path = router.pathname;

  // use conext api
  const { selectedProducts } = useContext(ProductsContext);

  // useEffect that will run everytime the route changes
  useEffect(() => {
    if (
      router.asPath === "/iTunes" ||
      router.asPath === "/shoppingCart" ||
      router.asPath === "/memoryGame" ||
      router.asPath === "/carDealership"
    ) {
      setNavBcg("transparent");
      setLinkColour("#F4F6F6");
    } else {
      setNavBcg("#F4F6F6");
      setLinkColour("#1f2937");
    }
  }, [router]);

  // toggle nav function
  const handleMenu = () => setOpenNav(!openNav);

  // nav shadow logic
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setNavShadow(true);
      } else {
        setNavShadow(false);
      }
    };

    //add event listener
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <>
      <div
        style={{ backgroundColor: `${navBcg}` }}
        className={
          navShadow
            ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
            : "fixed w-full h-20 z-[100]"
        }
      >
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-24">
          {/* portfolio nav logo */}
          <Link href={"/"}>
            <a>
              <div className="nav-logo">
                <Image src={logo} alt="logo" />
              </div>
            </a>
          </Link>
          <Link href={"/checkout"}>
            <a
              className={
                (path === "/checkout" ? "text-emerald-500" : "") +
                " flex justify-center items-center lg:ml-64 sm:ml-54"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              {""}
              <span className="text-sm rounded-full ml-1">
                {""} {selectedProducts.length}
              </span>
            </a>
          </Link>

          {/* Navbar links with react script smooth scroll */}
          <div>
            <ul className="hidden md:flex">
              <Link href={"/"}>
                <a className={path === "/" ? "text-emerald-500" : ""}>
                  <li className="ml-10 text-sm uppercase hover:border-b">
                    HOME
                  </li>
                </a>
              </Link>
              <li className="ml-10 text-sm">
                <select className="select" name="cars" id="cars">
                  <option value="zar">ZAR</option>
                  <option value="usd">USD</option>
                  <option value="yen">YEN</option>
                  <option value="can">CAD</option>
                </select>
              </li>
              <li className="ml-10 text-sm">
                <select className="select" name="cars" id="cars">
                  <option value="english">ENGLISH</option>
                  <option value="french">FRENCH</option>
                  <option value="spanish">SPANISH</option>
                  <option value="dutch">DUTCH</option>
                </select>
              </li>
            </ul>

            {/* mobile navbar */}
            <div
              style={{ color: `${linkColour}` }}
              onClick={handleMenu}
              className="md:hidden"
            >
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>

        {/* slide menu for mobile devices */}
        {/* overlay style */}
        <div
          className={
            openNav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          {/* mobile device menu style slider half way mobile conditional logic*/}
          <div
            className={
              openNav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
          >
            {/* portfolio logo on mobile devices */}
            <div>
              <div className="flex w-full items-center justify-between">
                <Link href={"/"}>
                  <a>
                    <div className="nav-logo">
                      <Image src={logo} alt="logo" />
                    </div>
                  </a>
                </Link>

                {/* close mobile menu button */}
                <div
                  onClick={handleMenu}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 text-gray-600 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>

              {/* text */}
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4">
                  Let&apos;s build together.
                </p>
              </div>
            </div>

            {/* mobile device links */}
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href={"/"}>
                  <a className={path === "/" ? "text-emerald-500" : ""}>
                    <li
                      onClick={() => setOpenNav(false)}
                      className="py-4 text-sm"
                    >
                      HOME
                    </li>
                  </a>
                </Link>

                <div>
                  <li className="py-4 text-sm">
                    <select className="bg-[#ecf0f3] outline-none cursor-pointer">
                      <option value="zar">ZAR</option>
                      <option value="usd">USD</option>
                      <option value="yen">YEN</option>
                      <option value="can">CAD</option>
                    </select>
                  </li>
                </div>
                <div>
                  <li className="py-4 text-sm">
                    <select className="bg-[#ecf0f3] outline-none cursor-pointer">
                      <option value="english">ENGLISH</option>
                      <option value="french">FRENCH</option>
                      <option value="spanish">SPANISH</option>
                      <option value="dutch">DUTCH</option>
                    </select>
                  </li>
                </div>
                <div className="pt-8">
                  <p className="tracking-widest capitalize text-[#5651e5]">
                    Let&#39;s Connect
                  </p>
                </div>

                <div className="flex items-center justify-between py-8 w-full sm:w-[80%]">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="text-gray-600 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaInstagram />
                    </div>
                  </a>

                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="text-gray-600 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaFacebook />
                    </div>
                  </a>

                  <a
                    href="https://www.outlook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="text-gray-600 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <MdEmail />
                    </div>
                  </a>

                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="text-gray-600 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaTwitter />
                    </div>
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
