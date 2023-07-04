import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Option, Select } from "@material-tailwind/react";
import { Tooltip, Button } from "@material-tailwind/react";
import { addToCart } from "../../redux/slices/cartSlice";
import { fetchSingleProduct } from "../../redux/slices/productsSlice";
import { useParams } from "react-router-dom";

const Product = () => {
  const { image, title, description } = useAppSelector(
    (state) => state.products.singleProduct
  );
  const dispatch = useAppDispatch();
  const { id } = useParams();
  // const [size, setSize] = useState<string | undefined>(
  //   singleProduct[0].size ? singleProduct[0].size[0] : ""
  // );
  // const [color, setColor] = useState<string | undefined>(
  //   singleProduct[0].color[0]
  // );
  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, []);
  return (
    <div>
      <div key={id} className="flex justify-center items-center py-10">
        <div className="pl-44 grow-[2]">
          <img className="h-[850px] rounded-lg" src={image} alt="" />
        </div>
        <div className="grow-[3]">
          <div className="max-w-lg">
            <h5 className="text-2xl font-inter font-bold tracking-normal leading-none">
              {title}
            </h5>
            <p className="text-orange-700 text-xl font-inter font-bold tracking-normal leading-none pb-4">
              15% OFF
            </p>
            <p className="text-gray-600 text-xl font-inter font-bold tracking-normal leading-none pb-4">
              {description}
            </p>
          </div>
          <Tooltip content="Add to Cart" placement="bottom">
            <Button
              color="gray"
              size="lg"
              variant="outlined"
              // onClick={() =>
              //   dispatch(
              //     addToCart({
              //       id: item.id,
              //       price: item.price,
              //       name: item.name,
              //       img: item.img,
              //       amount: 1,
              //       color: color,
              //       size: size,
              //       totalPrice: item.price,
              //     })
              //   )
              // }
            >
              Add to Cart
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Product;
