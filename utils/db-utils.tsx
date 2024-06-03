import sql from "better-sqlite3";

import Meal from "@/models/meal";

const db = sql("meals.db");

const getMeals = async () => {
  await new Promise((resolve, reject) => setTimeout(resolve, 2000));
  // throw Error();
  return db.prepare("SELECT * FROM meals").all() as Array<Meal>;
};

export { getMeals };
