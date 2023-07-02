import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { dotSlide, nextSlide, prevSlide } from "../../redux/slices/sliderSlice";
import { sliderData } from "../../assets/data/data";

const Slider = () => {
  const slideIndex = useAppSelector((state) => state.slider.value);
  const dispatch = useAppDispatch();

  return (
    <div className="relative pb-4">
      <div>
        {sliderData.map((item, idx) => (
          <div
            key={item.id}
            className={
              parseInt(item.id) === slideIndex
                ? "opacity-100 duration-700 ease-in-out scale-100"
                : "opacity-0 duration-700 ease-in-out scale-95"
            }
          >
            <div>
              {parseInt(item.id) === slideIndex && (
                <img className="h-[850px] w-full" src={item.img} alt="shoes" />
              )}
            </div>
            <div className="absolute top-44 mx-auto inset-x-1/4">
              <p className="text-white text-4xl font-inter font-bold tracking-normal leading-normal">
                {parseInt(item.id) === slideIndex && item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex absolute bottom-12 left-[45%]">
        {sliderData.map((dot, idx) => (
          <div className="mr-4" key={idx}>
            <div
              className={
                idx === slideIndex
                  ? "bg-green-300 rounded-full p-4 cursor-pointer"
                  : "bg-white rounded-full p-4 cursor-pointer"
              }
              onClick={() => dispatch(dotSlide(idx))}
            ></div>
          </div>
        ))}
      </div>
      <div>
        <button
          className="absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-green-300"
          onClick={() => dispatch(nextSlide(slideIndex + 1))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
        <button
          className="absolute top-[50%] left-4 bg-white rounded-full p-2 hover:bg-green-300"
          onClick={() => dispatch(prevSlide(slideIndex - 1))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
