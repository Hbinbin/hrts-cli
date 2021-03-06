#!/usr/bin/env node

const fs = require('fs')
const program = require('commander')
const download = require('download-git-repo')
const handlebars = require('handlebars')
const inquirer = require('inquirer')
const ora = require('ora')
const chalk = require('chalk')
const symbols = require('log-symbols')
program.version('0.1.7', '-v, --version')
  .command('init <name>')
  .action((name) => {
    if (!fs.existsSync(name)) {
      inquirer.prompt([
        {
          name: 'appName',
          message: '请输入项目名称',
          default: 'hrts-app'
        },
        {
          name: 'description',
          message: '请输入项目描述',
          default: 'react-typescript项目'
        },
        {
          name: 'author',
          message: '请输入作者名称'
        },
        {
          type: 'checkbox',
          name: 'statusManagementTool',
          message: '请选择状态管理工具',
          choices: [
            {
              name: 'redux',
              checked: true
            },
            {
              name: 'blur'
            }
          ]
        }
      ]).then((answers) => {
        const { appName, description, author, statusManagementTool } = answers
        const downloadUrl = statusManagementTool === 'redux'
          ? 'https://github.com:Hbinbin/react-typescript-app-template#master'
          : 'https://github.com/Hbinbin/react-typescript-mobx-template#master'
        const spinner = ora('正在初始化项目...')
        spinner.start()
        download(downloadUrl, name, { clone: true }, (err) => {
          if (err) {
            spinner.fail()
            console.log(symbols.error, chalk.red(err))
          } else {
            spinner.succeed()
            const fileName = `${name}/package.json`
            const meta = {
              name: appName,
              description,
              author
            }
            if (fs.existsSync(fileName)) {
              const content = fs.readFileSync(fileName).toString()
              const result = handlebars.compile(content)(meta)
              fs.writeFileSync(fileName, result)
            }
            console.log(symbols.success, chalk.green('项目初始化完成'))
          }
        })
      })
    } else {
      // 错误提示项目已存在，避免覆盖原有项目
      console.log(symbols.error, chalk.red('项目已存在'))
    }
  })
program.parse(process.argv)
