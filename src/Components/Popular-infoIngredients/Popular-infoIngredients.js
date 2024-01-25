import React, { useEffect } from "react";
import s from "./Popular-infoIngredients.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import List from "../List";

const PopularInfoIngredients = () => {
  const dispatch = useDispatch();
  const { title } = useParams();
  const { popularInfo } = useSelector((state) => state.products);
  return (
    <div className="container">
      <div className={s.content}>
        <div className={s.title}>
          <h2>{title}</h2>
          <div className={s.content_title}>
            <img
              src={`https://www.themealdb.com/images/ingredients/${title}.png`}
              alt=""
            />
          </div>
        </div>
        <div className={s.images_title}>
            <h2>Meals</h2>
            <div className={s.images}>
                <List
                    items={popularInfo}
                    renderItem={(elem, i) => (
                        <div className={s.images_item}>
                            <div className={s.item}>
                                <img src={elem.strMealThumb} alt="" />
                            </div>
                            <p>{elem.strMeal}</p>
                        </div>
                    )}
                />
            </div>
        </div>
      </div>
      <div className={s.description}>
        <h2>Description</h2>
        <p className={s.text}>{}</p>
      </div>
    </div>
  );
};

export default PopularInfoIngredients;
