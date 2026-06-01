# frank — knowledge system

Frank 的个人主页，Claude Code 终端风格。纯静态，零构建，托管在 GitHub Pages。

## 怎么维护

内容都在 `content/` 里的 markdown，改完推送即可，几分钟后线上自动更新：

```bash
cd ~/Desktop/frank-site
# 编辑 content/*.md 或新增文件
git add -A && git commit -m "update content" && git push
```

**新增一个板块**：在 `content/` 放一个新 `.md`，然后在 `index.html` 的 `COMMANDS` 数组里加一行：

```js
{ cmd: "cat 名字", file: "content/文件名.md", label: "中文标签" },
```

## 本地预览

不要直接双击 `index.html`（浏览器会拦截本地 fetch）。用：

```bash
cd ~/Desktop/frank-site && python3 -m http.server 8000
# 打开 http://localhost:8000
```

## 结构

```
index.html        界面 + 渲染逻辑（marked.js 走 CDN）
content/*.md      所有内容，按板块拆分
```
