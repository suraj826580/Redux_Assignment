import {
  GET_SINGLE_TODO,
  GET_TODO_SUCCESS,
  POST_TODO_SUCCESS,
  TODO_FAILURE,
  TODO_REQ,
  Toggle,
} from "./actionTypes";

export const ActionTodoReq = () => {
  return { type: TODO_REQ };
};

export const ActionTodoSuccess = (payload) => {
  return { type: GET_TODO_SUCCESS, payload };
};

export const ActionTodoFailure = () => {
  return { type: TODO_FAILURE };
};
export const PostActionTodoSuccess = (payload) => {
  return { type: POST_TODO_SUCCESS, payload };
};
export const SingleTodoAction = (payload) => {
  return { type: GET_SINGLE_TODO, payload };
};
export const ActionToggle = () => {
  return { type: Toggle };
};
