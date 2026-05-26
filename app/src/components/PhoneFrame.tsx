import type { ReactNode } from 'react'

interface PhoneFrameProps {
  children: ReactNode
}

/**
 * 桌面端浏览器里模拟 iPhone 视口的容器。
 * - 桌面:固定 390×844(iPhone 14 尺寸),带圆角和阴影
 * - 移动端:占满屏幕,自适应安全区
 */
export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="min-h-full w-full flex items-center justify-center bg-canvas-stage p-0 sm:p-6">
      <div
        className="
          relative bg-canvas overflow-hidden
          w-full h-[100dvh]
          sm:w-[390px] sm:h-[844px]
          sm:rounded-phone sm:shadow-phone
        "
      >
        {children}
      </div>
    </div>
  )
}
