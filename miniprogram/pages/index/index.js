// index.js
import {randomColor} from '../../core/utils/common';

const app = getApp();
import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify.js';
import {Course} from '../../module/course'
const course = new Course()
Page({
  data: {
    grid: [
      {
        title: '消息',
        icon: '/images/icons/teacher.png',
        url: '/pages/school-date/index'
      },
      {
        title: '请假审批',
        icon: '/images/icons/index/elective.png',
        url: '/pages/uncheck/uncheck'
      },
      {
        title: '成绩',
        icon: '/images/icons/index/datum.png',
        url: ''
      },
      {
        title: '签到',
        icon: '/images/icons/index/retrieve.png',
        url: '/pages/location_check_in/location_check_in'
      },
      {
        title: '云课堂',
        icon: '/images/icons/index/retrieve.png',
        url: '/pages/book-sel/index'
      },
      {
        title: '发起签到',
        icon: '/images/icons/index/retrieve.png',
        url: '/pages/teacher/sign_home'
      },
    ],
    showMain: false,
    userCourseList: [],
    thisWeek: course.getThisWeek()
  },

  onLoad: function () {
    this.showTransition();
  },
  onShow () {
    this.setData({
      thisWeek: course.getThisWeek()
    })
  },

  onReady () {
    this.initCourseList()
  },

  initCourseList () {
    const course = new Course()
    this.setData({
      userCourseList: course.getData()
    })
  },

  showTransition () {
    this.setData({
      showMain: false
    });
    Notify({ type: 'primary', message: '今天可能下雨，记得带伞呢', safeAreaInsetTop: true });
    setTimeout(() => {
      this.setData({
        showMain: true
      }, 1000);
    });
  },

  userCourseIsEmpty () {
    return this.data.userCourseList.length === 0;
  }

});
