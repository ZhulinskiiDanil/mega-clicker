'use client';
import { Provider } from "react-redux";
import { store } from "./store";

// Types
import { PropsWithChildren } from "react";

export function WithProviders({ children }: PropsWithChildren) {
  return <Provider store={store}>
    { children }
  </Provider>
}