import React from "react";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <>
      <footer className="boxItems footer">
        <div className="container flex">
          <p className="footerText">© 2023 All right reserved. Made with ❤ by DevOps-Daemons.</p>
          <div className="social">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook className="icon" />{" "}
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
            <RiInstagramFill className="icon" />
            </a>      <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
            <AiFillTwitterCircle className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/devops-daemons-411378267/"
              target="_blank"
              rel="noopener noreferrer"
            >
            <AiFillLinkedin className="icon" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
