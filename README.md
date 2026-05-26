# ANNASPEAK · AI 店铺原型

把传统电商店铺(tab / 筛选 / 楼层)重构成「意图驱动的对话容器」。用户从任何上下文进店,Agent「安小娜」作为消息体出现并预测意图,自然语言输入随时可问,所有承接(商品 / 搭配 / 评测 / 客服 / 优惠 / 红包 / 加购 / 足迹)都在同一个对话画布里展开,不跳页面。

## 在线 Demo

部署到 GitHub Pages 后可访问:**https://chutian1303-bot.github.io/ai-store-prototype/**

(扫码体验:见仓库 Issue / Release 里附的二维码)

## 技术栈

- Vite + React 19 + TypeScript
- Tailwind CSS(设计 tokens 在 `app/tailwind.config.js`)
- Zustand(状态管理)
- 部署:GitHub Actions → GitHub Pages

## 本地开发

```bash
cd app
npm install
npm run dev        # 本地预览 http://localhost:5173
npm run build      # 本地 build,base = './' 适合 file:// 打开 dist/index.html
npm run build:gh   # GitHub Pages build,base = '/ai-store-prototype/'
```

## 目录结构

```
ai-store-prototype/
├── .github/workflows/deploy.yml   # GH Pages 自动部署
├── AI店铺-项目交接文档.md         # 项目上下文
├── 设计稿1.png / 设计稿2.png      # 终稿设计(gitignore 不入仓)
└── app/                            # Vite 项目主体
    ├── src/
    │   ├── components/   # 通用 UI 原子(PhoneFrame / StatusBar / ...)
    │   ├── screens/      # 按"屏"组织的组件(WelcomeScreen / FeedsScreen / ...)
    │   ├── store/        # Zustand store
    │   ├── data/         # 本地 mock 商品 JSON
    │   ├── intent/       # 意图识别(第一阶段 mock,后接 Anthropic API)
    │   └── App.tsx
    ├── tailwind.config.js
    └── vite.config.ts
```

## 第一阶段交付清单

1. [x] 项目骨架 + 手机框容器 + 设计 tokens
2. [ ] Welcome 屏(店招 + 安小娜消息 + 预测 feeds)
3. [ ] Feeds 屏(双列 + 滚动塌陷)
4. [ ] 意图识别 + 安小娜回复(找品 / 找优惠 / 服务,3 类)
5. [ ] 详情包厢浮层 + 包厢内对话 + 加购
6. [ ] 店内足迹 + 找优惠红包弹层 + Agent 兜底态

## 关键设计原则

- 安小娜是**消息体**(头像 + 名字 + 文字),不是卡片
- 强调色用淘宝橙 `#FF4D00`,不用黑底
- 店招不重复安小娜已说过的话
- chips 固定顺序:足迹 → 优惠券 → 穿搭 → AI 试衣
- feeds 滚动用 `max-height` 真实塌陷,停止 0.9 秒后同步恢复
- 详情打开为「包厢」浮层,顶部留 feeds 露出,包厢内可继续对话
