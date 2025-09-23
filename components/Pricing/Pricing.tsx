import Link from "next/link";

const data = [
  {
    title: "Starter Package",
    subTitle: "Affordable and Professional Web Solutions",
    price: "$1.5k - $2.5k",
    feature1: "Single Page Web Application(SPA)",
    feature2: "Custom SPA website design (up to 5 pages)",
    feature3: "Mobile optimization & responsiveness",
    feature4: "User Friendly UX/UI Design",
    feature5: "Social Media Integration",
    bgColor1: "bg-orange-200",
    bgColor2: "bg-orange-100",
  },

  {
    title: "Business Package",
    subTitle: "Empower Your Business with a Custom Website Solution",
    price: "$2.5k - $8k",
    feature1: "Single Page Web Application(SPA)",
    feature2: "Custom website design (up to 15 pages)",
    feature3: "Content Management System (CMS)",
    feature4: "Support & Maintenance",
    feature5: "and more...",
    bgColor1: "bg-red-200",
    bgColor2: "bg-red-100",
  },

  {
    title: "Premium Package",
    subTitle: "The Ultimate Solution for Businesses",
    price: "$8k and up",
    feature1: "Single Page Web Application(SPA)",
    feature2: "Everything in the Business Package",
    feature3: "Fully bespoke website design",
    feature4: "Full e-commerce setup(Unlimited Items)",
    feature5: "and more...",
    bgColor1: "bg-blue-200",
    bgColor2: "bg-blue-100",
  },

  {
    title: "Monthly Package",
    subTitle: "A Starter Package with flexible and affordable monthly plans",
    price: "$200/month (1 Year Commitment)",
    feature1: "Single Page Web Application(SPA)",
    feature2: "Custom SPA website design (up to 5 pages)",
    feature3: "Mobile optimization & responsiveness",
    feature4: "User Friendly UX/UI Design",
    feature5: "Social Media Integration",
    bgColor1: "bg-teal-200",
    bgColor2: "bg-teal-100",
  },
];
// components/Card.js
export default function Card() {
  return (
    <div className="flex flex-row gap-3    shadow-md overflow-hidden">
      {data.map((item) => (
        <div key={item.title} className="w-[300px] border border-teal-200 ">
          <div className={`${item.bgColor1}`}>
            <p className="text-lg py-3 text-black text-center font-bold">
              {item.title}
            </p>
          </div>

          <div className={`p-6 ${item.bgColor2}`}>
            <p className="text-left text-gray pb-5">{item.subTitle}</p>
            <hr />
            <h2 className="text-xl   font-semibold text-gray-800">
              {`What's included?`}
            </h2>
            <ul className="list-disc text-gray text-sm pl-4 pb-3 pt-3">
              <li>{item.feature1}</li>
              <li>{item.feature2}</li>
              <li>{item.feature3}</li>
              <li>{item.feature4}</li>
              <li>{item.feature5}</li>
            </ul>

            <hr />

            <div className="mt-4 text-center">
              <Link
                href="/pricing"
                className="inline-block px-4 py-2 text-sm text-white bg-black rounded-sm text-right  hover:bg-orange-400"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
