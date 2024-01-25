import React from "react";
import styles from "./Home.module.css";
import MealItem from "../../Components/Meal-item";
import List from "../../Components/List";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PopularIngredients from "../../Components/Popular-ingredients";

const Home = () => {
  const navigate = useNavigate();

  const { latest, popular } = useSelector((state) => state.products);

  const handleMealInfo = (id, title) => {
    navigate(`/meal/${id}/${title}`);
  };

  const handlePopularMeal = (title) => {
    navigate(`/ingredient/${title}`);
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
      <div className={styles.popular}>
        <h3>Popular Ingredients</h3>
        <div className={styles.popular_ingredients}>
          <List
            items={popular}
            renderItem={(elem, i) => {
              if (i < 4) {
                return (
                  <PopularIngredients
                    onClick={() => handlePopularMeal(elem.strIngredient)}
                    key={i}
                    {...elem}
                  />
                );
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
