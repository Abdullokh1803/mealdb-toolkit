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
                {elem.strIngredient2 ? (
                  <div className={s.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient2}.png`}
                      alt=""
                    />
                    <p>
                      {elem.strMeasure2} {elem.strIngredient2}
                    </p>
                  </div>
                ) : null}
                {elem.strIngredient3? (
                  <div className={s.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient3}.png`}
                      alt=""
                    />
                    <p>
                      {elem.strMeasure3} {elem.strIngredient3}
                    </p>
                  </div>
                ) : null}
                {elem.strIngredient4 ? (
                  <div className={s.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient4}.png`}
                      alt=""
                    />
                    <p>
                      {elem.strMeasure4} {elem.strIngredient4}
                    </p>
                  </div>
                ) : null}
                {elem.strIngredient5 ? (
                  <div className={s.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient5}.png`}
                      alt=""
                    />
                    <p>
                      {elem.strMeasure5} {elem.strIngredient5}
                    </p>
                  </div>
                ) : null}
                {elem.strIngredient6 ? (
                  <div className={s.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient6}.png`}
                      alt=""
                    />
                    <p>
                      {elem.strMeasure6} {elem.strIngredient6}
                    </p>
                  </div>
                ) : null}
                {elem.strIngredient7? (
                  <div className={s.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient7}.png`}
                      alt=""
                    />
                    <p>
                      {elem.strMeasure7} {elem.strIngredient7}
                    </p>
                  </div>
                ) : null}
                {elem.strIngredient8 ? (
                  <div className={s.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient8}.png`}
                      alt=""
                    />
                    <p>
                      {elem.strMeasure8} {elem.strIngredient8}
                    </p>
                  </div>
                ) : null}
                {elem.strIngredient9 ? (
                  <div className={s.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient9}.png`}
                      alt=""
                    />
                    <p>
                      {elem.strMeasure9} {elem.strIngredient9}
                    </p>
                  </div>
                ) : null}
                {elem.strIngredient10 ? (
                  <div className={s.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient10}.png`}
                      alt=""
                    />
                    <p>
                      {elem.strMeasure10} {elem.strIngredient10}
                    </p>
                  </div>
                ) : null}
                {elem.strIngredient11? (
                  <div className={s.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient11}.png`}
                      alt=""
                    />
                    <p>
                      {elem.strMeasure11} {elem.strIngredient11}
                    </p>
                  </div>
                ) : null}
                {elem.strIngredient12 ? (
                  <div className={s.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient12}.png`}
                      alt=""
                    />
                    <p>
                      {elem.strMeasure12} {elem.strIngredient12}
                    </p>
                  </div>
                ) : null}
                {elem.strIngredient13 ? (
                  <div className={s.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient13}.png`}
                      alt=""
                    />
                    <p>
                      {elem.strMeasure13} {elem.strIngredient13}
                    </p>
                  </div>
                ) : null}
                {elem.strIngredient14 ? (
                  <div className={s.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient14}.png`}
                      alt=""
                    />
                    <p>
                      {elem.strMeasure14} {elem.strIngredient14}
                    </p>
                  </div>
                ) : null}
                {elem.strIngredient15? (
                  <div className={s.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient15}.png`}
                      alt=""
                    />
                    <p>
                      {elem.strMeasure15} {elem.strIngredient15}
                    </p>
                  </div>
                ) : null}
                {elem.strIngredient16 ? (
                  <div className={s.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient16}.png`}
                      alt=""
                    />
                    <p>
                      {elem.strMeasure16} {elem.strIngredient16}
                    </p>
                  </div>
                ) : null}
                {elem.strIngredient17 ? (
                  <div className={s.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient17}.png`}
                      alt=""
                    />
                    <p>
                      {elem.strMeasure17} {elem.strIngredient17}
                    </p>
                  </div>
                ) : null}
                {elem.strIngredient18 ? (
                  <div className={s.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient18}.png`}
                      alt=""
                    />
                    <p>
                      {elem.strMeasure18} {elem.strIngredient18}
                    </p>
                  </div>
                ) : null}
                {elem.strIngredient19? (
                  <div className={s.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient19}.png`}
                      alt=""
                    />
                    <p>
                      {elem.strMeasure19} {elem.strIngredient19}
                    </p>
                  </div>
                ) : null}
                {elem.strIngredient20 ? (
                  <div className={s.second_item}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient20}.png`}
                      alt=""
                    />
                    <p>
                      {elem.strMeasure20} {elem.strIngredient20}
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
            <div className={s.instructions}>
              <h3>Instruction</h3>
              <p>{elem.strInstructions}</p>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default InfoIngredient;
