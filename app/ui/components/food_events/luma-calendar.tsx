export default function LumaCalendar() {
  return (
    <div className="px-4 md:px-24 space-y-4">
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
  );
}
