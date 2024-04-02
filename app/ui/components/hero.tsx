import Link from "next/link";
import { Button } from "./global/button";

export default function Hero() {
  return (
    <div className="relative">
      <img
        src="hero-mobile.jpg"
        alt="Hero"
        className="w-full h-full object-cover lg:hidden"
      />
      <img
        src="hero-wide.jpg"
        alt="Hero"
        className="hidden lg:block w-full h-auto object-cover"
      />
      <Button
        size="default"
        variant="blue"
        className="absolute bottom-12 left-4 md:bottom-12 md:left-24 lg:bottom-8 bg-blue-500 text-white px-6 py-4 rounded-md"
        href="/food_events"
      >
        Find a Food Fair
      </Button>
    </div>
  );
}
