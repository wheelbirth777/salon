import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PriceDetails = () => {
  return (
    <div className="grid grid-cols-2 p-0">
      <div className="col-span-2 xl:col-span-1 w-full">
        <Image
          src="/images/1.jpeg"
          alt=""
          width={0}
          height={0}
          sizes="800px"
          className="w-screen h-[50vh] xl:h-[100vh] object-cover"
        />
      </div>

      <div className="col-span-2 w-full bg-blue-950 pt-5 pb-20 xl:col-span-1 xl:p-10 2xl:px-20">
        <div className="text-white p-10 flex flex-col justify-center h-full">
          <p className="font-semibold text-orange-300">OUR STARTER PACKAGE</p>
          <h1 className="text-5xl font-bold  pt-3 xl:w-5/6">
            Affordable and Professional Web Solutions
          </h1>
          <p className="text-3xl font-bold  pt-3 xl:w-5/6">$499 One-Time Fee</p>

          <p className="font-semibold text-orange-300 text-2xl pt-10">{`What's included?`}</p>
          <div className="leading-loose pt-5">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="hover:no-underline hover:text-lightGray">
                  Custom Website Development
                </AccordionTrigger>
                <AccordionContent>
                  <p className="font-semibold text-orange-100 text-xl">
                    Tailored Solutions, Built for Success
                  </p>
                  <p className="text-lightGray pt-5">{`We specialize in crafting visually stunning, user-friendly websites tailored to your business needs. 
                  Our team combines creativity with cutting-edge technology to deliver fully responsive, fast, 
                  and scalable websites that not only look great but also perform exceptionally across all devices.`}</p>
                  <p className="text-lightGray pt-5">{`From sleek, modern designs to seamless navigation, we ensure that your online presence leaves a lasting impression. 
                  Whether you’re starting from scratch or revamping an existing site, we offer comprehensive web solutions—from wireframing 
                  and prototyping to development, deployment, and ongoing support.`}</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="hover:no-underline hover:text-lightGray">
                  Mobile Optimization
                </AccordionTrigger>
                <AccordionContent>
                  <p className="font-semibold text-orange-100 text-xl">
                    Optimized for Every Device, Everywhere
                  </p>
                  <p className="text-lightGray pt-5">
                    {" "}
                    {` In today’s mobile-first world, we ensure your website delivers
                  an exceptional experience across all devices. Our mobile
                  optimization services focus on making your website fast,
                  responsive, and easy to navigate on smartphones and tablets,
                  enhancing user experience and boosting engagement. `}{" "}
                  </p>

                  <p className="text-lightGray pt-5">
                    {`We optimize every aspect, from page load speed and mobile-friendly layouts to touch-friendly navigation and adaptive images. 
                    With a mobile-optimized site, you’ll not only improve user satisfaction but also enhance your search engine rankings and conversion rates.`}
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="hover:no-underline hover:text-lightGray">
                  User Friendly UX/UI Design
                </AccordionTrigger>
                <AccordionContent>
                  <p className="font-semibold text-orange-100 text-xl">
                    Designs That Inspire and Engage
                  </p>

                  <p className="text-lightGray pt-5">{`We craft intuitive and visually stunning designs that elevate your brand and captivate your audience. Our User Experience (UX) and User Interface (UI) design services focus on creating seamless interactions, ensuring your digital products are both functional and delightful to use.
`}</p>
                  <p className="text-lightGray pt-5">
                    {`We start by understanding your audience and business goals to design interfaces that tell your story effectively. Whether it’s a website, mobile app, or software dashboard, we prioritize usability, accessibility, and aesthetics to ensure your users enjoy every interaction.`}
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="hover:no-underline hover:text-lightGray">
                  Social Media Integration
                </AccordionTrigger>
                <AccordionContent>
                  <p className="font-semibold text-orange-100 text-xl">
                    Seamlessly Connect Your Website with Social Media
                  </p>
                  <p className="text-lightGray pt-5">{`We make your online presence more dynamic and engaging by integrating your website with powerful social media platforms. With our Social Media Integration service, we ensure your audience can effortlessly interact, share, and connect across all channels, enhancing your brand visibility and reach. `}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceDetails;
