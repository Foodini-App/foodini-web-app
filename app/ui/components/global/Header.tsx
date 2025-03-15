const Header: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  return (
    <h1 className={`text-gray-900 text-2xl font-semibold pt-4 md:pt-8 px-4 md:px-24 ${className}`}>
      {name}
    </h1>
  );
};

export default Header;
