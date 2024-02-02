const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    const existingSizesCount = await database.size.count();

    let womenCategory = await database.category.findFirst({
      where: { name: "Women" },
    });

    // If it doesn't exist, create the category with two subcategories
    if (!womenCategory) {
      womenCategory = await database.category.create({
        data: {
          name: "Women",
          subcategories: {
            create: [
              { name: "Shirts" },
              { name: "Dresses" },
              { name: "Shorts" },
              { name: "Skirts" },
              { name: "Sports Clothing" },
            ],
          },
        },
      });
    }

    // Check if the 'Men' category already exists
    let menCategory = await database.category.findFirst({
      where: { name: "Men" },
    });

    // If it doesn't exist, create the category with two subcategories
    if (!menCategory) {
      menCategory = await database.category.create({
        data: {
          name: "Men",
          subcategories: {
            create: [
              { name: "Shirts" },
              { name: "Polos" },
              { name: "Pants" },
              { name: "Sports Clothing" },
            ],
          },
        },
      });
    }

    console.log({ womenCategory, menCategory });

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
