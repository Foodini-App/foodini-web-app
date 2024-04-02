import DishList from "@/app/ui/components/dishes/dish-list";
import Hero from "./ui/components/hero";

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-10 bg-#FAFAFA">
      <Hero />
      <DishList />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          src="https://lu.ma/embed/calendar/cal-1LXH22G3Y46ZLr9/events"
          width="800"
          height="450"
          style={{
            border: "1px solid #bfcbda88",
            borderRadius: "4px",
          }}
          aria-hidden="false"
        ></iframe>
      </div>
    </div>
  );
}
