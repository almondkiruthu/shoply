const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    const existingSubCategoryCount = await database.subcategory.count();
    if (existingSubCategoryCount >= 7) {
      return console.log("Data is already seeded!");
    } else {
      await database.subcategory.createMany({
        data: [
          { name: "Shirts" },
          { name: "Dresses" },
          { name: "Shorts" },
          { name: "Skirts" },
          { name: "Sports Clothing" },
          { name: "Polos" },
          { name: "Pants" },
        ],
      });
    }
  } catch (error) {
    console.error("Error seeding the database sizes", error);
  } finally {
    await database.$disconnect();
  }
}

main();
