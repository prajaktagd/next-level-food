import sql from "better-sqlite3";
import fs from "fs";

import Meal from "@/models/meal";

const db = sql("meals.db");

const getMeals = async () => {
  // db.prepare(`DELETE from meals WHERE slug = ?`).run("khichadi");
  await new Promise((resolve, reject) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all() as Array<Meal>;
};

const getMeal = (slug: String) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug) as Meal;
};

const saveMeal = async (meal: Meal, image: File) => {
  const stream = fs.createWriteStream(`public${meal.image}`);
  const bufferedImage = await image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error(`Failed to save the meal image of ${meal.title}!`, error);
    }
  });

  const insertStmt = `INSERT INTO meals VALUES (
      null,
      @slug,
      @title,
      @image,
      @summary,
      @instructions,
      @creator,
      @creator_email
    )`;
  db.prepare(insertStmt).run(meal);
};

export { getMeals, getMeal, saveMeal };
