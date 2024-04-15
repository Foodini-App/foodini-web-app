import { getPopularDishes } from "@/utils/dish-utils";
import { DishCard, CardContent } from "@/app/ui/components/dishes/dish-card";
import { capitalize, formatList } from "@/utils/global-utils";

export default async function DishList() {
  const dishes = await getPopularDishes();

  return (
    <div className="bg-#FAFAFA">
      <div className="py-8 px-4 md:px-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {dishes.map((dish) => (
            <DishCard key={dish.id} dishName={dish.name} className="w-full">
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
            </DishCard>
          ))}
        </div>
      </div>
    </div>
  );
}
