<template>
  <div id="app">
    <component v-bind:is="roomName"></component>
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
  border: 5px;
  border-color:red;
  border-style: ridge;

  position:fixed;
  left:calc(50vw - 400px);
  top:calc(50vh - 300px);
  width:800px;
  height:600px;

  background-image: url('assets/bg.png');
  background-size: 800px 600px;
  background-repeat: repeat-x;
  animation: background-move 10s infinite;
  animation-timing-function: linear;
}

// Background movement animation
@keyframes background-move {
  from {background-position:0 0;}
  to {background-position:800px 0;}
}
</style>
