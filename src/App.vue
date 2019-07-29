<template lang=pug>
  v-app
    v-app-bar(app)
      v-toolbar-title
        span Vuetify
        span(class="font-weight-light") MATERIAL DESIGN
      v-spacer
      v-btn(
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      )
        span(class="mr-2") Latest Release

    v-content
      HelloWorld

    v-expansion-panels
      v-expansion-panel(
        v-for="(item,i) in 5"
        :key="i"
      )
        v-expansion-panel-header Item
        v-expansion-panel-content Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>
