import DishList from "@/app/ui/components/dishes/dish-list";
import Hero from "./ui/components/hero";

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-10 bg-white">
      <Hero />
      <DishList />
    </div>
  );
}
