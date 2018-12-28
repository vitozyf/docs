
import NavsConfig from "../nav.config.json";
NavsConfig.map(item => {
    item.visible = true;
    return item;
  });
export default{
    name: 'routerMixin',
    data() {
        return {
            navs: []
        };
    },
    created() {
        const routers = this.$router.options.routes || [];
        this.navs = NavsConfig.map(item => {
          return {
            title: item.title,
            visible: item.visible,
            list: item.list.map(data => {
              let version = "";
              let name = "";
              let keywords = [];
              let author = '';
              let description = '';
              let qq = '';
              routers.forEach(route => {
                if (new RegExp(data.path).test(route.name)) {
                  version = route.meta.version || "";
                  name = route.meta.name || "";
                  description= route.meta.description || "";
                  qq = route.meta.qq;
                  keywords = route.meta.keywords || [];
                  if (typeof route.meta.author === 'string') {
                    author = route.meta.author;
                  } else if (typeof route.meta.author === 'object') {
                    author = route.meta.author.name;
                  }
                }
              });
              return Object.assign({}, data, {
                version: version,
                keywords: keywords,
                name: name ? name : data.name,
                author,
                description,
                qq
              });
            })
          };
        });
      },
}