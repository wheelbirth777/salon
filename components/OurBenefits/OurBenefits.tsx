import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Link from "next/link";

const OurBenefits = () => {
  return (
    <div className="grid grid-cols-2 p-0  bg-black">
      <div
        className="col-span-2 xl:col-span-1 w-full"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <Image
          src="/images/1.jpeg"
          alt=""
          width={0}
          height={0}
          sizes="800px"
          className="w-screen h-[50vh] xl:h-[100vh] object-cover "
        />
      </div>

      <div className="col-span-2 w-full bg-blue-950 pt-5 pb-20 xl:col-span-1 xl:p-10 2xl:px-20">
        <div className="text-white p-5 flex flex-col justify-center h-full">
          <p className="font-semibold text-orange-300">OUR SERVICES</p>
          <h1
            className="text-4xl font-bold   pt-3 xl:w-5/6"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Comprehensive Solutions for Every Need
          </h1>
          <div className="leading-loose pt-5">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="hover:no-underline hover:text-lightGray">
                  Custom Website Development
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lightGray">{`We specialize in crafting visually stunning, user-friendly websites tailored to your business needs. 
                  Our team combines creativity with cutting-edge technology to deliver fully responsive, fast, 
                  and scalable websites that not only look great but also perform exceptionally across all devices.`}</p>
                  <p className="text-lightGray pt-5">{`From sleek, modern designs to seamless navigation, we ensure that your online presence leaves a lasting impression. 
                  Whether you’re starting from scratch or revamping an existing site, we offer comprehensive web solutions—from wireframing 
                  and prototyping to development, deployment, and ongoing support.`}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="hover:no-underline hover:text-lightGray">
                  Artificial Intelligence(AI) services
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lightGray">
                    {`Leverage the power of Artificial Intelligence to enhance your website and digital platforms. Our AI services provide cutting-edge solutions that optimize user experience, automate processes, and deliver personalized experiences. Whether you’re looking to integrate chatbots, boost search functionality, or implement advanced security systems, we offer a wide range of AI-powered services tailored to your business needs.`}
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="hover:no-underline hover:text-lightGray">
                  Ecommerce Development
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lightGray">{`Elevate your online business with our expert e-commerce development services. We create
                  powerful, secure, and scalable e-commerce platforms tailored to your specific business needs.
                  From seamless product management and intuitive shopping experiences to secure payment gateways
                  and efficient order tracking, we build feature-rich online stores that drive sales and customer satisfaction.
                  `}</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="hover:no-underline hover:text-lightGray">
                  Mobile Optimization
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lightGray">
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

              <AccordionItem value="item-5">
                <AccordionTrigger className="hover:no-underline hover:text-lightGray">
                  Website Maintenance and Support
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lightGray">{`Our maintenance and support services ensure that your website stays up-to-date, secure, and running smoothly. We provide ongoing updates, performance optimizations, 
                  and security monitoring to prevent issues before they impact your business.`}</p>
                  <p className="text-lightGray pt-5">
                    {`From fixing bugs and troubleshooting technical problems to updating content and adding new features, our dedicated team is here to support you every step of the way. 
                    Whether it’s regular backups, uptime monitoring, or adapting your site to evolving technology standards, we’ve got you covered.`}
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Link
              href="/services"
              className="inline-block px-4 py-2 pt-20 text-sm text-white bg-black rounded-sm text-right  hover:bg-orange-400"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBenefits;
