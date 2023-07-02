import React from "react";
import { useAppSelector } from "../../redux/store";

type Props = {};

const Product = (props: Props) => {
  const singleProduct = useAppSelector((state) => state.products.singleProduct);
  console.log(singleProduct);
  return (
    <div>
      {singleProduct.map((item) => (
        <div key={item.id} className="flex justify-center items-center py-10">
          <div className="pl-44 grow-[2]">
            <img className="h-[850px] rounded-lg" src={item.img} alt="" />
          </div>
          <div className="grow-[3]">
            <div className="max-w-lg">
              <h5 className="text-2xl font-inter font-bold tracking-normal leading-none">
                {item.name}
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
