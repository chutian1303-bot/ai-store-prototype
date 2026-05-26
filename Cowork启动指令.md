# Cowork 启动指令

> 把下面这段话直接复制到 Cowork 的「New task」对话框里(确保 task 已经指向包含本文件夹的目录)。

---

## 复制以下内容到 Cowork

```
这个文件夹是 AI 店铺项目的工作目录。请按以下步骤启动:

1. 先读完整个文件夹,重点是:
   - 《AI店铺-项目交接文档.md》(项目全部上下文、产品需求、设计决策、待决事项)
   - 所有 .html 文件(此前的静态设计稿,作为视觉和交互参照)
   - 所有图片(产品框架图)

2. 读完后,先用 3-5 句话向我复述你对项目的理解,确认无误后再继续。

3. 然后我们一起讨论交接文档第七节《待决事项》里的 5 个问题,逐项敲定后再动手。

4. 技术决策初步倾向:
   - 框架:Vite + React + TypeScript + Tailwind CSS
   - 项目结构按"屏"组织组件(WelcomeScreen, FeedsScreen, ProductDetailOverlay, FootprintPanel)
   - 状态管理用 Zustand 或 React Context(看复杂度)
   - 商品数据先用本地 JSON mock
   - 意图识别接 Anthropic API(claude-sonnet-4-7),做最小可用版本

5. 第一阶段交付目标(JNBY 完整链路):
   Welcome → 输入「给我推荐同款风衣」→ anna 识别意图并回复商品 feeds 
   → 点击商品出详情浮层 → 关闭浮层后底部出现「店内足迹」→ 点足迹看历史

6. 工作节奏:
   - 每完成一个组件先在浏览器跑一下给我看效果再继续
   - 涉及视觉细节(色值、间距、动效)优先参照 .html 设计稿
   - 不要自己发挥设计决策,有疑问就问我

开始吧,先读文件然后复述理解。
```

---

## 给你的额外建议(不用给 Cowork)

1. **建文件夹**:在桌面或工作区新建一个文件夹,比如 `ai-store-prototype`,把这两个 md 文件 + 之前所有的 HTML 设计稿和框架图都丢进去。

2. **开 Cowork task**:打开 Cowork → New task → 在文件夹选择里指向 `ai-store-prototype`(给它读写权限)。

3. **粘贴指令**:把上面代码块里的内容复制粘贴到对话框,发送。

4. **第一阶段控制范围**:别贪多,先把 JNBY 一条链路跑通,再讨论 FUJIFILM 和真实 API。

5. **存为 Cowork Project**:Cowork 里这个任务可以保存为 Project,后续每次 New task 都在这个 Project 下开,上下文会持续延续。

6. **善用 Live artifacts**:做出来后,如果需要给团队评审看,可以让 Cowork 把可交互原型挂成 Live artifact,常驻在侧边栏,随时打开演示。

7. **关于 Customize 全局指令**:可以把"产品 owner 偏好"(交接文档第八节)写进 Cowork 的 Customize 里作为全局上下文,后续所有 task 自动带上。
