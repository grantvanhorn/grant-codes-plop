import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer, { UserState } from './user.reducer';

interface AppState {
  user: UserState;
}

const preloadedState: AppState = {
  user: {
    token: ''
  },
};

const rootReducer = combineReducers({
  user: userReducer,
});

const store = configureStore({
  preloadedState,
  reducer: rootReducer,
});

// Used for test setup
export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
export type AppStore = ReturnType<typeof setupStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
