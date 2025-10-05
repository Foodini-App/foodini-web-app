import { FairDate, getFairEvents } from "@/utils/fairs-utils";
import Icon from "@/app/ui/components/global/Icon";

import { FairCard } from "./FairCard";
import { CardContent } from "../dishes/DishCard";
import { capitalize } from "@/utils/global-utils";
import Header from "../global/Header";

interface FoodFairCardProps {
  fair_date: FairDate;
  date: Date;
}

const FoodFairCard: React.FC<FoodFairCardProps> = ({ fair_date, date }) => {
  const color = fair_date.fair.color
    ? `bg-${fair_date.fair.color}`
    : "bg-gray-600";

  return (
    <FairCard
      key={fair_date.id}
      fairName={fair_date.fair.name}
      fairId={fair_date.fair.id}
      className="w-full"
    >
      <div className="bg-orange-600">
        <div className="text-white flex justify-between py-3 px-6 font-medium gap-6">
          <span>
            {date.toLocaleString("default", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </span>
          {fair_date.fair.occurence && (
            <div className="flex justify-start gap-2">
              <Icon name="recent" color="white" />
              <span>{capitalize(fair_date.fair.occurence)}</span>
            </div>
          )}
        </div>
        <img
          alt={fair_date.fair.name}
          className="aspect-3/2 object-cover h-36 md:h-full lg:h-64 w-full rounded-t-2xl"
          src={fair_date.fair.images[0]}
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold">{fair_date.fair.name}</h3>
        <p className="text-sm text-gray-600">
          {fair_date.fair.city}, {fair_date.fair.state}
        </p>
      </CardContent>
    </FairCard>
  );
};

const FairCalendar: React.FC<{ to_date: Date }> = async ({ to_date }) => {
  const fair_dates = await getFairEvents(undefined, to_date, 16);

  return (
    <div className="pt-2 md:pt-4 px-4 md:px-24">
      <div className="grid grid-cols-1 gap-4">
        {fair_dates.reduce((acc, fair_date, index) => {
          const date = new Date(fair_date.start_time);
          const month = date.toLocaleString("default", { month: "long" });
          const year = date.getFullYear();

          // Get the full month-year string for comparison
          const monthYear = `${month} ${year}`;

          // Check if we need to insert a new header
          if (
            index === 0 || // Always add a header for the first element
            new Date(fair_dates[index - 1].start_time).toLocaleString(
              "default",
              {
                month: "long",
                year: "numeric",
              }
            ) !== monthYear
          ) {
            acc.push(<h1 className="text-xl font-medium">{monthYear}</h1>);
          }

          acc.push(<FoodFairCard fair_date={fair_date} date={date} />);

          return acc;
        }, [] as JSX.Element[])}
      </div>
    </div>
  );
};

export default FairCalendar;
