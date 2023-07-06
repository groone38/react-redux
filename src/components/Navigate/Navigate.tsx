import React, { useEffect } from "react";
import { Button } from "@material-tailwind/react";
import clothes from "../../assets/images/clothes.jpg";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Link } from "react-router-dom";
import { fetchFilters } from "../../redux/slices/productsSlice";
import Loader from "../Loader/Loader";

const Navigate = () => {
  const filters = useAppSelector((state) => state.products.filters);
  const loading = useAppSelector((state) => state.products.loading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFilters());
  }, []);
  return (
    <div>
      {loading && (
        <div className="flex items-center justify-center">
          <Loader />
        </div>
      )}
      <div className="grid gap-4 py-4 items-center justify-center lg:grid-cols-4 md:grid-cols-3">
        {filters.map((item, idx) => (
          <div key={idx} className="text-center md:mr-4">
            <Link to={`/filters/${item}`}>
              <Button
                color="gray"
                variant="outlined"
                ripple={true}
                className="hover:bg-green-300 duration-300 text-sm ease-in-out "
              >
                {item}
              </Button>
            </Link>
          </div>
        ))}
      </div>
      <div className="bg-green-300 p-2 w-[55%] mx-auto rounded-md tracking-normal leading-none">
        <h3 className="text-orange-900 text-center font-inter font-bold lg:text-lg sm:text-base">
          SALES UP TO 50%
        </h3>
      </div>
      <div className="flex justify-center items-center p-4">
        <img
          className="h-full w-full rounded-md shadow-lg shadow-gray-600"
          src={clothes}
          alt="clothes"
        />
      </div>
    </div>
  );
};

export default Navigate;
