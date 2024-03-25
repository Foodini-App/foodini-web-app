import { createClient } from "@/utils/supabase/server";
import TestData from "@/app/ui/TestData";
import Hero from "./ui/components/dishes/hero";
import { DishList } from "./ui/components/dishes/dish-list";

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex-1 w-full flex flex-col gap-10">
      <Hero />
      <DishList />
    </div>
  );
}
