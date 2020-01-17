// 写入文件，安装依赖
const chalk = require('chalk')
const { spawn } = require('child_process')
const store = require('./store')
const clearConsole = require('./utils/clearConsole')
const packageManagement = require('./utils/packageManagement')

/**
 * 安装依赖指令
 * @param {string} dest 需要执行指令的路径
 */
module.exports = function spawnCmd (dest) {
  // 依赖安装命令
  const _packageManagement = packageManagement()
  let cmdInstall = _packageManagement === 'yarn' ? 'add -D ' : 'install -D '
  store.options.dependencies.forEach(item => {
    cmdInstall += `${item.name}@${item.version} `
  })
  // 使用 taobao 镜像
  if (_packageManagement === 'npm') cmdInstall += '--registry=https://registry.npm.taobao.org'
  const ls = spawn(_packageManagement, [cmdInstall], {
    cwd: dest,
    stdio: 'inherit',
    shell: true
  })
  ls.on('close', (code) => {
    // 成功安装依赖
    if (code === 0) {
      clearConsole('cyan', `X-BUILD v${require('../package').version}`)
      console.log('> Get started with the following commands:')
      console.log('')
      console.log(chalk.gray(' $ ') + chalk.blueBright(`cd ${store.dirname}`))
      console.log(chalk.gray(' $ ') + chalk.blueBright(`${packageManagement() === 'npm' ? 'npm run' : 'yarn'} serve`))
    }
  })
}
