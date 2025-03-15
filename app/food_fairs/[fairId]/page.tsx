import FairInfo from "@/app/ui/components/food_fairs/FairInfo";

const Page: React.FC<{ params: { fairId: number } }> = ({ params }) => {
  return <FairInfo id={params.fairId} />;
};

export default Page;
