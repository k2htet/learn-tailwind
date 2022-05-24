import React from "react";

const TestimonialItem = ({ imgSrc }) => {
  return (
    <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
      <img src={imgSrc.src} className="w-16 -mt-14" alt="" />
      <h5 className="text-lg font-bold">{imgSrc.name}</h5>
      <p className="text-sm text-darkGrayishBlue">
        “Manage has supercharged our team’s workflow. The ability to maintain
        visibility on larger milestones at all times keeps everyone motivated.”
      </p>
    </div>
  );
};

export default TestimonialItem;
