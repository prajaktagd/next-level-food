"use server";

import slugify from "slugify";
import xss from "xss";
import { saveMeal } from "./db-utils";
import { redirect } from "next/navigation";

const shareMeal = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const image = formData.get("image") as File;
  const slug = slugify(title, { lower: true });

  const fileExtension = image.name.split(".").pop();
  const fileName = `${slug}.${fileExtension}`;

  const meal = {
    id: null,
    slug: slug,
    title: title,
    image: `/images/${fileName}`,
    summary: formData.get("summary") as string,
    instructions: xss(formData.get("instructions") as string),
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
  };

  await saveMeal(meal, image);
  redirect("/meals");
};

export default shareMeal;
