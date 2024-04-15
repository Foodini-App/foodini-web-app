import { createClient } from "@/utils/supabase/server";
import { underscoreToSpace } from "./global-utils";

type DishBasicInfo = {
  id: number;
  name: string;
  cuisine: string[];
  images: string[];
};

type Dish = DishBasicInfo & {
  traditional_name: string;
  description: string;
  ingredients: string[];
  popularity: number;
  tags: string[];
  allergens: string[];
  alternate_names: string[];
  related: string[];
};

/**
 * Retrieves a list of dishes from the database.
 * @returns A promise that resolves to an array of Dish objects.
 * @throws An error if there was a problem fetching the dishes.
 */
export async function getPopularDishes(): Promise<DishBasicInfo[]> {
  const supabase = createClient();
  let { data: dishes, error } = await supabase
    .from("dishes")
    .select("id, name, cuisine, images")
    .gt("popularity", 3.8);

  if (error) {
    throw new Error(`Error fetching dishes: ${error}`);
  }

  return dishes as DishBasicInfo[]; // Add type assertion
}

/**
 * Retrieves a list of dishes from the database that belong to a specific cuisine.
 * @param cuisine The cuisine to filter the dishes by.
 * @returns A promise that resolves to an array of Dish objects.
 * @throws An error if there was a problem fetching the dishes.
 */
export async function getDishesFromCuisine(
  cuisine: string
): Promise<DishBasicInfo[]> {
  const supabase = createClient();
  let { data: dishes, error } = await supabase
    .from("dishes")
    .select("id, name, cuisine, images")
    .contains("cuisine", [cuisine]);

  if (error) {
    throw new Error(`Error fetching dishes: ${error}`);
  }

  return dishes as DishBasicInfo[]; // Add type assertion
}

/**
 * Retrieves a list of dishes from the database that match a search query.
 * @param query The search query to match the dishes against.
 * @returns A promise that resolves to an array of Dish objects.
 * @throws An error if there was a problem fetching the dishes.
 */
export async function searchDishes(query: string): Promise<DishBasicInfo[]> {
  const supabase = createClient();
  let { data: dishes, error } = await supabase
    .from("dishes")
    .select("id, name, cuisine, images")
    .textSearch("name", query);

  if (error) {
    throw new Error(`Error fetching dishes: ${error}`);
  }

  return dishes as DishBasicInfo[]; // Add type assertion
}

export async function getDish(query: string): Promise<Dish> {
  const supabase = createClient();
  let { data: dish, error } = await supabase
    .from("dishes")
    .select("*")
    .eq("name", underscoreToSpace(query))
    .single();

  if (error) {
    throw new Error(`Error fetching dish: ${error}`);
  }

  return dish as Dish; // Add type assertion
}
