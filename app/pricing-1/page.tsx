import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import StarterPackage from "@/app/pricing/starterpackage/StarterPackage";
import BusinessPackage from "@/app/pricing/businesspackage/BusinessPackage";
import PremiumPackage from "@/app/pricing/premiumpackage/PremiumPackage";

import { MdRocketLaunch } from "react-icons/md";
import { ImBriefcase } from "react-icons/im";
import { IoDiamond } from "react-icons/io5";

const triggerBase =
  "group flex flex-col items-center justify-center rounded-xl border border-white/15 bg-white/5 backdrop-blur " +
  "px-4 py-5 data-[state=active]:border-orange-400 data-[state=active]:bg-orange-500/20";

const iconBase =
  "h-10 w-10 text-orange-200 group-data-[state=active]:text-orange-300";

const Pricing = () => {
  return (
    <div className="w-full bg-blue-900 text-white">
      <div className="lg:max-w-7xl px-4 lg:mx-auto bg-blue-950 relative top-[-75px] shadow-xl pt-20">
        {/* ---------------- One-Time Packages ---------------- */}
        <section className="relative isolate pt-10 pb-16 lg:pt-10 lg:pb-12">
          <div className="px-5 lg:px-10">
            <h2 className="text-3xl font-bold mb-6">Explore the Plans</h2>
            <p className="text-slate-300 mb-10">
              Choose from one-time website packages. Pay once, the site is yours
              forever.
            </p>
          </div>

          <Tabs defaultValue="starter" className="text-white">
            {/* Tab Buttons */}
            <TabsList className="relative z-10 px-5 lg:px-10 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-transparent mb-12">
              <TabsTrigger value="starter" className={triggerBase}>
                <MdRocketLaunch className={iconBase} />
                <p className="mt-3 text-base font-medium">Starter</p>
              </TabsTrigger>
              <TabsTrigger value="business" className={triggerBase}>
                <ImBriefcase className={iconBase} />
                <p className="mt-3 text-base font-medium">Business</p>
              </TabsTrigger>
              <TabsTrigger value="premium" className={triggerBase}>
                <IoDiamond className={iconBase} />
                <p className="mt-3 text-base font-medium">Premium</p>
              </TabsTrigger>
            </TabsList>

            {/* Tab Panels */}
            <div className="relative z-0 px-5 lg:px-10 mt-2">
              <TabsContent value="starter">
                <StarterPackage />
              </TabsContent>
              <TabsContent value="business">
                <BusinessPackage />
              </TabsContent>
              <TabsContent value="premium">
                <PremiumPackage />
              </TabsContent>
            </div>
          </Tabs>
        </section>

        {/* ---------------- WaaS Subscriptions ---------------- */}
        <section className="bg-blue-900 px-5 lg:px-10 py-16">
          <h2 className="text-3xl font-bold mb-6">WaaS Subscriptions</h2>
          <p className="text-slate-300 mb-10">
            Industry-ready websites offered as a service. Pay monthly, and we
            handle hosting, updates, and support.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Example WaaS cards – you can build these like your PlanCard */}
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-xl font-semibold">Salon WaaS</h3>
              <p className="mt-2 text-slate-300 text-sm">
                Perfect for beauty salons and stylists. Launch quickly with
                booking features.
              </p>
              <p className="mt-4 text-2xl font-bold">$59/mo</p>
              <button className="mt-6 w-full rounded-full bg-orange-600 px-5 py-2.5 font-semibold text-white hover:bg-orange-500">
                Subscribe
              </button>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-xl font-semibold">Dentist WaaS</h3>
              <p className="mt-2 text-slate-300 text-sm">
                Tailored for dental clinics with appointment scheduling and
                patient info.
              </p>
              <p className="mt-4 text-2xl font-bold">$79/mo</p>
              <button className="mt-6 w-full rounded-full bg-orange-600 px-5 py-2.5 font-semibold text-white hover:bg-orange-500">
                Subscribe
              </button>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-xl font-semibold">Other WaaS</h3>
              <p className="mt-2 text-slate-300 text-sm">
                Need something else? We offer WaaS plans for various industries
                like real estate, repairs, and more.
              </p>
              <p className="mt-4 text-2xl font-bold">Custom Pricing</p>
              <button className="mt-6 w-full rounded-full bg-orange-600 px-5 py-2.5 font-semibold text-white hover:bg-orange-500">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;
