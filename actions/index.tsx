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
