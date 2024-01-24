import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import { useDispatch } from "react-redux";
import { getLatestMeal } from "../../Redux-toolkit/MealSlice/MealSlice";
import InfoIngredient from "../../Components/Info-ingredient";

const Main = () => {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getLatestMeal())
  }, [])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:idMeal/:title" element={<InfoIngredient />} />
      </Routes>
    </div>
  );
};

export default Main;
