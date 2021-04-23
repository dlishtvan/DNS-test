<template>
  <div id="app" class="p-3">
    <Home></Home>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Home from '@/views/Home';

@Component({
  components: {
    Home
  }
})

export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
  }
}
</style>
