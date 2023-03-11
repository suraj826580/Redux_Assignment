import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ActionTodoSuccess } from "../Redux/ACTION.JS";
import { ActionTodoFailure } from "../Redux/ACTION.JS";
import { ActionTodoReq } from "../Redux/ACTION.JS";
import { PostActionTodoSuccess } from "../Redux/ACTION.JS";
import { Link } from "react-router-dom";

const url = "http://localhost:8081/todos";
export default function Todo() {
  // State Manage For the inputbox
  const [inputValue, setinputValue] = useState("");
  // Redux Store
  const { todos, isLoading } = useSelector((store) => {
    return store;
  });
  const dispatch = useDispatch();

  // For Getting The Data On the Mount Phase
  const getData = () => {
    dispatch(ActionTodoReq());
    axios
      .get(url)
      .then((res) => {
        dispatch(ActionTodoSuccess(res.data));
      })
      .catch((err) => dispatch(ActionTodoFailure()));
  };
  useEffect(() => {
    getData();
  }, []);

  // HandleAdd Todo
  const handleAddTodo = () => {
    const newTodo = {
      title: inputValue,
      status: false,
    };

    dispatch(ActionTodoReq());
    axios
      .post(url, newTodo)
      .then((res) => {
        dispatch(PostActionTodoSuccess(res.data));
        getData();
      })
      .catch(() => dispatch(ActionTodoFailure()));
    setinputValue("");
  };

  // Handle Delete
  const handleDelete = (id) => {
    axios
      .delete(`${url}/${id}`)
      .then((res) => {
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // ---------------------------------------------
  // Return JSX
  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div>
      <TodoInput
        setinputValue={setinputValue}
        inputValue={inputValue}
        handleAddTodo={handleAddTodo}
        key={Math.random()}
      />
      {todos?.length > 0 ? (
        todos?.map((item, ind) => {
          return (
            <>
              <div
                key={ind}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "5px",
                }}>
                <h3 style={{ padding: "-10px" }}>
                  {item.title} - {item.status ? "Completed" : "Pending"}
                </h3>
                <button
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                  style={{ padding: "10px" }}>
                  Deleted
                </button>
                <Link to={`/todo/${item.id}`} style={{ padding: "10px" }}>
                  More Info
                </Link>
              </div>
            </>
          );
        })
      ) : (
        <h1>No Todo Found</h1>
      )}
    </div>
  );
}
