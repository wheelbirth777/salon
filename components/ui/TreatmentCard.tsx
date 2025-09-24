import Image from "next/image";

interface TreatmentCardProps {
  image: string;
  title: string;
  price: string;
  session: string;
  badge?: string;
}

export default function TreatmentCard({
  image,
  title,
  price,
  session,
  badge,
}: TreatmentCardProps) {
  return (
    <div className="flex items-center justify-between gap-4 bg-[#fef7f3] p-4 rounded-md shadow-sm">
      <div className="flex items-center gap-4">
        <div className="relative w-14 h-14 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="56px"
            className="object-cover"
          />
          {badge && (
            <span className="absolute -top-2 -right-2 bg-brown-700 text-white text-xs px-2 py-0.5 rounded-full shadow">
              {badge}
            </span>
          )}
        </div>
        <div>
          <h4 className="uppercase text-xs text-brown-800 font-semibold tracking-wider">
            {title}
          </h4>
          <p className="text-[10px] text-gray-600">{session}</p>
        </div>
      </div>
      <div className="text-[#cc4b00] font-semibold text-sm">{price}</div>
    </div>
  );
}
