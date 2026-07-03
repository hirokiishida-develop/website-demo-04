type RoundedButtonProps = {
  className?: string
  url: string
  text: string
}

export default function RoundedButton({ className='' , url, text }: RoundedButtonProps){
  return (
    <a className={`rounded-button flex items-center justify-center relative text-xs font-semibold leading-[1.4] w-fit h-11.25 py-1.25 pl-11.25 pr-4.5 bg-white rounded-full  ${className}`} href={url}>
      <span className="">{text}</span>
    </a>
  );
}