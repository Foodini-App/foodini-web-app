import Header from "../ui/components/global/Header";
import { Button } from "../ui/components/global/Button";
import LumaCalendar from "../ui/components/food_fairs/LumaCalendar";
import FairCalendar from "../ui/components/food_fairs/FairCalendar";

export default function Page() {
  return (
    <div className="flex flex-col lg:items-center gap-4">
      {/* <Header name="Food Fairs" />
      <div className="px-4 md:px-24">
        <Button
          size="default"
          variant="blue"
          className="bg-orange-500 text-white px-6 py-4 rounded-md"
          href="https://lu.ma/calendar/cal-1LXH22G3Y46ZLr9/map"
          newTab={true}
        >
          View map
        </Button>
      </div> */}
      {/* <LumaCalendar /> */}
      <FairCalendar />
    </div>
  );
}
