import Image from "next/image";
import BlogCard from "./BlogCard";

const blogPosts = [
  {
    image: "/images/spa-blog-1.webp",
    date: "Aug 20, 2024",
    title: "Spring is in the Air and So Our These Amazing Spa Offers",
  },
  {
    image: "/images/spa-blog-2.webp",
    date: "Aug 20, 2024",
    title: "We giving Amazing special spa and message service for vip.",
    readMoreColor: "text-yellow-600",
  },
  {
    image: "/images/spa-blog-3.webp",
    date: "Aug 20, 2024",
    title: "Looks reasonable. The generate is therefore always.",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-white py-20 text-center">
      <div className="text-center mb-16">
        <div className="flex flex-col items-center mb-2">
          <Image
            src="/images/logo4.webp"
            alt="Logo 2"
            width={80}
            height={80}
            className="w-20 h-20 mb-1"
            priority
          />
          <p className="uppercase text-yellow-700 text-sm tracking-widest font-light">
            Blogs
          </p>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          News & Articles
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid gap-12 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {blogPosts.map((post, idx) => (
          <BlogCard key={idx} {...post} />
        ))}
      </div>
    </section>
  );
}
