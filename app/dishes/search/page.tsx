import DishList from "../../ui/components/dishes/dish-list";
import { searchDishes } from "@/utils/dish-utils";
import { Header } from "@/app/ui/components/global/header";

export default async function Page({
  searchParams,
}: {
  searchParams: {
    q?: string;
    page?: string;
  };
}) {
  const query = searchParams?.q || "";

  const dishes = await searchDishes(query);

  const title = query ? `Results for "${query}"` : "All Dishes";

  return (
    <div>
      <Header name={title} />
      <DishList dishes={dishes} />
    </div>
  );
}
