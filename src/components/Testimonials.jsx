import React from "react";
import TestimonialItem from "./TestimonialItem";

import anisha from "../assets/avatar-anisha.png";
import ali from "../assets/avatar-ali.png";
import richard from "../assets/avatar-richard.png";
import shanai from "../assets/avatar-shanai.png";
const Testimonials = () => {
  const imgSrc = [
    { name: "Anisha", src: anisha },
    { name: "Ali", src: ali },
    { name: "Richard", src: richard },
    { name: "Shanai", src: shanai },
  ];

  return (
    <section id="testimonials">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">
          What's different about Manage?
        </h2>
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {imgSrc.map((src, index) => {
            return <TestimonialItem imgSrc={src} key={index} />;
          })}
        </div>
      </div>
      <div className="my-16 text-center">
        <a
          href="/#"
          className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
