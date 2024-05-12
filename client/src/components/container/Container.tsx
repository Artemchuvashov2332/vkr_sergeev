import { FC } from "react";
import { IContainerProps } from "./Container.types";

export const Container: FC<IContainerProps> = ({
  maxWidth,
  maxHeight,
  minHeight,
  width,
  children,
}) => {
  return (
    <div style={{ maxHeight, maxWidth, minHeight, width }}>{children}</div>
  );
};
