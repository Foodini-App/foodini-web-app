import DishList from "../../ui/components/dishes/dish-list";
import { searchDishes } from "@/utils/dish-utils";
import Header from "@/app/ui/components/global/header";

const Page: React.FC<{
  searchParams: {
    q?: string;
    page?: string;
  };
}> = async ({ searchParams }) => {
  const query = searchParams?.q || "";

  const dishes = await searchDishes(query);

  const title = query ? `Results for "${query}"` : "All Dishes";

  return (
    <div>
      <Header name={title} />
      <DishList dishes={dishes} />
    </div>
  );
};

export default Page;
