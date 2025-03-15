import FairCalendar from "../ui/components/food_fairs/FairCalendar";

export default function Page() {
  let eight_months_date = new Date();
  eight_months_date.setMonth(eight_months_date.getMonth() + 8);

  return (
    <div className="flex flex-col md:items-center">
      <FairCalendar to_date={eight_months_date}/>
    </div>
  );
}
