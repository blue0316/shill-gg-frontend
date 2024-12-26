import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare, FaReddit } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="absolute bottom-0 px-5 w-full bg-slate-900 text-white py-6 flex flex-col  gap-4"
      data-aos="fade-down"
    >
      <div className="flex flex-col md:flex-row gap-3 md:gap-0 items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <img
            className="rounded-full border-2"
            src="/images/logosonic.png"
            alt="logo"
            width={40}
            height={40}
          />
          <h1 className="font-bold text-white">SONIC</h1>
        </div>
        <nav>
          <ul className="flex items-center justify-center gap-4 text-gray-300 text-[10px] lg:text-sm  ">
            <li>
              <a className="hover:text-white transition-all" href="/">
                NFTS
              </a>
            </li>
            <li>
              <a className="hover:text-white transition-all" href="/">
                ROADMAP
              </a>
            </li>
            <li>
              <a className="hover:text-white transition-all" href="/">
                TOKENOMIC
              </a>
            </li>
            <li>
              <a className="hover:text-white transition-all" href="/">
                SONICLAB
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <ul className="flex items-center justify-center gap-3">
            <li>
              <a href="/">
                <FaReddit size={30} />
              </a>
            </li>
            <li>
              <a href="/">
                <AiFillTwitterCircle size={30} />
              </a>
            </li>
            <li>
              <a href="/">
                <FaInstagramSquare size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between text-gray-300 text-[10px] md:text-sm  border-t pt-4 border-dashed ">
        <p>SONICTOTHEMOON@GMAIL.COM</p>
        <p>SONIC @ 2024 ALL RIGHT RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
