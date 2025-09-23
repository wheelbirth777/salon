"use client";
import React from "react";
import Slider from "./Slider/Slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const CustomWebsite = () => {
  return (
    <div>
      <div className="grid grid-cols-2 p-0">
        <div className="col-span-2 xl:col-span-1 w-full h-full">
          <Slider />
        </div>

        <div className="col-span-2 w-full bg-blue-950 pt-5 pb-20 xl:col-span-1 xl:p-10 2xl:px-20">
          <div className="text-white p-10 flex flex-col justify-center h-full">
            <p className="font-semibold text-orange-300">
              CUSTOM WEBSITE DEVELOPMENT
            </p>
            <h1 className="text-5xl font-bold  pt-3 xl:w-5/6">
              What Is Custom Website Development?
            </h1>

            <p className="text-lightGray pt-5">
              {`Custom website development involves designing and building a website from the ground up, tailored to meet the unique needs, goals, and branding of a business. This process stands in stark contrast to template-based solutions, which offer pre-designed, generic website structures that may not fully align with a company’s specific requirements. Here’s a detailed breakdown of what custom website development entails, highlighting its uniqueness and benefits:`}
            </p>
            <div className="leading-loose pt-5">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="hover:no-underline hover:text-lightGray">
                    Tailored Design to Reflect Your Brand Identity
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-lightGray">
                      {`In custom website development, the design is crafted from scratch, focusing on your company’s brand, vision, and audience. Unlike templates that offer limited customization, a custom-built website gives you full control over the aesthetic aspects—color schemes, typography, layout, and visual elements. The design process is closely aligned with your branding guidelines, ensuring that every element, from the logo to the content structure, supports your identity and messaging. `}
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="hover:no-underline hover:text-lightGray">
                    Custom Functionality and Features
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-lightGray">
                      {`Template-based websites come with predefined features and limited flexibility when it comes to functionality. With custom website development, however, the features are built specifically to suit your business. For example, if you run an e-commerce site, you can have customized product pages, payment processing systems, and user accounts tailored to your workflow. If your business requires specific integrations—whether it’s a CRM, a booking system, or an inventory management tool—a custom-built site can integrate seamlessly with these tools, making your operations smoother and more efficient.`}
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="hover:no-underline hover:text-lightGray">
                    Mobile Optimization and Responsive Design
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-lightGray">{` A key aspect of custom website development is ensuring that your website functions seamlessly across all devices, from desktops to smartphones and tablets. While many templates come with “responsive” design options, custom websites can be fine-tuned to perform exceptionally well across all devices, with the flexibility to create device-specific layouts if needed. This level of precision ensures that visitors have a smooth and engaging experience, no matter how they access the site.
                  `}</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="hover:no-underline hover:text-lightGray">
                    Security and Performance Optimization
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-lightGray">
                      {" "}
                      {`Template-based websites often rely on third-party plugins or tools that may have security vulnerabilities or poor optimization. Custom websites, on the other hand, are built with robust security measures from the outset, reducing the risk of hacks, data breaches, and other security threats. Additionally, performance is optimized by using clean, minimal code that enhances site speed and user experience. A fast website is essential for retaining visitors and improving search engine rankings.`}{" "}
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="hover:no-underline hover:text-lightGray">
                    Unique Solutions for Specific Business Models
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-lightGray">{`Whether you run an e-commerce store, a membership-based service, a blog, or any other type of business, a custom website allows for solutions designed specifically for your business model. For instance, a real estate website can feature property listings with custom search filters, while a booking platform can have real-time availability and personalized customer portals. These unique solutions are impossible with a template, where you’re limited to pre-existing features that may not fully match your business requirements.`}</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="hover:no-underline hover:text-lightGray">
                    Better Performance and Speed
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-lightGray">{`A custom website is optimized for performance, reducing unnecessary code and improving load times. Faster websites lead to better user experience and higher SEO rankings, which can increase your online visibility.`}</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        <div className="col-span-2 xl:col-span-1 w-full"></div>
      </div>
    </div>
  );
};

export default CustomWebsite;
