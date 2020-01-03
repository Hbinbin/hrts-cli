#! /usr/bin/env node

const program = require('commander');
const download = require('download-git-repo');
const chalk = require('chalk');
const ora = require('ora');

program
  .version('0.1.0')
  .option('-i, init [name]', '初始化hrts-cli')
  .parse(process.argv);

if (program.init) {
  const spinner = ora('正在从github下载hrts-cli').start();
  download('Hbinbin/react-typescript-app-template', program.init, function (err) {
    if (!err) {
      // 可以输出一些项目成功的信息
      console.info(chalk.blueBright('下载成功'));
    } else {
      // 可以输出一些项目失败的信息
      console.info(chalk.error('下载失败'));
    }
  })
}

