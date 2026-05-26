/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // 品牌主橙(淘宝橙系,从设计稿橙线/按钮提取)
        brand: {
          DEFAULT: '#FF4D00',
          50: '#FFF1EB',
          100: '#FFE0D1',
          500: '#FF4D00',
          600: '#E64500',
        },
        // 红包/特价红
        coupon: {
          DEFAULT: '#FF3B30',
          bg: '#FFEDEB',
        },
        // 文字层级
        ink: {
          DEFAULT: '#1A1A1A',
          secondary: '#666666',
          tertiary: '#999999',
          inverse: '#FFFFFF',
        },
        // 背景层级
        canvas: {
          DEFAULT: '#FFFFFF',
          soft: '#F7F7F8',
          stage: '#2A2A2A', // demo board 背景,模拟设计稿评审感
        },
        line: '#EDEDED',
      },
      fontFamily: {
        sans: [
          '"PingFang SC"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Helvetica Neue"',
          'Helvetica',
          '"Microsoft YaHei"',
          'Arial',
          'sans-serif',
        ],
        display: [
          'Helvetica',
          'Arial',
          '"PingFang SC"',
          'sans-serif',
        ],
      },
      borderRadius: {
        phone: '44px',
      },
      boxShadow: {
        phone: '0 30px 60px -20px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)',
        chip: '0 1px 2px rgba(0,0,0,0.04)',
      },
      animation: {
        'slide-up': 'slide-up 220ms cubic-bezier(0.22, 1, 0.36, 1)',
        'fade-in': 'fade-in 180ms ease-out',
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
