"use client"

import { useCallback, useEffect, useRef, useState, forwardRef } from "react"
import { Moon, Sun } from "lucide-react"
import { flushSync } from "react-dom"

import { cn } from "@/lib/utils"

interface AnimatedThemeTogglerProps extends React.HTMLAttributes<HTMLElement> {
  duration?: number
  as?: React.ElementType
}

export const AnimatedThemeToggler = forwardRef<HTMLElement, AnimatedThemeTogglerProps>(({
  className,
  duration = 400,
  as: Component = 'button',
  ...props
}, ref) => {
  const [isDark, setIsDark] = useState(false)
  const buttonRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"))
    }

    updateTheme()

    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return

    await document.startViewTransition(() => {
      flushSync(() => {
        const newTheme = !isDark
        setIsDark(newTheme)
        document.documentElement.classList.toggle("dark")
        localStorage.setItem("theme", newTheme ? "dark" : "light")
      })
    }).ready

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    )

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    )
  }, [isDark, duration])

  return (
    <Component
      ref={(node: HTMLElement | null) => {
        if (node) {
          (buttonRef as React.MutableRefObject<HTMLElement | null>).current = node;
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            (ref as React.MutableRefObject<HTMLElement | null>).current = node;
          }
        }
      }}
      onClick={toggleTheme}
      className={cn(
        'flex items-center justify-center',
        Component === 'button' && 'cursor-pointer',
        className
      )}
      {...(Component === 'button' ? { type: 'button' } : {})}
      {...props}
    >
      {isDark ? (
        <Sun className="h-4 w-4 hover:text-emerald-400" />
      ) : (
        <Moon className="h-4 w-4 hover:text-emerald-400" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Component>
  )
})

AnimatedThemeToggler.displayName = 'AnimatedThemeToggler'
