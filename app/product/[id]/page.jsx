"use client";
import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaBalanceScale } from "react-icons/fa";
import { client, urlFor } from "../../../lib/client";
import { useParams } from "next/navigation";
import { useStateContext } from "../../../context/StateContext";

const Product = () => {
  const params = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [product, setProduct] = useState(null);
  const { decQty, incQty, qty, onAdd } = useStateContext();

  useEffect(() => {
    client
      .fetch(`*[_type == "product" && slug.current == '${params.id}'][0]`)
      .then((data) => setProduct(data))
      .catch(console.error);
  }, []);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product py-[20px] px-[50px] flex md:flex-row flex-col gap-[10px] md:gap-[50px]">
      <div className="left flex gap-[20px] basis-3/6">
        <div className="images basis-1/5">
          <img
            className="w-[100%] h-[150px] object-contain cursor-pointer md:mb-[10px]"
            src={urlFor(product?.image[0])}
            alt=""
            onClick={(e) => setSelectedImage(0)}
          />
          <img
            className="w-[100%] h-[150px] object-contain cursor-pointer"
            src={urlFor(product?.backimage[0])}
            alt=""
            onClick={(e) => setSelectedImage(1)}
          />
        </div>
        <div className="mainImg basis-4/5">
          <img
            className="w-[100%] max-h-[800px] object-contain cursor-pointer"
            src={
              selectedImage === 0
                ? urlFor(product?.image[0])
                : urlFor(product?.backimage[0])
            }
            alt=""
          />
        </div>
      </div>
      <div className="right flex flex-col gap-[15px] md:gap-[30px] basis-3/6 items-center md:items-baseline">
        <h1 className="font-bold text-xl md:text-3xl text-center md:text-left">
          {product?.name}
        </h1>
        <span className="text-[30px] font-semibold">${product?.price}</span>
        <p className="md:text-[22px] text-[16px] text-justify md:pr-40 md:leading-8">
          {product?.details}
        </p>
        <div className="quantity flex items-center gap-[10px]">
          <button
            className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer border-none bg-slate-200 hover:bg-slate-300 ease-in-out duration-200 mr-2"
            onClick={decQty}
          >
            -
          </button>
          {qty}
          <button
            className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer border-none bg-slate-200 hover:bg-slate-300 ease-in-out duration-200 ml-2"
            onClick={incQty}
          >
            +
          </button>
        </div>
        <div className="add flex flex-col gap-[20px] items-center md:items-baseline">
          <button
            onClick={() => onAdd(product, qty)}
            className="text-white p-[10px] w-[250px] flex items-center justify-center gap-[20px] cursor-pointer border-none font-semibold rounded ease-in-out duration-300 hover:bg-[#223e85]"
          >
            <RiShoppingCartLine /> Add to Cart
          </button>
          <div className="links flex gap-[20px]">
            <div className="item flex items-center gap-[10px] text-[rgb(6,24,70)] text-xs md:text-base mt-2 md:mt-0">
              <AiOutlineHeart /> Add to Wishlist
            </div>
            <div className="item flex items-center gap-[10px] text-[rgb(6,24,70)] text-xs md:text-base mt-2 md:mt-0">
              <FaBalanceScale /> Add to Compare
            </div>
          </div>
          <div className="details flex flex-col gap-[10px] text-[16px] text-gray-500 mt-[30px]">
            <span>Description</span>
            <hr className="w-[200px]" />
            <span>Additional Information</span>
            <hr className="w-[200px]" />
            <span>FAQ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
