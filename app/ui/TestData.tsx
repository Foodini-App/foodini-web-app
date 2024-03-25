import { createClient } from "@/utils/supabase/server";

export default async function TestData() {
  const supabase = createClient();
  const { data: dishes } = await supabase.from("dishes").select();

  return <pre>{JSON.stringify(dishes, null, 2)}</pre>;
}
