type SectionMainProps = {
  children: React.ReactNode;
  className?: string;
}

export default function SectionMain({ children, className = ''}: SectionMainProps){
  return (
    <div className={`flex flex-col justify-start relative mt-7.5 pt-13.25 ${className}`}>
      {children}
    </div>
  );
}