import { settingsReducer } from "./slices/settingsSlice";
import { counterReducer } from "./slices/counterSlice";
import { itemsReducer } from "./slices/itemsSlice";

export const rootReducer = {
  settings: settingsReducer,
  counter: counterReducer,
  items: itemsReducer,
}

export * from './slices/settingsSlice'
export * from './slices/counterSlice'
export * from './slices/itemsSlice'