# Hacker Style Resume - GitHub Pages

一个采用黑客风格（Hacker Style）设计的个人简历页面，使用纯 Vanilla Web Development 技术栈开发，符合 GitHub Pages 部署要求。

## 📁 文件结构

```
xinyi-jane-WSL.github.io/
├── index.html      # 主页面文件，包含终端界面结构
├── style.css       # 样式文件，实现黑客风格主题
├── script.js       # JavaScript 逻辑，实现打字机效果和简历数据
└── README.md       # 项目说明文档
```

## ✨ 实现功能

### 1. 终端界面设计
- **终端窗口样式**：模拟真实的终端窗口，包含关闭/最小化/最大化按钮
- **黑客风格主题**：绿色文字（#00ff00）配黑色背景，营造经典黑客氛围
- **响应式布局**：适配桌面和移动设备

### 2. 打字机效果
- **逐字显示**：简历内容以打字机效果逐字显示
- **动画速度**：可配置的显示速度（默认 10ms/字符）
- **流畅体验**：使用 Promise 和 async/await 实现流畅的动画效果

### 3. 简历内容展示
包含以下模块：
- **个人信息**（Personal Info）：姓名、职位、联系方式等
- **个人简介**（Summary）：职业概述
- **技能列表**（Skills）：技术栈和专业技能
- **工作经历**（Experience）：工作职位、公司、时间、描述
- **教育背景**（Education）：学历信息
- **项目经验**（Projects）：项目名称、描述、技术栈
- **认证证书**（Certifications）：相关认证

### 4. 视觉效果
- **光标闪烁动画**：模拟终端光标闪烁效果
- **故障效果**（Glitch Effect）：随机出现的故障动画，增强黑客风格
- **边框发光**：终端窗口边框的绿色发光效果
- **平滑过渡**：所有动画使用 CSS 过渡效果

### 5. 技术特性
- **纯 Vanilla JavaScript**：无任何框架依赖
- **DOM 就绪检测**：智能检测 DOM 加载状态，确保脚本正确执行
- **模块化代码**：简历数据与展示逻辑分离，易于维护和修改

## 🛠️ 技术栈

- **HTML5**：语义化标签，结构清晰
- **CSS3**：现代 CSS 特性（Flexbox、动画、响应式设计）
- **Vanilla JavaScript**：原生 ES6+ 语法（Promise、async/await、箭头函数）

## 🚀 使用方法

### 本地开发
1. 克隆或下载项目
2. 直接在浏览器中打开 `index.html`，或使用本地服务器：
   ```bash
   python3 -m http.server 8000
   ```
3. 访问 `http://localhost:8000`

### GitHub Pages 部署
1. 将代码推送到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择 `main` 分支作为源
4. 访问 `https://yourusername.github.io/xinyi-jane-WSL.github.io/`

## 🎨 自定义内容

编辑 `script.js` 文件中的 `resumeData` 对象即可修改简历内容：

```javascript
const resumeData = {
    name: "Your Name",
    title: "Your Title",
    email: "your.email@example.com",
    // ... 其他字段
};
```

## 📱 浏览器兼容性

- Chrome/Edge（推荐）
- Firefox
- Safari
- 移动端浏览器

## 📝 许可证

MIT License

## 🔗 相关链接

- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [Vanilla JavaScript 最佳实践](https://vanillajstoolkit.com/)

---

*Built with ❤️ using Vanilla Web Development*
