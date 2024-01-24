import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../http/settings";

const initialState = {
  latest: [],
  infoMeal: [],
  popular: [],
  randomIngredient: [],
};

export const getLatestMeal = createAsyncThunk(
  "latest/getLatestMeal",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const mealNumber = [
        53075, 53074, 53073, 53072, 53071, 53070, 53069, 53068,
      ];
      const results = await Promise.all(
        mealNumber.map(async (number) => {
          const result = await instance.get(`lookup.php?i=${number}`);
          return result.data.meals;
        })
      );
      const combinedMeals = results.flat();
      dispatch(latestMeal(combinedMeals));
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const getInfoMeal = createAsyncThunk(
  "infoMeal/getInfoMeal",
  async (elem, { rejectWithValue, dispatch }) => {
    const result = await instance.get(`lookup.php?i=${elem}`);
    dispatch(infoIngredients(result.data.meals));
  }
);

export const getPopular = createAsyncThunk(
  "popular/getPopular",
  async (_, { rejectWithValue, dispatch }) => {
    const result = await instance.get(`list.php?i=list`);
    dispatch(popularMeal(result.data.meals));
    dispatch(getRandomIngredients(result.data.meals))
  }
);

const mealSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    latestMeal: (state, action) => {
      state.latest = action.payload;
    },
    infoIngredients: (state, action) => {
      state.infoMeal = action.payload;
    },
    popularMeal: (state, action) => {
      state.popular = action.payload;
    },
    getRandomIngredients: (state, action) => {
      state.randomIngredient = action.payload;
    },
  },
});

export const {
  latestMeal,
  infoIngredients,
  popularMeal,
  getRandomIngredients,
} = mealSlice.actions;

export default mealSlice.reducer;
