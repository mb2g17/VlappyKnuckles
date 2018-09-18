<template>
  <div id="app">
    <component id="roomContainer" v-bind:is="roomName"></component>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Game from './components/rooms/Game';
  import Highscore from './components/rooms/Highscore';
  import MainMenu from './components/rooms/MainMenu';

  export default {
    name: 'App',
    components: {
      Game, Highscore, MainMenu
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

  background-image: url('assets/bg.png');
  background-color:#2020e0;
  background-size: cover;
  background-repeat: repeat-x;
  animation: background-move 15s infinite;
  animation-timing-function: linear;

  font-family: 'Roboto';
}

// Background movement animation
@keyframes background-move {
  from {background-position:0 0;}
  to {background-position:100vw 0;}
}

// Contains the room
#roomContainer {
  width:100%;
  height:100%;
}
</style>
