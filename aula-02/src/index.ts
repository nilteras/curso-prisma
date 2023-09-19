import prisma from "./database/database-prisma";

(async () => {
  const posts = await prisma.posts.findMany();

  console.log("Posts encontrados no banco:", posts);
})();