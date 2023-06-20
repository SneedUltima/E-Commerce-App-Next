import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const Card = ({ item }) => {
  return (
    <Link href={`/product/${item.slug.current}`}>
      <div className="card w-[200px] flex flex-col gap-[10px] mb-[50px]">
        <div className="image">
          <img
            className="w-[100%] h-[300px] object-cover hover:scale-105 duration-500"
            src={urlFor(item.image && item.image[0])}
            alt=""
          />
        </div>
        <div>
          <h2 className=" md:text-lg font-semibold leading-6 text-center md:text-left text-sm md:truncate">
            {item.name}
          </h2>
        </div>
        <div className="flex gap-[20px]">
          <h3 className=" text-xl font-bold text-slate-400 line-through">
            ${item.oldprice}
          </h3>
          <h3 className=" text-xl font-bold">${item.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
