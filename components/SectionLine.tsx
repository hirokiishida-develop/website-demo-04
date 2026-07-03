type SectionLineProps = {
  children: React.ReactNode
  className?: string;
}

export default function SectionLine({ children, className = ''}: SectionLineProps){
  return (
    <div className={`mt-25 mx-auto pt-2.5 px-2.5 section-border-top ${className}`}>
      {children}
    </div>
  );
}