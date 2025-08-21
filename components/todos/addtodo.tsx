

import React from "react";
import InputComponent from "@/components/inputcomponent";
import ButtonComponent from "@/components/buttonComponent";
import * as actions from "@/actions";

function AddTodo() {
  return (
    <div>
      <form action={actions.createTodo}>
        <div className="flex gap-2">
          <InputComponent
            name="input"
            type="text"
            placeholder="Add Todo here ..."
          />
          <ButtonComponent type="submit" text="Add" bgColor="bg-blue-600" />
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
