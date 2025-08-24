import React from "react";
import * as actions from "@/actions";
import { todoProps } from "@/types";
import { FaCheck } from "react-icons/fa6";

import Button from "@/components/buttonComponent"; // make sure correct path
function ChangeTodo({ todo }: { todo: todoProps }) {
  return (
    <form action={actions.changeStatus}>
      <input name="inputId" value={String(todo.id)} type="hidden" />
      <Button
        text={<FaCheck />}

       
        
        actionButton
        bgColor={todo.isCompleted ? "bg-green-400" : "bg-blue-500"}
      />
    </form>
  );
}

export default ChangeTodo;
