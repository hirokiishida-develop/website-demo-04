type CategoryButtonProps = {
  url: string
  text: string
}

export default function CategoryButton({ url, text }: CategoryButtonProps) {
  return (
    <a className="text-[10px] font-medium leading-[1.2] py-[3px] px-[6px] border-[1px] border-gray rounded-[50px]" href={url}>
      <span className="scale-90">{text}</span>
    </a>
  );
}