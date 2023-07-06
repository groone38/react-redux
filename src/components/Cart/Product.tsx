import { Button } from "@material-tailwind/react";
import React from "react";
import { Cart, removeCart } from "../../redux/slices/cartSlice";
import { useAppDispatch } from "../../redux/store";

function Product({ id, img, name, price, amount, totalPrice }: Cart) {
  const dispatch = useAppDispatch();
  return (
    <div className="grid grid-cols-1 py-4 gap-6 justify-center items-center w-full">
      <div className="flex items-center justify-center">
        <img className="h-60 w-40 rounded-md" src={img} alt={name} />
      </div>
      <div className="flex flex-col items-start">
        <div className="flex items-center gap-2">
          <p className="font-bold">Name: </p>
          <h4>{name}</h4>
        </div>
        {/* <div className="flex items-center  gap-2">
          <p className="font-bold">Select size: </p>
          <p>{size}</p>
        </div> */}
        <div className="flex items-center  gap-2">
          <p className="font-bold">Select color: </p>
          {/* <div
            className="w-5 h-5 rounded-full"
            style={{ backgroundColor: color }}
          ></div> */}
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
            onClick={() =>
              dispatch(removeCart({ id, img, name, price, amount, totalPrice }))
            }
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Product;
