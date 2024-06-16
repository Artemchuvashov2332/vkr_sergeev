import { FC } from "react";
import { Icon } from "../icon";

export const RatingStars: FC<{ count: number; rating: number }> = ({
  count,
  rating,
}) => {
  return (
    <div>
      {Array.from({ length: count }).map((_, index) => {
        return (
          <Icon
            key={index}
            name={index + 1 <= rating ? "good_star" : "empty_start"}
            height={22}
            width={22}
            style={{ marginRight: 5 }}
          />
        );
      })}
    </div>
  );
};
