"use server";

import slugify from "slugify";
import xss from "xss";
import { saveMeal } from "./db-utils";
import { redirect } from "next/navigation";

const isInvalidText = (text: string) => {
  return !text || text.trim() === "";
};

const shareMeal = async (
  prevState: Readonly<{ message: string }>,
  formData: FormData
) => {
  const title = formData.get("title") as string;
  const summary = formData.get("summary") as string;
  const instructions = xss(formData.get("instructions") as string);
  const creator = formData.get("name") as string;
  const creatorEmail = formData.get("email") as string;
  const image = formData.get("image") as File;

  const userInputTexts = [title, summary, instructions, creator, creatorEmail];

  if (
    !creatorEmail.includes("@") ||
    !image ||
    image.size === 0 ||
    userInputTexts.some(isInvalidText)
  ) {
    return { message: "Invalid input!" };
  }

  const slug = slugify(title, { lower: true });
  const fileExtension = image.name.split(".").pop();
  const fileName = `${slug}.${fileExtension}`;

  const meal = {
    id: null,
    slug: slug,
    title: title,
    image: `/images/${fileName}`,
    summary: summary,
    instructions: instructions,
    creator: creator,
    creator_email: creatorEmail,
  };

  await saveMeal(meal, image);
  redirect("/meals");
};

export default shareMeal;
