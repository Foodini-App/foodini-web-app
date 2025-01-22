import DishList from "@/app/ui/components/dishes/dish-list";
import Hero from "./ui/components/hero";
import { getPopularDishes } from "@/utils/dish-utils";
import Header from "./ui/components/global/header";
import LumaCalendar from "./ui/components/food_fairs/luma-calendar";

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col bg-#FAFAFA">
      <Hero />
      <TrendingDishes />
      <Header name="Upcoming Food Fairs" />
      <div className="flex flex-col md:items-center pt-2 md:pt-4">
        <LumaCalendar />
      </div>
    </div>
  );
}

async function TrendingDishes() {
  const dishes = await getPopularDishes(4.2, 8);

  return (
    <div>
      <Header name="Trending Dishes" />
      <DishList dishes={dishes} />
    </div>
  );
}
