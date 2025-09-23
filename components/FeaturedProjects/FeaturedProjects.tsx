import React from "react";
import Cube from "@/app/swiperjs/Cube/Cube";
import Link from "next/link";
const FeaturedProjects = () => {
  return (
    <div className="w-screen bg-orange-300 pt-20">
      <div className="grid grid-cols-1 w-screen bg-orange-300 pt-10 lg:grid-cols-2 xl:max-w-screen-2xl xl:h-[100vh] mx-auto">
        <div className="flex flex-col justify-center">
          <div className="p-5 lg:p-10 xl:pl-20">
            <h1
              className="text-3xl font-bold xl:text-7xl"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              OUR
            </h1>
            <h1
              className="text-5xl font-bold text-white xl:text-7xl"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Recent Projects
            </h1>
            <p
              className="text-white  pb-10 xl:pt-2 text-left"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Showcasing Innovation and Impact
            </p>
            <p data-aos="fade-right" data-aos-duration="1000">
              Our featured projects highlight the creativity, expertise, and
              passion we bring to every project. Take a look at some of our best
              work, where we’ve built websites and apps that help businesses
              stand out and succeed online.
            </p>
            <div className="flex flex-row pt-10  ">
              <div className="basis-1/2"></div>
              <div className="flex flex-shrink flex-row  basis-1/2 group cursor-pointer   h-fit justify-end items-center">
                <button className="group-hover:bg-orange-400  text-transparent  origin-center hover:origin-top transition duration-700 ease-in-out text-black group-hover:text-white group-hover:text-4xl w-16 h-16 rounded-full border   border-lightGray text-2xl  ">
                  <Link href="/projects">{`→`}</Link>
                </button>
                <p className="relative   left-[-30px]  transition-transform duration-800 group-hover:translate-x-10   text-white  font-bold text-xl     text-right">
                  <Link href="/projects">EXPLORE NOW</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-screen pb-20 xl:w-full xl:h-full xl:pl-20 xl:justify-center xl:items-center">
          <div className="w-[90%] pt-20 pb-20">
            <Cube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
