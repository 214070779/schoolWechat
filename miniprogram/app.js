// app.js
import {User} from './module/user';
import {UserConfig} from 'config/userConfig'
import {Course} from './module/course'
// 引入SDK核心类
var QQMapWX = require('/core/utils/qqmap-wx-jssdk.min.js')
App({
  onLaunch: async function () {
    let user = new User();
    let config = new UserConfig();
    const course = new Course()
    course.freshenCourse(1002)
    // user.login();
  },
  globalData: {
    user: User,
    // 实例化API核心类
    qqmapsdk: new QQMapWX({
      key: 'DBJBZ-X6BKX-TFK4C-ZERC6-KGAEQ-QQBUM' // 必填
    }),
  }
});
