import { DoubleThumblerSlider, Rating } from "../../ui";
import "./Filter.style.css";

const RATINGS_MARKS = [5, 4, 3, 2, 1];
const SLIDER_LIMITS = {
  min: 0,
  max: 100,
};

export const Filter = () => {
  return (
    <form className="form-filter">
      <h3 className="filter-title">Фильтр</h3>
      <section className="form-filter__section">
        <h5 className="form-filter__section-title">Цена</h5>
        <div className="form-filter__section-content">
          <DoubleThumblerSlider limits={SLIDER_LIMITS} units="руб." />
        </div>
      </section>
      <section>
        <h5 className="form-filter__section-title">Рейтинг</h5>
        <div className="form-filter__section-content">
          <Rating marks={RATINGS_MARKS} />
        </div>
      </section>
    </form>
  );
};
