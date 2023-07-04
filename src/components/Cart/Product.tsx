import { Button } from "@material-tailwind/react";
import React from "react";
import { Cart } from "../../redux/slices/cartSlice";

function Product({
  id,
  img,
  name,
  size,
  color,
  price,
  amount,
  totalPrice,
}: Cart) {
  return (
    <div className="grid grid-cols-2 py-4 justify-between w-full">
      <div className="flex gap-6">
        <img className="h-60 w-40 rounded-md" src={img} alt={name} />
      </div>
      <div className="flex flex-col items-start">
        <div className="flex items-center gap-2">
          <p className="font-bold">Name: </p>
          <h4>{name}</h4>
        </div>
        <div className="flex items-center  gap-2">
          <p className="font-bold">Select size: </p>
          <p>{size}</p>
        </div>
        <div className="flex items-center  gap-2">
          <p className="font-bold">Select color: </p>
          <div
            className="w-5 h-5 rounded-full"
            style={{ backgroundColor: color }}
          ></div>
        </div>
        <div className="flex items-center  gap-2">
          <p className="font-bold">Price: </p>
          <p>{price}</p>
        </div>
        <div className="flex items-center  gap-2">
          <p className="font-bold">Amount: </p>
          <p>{amount}</p>
        </div>
        <div className="flex items-center  gap-2">
          <p className="font-bold">Total price: </p>
          <p>{totalPrice}</p>
        </div>
        <div>
          <Button
            color="gray"
            size="md"
            variant="outlined"
            ripple={true}
            className="hover:bg-red-200 duration-300 ease-in-out hover:text-white"
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Product;
