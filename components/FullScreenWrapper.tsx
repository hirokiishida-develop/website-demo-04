type FullScreenWrapperProps = {
  children: React.ReactNode
  className?: string
}

export default function FullScreenWrapper({ children, className='' }: FullScreenWrapperProps){
  return (
    <div className={`relative w-full h-[calc(100svh-5px)] pt-1.25 ${className}`}>
      <div className="relative w-full h-full rounded-1.25 overflow-hidden">
        {children}
      </div>
    </div>
  );
}