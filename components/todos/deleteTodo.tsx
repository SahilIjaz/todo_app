import React from "react";
import { todoProps } from "@/types";
import InputComponent from "../inputcomponent";
import ButtonComponent from "../buttonComponent";
import { FaTrash } from "react-icons/fa6";

function deleteTodo({ todo }: { todo: todoProps }) {
  return (
    <form>
      <InputComponent type="hidden" name="inputId" value={todo.id} />
      <ButtonComponent
        actionButton
        type="submit"
        bgColor="bg-red-400"
        text={<FaTrash />}
      />
    </form>
  );
}

export default deleteTodo;
