import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../reduser";

export function makeStore() {
  return configureStore({
    reducer: { counter: counterReducer },
  });
}

const store = makeStore();

export default store;
