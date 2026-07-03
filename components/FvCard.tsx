import Link from "next/link";
import Image from "next/image";
import ParallaxItem from "./ParallaxItem";

type FvCardProps = {
  title: string;
  url: string;
  img: string;
}

export default function FvCard({ title, url, img }: FvCardProps){
  return (
    <Link className="relative aspect-square overflow-hidden rounded-[5px]" href={url}>
      <ParallaxItem className="h-full">
        <Image
          className="w-full h-auto"
          src={`/images/home/fv_${img}.jpg`}
          alt={title}
          width={118}
          height={118}
        />
      </ParallaxItem>
      <Image
        className="absolute w-auto h-5.5 bottom-2 left-2 z-10"
        src={`/images/home/icon_${img}_wh.png`}
        alt={title}
        width={28}
        height={22}
      />
      <span className="absolute bottom-2 right-2 text-white text-[12px] font-semibold">{title}</span>
    </Link>
  );
}