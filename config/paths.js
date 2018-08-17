'use strict';

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

// config after eject: we're in ./config/
module.exports = {
  // dotenv: resolveApp('.env'),
  appBuild: resolveApp('build'),
  appClientIndexJs: resolveApp('src/client/index.js'),
  appServerIndexJs: resolveApp('src/server/index.js'),
  // appSharedIndexJs: resolveApp('src/shared/index.js'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  // yarnLockFile: resolveApp('yarn.lock'),
  // testsSetup: resolveApp('src/setupTests.js'),
  appNodeModules: resolveApp('node_modules'),
};
