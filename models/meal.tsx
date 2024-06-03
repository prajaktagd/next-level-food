import { StaticImageData } from "next/image";

export default interface Meal {
  id: number;
  title: string;
  slug: string;
  image: StaticImageData;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}
