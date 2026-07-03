import Image from "next/image";

type SectionTitleProps = {
  className?: string;
  text: string;
}

export default function SectionTitle({ text, className = '' }: SectionTitleProps){
  return (
    <h2 className={`flex items-center gap-x-1.25 text-xs font-semibold leading-[1.4] ${className}`}>
      <Image
        src="/images/common/icon_logo.png"
        alt="せきがはら人間村"
        width={15}
        height={16}
      />
      {text}
    </h2>
  );
}