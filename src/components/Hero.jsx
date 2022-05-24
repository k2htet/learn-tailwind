import intro from "../assets/illustration-intro.svg";

const Hero = () => {
  return (
    <section id="hero">
      <div className="flex flex-col-reverse container mx-auto items-center px-6 mt-10 md:flex-row md:space-y-0">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Bring Everyone together to build better products
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            adipisci, velit fugiat dolorum rerum aut, quasi cupiditate esse
            similique, eveniet corrupti quo earum reiciendis quae tenetur! A sed
            suscipit hic.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="/#"
              className="px-6 py-2 bg-brightRed text-white rounded-full baseline hover:bg-brightRedLight"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={intro} alt="introImage" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
