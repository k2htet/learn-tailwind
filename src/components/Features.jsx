import NumberList from "./NumberList";

const Features = () => {
  const numberList = ["01", "02", "03", "04"];
  return (
    <section id="features">
      <div className="flex container flex-col mx-auto p-6 mt-10 space-y-12 md:flex-row md:space-y-0">
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            What different about Manage?
          </h2>

          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt facere
            maxime, quidem neque, quas at amet velit ratione molestiae cumque
            cupiditate in officia. Illo vel incidunt repellendus sit, ratione
            ut.
          </p>
        </div>

        <div className="flex flex-col space-y-8 md:w-1/2">
          {numberList.map((number, index) => (
            <NumberList number={number} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
