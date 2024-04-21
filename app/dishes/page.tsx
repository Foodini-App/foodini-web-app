import DishList from "../ui/components/dishes/dish-list";
import { getPopularDishes } from "@/utils/dish-utils";

export default async function Page() {
  const dishes = await getPopularDishes();
  return (
    <div>
      <DishList dishes={dishes} />
    </div>
  );
}
