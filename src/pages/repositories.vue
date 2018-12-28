<template>
  <div>
    <h1>
      全部组件
    </h1>
    <hr>
    <div>
      <div>
        <znl-input
          :border="true"
          v-model="keyword"
          :clearable="true"
        ></znl-input>
        <znl-button
          :height="30"
          :width="50"
        >搜索</znl-button>
      </div>
      <div
        v-for="(item, index) in navs"
        :key="index"
      >
        <div
          class="component-row"
          v-for="(data) in item.list"
          :key="data.name"
          v-if="isShowLink(data)"
        >
          <div>
            <router-link
              :to="{ path: '/' + $route.meta.language + data.path }"
              class="text-button"
            >
              {{data.name}}
            </router-link>
            <span :style="{color: '#333'}">
              &nbsp;&nbsp;&nbsp;
              {{data.version ? '--' + data.version : ''}}
              &nbsp;&nbsp;&nbsp;
              {{data.author ? '--' + data.author : ''}}
              &nbsp;&nbsp;&nbsp;
              <a
                :href="`tencent://message/?uin=${data.qq}&amp;Site=bom.ai&amp;Menu=yes`"
                target="_blank"
                v-if="data.qq"
              >
                <img
                  class="qq"
                  src="http://hbimg.b0.upaiyun.com/d8b1837ad6219093d111e6a06b5bca3ba018ea1c10dd8-L7ZWp7_fw658"
                  width="20"
                >
              </a>
            </span>
          </div>
          <div class="description">
            {{data.description}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import routerMixin from "../components/routerMixin";
export default {
  name: "repositories",
  mixins: [routerMixin],
  methods: {
    isShowLink(data) {
      if (new RegExp(this.keyword).test(data.name)) {
        return true;
      }
      let res = false;
      if (data.keywords) {
        res = !!data.keywords.find(item => {
          return new RegExp(this.keyword).test(item);
        });
      }

      return res;
    }
  },
  created() {
    this.keyword = this.$route.params.keyword;
  },
  data() {
    return {
      keyword: ""
    };
  }
};
</script>
<style lang="scss" scoped>
.component-row {
  padding: 10px 10px;
  border-bottom: 1px dashed #ccc;
  .description {
    padding: 5px;
    font-size: 14px;
  }
  .text-button {
    color: #28c;
    font-size: 16px;
  }
  .qq {
    position: relative;
    top: 3px;
  }
}
</style>


