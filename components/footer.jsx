import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="h-1 w-full bg-gradient-to-r from-pink-500 to-violet-500" />
      <div className=" w-full h-20 flex-center ">
        <div className="flex gap-6">
          <a
            href="https://github.com/fahminurk"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-125"
          >
            <Image
              src={"/assets/icons/github-square.svg"}
              width={30}
              height={30}
              alt="github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/fahminurk/"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-125"
          >
            <Image
              src={"/assets/icons/linkedin-original.svg"}
              width={30}
              height={30}
              alt="linkedin"
            />
          </a>
          <a
            href="https://fahminurkamil.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-125"
          >
            <Image
              src={"/assets/icons/web.svg"}
              width={30}
              height={30}
              alt="web"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
