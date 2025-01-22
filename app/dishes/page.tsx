import DishList from "../ui/components/dishes/dish-list";
import { getPopularDishes } from "@/utils/dish-utils";
import Header from "../ui/components/global/header";
import CuisineCarousel from "../ui/components/dishes/cuisine-carousel";

const cuisines = [
  {
    id: 1,
    name: "chinese",
    image:
      "https://plus.unsplash.com/premium_photo-1674601032178-4730991fb0fc?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "indian",
    image:
      "https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "korean",
    image:
      "https://images.unsplash.com/photo-1580651315530-69c8e0026377?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "turkish",
    image:
      "https://images.unsplash.com/photo-1532636875304-0c89119d9b4d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "peruvian",
    image:
      "https://images.unsplash.com/photo-1619221881833-5e5aeff458fd?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "tibetan",
    image:
      "https://images.unsplash.com/photo-1687068283776-fd69669beab8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Page: React.FC = async () => {
  const dishes = await getPopularDishes(3.8);

  return (
    <div>
      <CuisineCarousel cuisines={cuisines} />
      <Header name="Trending Dishes" />
      <DishList dishes={dishes} />
    </div>
  );
}

export default Page