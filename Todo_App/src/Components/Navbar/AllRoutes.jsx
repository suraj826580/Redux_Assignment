import React from "react";
import { Routes, Route } from "react-router-dom";
import Counter from "../Pages/Counter";
import Home from "../Pages/Home";
import SingleTodo from "../Pages/SingleTodo";
import Todo from "../Pages/Todo";
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/todo/:id" element={<SingleTodo />} />
    </Routes>
  );
}
