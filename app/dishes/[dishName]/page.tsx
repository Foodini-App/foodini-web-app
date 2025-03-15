import DishInfo from "@/app/ui/components/dishes/DishInfo";

const Page: React.FC<{ params: { dishName: string } }> = ({ params }) => {
  return <DishInfo name={params.dishName} />;
}

export default Page;