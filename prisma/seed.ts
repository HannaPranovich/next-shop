import { categories, products } from "./constants";
import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";

async function fillTables() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User12",
        email: "user@test.com",
        password: hashSync("111111", 10),
        verified: true,
        role: "USER",
      },
      {
        fullName: "Admin1",
        email: "admin@test.com",
        password: hashSync("111111", 10),
        verified: true,
        role: "ADMIN",
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  for (const product of products) {
    const newProduct = await prisma.product.create({ data: product });
    console.log(`Created product with id: ${newProduct.id}`);
  }

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
      },
      {
        userId: 2,
        totalAmount: 0,
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      userId: 1,
      quantity: 1,
    },
  });
}

async function clearTables() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE;`;
}

async function main() {
  try {
    await clearTables();
    await fillTables();
  } catch (e) {
    console.log(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
