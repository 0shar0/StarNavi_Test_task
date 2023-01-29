import { combineReducers } from 'redux';
import { applicationModeService } from '~/model/services';
import { currentApplicationSlice } from '~/model/slices';

export const rootReducer = combineReducers({
  [applicationModeService.reducerPath]: applicationModeService.reducer,
  [currentApplicationSlice.name]: currentApplicationSlice.reducer,
});
