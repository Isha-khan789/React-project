import React from "react";
import footerlogo from "../assets/footer-logo.svg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../utilies/animationVariants";

const Footer = () => {
  return (
    <div className="py-12 bg-gray-100 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="space-y-6 mr-14"
        >
          <div className="flex items  space-x-2">
            <img src={footerlogo} className="w-32 h-auto" alt="" />
          </div>
          <p className="text-para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            eligendi deleniti delectus vitae obcaecati ipsa fugiat cupiditate
            quam impedit? Nisi officiis iste laudantium ab tempora dolores
            dignissimos commodi optio placeat.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white"
            >
              <FaFacebook className="text-xl" />
            </a>
            <a
              href="#"
              className="bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href="#"
              className="bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white"
            >
              <FaInstagramSquare className="text-xl" />
            </a>
            <a
              href="#"
              className="bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="space-y-6"
        >
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a href="#home" className=" hover:underline text-gray-700">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className=" hover:underline text-gray-700">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className=" hover:underline text-gray-700">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#about" className=" hover:underline text-gray-700">
                About Us
              </a>
            </li>
          </ul>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="space-y-6"
        >
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className=" hover:underline text-gray-700">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className=" hover:underline text-gray-700">
                Terms of Services
              </a>
            </li>
            <li>
              <a href="#" className=" hover:underline text-gray-700">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className=" hover:underline text-gray-700">
                Support Center
              </a>
            </li>
          </ul>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="space-y-6"
        >
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary" />
              <p className=" text-gray-700">123 street,City,Country</p>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-primary" />
              <p className=" text-gray-700">+12324035</p>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-primary" />
              <p className=" text-gray-700">info@mind.com</p>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
