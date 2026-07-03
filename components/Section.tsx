type SectionProps = {
  children: React.ReactNode
  className?: string;
}

export default function Section({ children, className = ''}: SectionProps){
  return (
    <section className={`relative w-[calc(100%-10px)] mt-25 mx-auto ${className}`}>
      {children}
    </section>
  )
}