import Image from "next/image";
import React from "react";

const UserExperience = () => {
  return (
    <div className="w-screen bg-orange-300">
      <div className="grid grid-cols-1 lg:grid-cols-2   xl:max-w-screen-2xl mx-auto">
        <div className="p-5 xl:pl-20">
          <Image
            src={"/images/services/ux2.webp"}
            alt="image"
            width={1024}
            height={0}
            className="w-full   object-cover shadow-xl"
          />
        </div>

        <div className="p-5 xl:pl-20">
          <p className="font-semibold text-white">SERVICE</p>
          <h1 className="text-5xl font-bold pt-2">UX/UI Design</h1>
          <p className="font-semibold text-xl pt-3 text-orange-100">
            Creating Intuitive and Visually Stunning Designs
          </p>

          <p className="leading-relaxed pt-10">
            Delivering exceptional UX/UI design solutions that focus on both
            aesthetics and functionality. We craft intuitive, user-centered
            designs that enhance user engagement and drive conversions. Our
            process includes thorough research, wireframing, prototyping, and
            testing to ensure seamless navigation and an enjoyable experience
            across all devices. By combining creative design with strategic
            thinking, we create visually appealing interfaces that reflect your
            brand while optimizing usability, making your website or app not
            only beautiful but also efficient and easy to use.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserExperience;
