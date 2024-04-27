import DishList from "../ui/components/dishes/dish-list";
import { getPopularDishes } from "@/utils/dish-utils";
import { Header } from "../ui/components/global/header";

export default async function Page() {
  const dishes = await getPopularDishes();
  return (
    <div>
      <Header name="Trending Dishes" />
      <DishList dishes={dishes} />
    </div>
  );
}
