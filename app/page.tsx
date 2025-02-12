import DishList from "@/app/ui/components/dishes/DishList";
import Hero from "./ui/components/Hero";
import { getPopularDishes } from "@/utils/dish-utils";
import Header from "./ui/components/global/Header";
import LumaCalendar from "./ui/components/food_fairs/LumaCalendar";
import FairCalendar from "./ui/components/food_fairs/FairCalendar";
import { Button } from "./ui/components/global/Buttonn";

export default async function Index() {
  let two_month_date = new Date();
  two_month_date.setMonth(two_month_date.getMonth() + 2);

  return (
    <div className="flex-1 w-full flex flex-col bg-#FAFAFA">
      <Hero />
      <TrendingDishes />
      <div className="h-6"/>
      <Header name="Upcoming Food Fairs" />
      <div className="flex flex-col md:items-center gap-6">
        <FairCalendar to_date={two_month_date} />
        <Button
          size="default"
          variant="default"
          className="bg-orange-500 text-white px-12 py-4 rounded-md mx-4"
          href="/food_fairs"
        >
          See All
        </Button>
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
