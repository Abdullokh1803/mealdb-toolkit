import React, { useEffect } from "react";
import { getInfoMeal } from "../../Redux-toolkit/MealSlice/MealSlice";
import { useParams, useNavigate } from "react-router-dom";
import List from "../List";
import { useSelector, useDispatch } from "react-redux";
import s from "./Info-ingredient.module.css";

const InfoIngredient = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {idMeal} = useParams()

  const { infoMeal } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getInfoMeal(idMeal));
  }, []);

  return (
    <div className="container">
      <List
        items={infoMeal && infoMeal}
        renderItem={(elem, i) => (
          <div key={i} className={s.infoIngredients}>
            <div className={s.title}>
              <h2>{elem.strMeal}</h2>
              <h2>Ingredients</h2>
            </div>
            <div className={s.images}>
              <div className={s.first_img}>
                <img src={elem.strMealThumb} alt="" />
                <a href={elem.strYoutube}>Watch Video Youtube</a>
              </div>
              <div className={s.second_img}>
                {elem.strIngredient1 ? (
                  <div className={s.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient1}.png`}
                      alt=""
                    />
                    <p>
                      {elem.strMeasure1} {elem.strIngredient1}
                    </p>
                  </div>
                ) : null}
                
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default InfoIngredient;
