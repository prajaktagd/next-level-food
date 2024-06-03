import styles from "./meal-grid.module.css";
import MealItem from "./meal-item";
import { getMeals } from "@/utils/db-utils";

const MealGrid = async () => {
  const meals = await getMeals();

  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealGrid;
