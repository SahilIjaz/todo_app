import { PrismaClient } from "@/app/generated/prisma";

export const Client = new PrismaClient();

// async function main() {
//   const todo = await Client.todo.create({
//     data: {
//       totle: "Learn Prisma with MongoDB", // ✅ correct field spelling
//     },
//   });

//   console.log(todo);
// }

// main()
//   .catch((e) => console.error(e))
//   .finally(async () => {
//     await Client.$disconnect();
//   });
