import styles from "./meal-grid.module.css";
import MealItem from "./meal-item";
import Meal from "../../models/meal";

const MealGrid = ({ meals }: Readonly<{ meals: Array<Meal> }>) => {
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
