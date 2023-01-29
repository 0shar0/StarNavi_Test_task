import { createSlice } from '@reduxjs/toolkit';
import { ApplicationBoard } from '~/utils';
import { CurrentApplicationState, rootReducer } from '~/model';

const initialState: CurrentApplicationState = {
  currentApplication: null,
};
export const currentApplicationSlice = createSlice({
  name: 'currentApplication',
  initialState,
  reducers: {
    initApplication: (state, { payload }) => {
      state.currentApplication = new ApplicationBoard(payload);
    },
    updateApplication: (state, { payload }) => {
      state.currentApplication = { ...payload };
    },
  },
});

export const { initApplication, updateApplication } = currentApplicationSlice.actions;
export const currentApplicationSelector = (
  state: ReturnType<typeof rootReducer>,
): CurrentApplicationState => state.currentApplication;
