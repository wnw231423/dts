module.exports = function (api) {
  api.cache(true);
  return {
    // 必须使用 expo 的预设，不能用传统的 metro 预设
    presets: ["babel-preset-expo"],
    plugins: [
      // 这是 WatermelonDB 必须的装饰器插件
      ["@babel/plugin-proposal-decorators", { legacy: true }],
    ],
  };
};
