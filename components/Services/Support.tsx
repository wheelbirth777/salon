import Image from "next/image";
import React from "react";

const Support = () => {
  return (
    <div>
      <div className="w-screen bg-orange-300">
        <div className="grid grid-cols-1   lg:grid-cols-2  xl:max-w-screen-2xl mx-auto">
          <div className="flex items-center lg:pt-20 ">
            <div className="p-5 xl:pl-20">
              <p className="font-semibold text-white">SERVICE</p>
              <h1 className="text-5xl font-bold pt-2">
                Website Maintenance and Support
              </h1>
              <p className="font-semibold text-xl pt-3 text-orange-100">
                Keep Your Site Running Smoothly
              </p>

              <p className="leading-relaxed pt-10">
                Our maintenance and support services ensure that your website
                stays up-to-date, secure, and running smoothly. We provide
                ongoing updates, performance optimizations, and security
                monitoring to prevent issues before they impact your business.
              </p>
              <p className="leading-relaxed pt-5 ">
                From sleek, modern designs to seamless navigation, we ensure
                that your online presence leaves a lasting impression. Whether
                you’re starting from scratch or revamping an existing site, we
                offer comprehensive web solutions—from wireframing and
                prototyping to development, deployment, and ongoing support.
              </p>
            </div>
          </div>
          <div className=" bg-white relative ">
            <Image
              src={"/images/services/support3.webp"}
              alt="image"
              width={1024}
              height={0}
              className="w-full h-full  object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
