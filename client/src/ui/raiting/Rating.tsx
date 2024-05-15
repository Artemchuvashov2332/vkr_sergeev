import { FC } from "react";
import { Icon } from "..";
import "./Rating.style.css"

export const Rating: FC<{
  marks: number[];
  sortBy?: "ascending" | "descending";
}> = ({ marks, sortBy = "descending" }) => {
  const sortMethod = {
    ascending: (a: number, b: number) => a - b,
    descending: (a: number, b: number) => b - a,
  };

  const sortedMarks = marks.sort(sortMethod[sortBy]);

  const maxMark = Math.max(...marks);

  return (
    <div>
      {sortedMarks.map((mark) => {
        const htmlId = `rating_mark_${mark}`;

        // TODO сделать компонент кастомного чекбокса/радио
        return (
          <label className="radio-container" htmlFor={htmlId}>
            <input
              id={htmlId}
              type="radio"
              name="rating_marks"
              value={mark}
              className="radio-input"
              style={{ marginRight: 10 }}
            />
            <span className="radio-checkmark"></span>
            {Array.from({ length: maxMark }).map((_, index) => {
              return (
                <Icon
                  key={index}
                  name={index + 1 <= mark ? "good_star" : "empty_start"}
                  height={22}
                  width={22}
                  style={{ marginRight: 5 }}
                />
              );
            })}
          </label>
        );
      })}
    </div>
  );
};
