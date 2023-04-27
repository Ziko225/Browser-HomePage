import { configureStore } from '@reduxjs/toolkit';
import themeSliceReducer from './features/Setting/ThemeButton/themeSlice';
import backgroundImgReducer from './features/Setting/backgroundImgSlice';

export default configureStore({
  reducer: {
    theme: themeSliceReducer,
    background: backgroundImgReducer,
  },
})