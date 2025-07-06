import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../utilies/animationVariants";

const Contact = () => {
  const [Name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [country, setcountry] = useState("");
  const [message, setmessage] = useState("");
  const [showModal, setshowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Name || !email || !phone || !country || !message) {
      alert("Please fill all the fields.");
      return;
    }

    setshowModal(true);
  };

  const closeModel = () => {
    setshowModal(false);
    setname("");
    setemail("");
    setphone("");
    setcountry("");
    setmessage("");
  };
  return (
    <div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="bg-herobg flex items-center  justify-center text-white py-28 px-8"
      id="contact"
    >
      <div className="container mx-auto ml-12">
        <div className="md:4/5 mx-auto grid grid-cols-1 text-white md:grid-cols-2 items-center md:gap-12 gap-8">
          {/* left side */}
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold font-secondary mb-4 text-white">
              Make an appointment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
              <div className="flex item-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] mb-9 p-4 ">
                  <FaUserAlt className="text-primary " />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium"> 24 Hour Services</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="flex item-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] mb-9 p-4 ">
                  <FaEnvelope className="text-primary " />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Expert Therapist</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="flex item-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] mb-9 p-4 ">
                  <FaPhoneAlt className="text-primary " />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium"> High Quality Care</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="flex item-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] mb-9 p-4 ">
                  <FaGlobe className="text-primary " />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium"> Trusted Clinics</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          {/* right side */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="space-y-8 p-8 bg-white text-black shadow-xl rounded-md"
          >
            <h3 className="text-2xl font-bold text-black mb-4">
              Book Appointment
            </h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className=" flex sm:flex-row flex-col gap-4">
                <input
                  value={Name}
                  onChange={(e) => setname(e.target.value)}
                  type="text"
                  placeholder="Name"
                  className="w-full p-4 rounded-md  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
                <input
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
              </div>
              <div className=" flex sm:flex-row flex-col gap-4">
                <input
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                  type="tel"
                  placeholder="Contact Number"
                  className="w-full p-4 rounded-md  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
                <input
                  value={country}
                  onChange={(e) => setcountry(e.target.value)}
                  type="text"
                  placeholder="Country"
                  className="w-full p-4 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
              </div>
              <textarea
                value={message}
                onChange={(e) => setmessage(e.target.value)}
                rows="5"
                placeholder="Write your message"
                className="text-gray-500 w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
              ></textarea>
              <button
                type="submit"
                className="w-full p-3 bg-primary text-white rounded-md hover:bg-primary/80"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.9)] ">
          <div className="bg-white text-black p-8 rounded shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Thank you</h2>
            <p>Thank you ,{Name} for submitting your query.</p>
            <button
              onClick={closeModel}
              className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
