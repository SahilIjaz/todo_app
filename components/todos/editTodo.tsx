"use client";

import React, { useState } from "react";
// import ButtonComponent from "../buttonComponent";
import { MdEdit } from "react-icons/md";
import InputComponent from "../inputcomponent";
import ButtonComponent from "../buttonComponent";
import { todoProps } from "@/types";
import * as actions from "@/actions";

// function EditTodo({ todo }: { todo: todoProps }) {
//   const [editTodo, setEditTodoState] = useState(false);

//   const handleEdit = () => {
//     setEditTodoState(!editTodo);
//   };
//   console.log("edi tot : ", editTodo);
//   return (
//     <div className="flex gap-5 items-center">
//       <ButtonComponent onClick={handleEdit} text={<MdEdit />} actionButton />
//       {editTodo ? (
//         <form>
//           <InputComponent type="hidden" name="id" value={todo.id} />
//           <ButtonComponent type="submit" text="save" />
//         </form>
//       ) : null}
//     </div>
//   );
// }

function EditTodo({ todo }: { todo: todoProps }) {
  console.log("todo in EditTodo:", todo);

  const [editTodo, setEditTodoState] = useState(false);

  const handleEdit = () => {
    setEditTodoState(!editTodo);
  };

  const handleSubmit = () => {
    setEditTodoState(false);
  };

  return (
    <div className="flex gap-5 items-center">
      <ButtonComponent onClick={handleEdit} text={<MdEdit />} actionButton />
      {editTodo ? (
        <form action={actions.editTodo} onSubmit={handleSubmit}>
          <InputComponent type="hidden" name="inputId" value={todo?.id ?? ""} />
          <div className="flex justify-center">
            <InputComponent
              name="newTitle"
              type="text"
              placeholder="edit todo ..."
            />
            <ButtonComponent type="submit" text="save" />
          </div>
        </form>
      ) : null}
    </div>
  );
}
export default EditTodo;
