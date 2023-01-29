import { createSlice } from '@reduxjs/toolkit';
import { HoveredCellsStateType, rootReducer } from '~/model';

const initialState: HoveredCellsStateType = {
  hoveredCells: [],
};

export const hoveredCellsSlice = createSlice({
  name: 'hoveredCells',
  initialState,
  reducers: {
    onHover: (state, { payload }) => {
      const index = state.hoveredCells.findIndex(
        ({ row, column }) => row === payload.row && column === payload.column,
      );
      if (index < 0) {
        state.hoveredCells.push(payload);
      } else {
        state.hoveredCells.splice(index, 1);
      }
    },
    resetHoveredCellsState: (state) => {
      state.hoveredCells = [];
    },
  },
});

export const { onHover, resetHoveredCellsState } = hoveredCellsSlice.actions;
export const hoveredCellsSelector = (
  state: ReturnType<typeof rootReducer>,
): HoveredCellsStateType => state.hoveredCells;
