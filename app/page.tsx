import Image from "next/image";
import { Client } from "@/utils/prisma";

async function getData() {
  const data = await Client.todo.findMany({
    select: {
      id: true,
      totle: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

import AddTodo from "@/components/todos/addtodo";
import Todo from "@/components/Todo";
export default async function Home() {
  const data = await getData();
  console.log("data is:", data);
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-4xl font-extrabold uppercase">Todo App</span>
      <h1 className="text-5xl font-extrabold uppercase mb-5 text-center">
        <span className="lowercase">w/</span>Server Actions
      </h1>
      <div className="flex justify-center flex-col items-center">
        {}
        <AddTodo />
        <div className="flex flex-col gap-5 items-center justify-center mt-10 w-screen"></div>
        {data.map((todo, id) => (
          <div key={id}>
            <Todo todo={todo} />
          </div>
        ))}
      </div>
    </div>
  );
}
