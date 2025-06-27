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
          {
            text: '通过key获取json值',
            link: '05-链表/5.8-通过key获取json值'
          },
        ]
      },
      {
        text: '集合',
        items: [
          {
            text: '集合简介',
            link: '06-集合/6.1-集合简介'
          },
          {
            text: '两个数组的交集',
            link: '06-集合/6.2-两个数组的交集'
          },
          {
            text: 'ES6中的Set',
            link: '06-集合/6.3-ES6中的Set'
          }
        ]
      },
      {
        text: '字典',
        items: [
          {
            text: '字典简介',
            link: '07-字典/7.1-字典简介'
          },
          {
            text: '两个数组的交集',
            link: '07-字典/7.2-两个数组的交集'
          },
          {
            text: '有效括号',
            link: '07-字典/7.3-有效括号'  
          },
          {
            text: '两数之和',
            link: '07-字典/7.4-两数之和'
          },
          {
            text: '无重复字符的最长子串',
            link: '07-字典/7.5-无重复字符的最长子串'
          },
          {
            text: '最小覆盖子串',
            link: '07-字典/7.6-最小覆盖子串'
          }
        ]
      },
      {
        text: '树',
        items: [
          { text: '树简介', link: '/08-树/8.1-树简介' },
          { text: '树的深度和广度优先遍历', link: '/08-树/8.2-树的深度和广度优先遍历' },
          { text: '二叉树的先中后序遍历', link: '/08-树/8.3-二叉树的先中后序遍历' },
          { text: '二叉树的先中后序遍历(非递归版)', link: '/08-树/8.4-二叉树的先中后序遍历(非递归版)' },
        ]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
});
