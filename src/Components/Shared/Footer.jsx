import React from "react";
import logo from "../../assets/logo.webp";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <footer className="footer  text-base-content p-10 container mx-auto">
        <aside>
          <div className="w-12">
            {" "}
            <img src={logo} alt="" />
          </div>
          <p>
            Suggestify Industries Ltd.
            <br />
            Providing reliable tech since 2020
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Media</h6>
          <div className="flex gap-3">
            <FaFacebook size={30} /> <FaLinkedin size={30}></FaLinkedin>
          </div>
        </nav>
      </footer>
    <h3 className="text-center font-semibold text-xl md:text-xl py-6">&copy; 2024 Suggestify. All rights reserved.</h3>
    </div>
  );
};

export default Footer;
