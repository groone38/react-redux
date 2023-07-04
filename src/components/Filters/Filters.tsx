import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useParams } from "react-router";
import FilterCard from "./FilterCard";
import { fetchProductFilter } from "../../redux/slices/productsSlice";

const Filters = () => {
  const filters = useAppSelector((state) => state.products.filtresProducts);
  const dispatch = useAppDispatch();
  const { type } = useParams();
  useEffect(() => {
    dispatch(fetchProductFilter(type as string));
  }, []);
  return (
    <div>
      <div className="pt-16">
        <div className="pl-16">
          <h1 className="text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none">
            {type}
          </h1>
        </div>
        <div className="grid grid-cols-4 justify-center py-8 gap-12">
          {filters.map((item) => (
            <FilterCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
