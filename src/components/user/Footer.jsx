import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const socials = [
  {
    icon: <FaFacebook />,
    link: `#`,
  },
  {
    icon: <FaYoutube />,
    link: `#`,
  },
  {
    icon: <FaLinkedin />,
    link: `#`,
  },
  {
    icon: <FaXTwitter />,
    link: `#`,
  },
  {
    icon: <FaWhatsapp />,
    link: `#`,
  },
];

const Footer = () => {
  return (
    <section className="bg-gray-100 text-black w-full h-full" id="cform">
      <div className="w-10/12 mx-auto">
        <div className=" border-b py-5 pt-10 flex justify-center">
          <div className="flex text-xl xl:text-2xl gap-5">
            {socials?.map((data, i) => (
              <div  key={i} className="bg-mainclr  hover:bg-black duration-200 text-white w-10 h-10 xl:w-12 xl:h-12 rounded-full grid place-items-center">
                <a className="" key={i} href={data.link}>
                  {data.icon}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="py-5">
          <ul className="flex justify-center gap-3">
            <li className="list-item-with-dot">Terms and Conditions</li>
            <li className="list-item-with-dot">Privacy Policy</li>
            {/* <li className="list-item-with-dot">Books</li>
            <li className="list-item-with-dot">Contact</li> */}
          </ul>
          <div className="text-xs text-gray-500 text-center pt-5">
            <p>Copyright © 2025 Books. All rights reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
