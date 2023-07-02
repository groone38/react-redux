import React from "react";
import { useAppSelector } from "../../redux/store";
import { useParams } from "react-router";
import FilterCard from "./FilterCard";

const Filters = () => {
  const filters = useAppSelector((state) => state.products.filters);
  const { type } = useParams();
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
            <FilterCard
              key={item.id}
              id={item.id}
              colors={item.color}
              img={item.img}
              name={item.name}
              price={item.price}
              text={item.text}
              type={item.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
