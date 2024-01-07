module.exports = {
  // 自定义CHANGELOG.md的头部标题
  header: '# Changelog',
  // 自定义release tag 的信息
  releaseCommitMessageFormat: 'chore(release): v{{currentTag}} :tada:',
  /**
   * 自定义commit类型
   * 可以定义有哪些类型；
   * section：控制类型在CHANGELOG.md中的标题是什么
   * hidden：是否将此类型写入CHANGELOG.md
   */
  types: [
    { type: 'feat', section: '✨ Features | 新功能' },
    { type: 'bug', section: '🐛 Bug | Bug 号' },
    { type: 'fix', section: '🐛 Bug Fixes | Bug 修复' },
    { type: 'ui', section: '✨ ui | 更新UI' },
    { type: 'docs', section: '✏️Documentation | 文档' },
    { type: 'style', section: '💄 Styles | 风格' },
    { type: 'perf', section: '⚡ Performance Improvements | 性能优化' },
    { type: 'refactor', section: '♻️ Code Refactoring | 代码重构' },
    { type: 'release', section: '🎉 release | 发布' },
    { type: 'deploy', section: '‍✈️ deploy | 部署', hidden: true },
    { type: 'test', section: '✅ Tests | 测试', hidden: true },
    { type: 'chore', section: '🚀 Chore | 构建/工程依赖/工具', hidden: true },
    { type: 'revert', section: '⏪ Revert | 回退', hidden: true },
    { type: 'merge', section: '🤗 merge | 合并分支', hidden: true },
    { type: 'build', section: '📦‍ Build System | 打包构建', hidden: true },
    { type: 'ci', section: '👷 Continuous Integration | CI 配置', hidden: true }
  ]
}
