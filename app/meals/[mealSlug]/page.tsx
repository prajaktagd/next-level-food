import Image from "next/image";
import styles from "./page.module.css";
import { getMeal } from "@/utils/db-utils";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
  params,
}: Readonly<{ params: { mealSlug: String } }>) => {
  const meal = getMeal(params.mealSlug);
  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
};

const MealDetails = ({
  params,
}: Readonly<{ params: { mealSlug: String } }>) => {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  const instructions = meal.instructions.replaceAll(/\n/g, "<br />");
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{ __html: instructions }}
        />
      </main>
    </>
  );
};

export default MealDetails;
