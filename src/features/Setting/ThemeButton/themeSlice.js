import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: JSON.stringify(localStorage.getItem("isDarkTheme") || false),
    reducers: {
        toggleTheme: ((state) => {
            localStorage.setItem("isDarkTheme", !state);
            return !state
        })
    },
})

export const { toggleTheme } = themeSlice.actions;

export const selectIsDarkTheme = ((state) => state.theme);

export default themeSlice.reducer;
