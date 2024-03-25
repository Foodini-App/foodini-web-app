export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-[#6B1010] text-white py-8 px-4 md:px-24 text-align-left">
        <h1 className="text-3xl font-bold">
          Discover new foods with confidence
        </h1>
        <p className="mt-4">
          Foodini has you covered with culturally-accurate dish information.
        </p>
      </div>
      <div className="hidden md:block">
        <img
          alt="Hero Image"
          className="object-cover object-center"
          height={200}
          src="/placeholder.svg"
          style={{
            aspectRatio: "600/400",
            objectFit: "cover",
          }}
          width={300}
        />
      </div>
    </div>
  );
}
