import React, { useEffect, useRef, useState } from "react";

export default function TodoInput({
  setinputValue,
  inputValue,
  handleAddTodo,
}) {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });

  const AddTodo = (e) => {
    e.preventDefault();
    handleAddTodo();
  };
  return (
    <>
      <form onSubmit={AddTodo}>
        <input
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setinputValue(e.target.value)}
          type="text"
          placeholder="Type Your Todo"
          style={{
            marginTop: "10px",
            marginRight: "10px",
            fontSize: "20px",
            padding: ".3rem 1rem",
            outline: "none",
            borderRadius: ".5rem",
          }}
        />
      </form>
    </>
  );
}
