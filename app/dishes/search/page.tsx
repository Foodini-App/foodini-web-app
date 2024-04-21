import DishList from "../../ui/components/dishes/dish-list";
import { searchDishes } from "@/utils/dish-utils";

export default async function Page({
  searchParams,
}: {
  searchParams: {
    q?: string;
    page?: string;
  };
}) {
  const query = searchParams?.q || "";
  const currentPage = Number(searchParams?.page || 1);

  const dishes = await searchDishes(query);

  return (
    <div>
      <DishList dishes={dishes} />
    </div>
  );
}
