import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

async function connectToDatabase() {
  try {
    prisma = new PrismaClient();
    await prisma.$connect();
    console.log("Connected to the database successfully.");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1); // Exit the process with a failure code
  }
}

connectToDatabase();

export { prisma };
