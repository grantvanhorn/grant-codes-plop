import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  token: string;
}

const initialState: UserState = {
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<string>) => {
      const {
        payload,
      } = action;

      state.token = payload;
    },
  },
});

export const { loginSuccess } = userSlice.actions;

export default userSlice.reducer;
