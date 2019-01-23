<script>
export default {
  props: {
    column: {
      type: [String, Number],
      required: false,
      default: () => ""
    },
    dynamic: {
      type: Boolean,
      required: false,
      default: () => false
    }
  },
  data() {
    return {
      defaultResponsive: true,
      defaultColumn: 3
    };
  },
  render(h) {
    if (this.$props.column) {
      this.defaultColumn = this.$props.column;
    }

    return h(
      "div",
      {
        class: {
          grid: true,
          "grid-responsive": this.defaultResponsive
        },
        style: {
          "grid-template-columns": `repeat(${this.defaultColumn}, 1fr)`
        }
      },
      this.$slots.default.map(item => {
        if (!item.tag) return;

        const { data } = item;
        const style = {
          class: "grid-item",
          style: {}
        };

        if (data && data["staticClass"]) {
          style["class"] += " " + data.staticClass;
        }

        if (data && data["attrs"]) {
          const { desktop, tablet, mobile } = data["attrs"];

          // Dynamic Props
          if (this.$props.dynamic) {
            Object.keys(data.attrs).map(property => {
              style["style"]["grid-" + property] = data.attrs[property];
            });
          }

          // Has Desktop
          if (process.browser && desktop && window.innerWidth >= 768) {
            this.defaultResponsive = false;

            style["style"]["grid-column"] = desktop[0];
            style["style"]["grid-row"] = desktop[1];
          }

          // Has Tablet
          if (process.browser && tablet && window.innerWidth <= 768) {
            this.gridResponsiveClass = false;

            style["style"]["grid-column"] = tablet[0];
            style["style"]["grid-row"] = tablet[1];
          }

          // Has Mobile
          if (process.browser && mobile && window.innerWidth <= 480) {
            this.gridResponsiveClass = false;

            style["style"]["grid-column"] = mobile[0];
            style["style"]["grid-row"] = mobile[1];
          }
        }

        return h("div", style, item.children);
      })
    );
  }
};
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
