import React from "react";
import { todoProps } from "@/types";
import ChangeTodo from "./changeTodo";
import EditTodo from "../components/todos/editTodo";
import DeleteTodo from "../components/todos/deleteTodo";

function Todo({ todo }: { todo: todoProps }) {
  return (
    <div className="w-10/12 mx-auto flex items-center justify-between bg-slate-900 py-4 px-20 rounded-2xl">
      <ChangeTodo todo={todo} />
      <span className="text-center font-bold uppercase grow">{todo.totle}</span>
      <div className="flex items-center mx-2">
        <EditTodo todo={todo} />
      </div>
      <div className="flex items-center">
        <DeleteTodo todo={todo} />
      </div>
    </div>
  );
}

export default Todo;
