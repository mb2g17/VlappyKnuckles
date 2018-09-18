<template>
  <div>
    
    <Knuckles ref="knuckles" @die="die"></Knuckles>

    <!-- Controls -->
    <div>
			<v-btn color="blue" @click="flap">Flap</v-btn>
			<v-btn color="yellow" @click="pause" :disabled="this.updateHandle === -1">Pause</v-btn>
			<v-btn color="green" @click="update" :disabled="this.updateHandle !== -1">Start</v-btn>
			<v-btn color="green" @click="restart" :disabled="!this.restartEnabled">Restart</v-btn>
			<v-btn color="red" @click="quit">Quit</v-btn>
		</div>

		<div>
			<v-btn color="purple" @click="debugResetPos">DEBUG: Reset Knuckles' position</v-btn>
			<v-btn color="purple" @click="debugTEST">DEBUG: TEST</v-btn>
		</div>

  </div>
</template>

<script>
  import Knuckles from '../objects/game/Knuckles';

  export default {
    name: 'Game',

    components: {
    	Knuckles
    },

    data: function() {
    	return {
	    	updateHandle: -1, // The handle of the update interval
	    	restartEnabled: false, // Becomes true when we can restart the game
    	}
    },

    methods: {
    	// Kickstarts the update interval
    	update: function() {
    		// If update interval isn't already set
    		if (this.updateHandle === -1)
    		{
    			// Run update interval
		    	this.updateHandle = setInterval(() =>
		    	{
		    		// Updates all objects
		    		this.$refs.knuckles.update();
		    	}, 17);
    		}
    	},

    	// Flaps Knuckles up in the air
    	flap: function() {
    		this.$refs.knuckles.flap();
    	},

    	// Executed when Knuckles dies
    	die: function() {
    		this.restartEnabled = true;
    	},

    	// Restarts the game
    	restart: function() {
    		this.$refs.knuckles.resetPos();
    		this.$refs.knuckles.dead = false;
    		this.pause();
    	},

    	// Pauses the game by clearing the update interval
    	pause: function() {
    		clearInterval(this.updateHandle);
    		this.updateHandle = -1;
    	},

    	// Quits and goes back to main menu
    	quit: function() {
    		this.pause();
        this.$store.commit('setRoom', 'MainMenu');
    	},

    	// ----------------------------------------
    	// --------------- DEBUG ------------------
    	// ----------------------------------------
    	// DEBUG - Reset knuckles' position
    	debugResetPos: function() {
    		this.$refs.knuckles.resetPos();
    	},

    	// DEBUG - Test, runs any code
    	debugTEST: function() {
    		alert(this.updateHandle);
    	}
    }
  }
</script>

<style lang="scss">
</style>
