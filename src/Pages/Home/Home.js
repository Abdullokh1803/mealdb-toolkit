import React from "react";
import styles from "./Home.module.css";
import MealItem from "../../Components/Meal-item";
import List from "../../Components/List";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const { latest } = useSelector((state) => state.products);

  const handleMealInfo = (id, title) => {
    navigate(`/meal/${id}/${title}`);
  };

  return (
    <div className="container">
      <form className={styles.home_search}>
        <input type="text" />
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>

      <div className={styles.meal_item}>
        <h3>Latest Meals</h3>
        <div className={styles.meal_item_content}>
          <List
            items={latest && latest}
            renderItem={(elem, i) => (
              <MealItem
                key={i}
                {...elem}
                onClick={() => handleMealInfo(elem.idMeal, elem.strMeal)}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
