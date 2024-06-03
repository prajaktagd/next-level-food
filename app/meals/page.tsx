import Link from "next/link";

import MealGrid from "@/components/meals/meal-grid";
import styles from "./page.module.css";
import { getMeals } from "@/utils/db-utils";

const Meals = async () => {
  const meals = await getMeals();
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meal created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealGrid meals={meals} />
      </main>
    </>
  );
};

export default Meals;
