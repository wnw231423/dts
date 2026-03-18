const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

try {
  execSync("cd .. && npx husky local/.husky", { stdio: "inherit" });

  const hookContent = `#!/usr/bin/env sh\ncd local && npx lint-staged\n`;

  const hookPath = path.resolve(__dirname, "../.husky/pre-commit");
  fs.writeFileSync(hookPath, hookContent, {
    encoding: "utf-8",
    mode: 0o755, // 赋予可执行权限
  });
} catch (error) {
  console.error("Husky 初始化失败: ", error.message);
}
