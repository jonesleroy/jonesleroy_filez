import db from "#db/client";
import { faker } from "@faker-js/faker";
import { createFolder } from "./queries/folders.js";

async function seed() {
  for (let i = 0; i < 3; i++) {
    const name = faker.person.firstName();

    try {
      const response = await createFolder({
        name,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
}

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");
