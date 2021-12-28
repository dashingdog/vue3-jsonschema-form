module.exports = {
  // 预设配置
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'ts',
    'tsx',
    // tell Jest to handle *.vue files
    'vue',
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
}
