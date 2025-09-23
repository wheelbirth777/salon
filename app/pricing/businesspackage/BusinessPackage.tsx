import Image from "next/image";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import packageData from "@/app/pricing/packageData2";

const BusinessPackage = () => {
  const item = packageData[1];

  return (
    <div className="grid grid-cols-2 p-0">
      <div className="col-span-2 w-full bg-blue-950   pb-20 xl:col-span-1   2xl:px-20">
        <div className="text-white   text-left  px-5">
          <p
            className="font-semibold text-orange-300 pt-10 lg:pt-0  "
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            {item.title}
          </p>
          <h1
            className="text-4xl font-bold  pt-3 xl:w-5/6"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            {item.subTitle}
          </h1>
          <p
            className="text-3xl font-bold text-orange-400  pt-3 xl:w-5/6"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            {item.price}
          </p>

          <p className="font-semibold text-orange-300 text-2xl pt-10">{`What's included?`}</p>
          <div className="leading-loose pt-5">
            <Accordion type="single" collapsible className="w-full">
              {item.included.map((subItem) => (
                <AccordionItem value={subItem.id} key={uuidv4()}>
                  <AccordionTrigger className="hover:no-underline hover:text-lightGray">
                    {subItem.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="font-semibold text-orange-100 text-xl">
                      {subItem.subTitle}
                    </p>
                    <p className="text-lightGray pt-5">
                      {subItem.description1}
                    </p>
                    <p className="text-lightGray pt-5">
                      {subItem.description2}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      <div className="col-span-2 xl:col-span-1 w-full h-full  ">
        <Image
          src="/images/services/businessBg.webp"
          alt=""
          width={700}
          height={0}
          className="w-full object-cover lg:pl-10"
        />
      </div>
    </div>
  );
};

export default BusinessPackage;
