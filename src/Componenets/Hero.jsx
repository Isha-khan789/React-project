import { MdArrowCircleRight } from "react-icons/md";
import React from "react";
import heroImg from "../assets/hero.webp";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-herobg text-white flex items-center pt-28  md:h-screen"
    >
      <div className="conatainer mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hidden gap-2 h-full">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-secondary font-bold mb-4 md:w-3/4 leading-snug">Start your journey to Mental Wellness</h1>
          <p className="text-lg mb-12 md:pr-8">
          
            We lower our stress level,we get to know our pain,we connect
            better,we improve our focus and we are kinder to ourselves.Let us
            walk you through the basics in our new mindful guide on how to
            meditate
          </p>
          <button className="bg-primary text-white py-4 px-9 font-medium rounded-md hover:bg-primary"> 
            <a href="#contact" className="flex gap-1 items-center">
                <span>Get started</span>
                <MdArrowCircleRight />
            </a>
          </button>
        </div>
        <div className="md:w-1/2 h-full">
          <img src={heroImg} alt="hero image" className="w-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
