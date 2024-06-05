"use client";

import { useFormStatus } from "react-dom";

const ShareMealButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Sharing..." : "Share Meal"}
    </button>
  );
};

export default ShareMealButton;
