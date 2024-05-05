export function Header({ name }: { name: string }) {
  return (
    <h1 className="text-gray-700 text-xl font-medium pt-4 md:pt-8 px-4 md:px-24">
      {name}
    </h1>
  );
}
