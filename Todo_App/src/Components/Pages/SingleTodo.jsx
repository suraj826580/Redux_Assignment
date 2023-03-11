import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ActionToggle, SingleTodoAction } from "../Redux/action";

const url = "http://localhost:8081/todos/";
export default function SingleTodo() {
  const { SingleTodo } = useSelector((store) => {
    return store;
  });
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleTodofun = () => {
    axios
      .get(`${url}${id}`)
      .then((res) => {
        dispatch(SingleTodoAction(res.data));
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => singleTodofun(), []);

  const handleToggle = () => {
    dispatch(ActionToggle());
  };

  return (
    <div>
      <h1>{SingleTodo.title}</h1>
      <h1>{SingleTodo.status ? "Completed" : "Pending"}</h1>
      <button onClick={handleToggle}>Toggle Status</button>
    </div>
  );
}
