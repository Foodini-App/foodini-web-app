import DishInfo from "@/app/ui/components/dishes/dish-info";

export default function Page({ params }: { params: { dishName: string } }) {
  return <DishInfo name={params.dishName} />;
}
