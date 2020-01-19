export default {
  dependencies: [
    {
      name: 'appName',
      message: '请输入项目名称：',
      default: 'hrts-app'
    },
    {
      name: 'description',
      message: '请输入项目描述：',
      default: 'react-typescript项目'
    },
    {
      name: 'author',
      message: '请输入作者名称'
    },
    {
      type: 'list',
      name: 'UI框架：',
      message: '请选择UI框架：',
      choices: [
        {
          name: 'antd',
          checked: true
        },
        {
          name: 'antd-mobile'
        }
      ]
    }
  ],
  devDependenciesPackage: [
    {
      name: 'appName',
      message: '请输入项目名称：',
      default: 'hrts-app'
    },
    {
      name: 'description',
      message: '请输入项目描述：',
      default: 'react-typescript项目'
    },
    {
      name: 'author',
      message: '请输入作者名称'
    },
    {
      type: 'list',
      name: 'UI框架：',
      message: '请选择UI框架：',
      choices: [
        {
          name: 'antd',
          checked: true
        },
        {
          name: 'antd-mobile'
        }
      ]
    }
  ]
}
