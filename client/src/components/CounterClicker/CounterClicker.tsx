import { FC, memo, useState } from "react";
import "./CounterClicker.style.css";

const CounterClickerComponent: FC<{
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (newValue: number) => void;
}> = ({
  initialValue = 0,
  min = -Infinity,
  max = Infinity,
  step = 1,
  onChange,
}) => {
  const [value, setValue] = useState(initialValue);

  const clickHndler = (newValue: number) => {
    if (newValue < min || newValue > max) return;
    else {
      setValue(newValue);
      onChange?.(newValue);
    }
  };

  return (
    <div className="clicker-wrapper">
      <button
        className="clicker-button"
        onClick={() => clickHndler(value - step)}
      >
        -
      </button>
      <span className="clicker-value">{value}</span>
      <button
        className="clicker-button"
        onClick={() => clickHndler(value + step)}
      >
        +
      </button>
    </div>
  );
};

export const CounterClicker = memo(CounterClickerComponent);
