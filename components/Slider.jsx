"use client";
import { useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import Image from "next/image";
import firstImage from "../public/images/slider1.webp";
import secondImage from "../public/images/slider2.jpg";
import thirdImage from "../public/images/slider3.webp";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);
  };

  const data = [firstImage, secondImage, thirdImage];

  return (
    <div className="slider lg:h-[calc(95vh-80px)] md:h-[calc(80vh-80px)] h-[calc(40vh-80px)] sm:h-[calc(55vh-80px)] w-[100vw] relative overflow-hidden">
      <div
        className="w-[300vw] h-[100%] flex duration-700"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <Image
          className="object-fill xs:object-fill w-[100vw] h-full"
          src={data[0]}
          alt="home banner"
        />
        <Image
          className=" xs:object-fill w-[100vw] h-full"
          src={data[1]}
          alt="home banner"
        />
        <Image
          className=" xs:object-fill w-[100vw] h-full"
          src={data[2]}
          alt="home banner"
        />
      </div>
      <div className="icons absolute left-0 right-0 m-auto w-fit flex bottom-[10px] sm:bottom-[100px] gap-[10px]">
        <div
          onClick={prevSlide}
          className="icon w-[50px] h-[50px] border border-gray-400 flex items-center justify-center cursor-pointer"
        >
          <BiLeftArrowAlt className=" text-white" />
        </div>
        <div
          onClick={nextSlide}
          className="icon w-[50px] h-[50px] border border-gray-400 flex items-center justify-center cursor-pointer"
        >
          <BiRightArrowAlt className=" text-white" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
