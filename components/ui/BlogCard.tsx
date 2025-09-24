import Image from "next/image";

interface BlogCardProps {
  image: string;
  date: string;
  title: string;
  readMoreColor?: string;
}

export default function BlogCard({
  image,
  date,
  title,
  readMoreColor = "text-black",
}: BlogCardProps) {
  return (
    <div className="space-y-4 max-w-sm">
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width:1024px) 384px, (min-width:768px) 50vw, 100vw"
          className="object-cover rounded-sm"
        />
      </div>

      <div className="text-sm text-gray-600 flex items-center gap-2">
        <span className="border-b border-gray-400">Trending</span>
        <span className="text-yellow-700">•</span>
        <span>{date}</span>
      </div>

      <h3 className="text-lg font-medium text-gray-800 leading-snug">
        {title}
      </h3>

      <a
        href="#"
        className={`text-sm font-medium group inline-flex items-center gap-2 ${readMoreColor}`}
      >
        Read More
        <span className="transform group-hover:translate-x-1 transition">
          →
        </span>
      </a>
    </div>
  );
}
