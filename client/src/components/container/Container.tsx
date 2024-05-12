import { FC } from "react";
import { IContainerProps } from "./Container.types";

export const Container: FC<IContainerProps> = ({
  maxWidth,
  maxHeight,
  minHeight,
  width,
  children,
  ...rest
}) => {
  return (
    <div style={{ maxHeight, maxWidth, minHeight, width, ...rest }}>
      {children}
    </div>
  );
};
