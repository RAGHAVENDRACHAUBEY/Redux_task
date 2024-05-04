import { createStore } from "redux";
import dataReducer from "./Component/reducer";

const store = createStore(dataReducer);

export default store;
