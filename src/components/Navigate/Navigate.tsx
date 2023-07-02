import React from "react";
import { Button } from "@material-tailwind/react";
import clothes from "../../assets/images/clothes.jpg";
import { useAppDispatch } from "../../redux/store";
import { filterProducts } from "../../redux/slices/productsSlice";
import { Link } from "react-router-dom";

const Navigate = () => {
  const btn = [
    "Hoodies",
    "Dresses",
    "Suits",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="flex items-center justify-center py-8">
        {btn.map((item, idx) => (
          <div key={idx} className="mr-4">
            <Link to={`/filters/${item}`}>
              <Button
                color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="hover:bg-green-300 duration-300 ease-in-out"
                onClick={() => dispatch(filterProducts(item))}
              >
                {item}
              </Button>
            </Link>
          </div>
        ))}
      </div>
      <div className="bg-green-300 p-2 w-[55%] mx-auto rounded-md tracking-normal leading-none">
        <h3 className="text-orange-900 text-center text-lg font-inter font-bold">
          SALES UP TP 50%
        </h3>
      </div>
      <div className="flex justify-center items-center py-4">
        <img
          className="h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600"
          src={clothes}
          alt="clothes"
        />
      </div>
    </div>
  );
};

export default Navigate;
