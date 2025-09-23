import Image from "next/image";
import React from "react";

const ArtificialIntelligence = () => {
  return (
    <div>
      <div className="w-screen bg-orange-300">
        <div className="grid grid-cols-1 lg:grid-cols-2  xl:max-w-screen-2xl mx-auto">
          <div className="p-5 xl:pl-20">
            <Image
              src={"/images/services/ai4.webp"}
              alt="image"
              width={800}
              height={0}
              className="w-full   object-cover shadow-2xl"
            />
          </div>

          <div className="p-5 xl:pl-20">
            <p className="font-semibold text-white">SERVICE</p>
            <h1 className="text-5xl font-bold pt-2">
              Artificial Intelligence Services
            </h1>
            <p className="font-semibold text-xl pt-3 text-orange-100">
              AI to Transform Your Business!
            </p>

            <p className="leading-relaxed pt-10">
              Leverage the power of Artificial Intelligence to enhance your
              website and digital platforms. Our AI services provide
              cutting-edge solutions that optimize user experience, automate
              processes, and deliver personalized experiences. Whether you’re
              looking to integrate chatbots, boost search functionality, or
              implement advanced security systems, we offer a wide range of
              AI-powered services tailored to your business needs.
            </p>
            <p className="leading-relaxed pt-5 ">
              Our expertise spans machine learning, natural language processing,
              and computer vision, enabling us to create custom AI models that
              solve complex challenges. Whether you’re looking to streamline
              operations, gain actionable insights, or revolutionize customer
              engagement, our AI solutions are designed to help your business
              thrive in the digital era.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtificialIntelligence;
