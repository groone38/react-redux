import React, { useEffect } from "react";
import { Button } from "@material-tailwind/react";
import clothes from "../../assets/images/clothes.jpg";
import { useAppDispatch, useAppSelector } from "../../redux/store";
// import { filterProducts } from "../../redux/slices/productsSlice";
import { Link } from "react-router-dom";
import { fetchFilters, fetchProduct } from "../../redux/slices/productsSlice";

const Navigate = () => {
  const filetrs = useAppSelector((state) => state.products.filters);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFilters());
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 py-4 items-center justify-center">
        {filetrs.map((item, idx) => (
          <div key={idx} className="mr-4 text-center">
            <Link to={`/filters/${item}`}>
              <Button
                color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="hover:bg-green-300 duration-300 ease-in-out"
                // onClick={() => dispatch(filterProducts(item))}
              >
                {item}
              </Button>
            </Link>
          </div>
        ))}
        {/* {btn.map((item, idx) => (
          <div key={idx} className="mr-4">
            <Link to={`/filters/${item}`}>
              <Button
                color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="hover:bg-green-300 duration-300 ease-in-out"
                // onClick={() => dispatch(filterProducts(item))}
              >
                {item}
              </Button>
            </Link>
          </div>
        ))} */}
      </div>
      <div className="bg-green-300 p-2 w-[55%] mx-auto rounded-md tracking-normal leading-none">
        <h3 className="text-orange-900 text-center text-lg font-inter font-bold">
          SALES UP TO 50%
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
