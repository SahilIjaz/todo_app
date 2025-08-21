// import React from "react";
// import inputcomponent from "@/components/inputcomponent";
// import buttonComponenet from "@/components/buttonComponent";
// function addtodo() {
//   return (
//     <div>
//       <Form>
//         <div className="flex gap-2">
//           <inputcomponent
//             name="input"
//             type="text"
//             placeholder="add Todo here ..."
//           />
//           <buttonComponenet name="submit" text="add" bgColor="bg-blue-600" />
//         </div>
//       </Form>
//     </div>
//   );
// }

// export default addtodo;

import React from "react";
import InputComponent from "@/components/inputcomponent";
import ButtonComponent from "@/components/buttonComponent";
import { createTodo } from "@/actions";

function AddTodo() {
  return (
    <div>
      <form action={createTodo}>
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
