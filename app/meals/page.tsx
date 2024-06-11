import Link from "next/link";
import { Suspense } from "react";

import MealGrid from "@/components/meals/meal-grid";
import styles from "./page.module.css";

export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by our vibrant community.",
};

const Meals = async () => {
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
        <Suspense
          fallback={<p className={styles.loading}>Fetching meals...</p>}
        >
          <MealGrid />
        </Suspense>
      </main>
    </>
  );
};

export default Meals;
