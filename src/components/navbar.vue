<template>
  <nav class="nav">
    <ul>
      <li>
        <router-link
          class="nav-link"
          active-class="is-active"
          exact
          :to="{ path: '/' + $route.meta.language }"
        >概述</router-link>
      </li>
      <li>
        <router-link
          class="nav-link"
          :to="{ path: '/' + $route.meta.language + '/quickstart' }"
        >文档格式</router-link>
      </li>
      <li>
        <router-link
          class="nav-link"
          active-class="is-active"
          exact
          :to="{ path: '/' + $route.meta.language + '/repositories' }"
        >全部组件</router-link>
      </li>

      <template v-for="(group, index) in navs">
        <div :key="index">
          <li>
            <a
              href="#"
              @click.prevent="group.visible = !group.visible"
              class="nav-label"
              v-text="group.title"
            >
            </a>
          </li>
          <ul
            v-show="group.visible"
            transition="slidedown"
          >
            <li
              v-for="(item, j) in group.list"
              :key="j"
            >
              <router-link
                class="nav-link"
                :to="{ path: '/' + $route.meta.language + item.path }"
                active-class="is-active"
              >
                <div>
                  <span
                    calss="routename"
                    :style="{fontWeight: '600'}"
                  >
                    {{item.name}}
                  </span>
                  {{item.version ? `--${item.version}` : ''}}
                </div>
              </router-link>
              <div
                v-if="item.keywords"
                class="keywords"
              >
                <span
                  v-for="(kwd, index) in item.keywords"
                  :key="index"
                  @click="() => toRepositories(kwd)"
                >{{kwd}}</span>
              </div>
            </li>
          </ul>
        </div>
      </template>
    </ul>
  </nav>
</template>

<script>
import routerMixin from "./routerMixin";

export default {
  mixins: [routerMixin],
  methods: {
    toRepositories(keyword) {
      this.$router.replace({
        name: "xqdmRightForm",
        params: {
          val: null,
          change_id: "000" + new Date().getSeconds(),
          type: "add"
        }
      });
      this.$router.push({
        name: "/zh-cn/repositories",
        params: {
          keyword
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.edit-doc-btn {
  color: red !important;
}

.slidedown-transition {
  transition: all 0.8s ease-in-out;
  overflow: hidden;
  opacity: 1;
}

.slidedown-enter,
.slidedown-leave {
  max-height: 0 !important;
  opacity: 0.3;
}

.nav {
  background-color: #f9fafb;
  color: #4c555a;
  font-size: 14px;
  height: 100%;
  padding: 20px 0 20px 20px;
}

.nav-label {
  color: #9da5b3;
  font-weight: bold;
  padding: 8px;
  display: block;
  margin-left: -16px;
}

.nav-link {
  padding: 8px;
  display: block;
  text-decoration: none;
  color: inherit;
  transition: color 0.2s;

  &.is-active {
    color: #4078c0;
    border-right: 2px solid;
  }

  &:hover {
    color: #4078c0;
  }
}
.keywords {
  padding: 5px 0;
  span {
    background: #ddd;
    padding: 3px 5px;
    margin-right: 5px;
    cursor: pointer;
  }
}
</style>
