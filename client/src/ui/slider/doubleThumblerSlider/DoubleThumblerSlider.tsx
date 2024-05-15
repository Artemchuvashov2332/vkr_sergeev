import { FC, useState } from "react";
import ReactSlider from "react-slider";
import { IDoubleThumblerSliderProps } from "./DoubleThumblerSlider.types";
import "./DoubleThumblerSlider.style.css"

export const DoubleThumblerSlider: FC<IDoubleThumblerSliderProps> = ({
  limits,
  units = "",
}) => {
  const initialLimits = [limits.min, limits.max];
  const [sliderLimits, setSliderLimits] = useState(initialLimits);

  const onChangeHandler = (newValues: number[], indexThumd: number) => {
    setSliderLimits((state) => {
        const copyState = [...state];
        copyState[indexThumd] = newValues[indexThumd];
        return copyState;
      });
  }

  return (
    <div className="slider-wrapper">
      <span className="slider-limit-label slider-limit-label__left">
        {`${sliderLimits[0]} ${units}`}
      </span>
      <span className="slider-limit-label slider-limit-label__right">
        {`${sliderLimits[1]} ${units}`}
      </span>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue={initialLimits}
        ariaLabel={["Lower thumb", "Upper thumb"]}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        renderThumb={(props) => <div {...props}></div>}
        pearling
        minDistance={10}
        onChange={onChangeHandler}
      />
    </div>
  );
};
