"use server";

import { Client } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData) {
  const input = formData.get("input") as string;

  if (!input.trim()) {
    return;
  }

  await Client.todo.create({
    data: {
      totle: input,
    },
  });

  revalidatePath("/");
}

export async function changeStatus(formData: FormData) {
  const inputId = formData.get("inputId") as string;
  const todo = await Client.todo.findUnique({
    where: {
      id: inputId,
    },
  });

  const updateStatus = !todo?.isCompleted;

  await Client.todo.update({
    where: {
      id: inputId,
    },
    data: {
      isCompleted: updateStatus,
    },
  });

  revalidatePath("/");
}
