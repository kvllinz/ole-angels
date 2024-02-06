import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  isVisible: boolean;
}

const initialState: InitialState = {
  isVisible: false,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setIsVisible: (state: InitialState, action: PayloadAction<boolean>) => {
      console.log({ action });
      state.isVisible = action.payload;
    },
  },
});

export const { setIsVisible } = commonSlice.actions;
export default commonSlice.reducer;
