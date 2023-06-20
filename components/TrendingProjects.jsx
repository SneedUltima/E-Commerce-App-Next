"use client";
import { useEffect, useState } from "react";
import Card from "./Card";
import { client } from "../lib/client";

const FeaturedProjects = ({ type }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "product" && trending == true]`)
      .then((data) => setProducts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="lg:my-[100px] xl:mx-[400px] mx-10 mt-10">
      <div className="top flex flex-col md:flex-row items-center md:justify-between mb-[50px]">
        <h1 className="text-2xl font-bold  md:basis-2/5">
          Trending Preworkout
        </h1>
        <p className="md:basis-3/5 text-gray-500 text-center md:text-left">
          {type === "Featured"
            ? "When it comes to achieving your fitness goals, protein is an absolute game-changer. That's why we've curated a selection of the finest, high-quality proteins that will supercharge your training and help you reach new heights of strength and muscle gains."
            : "Fuel your workouts with our carefully selected range of powerhouse pre-workouts that will have you smashing through plateaus and pushing beyond your limits. Get ready to unleash your inner beast with our featured pre-workouts!"}
        </p>
      </div>
      <div className="bottom grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-10 w-full place-items-center">
        {products?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
