"use client";
import { useRef } from "react";
import { AiOutlineDelete, AiOutlineShoppingCart } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import Link from "next/link";
import { getStripe } from "../lib/getStripe";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    showCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch(
      "https://e-commerce-rush-api.onrender.com/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItems),
      }
    );

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div
      className=" w-[100vw] fixed top-0 right-0 z-30 ease-in duration-300 bg-neutral-700 bg-opacity-50"
      ref={cartRef}
      onClick={() => setShowCart(false)}
    >
      <div
        className="relative float-right flex flex-col items-center justify-between w-[250px] md:w-[600px] h-[100vh] ease-in duration-300 z-50 bg-white py-2 px-10"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="mb-[20px] text-sm md:text-[24px] font-semibold text-center md:text-left">
          Products in your cart{" "}
          <span className="text-red-500">
            ({totalQuantities} {totalQuantities === 1 ? "item" : "items"})
          </span>
        </h1>
        {cartItems.length < 1 && (
          <div className="flex flex-col items-center w-[200px] md:w-full">
            <AiOutlineShoppingCart className="text-[100px]" />
            <h3>Your shopping cart is empty</h3>
            <Link href="/">
              <button
                onClick={() => setShowCart(false)}
                className="text-white p-[10px] w-[200px] md:w-[250px] flex items-center justify-center gap-[20px] cursor-pointer border-none font-semibold rounded mt-[10px] hover:bg-[#223e85] ease-in-out duration-300 text-sm md:text-base"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
        <div className=" overflow-auto max-h-[70vh] px-4">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div
                key={item?._id}
                className="flex md:flex-row flex-col mb-10 md:gap-[30px] gap-2 items-center md:items-stretch"
              >
                <img
                  className="w-[35%] h-[35%] md:w-[25%] md:h-[25%]"
                  src={urlFor(item?.image[0])}
                  alt="cart image"
                />
                <div className="flex flex-col justify-between w-full">
                  <div className="flex flex-col">
                    <div>
                      <p className="md:text-md text-sm font-semibold text-center md:text-left">
                        {item?.name}
                      </p>
                    </div>
                    <div>
                      <p className="md:text-xl text-base font-semibold text-center md:text-left">
                        ${item?.price * item?.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between gap-2 md:gap-0">
                    <div className="quantity flex items-center md:gap-[10px]">
                      <button
                        className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer border-none bg-slate-200 hover:bg-slate-300 ease-in-out duration-200 rounded-full mr-2"
                        onClick={() => toggleCartItemQuantity(item?._id, "dec")}
                      >
                        -
                      </button>
                      {item?.quantity}
                      <button
                        className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer border-none bg-slate-200 hover:bg-slate-300 ease-in-out duration-200 rounded-full ml-2"
                        onClick={() => toggleCartItemQuantity(item?._id, "inc")}
                      >
                        +
                      </button>
                    </div>
                    <button onClick={() => onRemove(item)} className="bg-white">
                      <AiOutlineDelete className=" text-red-500 text-2xl hover:text-red-800 ease-in-out duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="flex flex-col items-center justify-center">
            <div className="h-0.5 w-[200px] md:w-[250px] bg-slate-200 mb-4"></div>
            <div className="total flex justify-between font-semibold text-[18px] mb-[20px] gap-2 md:gap-20">
              <p className="font-bold text-base md:text-lg">Your Subtotal: </p>
              <p className="font-bold text-base md:text-lg">${totalPrice}</p>
            </div>
          </div>
        )}
        {cartItems.length >= 1 && (
          <button
            onClick={handleCheckout}
            className="text-white p-[10px] md:w-[250px] flex items-center justify-center gap-[20px] cursor-pointer border-none font-semibold rounded mb-[30px] hover:bg-[#223e85] ease-in-out duration-300 w-[200px] text-sm md:text-base"
          >
            Proceed to Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
