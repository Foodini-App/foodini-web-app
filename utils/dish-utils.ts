import { createClient } from "@/utils/supabase/server";

type Dish = {
  id: number;
  name: string;
  cuisine: string[];
  images: string[];
};

/**
 * Retrieves a list of dishes from the database.
 * @returns A promise that resolves to an array of Dish objects.
 * @throws An error if there was a problem fetching the dishes.
 */
export async function getPopularDishes(): Promise<Dish[]> {
  const supabase = createClient();
  let { data: dishes, error } = await supabase
    .from("dishes")
    .select("id, name, cuisine, images")
    .gt("popularity", 3.8);

  if (error) {
    throw new Error(`Error fetching dishes: ${error}`);
  }

  return dishes as Dish[]; // Add type assertion
}

/**
 * Retrieves a list of dishes from the database that belong to a specific cuisine.
 * @param cuisine The cuisine to filter the dishes by.
 * @returns A promise that resolves to an array of Dish objects.
 * @throws An error if there was a problem fetching the dishes.
 */
export async function getDishesFromCuisine(cuisine: string): Promise<Dish[]> {
    const supabase = createClient();
    let { data: dishes, error } = await supabase
        .from("dishes")
        .select("id, name, cuisine, images")
        .contains("cuisine", [cuisine]);

    if (error) {
        throw new Error(`Error fetching dishes: ${error}`);
    }

    return dishes as Dish[]; // Add type assertion
}

/**
 * Retrieves a list of dishes from the database that match a search query.
 * @param query The search query to match the dishes against.
 * @returns A promise that resolves to an array of Dish objects.
 * @throws An error if there was a problem fetching the dishes.
 */
export async function searchDishes(query: string): Promise<Dish[]> {
    const supabase = createClient();
    let { data: dishes, error } = await supabase
        .from("dishes")
        .select("id, name, cuisine, images")
        .textSearch("name", query);

    if (error) {
        throw new Error(`Error fetching dishes: ${error}`);
    }

    return dishes as Dish[]; // Add type assertion
}