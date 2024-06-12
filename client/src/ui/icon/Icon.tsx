import { FC, useState } from "react";
import { IIconProps } from "./Icon.types";

export const Icon: FC<IIconProps> = ({
  name,
  width,
  height,
  style,
  alt = "",
  throwDefaultIcon = true,
}) => {
  const [hasError, setHasError] = useState(false);

  const onErrorHandler = () => setHasError(true);

  console.debug({ name, hasError, throwDefaultIcon });

  if (hasError && throwDefaultIcon) {
    return (
      <img
        src={`../../assets/default_icon.svg`}
        alt={alt}
        width={width}
        height={height}
        style={style}
      />
    );
  }
  return (
    <img
      src={`../../assets/${name}_icon.svg`}
      alt={alt}
      onError={onErrorHandler}
      width={width}
      height={height}
      style={style}
    />
  );
};
