<template>
  <div
    class="iframe-docs"
    v-loading="loading"
  >

    <iframe
      class="demo-page"
      :src="'https://vitozyf.github.io/vue-znl-ui/#/zh-CN/component/quickstart'"
      frameborder="0"
      @load="loading=false"
    >
    </iframe>
  </div>
</template>

<script>
export default {
  name: "phone",

  data() {
    return {
      loading: false
    };
  },

  created() {
    this.loading = true;
    console.log(this.$route);
  },

  computed: {
    routePath() {
      return this.$route.path.replace(/^\/(zh-cn|en)2?/, "");
    }
  }
};
</script>

<style lang="css" scoped>
.iframe-docs {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.demo-page {
  width: 100%;
  height: 100%;
}
</style>
