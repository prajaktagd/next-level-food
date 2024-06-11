"use client";

import ImagePicker from "@/components/images/image-picker";
import ShareMealButton from "@/components/buttons/ShareMealButton";
import styles from "./page.module.css";
import shareMeal from "@/utils/actions";
import { useFormState } from "react-dom";

const ShareMeal = () => {
  const [formState, formAction] = useFormState(shareMeal, { message: "" });

  return (
    <>
      <header className={styles.header}>
        <h1>
          Share your <span className={styles.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={styles.main}>
        <form className={styles.form} action={formAction}>
          <div className={styles.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          <ImagePicker label="Your meal image" name="image" />
          {formState.message && (
            <p className={styles.errorMsg}>{formState.message}</p>
          )}
          <p className={styles.actions}>
            <ShareMealButton />
          </p>
        </form>
      </main>
    </>
  );
};

export default ShareMeal;
