import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

const intialState = {
  todos: [],
  isLoading: false,
  isError: false,
  SingleTodo: {},
};
export const store = legacy_createStore(reducer, intialState);
