import { counterReducer } from "./slices/counterSlice";
import { itemsReducer } from "./slices/itemsSlice";

export const rootReducer = {
  counter: counterReducer,
  items: itemsReducer
}

export * from './slices/counterSlice'
export * from './slices/itemsSlice'