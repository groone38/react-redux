import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useParams, useNavigate } from "react-router";
import FilterCard from "./FilterCard";
import { fetchProductFilter } from "../../redux/slices/productsSlice";
import Loader from "../Loader/Loader";
import { Button, Tooltip } from "@material-tailwind/react";

const Filters = () => {
  const filters = useAppSelector((state) => state.products.filtresProducts);
  const loading = useAppSelector((state) => state.products.loading);
  const dispatch = useAppDispatch();
  const { type } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchProductFilter(type as string));
  }, []);
  return (
    <div className="pt-16 px-5">
      <div className="flex items-center gap-5">
        <h1 className="text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none">
          {type}
        </h1>
        <Tooltip content="Go Back" placement="bottom">
          <Button
            color="gray"
            size="lg"
            variant="outlined"
            onClick={() => navigate(-1)}
          >
            Go Back
          </Button>
        </Tooltip>
      </div>
      {loading ? (
        <div className="flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-1 justify-center py-8 gap-12 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
          {filters.map((item) => (
            <FilterCard key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Filters;
