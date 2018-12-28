import Vue from 'vue';
import VueRouter from 'vue-router';
import LANG_CONFIG from './langs.json';

Vue.use(VueRouter);

let defaultLang = {};

LANG_CONFIG.langs.forEach(item => {
  if (item.value === LANG_CONFIG.default) {
    defaultLang = item;
  }
});

const route = {
  '/': {
    component: resolve => require(['./pages/README.md'], resolve),
    default_lang: defaultLang,
    langs: LANG_CONFIG.langs,
    title: '',
    redirect: '/zh-cn'
  },
  '/zh-cn': {
    title: '概述',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/README.md'], resolve)
  },
  '/zh-cn/repositories': {
    title: '全部组件',
    language: 'zh-cn',
    component: resolve => require(['./pages/repositories.vue'], resolve)
  },
  '/zh-cn/quickstart': {
    title: '文档格式',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/quickstart.md'], resolve)
  },
  '/zh-cn/vue-znl-ui': {
    title: 'vue-znl-ui',
    language: 'zh-cn',
    component: resolve => require(['./components/iframe.vue'], resolve),
    version: require('../node_modules/vue-znl-ui/package.json').version,
    keywords: require('../node_modules/vue-znl-ui/package.json').keywords,
    author: require('../node_modules/vue-znl-ui/package.json').author,
    description: require('../node_modules/vue-znl-ui/package.json').description,

  },
  '/zh-cn/znl-table': {
    title: 'znl-table',
    language: 'zh-cn',
    component: resolve => require(['../node_modules/znl-table/README.md'], resolve),
    version: require('../node_modules/znl-table/package.json').version,
    name: require('../node_modules/znl-table/package.json').name,
    keywords: require('../node_modules/znl-table/package.json').keywords,
    author: require('../node_modules/znl-table/package.json').author,
    description: require('../node_modules/znl-table/package.json').description,
  },
  '/zh-cn/znl-stock': {
    title: 'Stock',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/Stock.md'], resolve)
  },
  '/zh-cn/znl-line': {
    title: 'Line',
    language: 'zh-cn',
    component: resolve => require(['./pages/zh-cn/Line.md'], resolve)
  },
  '/zh-cn/znl-tool-regs': {
    title: 'Regs',
    language: 'zh-cn',
    component: resolve => require(['../modules/znl-tool-regs/README.md'], resolve),
    version: require('../modules/znl-tool-regs/package.json').version,
    name: require('../modules/znl-tool-regs/package.json').name,
    keywords: require('../modules/znl-tool-regs/package.json').keywords,
    author: require('../modules/znl-tool-regs/package.json').author,
    description: require('../modules/znl-tool-regs/package.json').description,
    qq: require('../modules/znl-tool-regs/package.json').qq,
  }

};

const router = new VueRouter({
  routes: formatRoute(route)
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || document.title;
  next();
});

function formatRoute(route) {
  return Object.keys(route).map((path) => {
    const { language, title, component } = route[path]
    return {
      name: path,
      component,
      path,
      redirect: route[path].redirect || null,
      meta: Object.assign({}, route[path], {
        language: language || defaultLang.value,
      })
    }
  })
}

export default router;
