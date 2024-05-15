import ReactSlider from "react-slider";
import "./Filter.style.css";
import { Fragment } from "react/jsx-runtime";

const RATINGS_MARKS = [1, 2, 3, 4, 5];

export const Filter = () => {
  return (
    <form className="form-filter">
      <h3>Фильтр</h3>
      <section className="form-filter_section">
        <p className="mb20">Цена</p>
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          defaultValue={[0, 100]}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          pearling
          minDistance={10}
        />
      </section>
      <section>
        <p className="mb20">Рейтинг</p>
        <div className="align-center">
          {RATINGS_MARKS.map((mark, index) => {
            const htmlId = `rating_mark_${mark}`;
            const markText = `${mark}${
              index !== RATINGS_MARKS.length - 1 ? "+" : ""
            }`;

            return (
              <Fragment key={mark}>
                <input
                  id={htmlId}
                  type="radio"
                  name="rating_marks"
                  value={mark}
                />
                <label htmlFor={htmlId}>{markText}</label>
              </Fragment>
            );
          })}
        </div>
      </section>
    </form>
  );
};
