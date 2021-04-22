import { createStore } from "redux";
import cartReducers from "../Reducers/CartReducer,";

export const store = createStore(cartReducers);