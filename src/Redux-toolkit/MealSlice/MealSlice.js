import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../http/settings";

const initialState = {
  latest: [],
};

export const getLatestMeal = createAsyncThunk(
    "latest/getLatestMeal",
    async (_, {rejectWithValue, dispatch}) => {
        try {
            const mealNumber = [
                53075, 53074, 53073, 53072, 53071, 53070, 53069, 53068,
            ];
            const results = await Promise.all(
                mealNumber.map(async (number) => {
                    const result = await instance.get(`lookup.php?i=${number}`)
                    return result.data.meals
                  })
                
            )
            const combinedMeals = results.flat()
            dispatch(latestMeal(combinedMeals))
        } catch (error) {
            rejectWithValue(error.message)
        }
    }
)

const mealSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    latestMeal: (state, action) => {
      state.latest = action.payload;
    },
  },
});

export const { latestMeal } = mealSlice.actions;

export default mealSlice.reducer;
