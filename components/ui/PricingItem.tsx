// components/PricingItem.tsx
import Image from "next/image";

interface PricingItemProps {
  image: string;
  title: string;
  subtitle: string;
  price: string;
}

export default function PricingItem({
  image,
  title,
  subtitle,
  price,
}: PricingItemProps) {
  return (
    <div className="flex items-center justify-between gap-4 py-4 border-b border-dotted border-gray-300">
      <div className="flex items-center gap-4">
        <div className="relative w-14 h-14">
          <Image
            src={image}
            alt={title}
            fill
            sizes="56px"
            className="object-cover rounded-md"
          />
        </div>
        <div>
          <h4 className="text-gray-800 font-medium">{title}</h4>
          <p className="text-sm italic text-yellow-700">{subtitle}</p>
        </div>
      </div>
      <div className="text-yellow-600 font-semibold text-lg">{price}</div>
    </div>
  );
}
