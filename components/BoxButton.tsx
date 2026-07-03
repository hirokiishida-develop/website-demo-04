import Link from "next/link";

type BoxButtonProps = {
  url: string
  text: string
}

export default function BoxButton({ url, text }: BoxButtonProps){
  return (
    <a className="box-button flex items-center min-h-11 py-2 pr-[58px] pl-[15px] button-bg rounded-[5px]" href={url}>
      <span className="text-white text-xs leading-[1.666]">{text}</span>
    </a>
  );
}