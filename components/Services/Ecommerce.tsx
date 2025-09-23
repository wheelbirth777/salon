import Image from "next/image";
import React from "react";

const Ecommerce = () => {
  return (
    <div>
      <div className="w-screen bg-orange-300">
        <div className="grid grid-cols-1   lg:grid-cols-2   xl:max-w-screen-2xl mx-auto">
          <div className="flex items-center  ">
            <div className="p-5 xl:pl-20">
              <p className="font-semibold text-white">SERVICE</p>
              <h1 className="text-5xl font-bold pt-2">Ecommerce Development</h1>
              <p className="font-semibold text-xl pt-3 text-orange-100">
                Seamless E-commerce Solutions
              </p>

              <p className="leading-relaxed pt-10">
                Elevate your online business with our expert e-commerce
                development services. We create powerful, secure, and scalable
                e-commerce platforms tailored to your specific business needs.
                From seamless product management and intuitive shopping
                experiences to secure payment gateways and efficient order
                tracking, we build feature-rich online stores that drive sales
                and customer satisfaction.
              </p>
              <p className="leading-relaxed pt-5 ">
                Whether you’re launching a new online shop or upgrading an
                existing one, we’ll help you deliver seamless customer journeys
                that drive conversions and build lasting loyalty.
              </p>

              <p className="leading-relaxed pt-5 ">
                Let us help you build a website that drives engagement,
                increases conversions, and grows your business!
              </p>
            </div>
          </div>
          <div className=" bg-white relative ">
            <Image
              src={"/images/services/ecommerce5.webp"}
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

export default Ecommerce;
