import { combineReducers } from 'redux';
import { applicationModeService } from '~/model/services';
import { currentApplicationSlice, hoveredCellsSlice } from '~/model/slices';

export const rootReducer = combineReducers({
  [applicationModeService.reducerPath]: applicationModeService.reducer,
  [currentApplicationSlice.name]: currentApplicationSlice.reducer,
  [hoveredCellsSlice.name]: hoveredCellsSlice.reducer,
});
