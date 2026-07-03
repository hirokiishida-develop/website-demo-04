type SectionLabelProps = {
  text: string
  className?: string
}

export default function SectionLabel({ text, className='' }: SectionLabelProps){
  return (
    <div className={`absolute top-0 text-[45px] tracking-[-0.05em] leading-[0.777] font-medium ${className}`}>{text}</div>
  );
}