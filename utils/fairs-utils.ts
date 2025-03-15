import { createClient } from "@/utils/supabase/server";

export type Fair = {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  description: string;
  occurence: string;
  images: string[];
  website: string;
  color: string;
  fair_dates : {
    start_time: number;
    end_time: number;
  }[];
};

export type FairDate = {
  id: number;
  fair_id: number;
  start_time: number;
  end_time: number;
  fair: {
    id: number;
    name: string;
    images: string[];
    address: string;
    city: string;
    state: string;
    occurence: string;
    color: string;
  }
};

export async function getFairEvents(from_date: Date = new Date(), to_date?: Date, limit: number = 16): Promise<FairDate[]> {
  const supabase = createClient();

  let query = supabase
    .from("fair_dates")
    .select(`
      id,
      fair_id,
      start_time,
      end_time,
      fair: fairs (id, name, images, address, city, state, occurence, color)
    `)
    .gte("end_time", from_date.toISOString())
    .order("start_time", { ascending: true })
    .limit(limit);

  if (to_date) {
    query = query.lte("start_time", to_date.toISOString());
  }

  let { data: fair_dates, error } = await query;

  if (error) {
    console.error("Error fetching food fairs:", error.message);
    throw new Error(`Error fetching food fairs: ${error.message}`);
  }

  // Ensure `fair` is treated as a single object instead of an array
  return fair_dates?.map(fair_date => ({
    ...fair_date,
    fair: Array.isArray(fair_date.fair) ? fair_date.fair[0] : fair_date.fair // Extract the first item if it's an array
  })) ?? [];
}

export async function getFair(fairId: number): Promise<Fair> {
  const supabase = createClient();
  let { data: fair, error } = await supabase
    .from("fairs")
    .select(`
      *,
      fair_dates (
        start_time,
        end_time
      )
    `)
    .eq("id", fairId)
    .gte('fair_dates.end_time', new Date().toISOString())
    .limit(6, { foreignTable: 'fair_dates' }) // Limit fair_dates to 8
    .single();

  if (error) {
    throw new Error(`Error fetching fair: ${error.message}`);
  }

  return fair as Fair;
}