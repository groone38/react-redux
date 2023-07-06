import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import Cart from "../Cart/Cart";
import { useAppSelector } from "../../redux/store";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const { totalAmount } = useAppSelector((state) => state.cart);

  return (
    <>
      <div className="bg-black p-2 w-full">
        <h3 className="text-white font-inter text-xl font-bold tracking-normal leading-none text-center">
          Welcome All
        </h3>
      </div>
      <div className="flex justify-around items-center">
        <div>
          <img src={logo} alt="store" className="h-28 w-full" />
        </div>
        <div className="flex flex-row items-center">
          <div
            className="flex flex-row items-center cursor-pointer"
            onClick={handleOpen}
          >
            {totalAmount > 0 ? (
              <span className="rounded-full bg-gray-300 px-2 font-inter text-sm mr-1">
                {totalAmount}
              </span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#000"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            )}
            <p className="font-inter  font-medium tracking-normal leading-none text-center">
              Shopping bag
            </p>
            <div>{open && <Cart openModal={open} setOpen={setOpen} />}</div>
          </div>
        </div>
      </div>
      <div className="bg-black p-4 w-full flex justify-around">
        <div className="text-white font-inter  font-medium tracking-normal leading-none text-center">
          <p>50% OFF</p>
        </div>
        <div className="text-white font-inter  font-medium tracking-normal leading-none text-center">
          <p>Free shipping and returns</p>
        </div>
        <div className="text-white font-inter  font-medium tracking-normal leading-none text-center">
          <p>Diffent payment methods</p>
        </div>
      </div>
    </>
  );
};

export default NavBar;
