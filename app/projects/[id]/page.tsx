"use client";
import Image from "next/image";
import React from "react";

import projectData from "../projectData";
import { v4 as uuidv4 } from "uuid";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma } from "react-icons/si";

import ProjectsSwiper from "@/app/swiperjs/ProjectsSwiper/ProjectsSwiper";

import Link from "next/link";
import { useIsMobile } from "@/hooks/CheckMobile/useIsMobile";
const ProjectDetail = ({ params }: { params: Promise<{ id: string }> }) => {
  const isMobile = useIsMobile();
  const paramsValue = React.use(params);
  const project = projectData.find((item) => {
    return item.id === Number(paramsValue.id);
  });
  return (
    <div className="w-screen bg-white">
      {/* <BreadCrumb url={"Projects"} /> */}

      <div className="max-w-screen-2xl mx-auto bg-offWhite relative top-[-75px] shadow-xl">
        <div className="grid grid-cols-1  lg:grid-cols-2">
          <div className="m-5 lg:m-20">
            <p className="text-lightGray font-Lora font-normal text-sm sm:text-base leading-[26px]">
              <b>Note:</b> Some buttons and links on this portfolio page are
              intentionally disabled and are for demonstration purposes only.
              They showcase the design and functionality of the site but do not
              lead to actual actions or pages. This helps you explore the
              interface without unintended navigation.
            </p>

            <p className="text-lightGray pt-5 pb-5 font-Lora font-normal text-sm sm:text-base leading-[26px]">
              To see the fully functional version, click the button to visit the
              live website.
            </p>

            <div className="flex flex-row  ">
              <div className="basis-1/2"></div>

              <div className="flex flex-shrink flex-row  basis-1/2 group cursor-pointer   h-fit justify-end items-center">
                <button className="group-hover:bg-orange-400  origin-center hover:origin-top transition duration-700 ease-in-out text-transparent group-hover:text-white group-hover:text-4xl w-16 h-16 rounded-full border border-gray border-dotted text-2xl  ">
                  <Link
                    href={project?.url || ""}
                    target="_blank"
                    rel="noopener noreferrer"
                  >{`→`}</Link>
                </button>
                <p className="relative   left-[-30px]  transition-transform duration-800 group-hover:translate-x-10   text-orange-300 font-bold text-xl     text-right">
                  <Link
                    href={project?.url || ""}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LIVE PAGE
                  </Link>
                </p>
              </div>
            </div>
            <p className="font-semibold text-orange-300 pt-10 text-md lg:text-lg">
              DETAILS
            </p>
            <h1 className="text-3xl lg:text-5xl font-semibold pt-5">
              {project?.title}
            </h1>
            <p className="font-bold  text-orange-300 pt-10 text-2xl lg:text-3xl">
              Project Overview
            </p>
            <p className="leading-normal lg:leading-relaxed pt-5">
              {project?.projectOverview}
            </p>

            <p className="font-bold text-orange-300 pt-10 text-2xl lg:text-3xl">
              Technologies Used
            </p>

            <p className="font-bold text-lightGray pt-10">FRONTEND</p>
            <hr />
            <div className="flex flex-row items-center pt-3 ">
              <RiNextjsFill className="size-7 lg:size-10 " />
              <p className="ml-1 font-semibold">Next.js</p>
              <FaReact className="size-7 lg:size-10 ml-5" />
              <p className="ml-1 font-semibold">React</p>
              <RiTailwindCssFill className="size-7 lg:size-10 ml-5" />
              <p className="ml-1 font-semibold">Tailwind CSS</p>
            </div>

            <p className="font-bold text-lightGray pt-5 lg:pt-10">BACKEND</p>
            <hr />
            <div className="flex flex-row items-center pt-3 ">
              <FaNodeJs className="size-7 lg:size-10 " />
              <p className="ml-1 font-semibold">Node.JS</p>
              <BiLogoPostgresql className="size-7 lg:size-10 ml-5" />
              <p className="ml-1 font-semibold">PostgreSQL</p>
              <SiPrisma className="size-7 lg:size-8 ml-5" />
              <p className="ml-1 font-semibold">Prisma</p>
            </div>
          </div>
          <div className="pt-10 mr-10  ">
            <Image
              src={`${project?.featuredImage}`}
              alt="image"
              width={800}
              height={0}
              className="w-full h-full object-cover shadow-xl border-[10px] border-white "
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:pb-20">
          <div className="flex flex-col col-span-2 lg:flex-row pt-20 gap-5 mx-auto">
            <Image
              src={`${project?.image1}`}
              alt="image"
              width={400}
              height={0}
              className="w-[450px] h-full object-fit shadow-xl border-[10px] border-white"
            />

            <Image
              src={`${project?.image2}`}
              alt="image"
              width={400}
              height={0}
              className="w-[450px] h-full object-fit shadow-xl border-[10px] border-white"
            />
          </div>

          <div className="col-span-1 pt-5 lg:pt-10 m-5 lg:m-5">
            <p className="font-bold text-orange-300 text-2xl lg:text-3xl pt-10">
              Results and Impact
            </p>
            <p className="leading-relaxed pt-5">{project?.results}</p>

            <p className="text-orange-300 font-bold pt-5 pb-5 lg:pt-10 text-2xl lg:text-3xl">
              Features Included
            </p>
            {project?.features.map((feature) => (
              <ul key={uuidv4()} className="list-disc">
                <li className="ml-10 leading-relaxed">{feature}</li>
              </ul>
            ))}
          </div>
        </div>
        <hr />

        <div className="pt-10 lg:pt-20">
          <div className="m-5">
            <p className="font-semibold text-orange-300   text-lg">
              NEED MORE PROJECTS?
            </p>
            <h1 className="text-5xl font-semibold pt-5 pb-10 lg:pb-20">
              Related Projects
            </h1>
          </div>
        </div>

        <div className="w-full">
          {isMobile ? (
            <ProjectsSwiper slidesPerView={1} />
          ) : (
            <ProjectsSwiper slidesPerView={3} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
