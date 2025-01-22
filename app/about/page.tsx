const Page: React.FC = () => {
  return <About />;
}

const About: React.FC = () => {
  return (
    <div className="bg-white md:mx-24 md:my-12 rounded-xl overflow-hidden text-gray-700">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full pb-0 lg:pb-12">
          <div className="text-gray-700 text-3xl font-medium px-8 md:px-12 pt-8">
            <p>About Us</p>
          </div>
          <div className="font-medium px-8 md:px-12 pt-8">
            <p>Foodini’s mission is to connect people through food.</p>
          </div>
          <div className="px-8 md:px-12 pt-8">
            <p>
              When we venture outside of our comfort zone to try new food, it’s
              hard to make a confident decision without a trusted friend or
              guide. We often order only what we’re familiar with. Foodini steps
              in to help you explore new cuisines and dishes by providing
              detailed dish information.
            </p>
          </div>
        </div>
        <div className="w-full pb-12">
          <div className="text-gray-700 text-3xl font-medium px-8 md:px-12 pt-8">
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
}

export default Page;