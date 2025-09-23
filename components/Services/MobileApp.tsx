import Image from "next/image";
import React from "react";

const MobileApp = () => {
  return (
    <div>
      <div className="w-screen bg-orange-300">
        <div className="grid grid-cols-1 lg:grid-cols-2   xl:max-w-screen-2xl mx-auto">
          <div className="p-5 xl:pl-20">
            <Image
              src={"/images/services/mobileApp5.webp"}
              alt="image"
              width={1024}
              height={0}
              className="w-full h-full object-cover shadow-xl"
            />
          </div>

          <div className="p-5 xl:pl-20">
            <p className="font-semibold text-white">SERVICE</p>
            <h1 className="text-5xl font-bold pt-2">Mobile App Development</h1>
            <p
              className="font-semibold text-xl pt-3 text-orange-100"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              Innovative Mobile Apps
            </p>

            <p className="leading-relaxed pt-10">
              Crafting high-performance mobile applications that deliver
              exceptional user experiences across iOS and Android. Our mobile
              app development services focus on building intuitive, responsive,
              and scalable apps that meet your business goals. From concept and
              design to development and deployment, we create apps that are
              feature-rich, secure, and optimized for smooth performance.
              Whether you’re looking to enhance customer engagement, streamline
              internal processes, or launch a new service, our custom mobile
              solutions are designed to elevate your brand and drive success in
              a mobile-first world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
