import { Header } from "../ui/components/global/header";
import { Button } from "../ui/components/global/button";

export default function Page() {
  return (
    <div className="flex flex-col md:items-center gap-4">
      <Header name="Food Events" />
      <div className="px-4 md:px-24 space-y-4">
        <Button
          size="default"
          variant="blue"
          className="bg-orange-500 text-white px-6 py-4 rounded-md"
          href="https://lu.ma/calendar/cal-1LXH22G3Y46ZLr9/map"
        >
          View map
        </Button>
        <iframe
          src="https://lu.ma/embed/calendar/cal-1LXH22G3Y46ZLr9/events?"
          width="800"
          height="1200"
          style={{
            border: "1px solid #bfcbda88",
            borderRadius: "4px",
            maxWidth: "100%",
          }}
          aria-hidden="false"
        ></iframe>
      </div>
    </div>
  );
}
