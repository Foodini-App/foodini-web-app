import Icon from "@/app/ui/components/global/Iconn";
import { getFair } from "@/utils/fairs-utils";
import { capitalize } from "@/utils/global-utils";
import Link from "next/link";
import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetClose,
  SheetHeader,
} from "../global/Sheet";
import { Button, CloseButton } from "../global/Button";

const FoodFairDatesOverlay: React.FC<{
  future_dates: { start_time: number; end_time: number }[];
  occurence: string;
}> = (props) => {
  const next_date = new Date(props.future_dates[0].start_time);
  console.log(props.future_dates);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="sm" variant="default" className="gap-2 p">
          <span>
            {next_date.toLocaleString("default", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </span>
          <Icon name="chevronRight" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetClose>
          <CloseButton />
        </SheetClose>
        <SheetHeader>
          <div className="text-3xl font-semibold text-gray-700 dark:text-gray-50 text-center">
            Future Dates
          </div>
        </SheetHeader>
        <div className="py-6 text-gray-700 dark:text-gray-400 flex flex-col gap-6">
          {props.future_dates.map((date) => {
            return (
              <div className="pb-4 border-b border-#CCCCCC">
                <div className="flex flex-row gap-4">
                  <div className="place-content-center">
                    <Icon name="time" size={24} />
                  </div>
                  <div>
                    <div className="text-md font-medium ">
                      {new Date(date.start_time).toLocaleString("default", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                    <div>
                      {new Date(date.start_time).toLocaleString("default", {
                        hour: "numeric",
                        minute: "numeric",
                      })}{" "}
                      -{" "}
                      {new Date(date.end_time).toLocaleString("default", {
                        hour: "numeric",
                        minute: "numeric",
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {props.occurence && (
            <div className="flex flex-row gap-4 pb-6 border-b border-#CCCCCC">
              <div className="place-content-center">
                <Icon name="occurenceCircle" size={48} />
              </div>
              <div>
                <div className="text-lg font-medium ">
                  {capitalize(props.occurence)}
                </div>
                <div>This is typically a {props.occurence} recurring event</div>
              </div>
            </div>
          )}
          <Link
            href="/about"
            className="rounded-lg overflow-hidden hover:bg-gray-100"
          >
            <div className=" flex flex-row gap-4">
              <div className="place-content-center">
                <Icon name="foodiniLogoCircle" size={48} />
              </div>
              <div>
                <div className="text-lg font-medium ">About Foodini</div>
                <div>Here to help you experience new foods</div>
              </div>
            </div>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

interface FoodFairInfoProps {
  id: number;
}

const FairInfo: React.FC<FoodFairInfoProps> = async (props) => {
  const fair = await getFair(props.id);
  const color = fair.color ? fair.color : "gray-600";
  const bg_color = `bg-${color}`;
  const next_date = new Date(fair.fair_dates[0].start_time);
  const maps_link = `https://www.google.com/maps/search/?api=1&query=${fair.name}`;

  const future_dates = fair.fair_dates;

  return (
    <div className="md:mx-36 xl:mx-60 md:my-12 rounded-xl overflow-hidden text-gray-700">
      <div className="grid grid-cols-1 xl:grid-cols-2 h-256">
        <div className="w-full flex items-center justify-center overflow-hidden">
          <img className="object-cover h-full" src={fair.images[0]} />
        </div>
        <div className="w-full bg-white">
          <div className="bg-orange-600">
            <div className="text-white flex justify-between p-6 font-medium gap-6">
              <div>
                <FoodFairDatesOverlay
                  future_dates={future_dates}
                  occurence={fair.occurence}
                />
              </div>
              {fair.occurence && (
                <div className="flex gap-2 items-center text-lg md:text-xl">
                  <Icon name="recent" color="white" />
                  <span>{capitalize(fair.occurence)}</span>
                </div>
              )}
            </div>
            <div className="rounded-t-xl bg-white h-6" />
          </div>
          <div className="w-full h-full rounded-xl">
            <div className="px-6">
              <div className="border-b border-#CCCCCC pb-3 grid gap-1">
                <h1 className="text-2xl font-medium">{fair.name}</h1>
                <div className="flex gap-2 items-center">
                  <Icon name="location" color="#5A5A5A" size={18} />
                  <p className="text-slate-500">
                    {fair.address} {fair.city}, {fair.state}
                  </p>
                </div>
              </div>
              {fair.description && (
                <div className="border-b border-#CCCCCC py-6 grid gap-1">
                  <p>{fair.description}</p>
                </div>
              )}
              <div className={`pt-6 pb-6 grid gap-3" text-${color}`}>
                <div className="grid grid-cols-2 justify-items-center">
                  <Link
                    href={maps_link}
                    className="grid justify-items-center hover:text-orange-500 w-fit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="mapsCircleOutline" size={64} />
                    <h2 className="font-medium">Maps</h2>
                  </Link>

                  <Link
                    href={fair.website || "#"}
                    className="grid justify-items-center hover:text-orange-500 w-fit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="websiteCircleOutline" size={64} />
                    <h2 className="font-medium">Website</h2>
                  </Link>
                  {/* <div className="grid justify-items-center">
                    <Icon name="chefCircleOutline" size={64} />
                    <h2 className="font-medium">Vendors</h2>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FairInfo;
