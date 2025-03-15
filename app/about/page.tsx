const Page: React.FC = () => {
  return <About />;
};

const About: React.FC = () => {
  return (
    <div className="bg-white md:mx-24 md:my-12 rounded-xl overflow-hidden text-gray-900">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full pb-0 lg:pb-12">
          <div className="text-gray-900 text-3xl font-medium px-8 md:px-12 pt-8">
            <p>About Us</p>
          </div>
          <div className="font-medium px-8 md:px-12 pt-8">
            <p>Foodini helps people discover new foods.</p>
          </div>
          <div className="px-8 md:px-12 pt-8 space-y-4">
            <p>
              Stepping out of your food comfort zone can feel a bit
              daunting—especially without a friendly guide by your side. It's
              natural to stick with the dishes you know, but Foodini is here to
              help you explore new flavors with ease!
            </p>
            <p>
              We provide clear, detailed information about dishes and keep you
              updated on local food fairs, making it simple and fun to try
              something new.
            </p>
          </div>
        </div>
        <div className="w-full pb-12">
          <div className="text-gray-900 text-3xl font-medium px-8 md:px-12 pt-8">
            <p>Get in Touch</p>
          </div>
          <div className="px-8 md:px-12 pt-8">
            <p>
              If you have any questions or feedback, please feel free to reach
              out to us at{" "}
              <a
                href="mailto: foodinitheapp@gmail.com"
                className="text-blue-600"
              >
                foodinitheapp@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
