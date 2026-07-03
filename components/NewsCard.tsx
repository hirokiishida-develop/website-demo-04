import Image from "next/image";
import Link from "next/link";

type NewsCardProps = {
  url: string
  img: string
  date: string
  category: string
  title: string
  views: string

}

export default function NewsCard({ url, img, date, category, title, views }: NewsCardProps){
  return (
    <Link className="flex flex-col shrink-0 gap-y-2.5 w-40" href={url}>
      <figure>
        <Image
          className="rounded-[5px]"
          src={`/images/home/${img}.jpg`}
          alt="title"
          width={160}
          height={160}
        />
      </figure>
      <div className="flex flex-col gap-y-[10px] px-2.5">
        <div className="flex items-center justify-between">
          <span className="color-gray text-[10px] leading-[1.5]">（&nbsp;{date}&nbsp;）</span>
          <span className="text-[10px] leading-[1.2] py-[3px] px-[6px] border-[1px] border-gray rounded-[50px]">{category}</span>
        </div>
        <div className="flex flex-col gap-y-[6px]">
          <p className="text-[14px] font-semibold leading-[1.35] w-[calc(100%+10px)]">{title}</p>
          <span className="flex items-center color-gray text-[10px]">
            <span className="block scale-[0.75]">VIEW:</span>
            {views}
          </span>
        </div>
      </div>
    </Link>
  );
}