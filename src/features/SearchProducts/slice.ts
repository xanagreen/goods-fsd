import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type SearchState = {
  search: string;
};

const initialState: SearchState = {
  search: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
