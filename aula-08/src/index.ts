import prisma from "./database";

(async () => {
  const result = await prisma.student.groupBy({
    by: ["class"],
    _count: {
      id: true
    }
  })

  console.log(result);
})

(async () => {
  const result = await prisma.student.groupBy({
    by: ["class"],
    _count: {
      id: true
    },
    where: {
      jobId: null
    }
  })

  console.log(result);
})