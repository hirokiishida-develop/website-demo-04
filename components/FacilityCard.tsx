import Image from "next/image";
import ParallaxItem from "./ParallaxItem";

type FacilityCardProps = {
  img: string
  text: string
}

export default function FacilityCard({ img, text }: FacilityCardProps){
  return (
    <div className="relative w-[calc(50%-0.5px)] aspect-square overflow-hidden">
      <ParallaxItem className="w-full h-full overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src={`/images/home/${img}.jpg`}
          alt={text}
          width={352}
          height={493}
        />
      </ParallaxItem>
      <span className="absolute bottom-2.5 left-2.5 text-white text-xs font-semibold leading-[1.41]">{text}</span>
    </div>
  );
}