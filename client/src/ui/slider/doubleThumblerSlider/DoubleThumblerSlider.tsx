import { FC } from "react";
import ReactSlider from "react-slider";
import { IDoubleThumblerSliderProps } from "./DoubleThumblerSlider.types";
import "./DoubleThumblerSlider.style.css";

export const DoubleThumblerSlider: FC<IDoubleThumblerSliderProps> = ({
  limits,
  units = "",
  values = [limits.min, limits.max],
  onChange,
}) => {
  const { min, max } = limits;

  const onChangeHandler = (newValues: number[]) => {
    onChange({
      min: newValues[0],
      max: newValues[1],
    });
  };

  return (
    <div className="slider-wrapper">
      <span className="slider-limit-label slider-limit-label__left">
        {`${values[0]} ${units}`}
      </span>
      <span className="slider-limit-label slider-limit-label__right">
        {`${values[1]} ${units}`}
      </span>
      <ReactSlider
        key="slider"
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        min={min}
        max={max}
        value={values}
        ariaLabel={["Lower thumb", "Upper thumb"]}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        renderThumb={(props) => <div {...props} key={props.key}></div>}
        pearling
        step={10}
        minDistance={10}
        onChange={onChangeHandler}
      />
    </div>
  );
};
