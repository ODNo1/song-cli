import { Command } from 'commander'
// .vesion 表示可以使用 -V --version 参数查看当前SDK版本
// 我们直接使用 package.json 中的 version 即可
import { version } from '../package.json'
import create from './command/create'
import { update } from './command/update'

// 这里我们用 song 当作我的指令名称
// 命令行中使用 song xxx 即可触发
const program = new Command('song')

// 调用 version 的参数可以自定义
// .version(version, "-v --version")
program.version(version, '-v --version')

program
  .command('update')
  .description('更新 song_dev 至最新版本')
  .action(async () => {
    await update()
  })

program
  .command('create')
  .description('创建一个新项目')
  .argument('[name]', '项目名称')
  .action(async dirName => {
    // 添加create方法
    await create(dirName)
  })

// parse 会解析 process.argv 中的内容
// 也就是我们输入的指令
program.parse()
