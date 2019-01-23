import { storiesOf } from "@storybook/vue";

// Add more stories here to live develop your components
storiesOf("Utilities", module).add("grid", () => ({
  template: `
      <div class="demo my-5">
        <div class="demo-title">Static grid</div>
        <grid column="4">
          <div class="example">
            Column 1
          </div>
          <div class="example">
            Column 2
          </div>
          <div class="example">
            Column 2
          </div>
        </grid>

        <div class="demo-title">Dynamic grid</div>
        <grid dynamic column="3">
          <div column="1" row="1" class="example">
            Column 1
          </div>
          <div column="1" row="2" class="example">
            Column 1
          </div>
          <div column="2" row="2" class="example">
            Column 2
          </div>
          <div column="3" row="3" class="example">
            Column 2
          </div>
        </grid>

        <div class="demo-title">Auto grid</div>
        <grid column="3">
          <div :desktop="['1', '1']" :tablet="['2', '1']" class="example">
            Column 1
          </div>
          <div :desktop="['2', '2']" :tablet="['1', '2']" class="example">
            Column 2
          </div>
          <div :desktop="['3', '3']" :tablet="['3', '3']" class="example">
            Column 2
          </div>
        </grid>

        <div class="demo-title">Stacked grid</div>
        <grid column="3">
          <div class="example">
            <grid column="2">
              <div class="example">
                Column 1
              </div>
              <div class="example">
                Column 2
              </div>
            </grid>
          </div>
          <div class="example">
            Column 2
          </div>
          <div class="example">
            <grid column="2">
              <div class="example">
                Column 1
              </div>
              <div class="example">
                Column 2
              </div>
            </grid>
          </div>
        </grid>
      </div>
    `,
  data() {
    return {
      title: "Popular Product"
    };
  }
}));
