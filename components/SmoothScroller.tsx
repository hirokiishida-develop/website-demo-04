'use client'
import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

type SmoothScrollerProps = {
  children: React.ReactNode
}

export default function SmoothScroller({ children }: SmoothScrollerProps){
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current
    const content = contentRef.current

    if (!wrapper || !content) return

    const ctx = gsap.context(() => {
      ScrollSmoother.get()?.kill()

      ScrollSmoother.create({
        wrapper,
        content,
        smooth: 1,
        effects: true,
        normalizeScroll: true,
      })
    }, wrapper)

    return () => {
      ScrollSmoother.get()?.kill()
      ctx.revert()
    }
  }, [])


  return (
    <div ref={wrapperRef} id="smooth-wrapper" className="overflow-hidden">
      <div ref={contentRef} id="smooth-content">
        {children}
      </div>
    </div>
  );
}
