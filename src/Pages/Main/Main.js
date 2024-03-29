import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import { useDispatch } from "react-redux";
import {
  getLatestMeal,
  getPopular,
} from "../../Redux-toolkit/MealSlice/MealSlice";
import InfoIngredient from "../../Components/Info-ingredient";
import PopularInfoIngredients from "../../Components/Popular-infoIngredients";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLatestMeal());
    dispatch(getPopular());
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:idMeal/:title" element={<InfoIngredient />} />
        <Route path="/ingredient/:title" element={<PopularInfoIngredients />} />
      </Routes>
    </div>
  );
};

export default Main;
