import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'algorithm-js-youtube',
  description: 'javascript  algorithm tutorial course from youtube ',
  themeConfig: {
    outline: {
      level: [2, 3],
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: 'Home', link: '/' }],

    sidebar: [
      {
        text: '基础',
        items: [
          { text: '数据结构与算法', link: '/01-基础/1.2-数据结构与算法', },
          { text: '如何刷LeetCode', link: '/01-基础/1.3-如何刷LeetCode' },
        ]
      },
      {
        text: '时间和空间复杂度',
        items: [
          {
            text: '时间复杂度',
            link: '/02-时间和空间复杂度/2.1-时间复杂度'
          },
          {
            text: '空间复杂度',
            link: '/02-时间和空间复杂度/2.2-空间复杂度'
          }
        ]
      },
      {
        text: '栈',
        items: [
          {
            text: '栈简介',
            link: '03-栈/3.1-栈简介'
          },
          {
            text: '栈的使用场景',
            link: '03-栈/3.2-栈的使用场景'
          },
          {
            text: '有效括号',
            link: '03-栈/3.3-有效括号'
          },
          {
            text: '函数调用堆栈',
            link: '03-栈/3.4-函数调用堆栈'
          }
        ]
      },
      {
        text: '队列',
        items: [
          {
            text: '队列简介',
            link: '04-队列/4.1-队列简介'
          },
          {
            text: '队列的使用场景',
            link: '04-队列/4.2-队列使用场景'
          },
          {
            text: '最近的请求',
            link: '04-队列/4.3-最近的请求'
          },
          {
            text: '异步中的任务队列',
            link: '04-队列/4.4-异步中的任务队列'
          }
        ]
      },
      {
        text: '链表',
        items: [
          {
            text: '链表简介',
            link: '05-链表/5.1-链表简介'
          },
          {
            text: '删除链表中节点',
            link: '05-链表/5.2-删除链表中节点'
          },
          {
            text: '反转链表',
            link: '05-链表/5.3-反转链表'
          },
          {
            text: '两数相加',
            link: '05-链表/5.4-两数相加'
          },
          {
            text: '删除重复元素',
            link: '05-链表/5.5-删除重复元素'
          },
          {
            text: '环形链表',
            link: '05-链表/5.6-环形链表'
          },
          {
            text: 'js原型链',
            link: '05-链表/5.7-js原型链'
          },
        ]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
});
