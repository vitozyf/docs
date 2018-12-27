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
        <router-link
          v-for="(data, j) in item.list"
          :key="j"
          :to="{ path: '/' + $route.meta.language + data.path }"
          v-if="new RegExp(keyword).test(data.name)"
        >
          <div class="component-row">
            {{data.name}}
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import routerMixin from "../components/routerMixin";
export default {
  name: "repositories",
  mixins: [routerMixin],
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
  padding: 5px 10px;
}
</style>


