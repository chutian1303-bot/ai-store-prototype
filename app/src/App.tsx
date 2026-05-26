import { PhoneFrame } from './components/PhoneFrame'
import { StatusBar } from './components/StatusBar'

function App() {
  return (
    <PhoneFrame>
      <div className="flex flex-col h-full bg-canvas">
        <StatusBar />
        <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-brand text-white flex items-center justify-center text-2xl font-semibold mb-6">
            安
          </div>
          <h1 className="text-xl font-semibold text-ink mb-2">
            ANNASPEAK · AI 店铺原型
          </h1>
          <p className="text-sm text-ink-secondary leading-relaxed">
            项目骨架就绪。
            <br />
            下一步:Welcome 屏(店招 + 安小娜消息 + 预测 feeds)
          </p>
          <div className="mt-8 text-xs text-ink-tertiary">
            v0.1 · 骨架验证
          </div>
        </div>
      </div>
    </PhoneFrame>
  )
}

export default App
