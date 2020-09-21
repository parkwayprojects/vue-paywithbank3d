# VueJS PayWithBank3D 

  A VueJS Package For Working With PayWithBank3D Seamlessly
  
## Getting Started

```
// installation via npm
npm i -S @parkwayprojects/vue-paywithbank3d

// or

// installation via yarn
yarn add @parkwayprojects/vue-paywithbank3d
```

#### Vue
Add the Vue plugin in your main.js and pass your connect merchant key:

```vuejs
import Vue from 'vue'
import PayWithBank3D from '@parkwayprojects/vue-paywithbank3d'

Vue.use(PayWithBank3D, { merchantKey: 'YOUR PAYWITHBANK3D MERCHANT KEY' })
```

#### Nuxt

Install the npm package

```
npm install --save vue-paywithbank3d
# OR
yarn add vue-paywithbank3d
```

Create a paywithbank3d.js file in your plugins folder and add the Vue plugin:

```vuejs
// plugins/paywithbank3d.js

import Vue from 'vue'
import PayWithBank3D from '@parkwayprojects/vue-paywithbank3d'

Vue.use(PayWithBank3D, { merchantKey: 'YOUR PAYWITHBANK3D MERCHANT KEY' })
```

Go to your nuxt.config.js and add it to your plugin section

```
/*
** Plugins to load before mounting the App
** https://nuxtjs.org/guide/plugins
*/
............
plugins: [{src: '~/plugins/paywithbank3d', ssr: false},],
...........
```

## Usage

PayWithBank3D can be launched using $paywithbank3d.launch() method, see example below

```vue
<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'ServeDev',
  methods:{
    open(){
      this.$paywithbank3d.launch({
        reference : 'pwb3d'+Math.random(),
        amount: 5000000,
        email: 'infinitypaul@live.com',
        currencyCode: 'NGN',
        color: '#aa0066',
        mode: 'test',
        onReady: function() {
          // The popup's iframe has loaded and it's preloader is visible
          // Use this to stop you own custom preloader
        },
        onClose : function() {
          console.log('close')
        },
        callback: function(reference) {
          // Successful Payment
        }
      })
    }
  }
});
</script>

<template>
  <div id="app">

    <a href="#" @click="open">Click Here</a>
  </div>
</template>

```

## Credits

- [Paul Edward](https://github.com/infinitypaul)
- [All Contributors](../../contributors)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details