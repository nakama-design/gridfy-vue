# gridfy-vue

![Rollup badge](https://img.shields.io/badge/Rollup-^0.53.3-ff69b4.svg)
![Jest](https://img.shields.io/badge/Jest-^22.0.4-blue.svg)
![Vue](https://img.shields.io/badge/Vue-^2.5.13-brightgreen.svg)
![Storybook](https://img.shields.io/badge/Storybook-^3.3.3-ff70a3.svg)
![Commitizen](https://img.shields.io/badge/Commitizen-enabled-brightgreen.svg)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![Npm badge](https://img.shields.io/npm/v/gridfy-vue.svg)
[![Build Status](https://travis-ci.org/git@github.com:muhibbudins/gridfy-vue.git.svg?branch=master)](https://travis-ci.org/git@github.com:muhibbudins/gridfy-vue.git)

> Dynamic Layout with CSS Grid on Vue

> Generated using [vue-cli-template-library](https://github.com/julon/vue-cli-template-library).

## Installation
```
npm install gridfy-vue
```
gridfy-vue can be used as a module in both CommonJS and ES modular environments.

When in non-modular environment, gridfy-vue will register all the components to vue by itself.</p>

### ES6
```js
//
// You can register a component manually
//
import { HelloWorld } from 'gridfy-vue';

export default {
  ...
  components: {
    HelloWorld
  },
  ...
};

//
// or register the whole module with vue
//
import ModuleLibrary from 'gridfy-vue';

// Install this library
Vue.use(ModuleLibrary);
```

### CommonJS
```js
//
// You can register a component manually
//
var Vue = require('vue');
var ModuleLibrary = require('gridfy-vue');

var YourComponent = Vue.extend({
  ...
  components: {
    'hello-world': ModuleLibrary.HelloWorld
  },
  ...
});

//
// or register the whole module with vue
//
var Vue = require('vue');
var ModuleLibrary = require('gridfy-vue');

// Install this library
Vue.use(ModuleLibrary);
```

### Browser

```html
<script src="path/to/vue/vue.min.js"></script>
<script src="path/to/gridfy-vue/dist/gridfy-vue.min.js"></script>
<!-- Components are registered globally -->
```

### After that, you can use it in your templates:

```html
<hello-world></hello-world>
```

## Changelog

See the GitHub [release history](https://github.com/git@github.com:muhibbudins/gridfy-vue.git/releases).

## Contributing

See [CONTRIBUTING.md](.github/CONTRIBUTING.md).
