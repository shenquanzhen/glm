# GLM-4 Chrome 扩展

## 项目简介

这是一个基于智谱AI的GLM-4模型开发的Chrome扩展插件。该扩展提供了一个有趣的功能,可以模拟人际交往中的两种不同立场:天使般的自己和恶魔般的自己。用户可以输入一个情境或对话,然后获得两种不同的解读和回应建议。

## 主要功能

1. API密钥管理:用户可以输入和保存智谱AI的API密钥。
2. 情境分析:用户可以输入一个情境或对话进行分析。
3. 双重解读:提供"天使解读"和"恶魔解读"两种不同角度的分析。
4. 回应建议:根据解读给出"天使回应"和"恶魔回应"两种建议。
5. 格式化显示:将API返回的结果进行格式化,以更好的方式展示给用户。

## 技术栈

- JavaScript
- Chrome Extension API
- 智谱AI GLM-4 API

## 安装说明

1. 克隆本仓库到本地。
2. 打开Chrome浏览器,进入扩展管理页面(chrome://extensions/)。
3. 开启"开发者模式"。
4. 点击"加载已解压的扩展程序",选择本项目的文件夹。

## 使用说明

1. 点击Chrome工具栏中的扩展图标,打开插件界面。
2. 在"API Key"输入框中输入您的智谱AI API密钥,点击"Save Key"保存。
3. 在文本框中输入您想要分析的情境或对话。
4. 点击"Submit"按钮,等待结果显示。
5. 查看返回的天使/恶魔解读和回应建议。

## 开发进度

- [x] 基本UI界面
- [x] API密钥管理功能
- [x] 与智谱AI GLM-4 API的集成
- [x] 结果格式化显示
- [ ] 错误处理优化
- [ ] 用户体验改进

## 注意事项

- 请确保您有有效的智谱AI API密钥。
- 使用时请遵守智谱AI的使用条款和隐私政策。
- 该扩展仅用于娱乐和学习目的,请谨慎使用生成的建议。

## 贡献指南

欢迎对本项目提出改进建议或直接贡献代码。请遵循以下步骤:

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 将您的改动推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个Pull Request

## 许可证

[MIT License](LICENSE)

## 联系方式

如有任何问题或建议,请通过[项目Issues](https://github.com/yourusername/glm4-chrome-extension/issues)与我们联系。