const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    const existingSizesCount = await database.size.count();

    if (existingSizesCount > 0 && existingSizesCount === 4) {
      console.log("Data already seeded.");
      return;
    } else {
      await database.size.createMany({
        data: [
          { name: "Small" },
          { name: "Medium" },
          { name: "Large" },
          { name: "Extra Large" },
        ],
      });

      console.log("Data seeded successfully.");
    }
  } catch (error) {
    console.error("Error seeding the database sizes", error);
  } finally {
    await database.$disconnect();
  }
}

main();
