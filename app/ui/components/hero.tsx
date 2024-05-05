import Link from "next/link";
import { Button } from "./global/button";

export default function Hero() {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2 place-content-center bg-orange-500 border-r-8 border-white">
        <div className="py-4 md:py-8 px-4 md:px-24">
          <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white pb-2 border-b-4 border-white">
            Discover new foods with confidence
          </div>
          <div className="text-sm md:text-lg lg:text-xl font-medium text-white pt-2 pb-4 lg:pb-12">
            Foodini helps you navigate local food events
          </div>
          <Button
            size="default"
            variant="blue"
            className="bg-blue-500 text-white px-6 py-4 rounded-md"
            href="/food_events"
          >
            Find a Food Fair
          </Button>
        </div>
      </div>
      <div className="col-span-1 h-64 md:h-80 xl:h-64 flex place-contents-center">
        <img
          src="hero-image.jpg"
          alt="Hero"
          className="h-full md:w-full object-cover"
        />
      </div>
    </div>
  );
}
