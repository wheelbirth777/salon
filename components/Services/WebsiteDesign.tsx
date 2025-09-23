import Image from "next/image";
import React from "react";

const CustomWebsite = () => {
  return (
    <div>
      <div className="w-screen bg-orange-300">
        <div className="grid grid-cols-1   lg:grid-cols-2   xl:max-w-screen-2xl mx-auto">
          <div className="flex items-center lg:pt-20 ">
            <div className="p-5 xl:pl-20">
              <p className="font-semibold text-white">SERVICE</p>
              <h1 className="text-5xl font-bold pt-2">
                Custom Web Development
              </h1>
              <p className="font-semibold text-xl pt-3 text-orange">
                Tailored Solutions for Unique Projects
              </p>

              <p className="leading-relaxed pt-10">
                In today’s fast-paced digital world, having a modern,
                high-performing website is more important than ever. After years
                of delivering various web solutions, we’ve made the strategic
                decision to focus exclusively on Single Page Application (SPA)
                development. At JATLink Labs “custom” isn’t just a buzzword—it’s
                the foundation of everything we build. When we say custom
                websites, we mean websites that are 100% tailored to your unique
                business needs, goals, and vision. No templates. No generic
                solutions. No unnecessary compromises.
              </p>
              <p className="leading-relaxed pt-5 ">
                From sleek, modern designs to seamless navigation, we ensure
                that your online presence leaves a lasting impression. Whether
                you’re starting from scratch or revamping an existing site, we
                offer comprehensive web solutions—from wireframing and
                prototyping to development, deployment, and ongoing support.
              </p>

              <p className="leading-relaxed pt-5 ">
                Let us help you build a website that drives engagement,
                increases conversions, and grows your business!
              </p>
            </div>
          </div>
          <div className=" bg-white relative ">
            <Image
              src={"/images/services/customWeb2.webp"}
              alt="image"
              width={1024}
              height={0}
              className="w-full h-full object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomWebsite;
