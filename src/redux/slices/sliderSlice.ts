import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { sliderData } from "../../assets/data/data";

interface SliderState {
  value: number;
  length: number;
}

const initialState: SliderState = {
  value: 0,
  length: sliderData.length,
};

export const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    nextSlide(state, action) {
      state.value = action.payload > state.length - 1 ? 0 : action.payload;
    },
    prevSlide(state, action) {
      state.value = action.payload < 0 ? state.length - 1 : action.payload;
    },
    dotSlide(state, action) {
      state.value = action.payload;
    },
  },
});

export const { nextSlide, prevSlide, dotSlide } = sliderSlice.actions;
export const selectCount = (state: RootState) => state.slider;
export default sliderSlice.reducer;
