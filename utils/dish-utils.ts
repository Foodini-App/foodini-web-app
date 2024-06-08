import { createClient } from "@/utils/supabase/server";
import { underscoreToSpace } from "./global-utils";

export type DishBasicInfo = {
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

export async function getPopularDishes(
  popularity: number = 3.0,
  limit: number = 16
): Promise<DishBasicInfo[]> {
  const supabase = createClient();
  let { data: dishes, error } = await supabase
    .from("dishes")
    .select("id, name, cuisine, images")
    .gt("popularity", popularity)
    .limit(limit);

  if (error) {
    throw new Error(`Error fetching dishes: ${error}`);
  }

  return dishes as DishBasicInfo[]; // Add type assertion
}


export async function searchDishes(query: string): Promise<DishBasicInfo[]> {
  const supabase = createClient();
  let { data, error } = await supabase.rpc("search_dishes", {
    search_term: query,
  });

  if (error) {
    throw new Error(`Error fetching dishes: ${error}`);
  }

  return data as DishBasicInfo[]; // Add type assertion
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
