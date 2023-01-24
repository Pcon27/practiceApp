import {configureStore} from '@reduxjs/toolkit';
import likedSlice from './likedSlice';
import citySlice from './weatherSlice';

export default configureStore({
  reducer: {
    liked: likedSlice,
    city: citySlice,
  },
});
