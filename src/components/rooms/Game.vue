<template>
  <div>

    <ScrollingObject image-url="grass.png" :speed=10 height="39px" size="contain"></ScrollingObject>
    
    <Knuckles ref="knuckles" @die="die"></Knuckles>

    <Pipe v-for="(spacePos, index) in pipes"
    	:ref="'pipe' + index"
    	:key="index + 1"
    	:pkey="index"
    	:space-pos="spacePos"
    	:v-show="spacePos !== -1"
    	@gone="killPipe($event)">
    </Pipe>

    <Timer ref="pipeTimer" :duration=90 @tick="newPipe"></Timer>

    <!-- Controls -->
    <div>
			<v-btn color="blue" @click="flap">Flap</v-btn>
			<v-btn color="yellow" @click="pause" :disabled="this.updateHandle === -1">Pause</v-btn>
			<v-btn color="green" @click="update" :disabled="this.updateHandle !== -1">Start</v-btn>
			<v-btn color="green" @click="restart">Restart</v-btn>
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
  import Ground from '../objects/game/Ground';
  import Pipe from '../objects/game/Pipe';

  import ScrollingObject from '../objects/misc/ScrollingObject';
  import Timer from '../objects/misc/Timer';

  import { getRandomInt } from '../../libs/Random';

  export default {
    name: 'Game',

    components: {
    	Knuckles, Ground, Pipe,
    	ScrollingObject, Timer
    },

    data: function() {
    	return {
	    	updateHandle: -1, // The handle of the update interval
	    	pipes: [ // Array of pipe space positions; there are 10 in the buffer, -1 means not used
	    		-1, -1, -1, -1, -1, -1, -1, -1, -1, -1
	    	]
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
		    		// Updates Knuckles
		    		this.$refs.knuckles.update();

		    		// Updates pipe creation timer
		    		this.$refs.pipeTimer.update();

		    		// For each pipe, update it
		    		for (let i = 0; i < this.pipes.length; i++)
		    		{
		    			// If this pipe exists...
		    			if (this.pipes[i] !== -1)
		    			{
		    				// Get the reference of this pipe
		    				let pipeRef = this.$refs['pipe' + i][0];

		    				// Update it
		    				pipeRef.update();

		    				// Get pipe position
		    				let pipePos = pipeRef.getPos;

		    				// If Knuckles is within range of this pipe
		    				if (pipePos <= 97 && !pipeRef.passed)
		    				{
		    					// Set this pipe as 'passed'
		    					pipeRef.pass();

		    					// Get knuckles' pos, space height and space pos
		    					let knucklesPos = this.$refs.knuckles.vpos;
		    					let spaceHeight = pipeRef.spaceHeight;
		    					let spacePos = -pipeRef.spacePosData; // Flipped because raw spacePos thinks - is up and + is down

		    					// Calculate space pos top and bottom
		    					let spacePosTop = window.innerHeight / 2 + spaceHeight / 2 + spacePos;
		    					let spacePosBottom = window.innerHeight / 2 - spaceHeight / 2 + spacePos;

		    					console.log(`knucklesPos: ${knucklesPos}`);
		    					console.log(`spaceHeight: ${spaceHeight}`);
		    					console.log(`spacePos: ${spacePos}`);

		    					console.log(`spacePosTop: ${spacePosTop}`);
		    					console.log(`spacePosBottom: ${spacePosBottom}`);
		    					
		    					// If Knuckles is going through the space
		    					if (knucklesPos + 24 <= spacePosTop && knucklesPos >= spacePosBottom)
		    					{
		    						console.log("Passed!");
		    					}
		    					else
		    					{
		    						console.log("BONK");
		    					}
		    				}
		    			}
		    		}
		    		
		    	}, 17);
    		}
    	},

    	// Creates a new pipe
    	newPipe: function() {
    		// Look for an element without a pipe
    		for (let i = 0; i < this.pipes.length; i++)
    		{
    			// If this pipe is free, use it
    			if (this.pipes[i] === -1) {
  					this.pipes[i] = getRandomInt(-window.innerHeight / 3, window.innerHeight / 3);
  					this.$refs["pipe" + i][0].setSpacePos(this.pipes[i]);
  					break;
    			}
    		}
    	},

    	// Kills a pipe, given its index
    	killPipe: function(index) {
    		this.pipes[index] = -1;
    		this.$refs['pipe' + index][0].putBack();
    	},

    	// Flaps Knuckles up in the air
    	flap: function() {
    		this.$refs.knuckles.flap();
    	},

    	// Executed when Knuckles dies
    	die: function() {
    	},

    	// Restarts the game
    	restart: function() {
    		this.$refs.knuckles.resetPos(); // Resets knuckles position
    		this.$refs.knuckles.dead = false; // Revives knuckles

				// Removes all pipes
    		for (let i = 0; i < this.pipes.length; i++) {
    			this.pipes[i] = -1;
    			this.$refs['pipe' + i][0].putBack();
    		}

    		this.pause(); // Pauses game
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
