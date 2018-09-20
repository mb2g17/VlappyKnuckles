<template>
  <div id="app">

    <!-- Background -->
    <ScrollingObject image-url="bg.png" :speed=15 size="cover"></ScrollingObject>

    <!-- Room container -->
    <component id="roomContainer" v-bind:is="roomName"></component>

  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Game from './components/rooms/Game';
  import Highscore from './components/rooms/Highscore';
  import MainMenu from './components/rooms/MainMenu';

  import ScrollingObject from './components/objects/misc/ScrollingObject';

  export default {
    name: 'App',
    components: {
      Game, Highscore, MainMenu, ScrollingObject
    },
    computed: {
      ...mapState([
        'roomName'
      ])
    }
  }
</script>

<style lang="scss">
// Outside the game area
html, body {
  background-color:black;
  overflow:hidden;
}

// App
#app {
  position:fixed;
  left:0;
  top:0;
  width:100vw;
  height:100vh;

  font-family: 'Roboto';
}

// Contains the room
#roomContainer {
  width:100%;
  height:100%;
}
</style>
