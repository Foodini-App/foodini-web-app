import FoodFairInfo from "@/app/ui/components/food_fairs/fair-info";


const Page: React.FC<{ params: {fairId: number}}> = ({params}) => {
  return <FoodFairInfo id={params.fairId} />;
}

export default Page;