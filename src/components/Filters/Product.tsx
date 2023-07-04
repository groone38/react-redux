import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Option, Select } from "@material-tailwind/react";
import { Tooltip, Button } from "@material-tailwind/react";
import { addToCart } from "../../redux/slices/cartSlice";
import { fetchProduct } from "../../redux/slices/productsSlice";

const Product = () => {
  const singleProduct = useAppSelector((state) => state.products.singleProduct);
  const dispatch = useAppDispatch();
  const [size, setSize] = useState<string | undefined>(
    singleProduct[0].size ? singleProduct[0].size[0] : ""
  );
  const [color, setColor] = useState<string | undefined>(
    singleProduct[0].color[0]
  );

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

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
              <p className="text-orange-700 text-xl font-inter font-bold tracking-normal leading-none pb-4">
                15% OFF
              </p>
              <p className="text-gray-600 text-xl font-inter font-bold tracking-normal leading-none pb-4">
                {item.text}
              </p>
              {item.size && (
                <div className="pb-4">
                  <Select
                    label="Pick a size"
                    id="size"
                    name="size"
                    onChange={(e: string | undefined) => setSize(e)}
                    value={
                      singleProduct[0].size ? singleProduct[0].size[0] : ""
                    }
                  >
                    {item.size?.map((item, idx) => (
                      <Option key={idx} value={item}>
                        {item}
                      </Option>
                    ))}
                  </Select>
                </div>
              )}
              {item.color && (
                <div className="pb-4">
                  <Select
                    label="Pick a color"
                    id="color"
                    name="color"
                    onChange={(e: string | undefined) => setColor(e)}
                    value={item.color[0]}
                  >
                    {item.color?.map((item, idx) => (
                      <Option key={idx} value={item}>
                        {item}
                      </Option>
                    ))}
                  </Select>
                </div>
              )}
            </div>
            <Tooltip content="Add to Cart" placement="bottom">
              <Button
                color="gray"
                size="lg"
                variant="outlined"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: item.id,
                      price: item.price,
                      name: item.name,
                      img: item.img,
                      amount: 1,
                      color: color,
                      size: size,
                      totalPrice: item.price,
                    })
                  )
                }
              >
                Add to Cart
              </Button>
            </Tooltip>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
