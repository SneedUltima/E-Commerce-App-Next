import React from "react";
import Link from "next/link";
import Image from "next/image";
import StripeImage from "../public/images/Stripe.svg";

const Footer = () => {
  return (
    <div className="my-[50px] mx-4 md:mx-[100px] flex flex-col gap-4">
      <div className="top flex justify-center md:justify-between gap-14">
        <div className="left flex gap-10">
          <div className="left-left flex-col">
            <h1 className="text-xl  font-bold text-gray-600">Categories</h1>
            <div>
              <Link className="text-gray-500" href="/products/1">
                Preworkout
              </Link>
            </div>
            <div>
              <Link className="text-gray-500" href="/products/2">
                Protein
              </Link>
            </div>
            <div>
              <Link className="text-gray-500" href="/products/3">
                Accessories
              </Link>
            </div>
          </div>
          <div className="left-right flex flex-col">
            <h1 className="text-xl font-bold text-gray-600">Links</h1>
            <span className="text-gray-500">FAQ</span>
            <span className="text-gray-500">Store</span>
            <span className="text-gray-500">Cookies</span>
          </div>
        </div>
        <div className="right hidden md:flex gap-10">
          <div className="right-left max-w-[500px]">
            <h1 className="text-xl font-bold text-gray-600">About</h1>
            <span className=" text-center text-gray-500">
              At Rush Supplements, we are more than just a supplement provider.
              We understand that your fitness journey is unique, and that's why
              we have curated a range of premium supplements designed to support
              you every step of the way.
            </span>
          </div>
          <div className="right-right max-w-[500px]">
            <h1 className="text-xl font-bold text-gray-600">Contact</h1>
            <span className=" text-center text-gray-500">
              Have a question, need assistance, or simply want to connect with
              our team? We're here for you every step of the way. At Rush
              Supplements, we prioritize your satisfaction and are dedicated to
              providing exceptional customer service. Contact us today and let
              us assist you in your fitness journey.
            </span>
          </div>
        </div>
      </div>

      <div className="bottom flex justify-between">
        <div className="bottom-left flex md:flex-row flex-col gap-2 md:items-center">
          <div className="font-['Kanit'] text-xl">
            <Link href="/">Rush Supplements</Link>
          </div>
          <div>
            <span className="text-gray-500">
              © Copyright 2023. All Rights Reserved
            </span>
          </div>
        </div>
        <div className="bottom-right">
          <Image src={StripeImage} alt="stripe logo" width={240} height={56} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
