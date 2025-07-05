import React, { useState } from "react";
import thumbnailImg from "../assets/video-thumbnail.webp";
import { BsFillPlayFill } from "react-icons/bs";
import { MdArrowCircleRight } from "react-icons/md";

const About = () => {
  const [isVideoplaying, setisVideoplaying] = useState(false);

  const handleVideoplay = () => {
    setisVideoplaying(true);
  };

  const handleClosevideo = () => {
    setisVideoplaying(false);
  };

  return (
    <div id="about" className="bg-[#f7f8fc] pb-16 pt-20">
      <div className="container mx-auto">
        {/* Flex container holding video and text side by side */}
        <div className="py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Video / Thumbnail */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            {!isVideoplaying ? (
              <div className="relative">
                <img
                  src={thumbnailImg}
                  alt="video thumbnail"
                  className="w-full md:h-[446px] h-auto rounded-lg object-cover"
                />
                <button
                  onClick={handleVideoplay}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg cursor-pointer"
                >
                  <BsFillPlayFill className="size-12 text-white" />
                </button>
              </div>
            ) : null}
          </div>

          {/* Text block */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-4xl capitalize font-secondary font-bold mb-4 leading-snug">
              Individual Consult and Therapy
            </h2>
            <p className="text-lg mb-12 md:pr-8">
              We lower our stress level, we get to know our pain, we connect
              better, we improve our focus, and we are kinder to ourselves. Let
              us walk you through the basics in our new mindful guide on how to
              meditate.
            </p>
            <button className="bg-primary text-white py-4 px-9 font-medium rounded-md hover:bg-primary">
              <a href="#contact" className="flex gap-1 items-center">
                <span>Get started</span>
                <MdArrowCircleRight />
              </a>
            </button>
          </div>
        </div>

        {/* Overlay video */}
        {isVideoplaying && (
          <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
            <div className="relative w-full h-full flex items-center justify-center">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/8JgDybnESLw?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg max-w-full max-h-full"
              ></iframe>
              <button
                onClick={handleClosevideo}
                className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
