import DishInfo from "@/app/ui/components/dishes/dish-info";

const Page: React.FC<{ params: { dishName: string } }> = ({ params }) => {
  return <DishInfo name={params.dishName} />;
}

export default Page;