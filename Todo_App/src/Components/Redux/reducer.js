import {
  GET_SINGLE_TODO,
  GET_TODO_SUCCESS,
  POST_TODO_SUCCESS,
  TODO_FAILURE,
  TODO_REQ,
  Toggle,
} from "./actionTypes";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case TODO_REQ:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_TODO_SUCCESS:
      return {
        ...state,
        todos: payload,
        isLoading: false,
      };
    case TODO_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case POST_TODO_SUCCESS:
      return {
        ...state,
        todos: [state.todos, payload],
      };
    case GET_SINGLE_TODO:
      return { ...state, isLoading: false, SingleTodo: payload };
    case Toggle:
      return {
        ...state,
        SingleTodo: { ...state.SingleTodo, status: !state.SingleTodo.status },
      };
    default:
      return state;
  }
};
