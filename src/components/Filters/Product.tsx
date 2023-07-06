import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Tooltip, Button } from "@material-tailwind/react";
import { addToCart } from "../../redux/slices/cartSlice";
import { fetchSingleProduct } from "../../redux/slices/productsSlice";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const Product = () => {
  const { image, title, description, price, category } = useAppSelector(
    (state) => state.products.singleProduct
  );
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.products.loading);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, []);

  return (
    <div
      key={id}
      className="flex flex-col gap-10 justify-center items-center py-10 px-5 xl:flex-row"
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="grow-[2] xl:pl-44">
            <img className=" rounded-lg" src={image} alt="" />
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
            <div className="flex gap-4">
              <Tooltip content="Add to Cart" placement="bottom">
                <Button
                  color="gray"
                  size="lg"
                  variant="outlined"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: id,
                        price: Math.round(price),
                        name: title,
                        img: image,
                        amount: 1,
                        totalPrice: price,
                      })
                    )
                  }
                >
                  Add to Cart
                </Button>
              </Tooltip>
              <Tooltip content="Go back" placement="bottom">
                <Button
                  color="gray"
                  size="lg"
                  variant="outlined"
                  onClick={() => navigate(-1)}
                >
                  Go back
                </Button>
              </Tooltip>
              <Tooltip content="Go home" placement="bottom">
                <Button
                  color="gray"
                  size="lg"
                  variant="outlined"
                  onClick={() => navigate("/")}
                >
                  Go home
                </Button>
              </Tooltip>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
