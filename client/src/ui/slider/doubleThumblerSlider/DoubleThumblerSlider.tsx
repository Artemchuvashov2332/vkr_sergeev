import { FC, useEffect, useState } from "react";
import ReactSlider from "react-slider";
import { IDoubleThumblerSliderProps } from "./DoubleThumblerSlider.types";
import "./DoubleThumblerSlider.style.css";

//TODO должен быть контролируемым
export const DoubleThumblerSlider: FC<IDoubleThumblerSliderProps> = ({
  limits,
  units = "",
  onChange
}) => {
  const { min, max } = limits;
  const [sliderLimits, setSliderLimits] = useState([min, max]);

  const onChangeHandler = (newValues: number[]) => {
    setSliderLimits(newValues)
    onChange({
      min: newValues[0],
      max: newValues[1]
    })
  };

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
        min={min}
        max={max}
        value={sliderLimits}
        ariaLabel={["Lower thumb", "Upper thumb"]}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        renderThumb={(props) => <div {...props}></div>}
        pearling
        step={10}
        minDistance={10}
        onChange={onChangeHandler}
      />
    </div>
  );
};
