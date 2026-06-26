import Image from "next/image";
import Link from "next/link";
import FvSlider from "@/components/FvSlider";
import ParallaxItem from '@/components/ParallaxItem';

type FvCardProps = {
  title: string;
  url: string;
  img: string;
}

const FvCard = ({ title, url, img }: FvCardProps) => {
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

const NewsCard = () => {
  return (
    <Link className="flex flex-col shrink-0 gap-y-2.5 w-40" href="">
      <figure className="">
        <Image
          className="rounded-[5px]"
          src="/images/home/info_01.jpg"
          alt="title"
          width={160}
          height={160}
        />
      </figure>
      <div className="">
        <p>aaaaaa</p>
        <p>bbbbbb</p>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <div className="px-1.25">
        <div className="relative w-full h-[calc(100svh-33.3333vw-0.33334rem)] pt-1.25">
          <div className="absolute top-0 left-0 w-full h-full z-10">
            <div className="flex absolute bottom-0 left-2">
              <p className="order-2 text-white text-[10px] leading-[1.4] writing-vertical-rl">
                <span>（</span>
                LIVING, ART AND SCENERY
                <span>）</span>
              </p>
              <p className="order-1 text-white text-[38px] tracking-[0.07em] leading-[1.1] writing-vertical-rl">生活と、<br />アートと、<br />風景。</p>
            </div>
          </div>
          <div className="relative w-full h-full rounded-[5px] overflow-hidden">
            <div className="absolute top-[-5px] left-0 w-full h-[calc(100%+10px)]">
              <div className="w-full h-full translate-y-[0lvh] transition-[transform 2s cubic-bezier(.19,1,.22,1) 0.5s]">
                <FvSlider />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-1.25 mt-1.25">
          <FvCard title="生活美術館" url="#" img="museum" />
          <FvCard title="未来食堂" url="#" img="restaurant" />
          <FvCard title="cafe mirai" url="#" img="cafe" />
        </div>
      </div>

      <div className="mt-25">
        <div className="px-1.25">
          <div className="border-t border-[#e5e5e5]">
            <h2 className="flex items-center gap-x-1 text-xs font-semibold pt-2.75 px-1.25">
              <Image
                src="/images/common/icon_logo.png"
                alt="せきがはら人間村"
                width={15}
                height={16}
              />
              お知らせ
            </h2>
            <div className="mt-7.5">
              <div className="relative pt-13.75">
                <div className="absolute top-0 left-1.25 text-[45px] tracking-[-0.01em] leading-[0.7777]">NEWS</div>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex gap-x-1.25 w-[calc(100%+10px)] ml-[-5px] pl-1.25 overflow-x-auto scrollbar-none">
                  <NewsCard />
                  <NewsCard />
                  <NewsCard />
                  <NewsCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




    </>


  );
}
