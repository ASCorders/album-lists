import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  albums: [],
  favorites: [],
  activePage: 1,
  endResult: false,
};

export const albumSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    setFavorite(state, action) {
      state.favorites = [
        ...state.favorites,
        { ...action.payload, isFav: true },
      ];
    },
    removeFavorites(state, { payload }) {
      const data = state.favorites.filter((item) => item.id != payload);
      state.favorites = data;
    },
    setAlbumsStore(state, { payload }) {
      if (payload.length === 0) {
        state.endResult = true;
      }
      state.albums = [...state.albums, ...payload];
    },
    setActivePage(state, { payload }) {
      state.activePage = payload;
    },
  },
});

export const { setFavorite, removeFavorites, setAlbumsStore, setActivePage } =
  albumSlice.actions;
export default albumSlice.reducer;
