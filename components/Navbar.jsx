"use client";
import { BsSearch } from "react-icons/bs";
import { MdPersonOutline } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { RiShoppingCartLine } from "react-icons/ri";
import Link from "next/link";
import Cart from "./Cart";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { totalQuantities, showCart, setShowCart } = useStateContext();

  return (
    <div>
      <div className="navbar h-[80px]">
        <div className="wrapper flex items-center justify-between px-10 py-4">
          <div className="left gap-5 items-center w-[30%] hidden lg:flex h-full ">
            <div>
              <Link
                className="hover:text-slate-600"
                href="/products/preworkout"
              >
                Preworkout
              </Link>
            </div>
            <div>
              <Link className="hover:text-slate-600" href="/products/protein">
                Protein
              </Link>
            </div>
            <div>
              <Link
                className="hover:text-slate-600"
                href="/products/accessories"
              >
                Accessories
              </Link>
            </div>
          </div>
          <div className="center flex justify-center font-['Kanit'] md:text-2xl text-lg min-w-[40%] h-full whitespace-nowrap text-[rgb(6,24,70)]">
            <Link href="/">Rush Supplements</Link>
          </div>
          <div className="right flex justify-end gap-5 items-center min-w-[30%] h-full">
            <div className="flex items-center gap-2">
              <div>
                <BsSearch className="hidden lg:flex cursor-pointer text-gray-600 h-5 w-5" />
              </div>
              <div>
                <MdPersonOutline className="hidden lg:flex cursor-pointer text-gray-600 h-5 w-5" />
              </div>
              <div>
                <AiOutlineHeart className="hidden lg:flex cursor-pointer text-gray-600 h-5 w-5" />
              </div>
              <div
                onClick={() => setShowCart(!showCart)}
                className="flex items-center"
              >
                <RiShoppingCartLine className=" cursor-pointer text-gray-600 h-5 w-5 relative" />
                <span
                  className=" text-sm bg-[rgb(6,24,70)] text-white
              h-5 w-5 rounded-full absolute right-[35px] top-[20px] flex items-center justify-center cursor-pointer"
                >
                  {totalQuantities}
                </span>
              </div>
            </div>
          </div>
        </div>
        {showCart && <Cart />}
      </div>
      <div className="h-[30px] lg:hidden">
        <div className="left gap-10 md:gap-20 flex items-center justify-center w-full h-full pb-4 px-10">
          <div>
            <Link
              className="hover:text-slate-600 text-sm md:text-base"
              href="/products/preworkout"
            >
              Preworkout
            </Link>
          </div>
          <div>
            <Link
              className="hover:text-slate-600 text-sm md:text-base"
              href="/products/protein"
            >
              Protein
            </Link>
          </div>
          <div>
            <Link
              className="hover:text-slate-600 text-sm"
              href="/products/accessories"
            >
              Accessories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
