const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.size.createMany({
      data: [
        { name: "small" },
        { name: "medium" },
        { name: "large" },
        { name: "large" },
        { name: "extraLarge" },
      ],
    });
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();
