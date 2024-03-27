import { createClient } from "@/utils/supabase/server";
import { Card, CardContent } from "@/app/ui/components/dishes/card";
import { capitalize, formatList } from "@/utils/global-utils/utils";
import Link from "next/link";

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
async function getDishes(): Promise<Dish[]> {
  const supabase = createClient();
  const { data: dishes, error } = await supabase
    .from("dishes")
    .select("id, name, cuisine, images"); // Specify the fields you want to retrieve

  if (error) {
    throw new Error(`Error fetching dishes: ${error}`);
  }

  return dishes;
}

export default async function DishList() {
  const dishes = await getDishes();

  return (
    <div className="bg-white">
      <div className="py-8 px-4 md:px-24">
        <h2 className="text-2xl font-semibold mb-6">Discover Something New</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {dishes.map((dish) => (
            <Card key={dish.id} className="w-full">
              <Link href={`/dishes/${dish.name}`}>
                {dish.images && dish.images.length > 0 ? (
                  <img
                    alt={dish.name}
                    className="w-full h-auto"
                    height="200"
                    src={dish.images[0]}
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                ) : (
                  <img
                    alt="Placeholder"
                    className="w-full h-auto"
                    height="200"
                    src="placeholder.jpg" // Replace with the path to your placeholder image
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                )}
                <CardContent>
                  <h3 className="text-lg font-semibold">
                    {capitalize(dish.name)}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {formatList(dish.cuisine)}
                  </p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
