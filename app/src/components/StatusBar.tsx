/**
 * iOS 风格的状态栏。设计稿里所有屏都带 9:41,模拟真实 iPhone 状态栏。
 */
export function StatusBar() {
  return (
    <div className="h-11 px-6 flex items-center justify-between text-[15px] font-semibold text-ink bg-canvas">
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        {/* 信号 */}
        <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
          <rect x="0" y="7" width="3" height="4" rx="0.5" />
          <rect x="4.5" y="5" width="3" height="6" rx="0.5" />
          <rect x="9" y="3" width="3" height="8" rx="0.5" />
          <rect x="13.5" y="0" width="3" height="11" rx="0.5" />
        </svg>
        {/* WiFi */}
        <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor">
          <path d="M8 11l2-2c-.5-.5-1.2-.8-2-.8s-1.5.3-2 .8l2 2zm4-4l1.5-1.5c-1.4-1.4-3.3-2.2-5.5-2.2s-4.1.8-5.5 2.2L4 7c1-1 2.4-1.6 4-1.6s3 .6 4 1.6zm3-3l1.5-1.5C14.2 0 11.3-1 8-1S1.8 0-.5 2.5L1 4c2-2 4.5-3 7-3s5 1 7 3z" />
        </svg>
        {/* 电池 */}
        <div className="relative w-[24px] h-[11px] rounded-[2.5px] border border-ink/40 flex items-center px-[1px]">
          <div className="h-[7px] w-[18px] rounded-[1.5px] bg-ink"></div>
          <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[1.5px] h-[4px] bg-ink/40 rounded-r-[1px]"></div>
        </div>
      </div>
    </div>
  )
}
