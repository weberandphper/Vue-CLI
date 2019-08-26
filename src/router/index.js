import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/evaluate/app',
    //   name: 'schoolList',
    //   component: () => import('@/views/change-tab/Blank.vue')
    // },
    {
      path: '/evaluate/app',
      name: 'tab',
      component: () => import('@/views/change-tab/Index.vue')
    },
    // 单选、多选、小组页面
    {
      path: '/evaluate/class-after/detail/:classId/:className/:tab',
      name: 'detail',
      component: () => import('@/views/class-after/ClassDetail.vue')
    },
    // 兴趣小组详情页面
    {
      path: '/evaluate/class-after/group-detail/:groupId/:groupName/:classId',
      name: 'groupDetail',
      component: () => import('@/views/class-after/GroupDetail.vue')
    },
    // 编辑小组页面
    {
      path: '/evaluate/class-after/edit-group/:groupId/:classId',
      name: 'editGroup',
      component: () => import('@/views/class-after/EditGroup.vue')
    },
    // 编辑小组添加成员
    {
      path: '/evaluate/class-after/edit-member/:classId',
      name: 'editMember',
      component: () => import('@/views/class-after/EditSelectMember.vue')
    },
    // 创建小组，添加小组名称
    {
      path: '/evaluate/class-after/create-group/:classId',
      name: 'createGroup',
      component: () => import('@/views/class-after/CreateGroup.vue')
    },
    // 创建小组，添加成员页面
    {
      path: '/evaluate/class-after/create-member/:classId',
      name: 'createMember',
      component: () => import('@/views/class-after/CreateSelectMember.vue')
    },
    // 学生评价页面
    {
      path: '/evaluate/class-after/evaluate',
      name: 'evaluate',
      component: () => import('@/views/class-after/Evaluate.vue')
    },
    {
      path: '/evaluate/teacher-report',
      name: 'teacherReport',
      component: () => import('@/views/report/TeacherReport.vue')
    },
    {
      path: '/evaluate/student-report', // 教师查看学生详情,pageType = 3
      name: 'StudentReport',
      component: () => import('@/views/report/StudentReport.vue')
    },
    {
      path: '/evaluate/child-report/:pageType', // 家长端直接进入学生报告页面(parentIndex.vue),pageTye =2
      name: 'ParentIndex',
      component: () => import('@/views/change-tab/ParentIndex.vue')
    },
    {
      path: '/evaluate/semester-list',
      name: 'StudentReportDetail',
      component: () => import('@/views/report/SemesterList.vue')
    },
    {
      path: '/evaluate/semester-report-detail',
      name: 'StudentReportDetail',
      component: () => import('@/views/report/SemesterReportDetail.vue')
    },
    {
      path: '/evaluate/student/info/blank',
      name: 'Blank',
      component: () => import('@/views/student-info/Blank.vue')
    },
    {
      path: '/evaluate/student/info',
      name: 'StudentInfo',
      component: () => import('@/views/student-info/StudentInfo.vue')
    },
    {
      // userType  0 表示教师 1 表示家长   status minus表示减分  plus表示加分,家长端通知，进入评价详情，带入camousId,普通状态下0即可
      path: '/evaluate/detail/:userType/:recordId/:status/:campusId',
      name: 'EvaluateDetail',
      component: () => import('@/views/evaluate-detail/EvaluateDetail.vue')
    },
    {
      // 兑换记录
      path: '/evaluate/goods-record/:studentId',
      name: 'GoodsRecord',
      component: () => import('@/views/goods/GoodsRecord.vue')
    },
    // 兑换管理
    {
      path: '/evaluate/exchange-manage/:pageType',
      name: 'ExchangeManage',
      component: () => import('@/views/goods/ExchangeManage.vue')
    },
    // 兑换说明
    {
      path: '/evaluate/exchange-explain',
      name: 'ExchangeExplain',
      component: () => import('@/views/goods/ExchangeExplain.vue')
    },
    // 商品详情
    {
      path: '/evaluate/goods-detail',
      name: 'GoodsDetail',
      component: () => import('@/views/goods/GoodsDetail.vue')
    }
  ]
})
