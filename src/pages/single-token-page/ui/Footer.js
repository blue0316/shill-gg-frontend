import { useAtom } from "jotai";
import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare, FaReddit } from "react-icons/fa";
import { tokenDataAtom } from "../../../store";

const Footer = () => {
  const [data] = useAtom(tokenDataAtom);

  return (
    <footer
      className="absolute bottom-0 px-10 w-full bg-slate-900 text-white py-12 flex flex-col gap-8"
      data-aos="fade-up"
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-0 items-center justify-between">
        <div className="flex items-center justify-center gap-4">
          <img
            className="rounded-full border-4"
            src={data ? data.image_uri : "/images/logosonic.png"}
            alt="logo"
            width={80}
            height={80}
          />
          <h1 className="font-bold text-white text-[32px] uppercase">
            {data ? data.name : "SONIC"}
          </h1>
        </div>
        <nav>
          <ul className="flex items-center justify-center gap-8 text-gray-300 text-[20px] lg:text-[28px]  ">
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
                <FaReddit size={60} />
              </a>
            </li>
            <li>
              <a href="/">
                <AiFillTwitterCircle size={60} />
              </a>
            </li>
            <li>
              <a href="/">
                <FaInstagramSquare size={60} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between text-gray-300 text-[20px] md:text-[28px]  border-t-2 pt-8 border-dashed uppercase">
        <p>INFO@SHIIL.GG</p>
        <p>
          {data ? data.name : "SONIC"} @ {new Date().getFullYear()} ALL RIGHT
          RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
