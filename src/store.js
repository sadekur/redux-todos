import { createStore } from "redux";
import todosReducer from "./services/reducers/todosReducer";
const store = createStore(todosReducer);
export default store;