import { FC } from "react";
import { ButtonProps } from "./Button.types";
import { getClass } from "../../utils";

export const Button: FC<ButtonProps> = ({
  modifier = "green",
  children,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={getClass("button", modifier)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
