# gridfy-vue

![Rollup badge](https://img.shields.io/badge/Rollup-^0.53.3-ff69b4.svg)
![Jest](https://img.shields.io/badge/Jest-^22.0.4-blue.svg)
![Vue](https://img.shields.io/badge/Vue-^2.5.13-brightgreen.svg)
![Storybook](https://img.shields.io/badge/Storybook-^3.3.3-ff70a3.svg)
![Commitizen](https://img.shields.io/badge/Commitizen-enabled-brightgreen.svg)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![Npm badge](https://img.shields.io/npm/v/gridfy-vue.svg)
[![Build Status](https://travis-ci.org/muhibbudins/gridfy-vue.git.svg?branch=master)](https://travis-ci.org/muhibbudins/gridfy-vue.git)

> Dynamic Layout with CSS Grid on Vue

> Generated using [vue-cli-template-library](https://github.com/julon/vue-cli-template-library).

## Installation
```
npm install gridfy-vue

#

yarn add gridfy-vue
```
gridfy-vue can be used as a module in both CommonJS and ES modular environments.

When in non-modular environment, gridfy-vue will register all the components to vue by itself.</p>

### ES6
```js
//
// You can register a component manually
//
import { Grid } from 'gridfy-vue';

export default {
  ...
  components: {
    Grid
  },
  ...
};

//
// or register the whole module with vue
//
import Gridfy from 'gridfy-vue';

// Install this library
Vue.use(Gridfy);
```

### CommonJS
```js
//
// You can register a component manually
//
var Vue = require('vue');
var Gridfy = require('gridfy-vue');

var YourComponent = Vue.extend({
  ...
  components: {
    'grid': Gridfy.Grid
  },
  ...
});

//
// or register the whole module with vue
//
var Vue = require('vue');
var Gridfy = require('gridfy-vue');

// Install this library
Vue.use(Gridfy);
```

### Browser

```html
<script src="path/to/vue/vue.min.js"></script>
<script src="path/to/gridfy-vue/dist/gridfy-vue.min.js"></script>
<!-- Components are registered globally -->
```

### After that, you can use it in your templates:

```html
<!-- Static grid -->
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

<!-- Dynamic grid -->
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

<!-- Auto grid -->
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

<!-- Stacked grid -->
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
```

## Related

- [Gridfy JS](https://github.com/muhibbudins/gridfy)

## Changelog

See the GitHub [release history](https://github.com/muhibbudins/gridfy-vue.git/releases).

## Contributing

See [CONTRIBUTING.md](.github/CONTRIBUTING.md).

