import { createSlice } from '@reduxjs/toolkit';

const localStorageKey = "bglink";

const urlChecker = (url) => {
    return url && url.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi);
};

export const backgroundImgSlice = createSlice({
    name: 'background',
    initialState: localStorage.getItem(localStorageKey),
    reducers: {
        changeBackgroundImg: (state, { payload }) => {
            if (urlChecker(payload)) {
                state = payload
                localStorage.setItem(localStorageKey, payload);
                return payload
            } else return state;
        },
        resetBackground: () => {
            localStorage.removeItem(localStorageKey);
            return "";
        },
    },
})

export const { changeBackgroundImg, resetBackground } = backgroundImgSlice.actions;

export const selectorBackgroundUrl = ((state) => state.background);

export default backgroundImgSlice.reducer;
