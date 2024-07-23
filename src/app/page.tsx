"use client";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./_components/card";
import TodoList from "./_components/todo";
import Edit from "./_components/edit";

interface Todo {
  id: string;
  task: string;
  isEditing: boolean;
}

function Page() {
  const [todoValue, setTodo] = useState<Todo[]>([]);

  const createTodo = (todo: string) => {
    setTodo([...todoValue, { id: uuidv4(), task: todo, isEditing: false }]);
  };

  const deleteTodo = (id: string) => {
    setTodo(todoValue.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string) => {
    setTodo(todoValue.map((todo) => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)));
  };

  const editTask = (task: string, id: string) => {
    setTodo(todoValue.map((todo) => (todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo)));
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-700">
      <h1 className="text-center text-white text-2xl mb-4">To Do List</h1>
      <div className="bg-gray-800 p-8 rounded-md w-full max-w-md">
        <Card createTodo={createTodo} />
        {todoValue.map((todo) => (
          todo.isEditing ? (
            <Edit key={todo.id} editTodo={editTask} task={todo} />
          ) : (
            <TodoList key={todo.id} task={todo} deleteTodo={deleteTodo} editTodo={editTodo} />
          )
        ))}
      </div>
    </div>
  );
}

export default Page;
