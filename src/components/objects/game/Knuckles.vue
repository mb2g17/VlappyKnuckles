<template>
	<img :src="require('../../../assets/' + this.sprite)" :style="{ bottom: vposStr }" />
</template>

<script>
  export default {
    name: 'Knuckles',

    data: function() {
    	return {
    		vposStr: "0px", // v position but as a string (read-only)
    		vpos: 0, // vertical position
	    	vspeed: 0, // vertical speed
	    	acceleration: 0.3, // vertical acceleration

	    	deathArea: 15, // the area at which Knuckles will die in pixels
	    	dead: false, // Are we dead?

        falling: false, // Are we falling?
    	}
    },

    computed: {
    	// The sprite of knuckles
    	sprite: function() {
    		return this.dead ? "k-dead.png" : "k-fly.png";
    	}
    },

    methods: {
    	// Run this code on update
    	update: function() {
    		// If we're not dead
    		if (!this.dead)
    		{
	    		// Changes vpos
	    		this.vpos -= this.vspeed;
	    		this.vposStr = this.vpos + "px";

	    		// Changes vspeed
	    		this.vspeed += this.acceleration;

	    		// If Knuckles is in the death area
	    		if (this.vpos <= this.deathArea)
	    		{
	    			// Die
	    			this.dead = true;

	    			// Say we died
	    			this.$emit('die');
	    		}
    		}
    	},

    	// Flaps knuckles
    	flap: function() {
    		this.vspeed = -6;
    	},

    	// Resets position of Knuckles
    	resetPos: function() {
    		this.vpos = window.innerHeight / 2;
    		this.vposStr = this.vpos + "px";
    		this.vspeed = 0;
    	},

      // Makes Knuckles fall
      fall: function() {
        // Set falling flag
        this.falling = true;

        // Set up calculations
        let s = this.vpos - this.deathArea;

        let t = 30;
        let i = 0;

        let a = (1 / (0.5 * Math.pow(t,2))) * s;
        let u = 0;

        let intervalID = setInterval(function(vm) {
          vm.vpos -= u;
          vm.vposStr = vm.vpos + "px";
          u += a;
          i++;

          // If we've fallen enough
          if (i >= t) {
            vm.falling = false;
            vm.vpos = 15;
            vm.vposStr = "15px";
            clearInterval(intervalID);
          }
        }, 17, this);
      },
    },

    created: function() {
    	// Sets up knuckles' position
    	this.vpos = window.innerHeight / 2;
  		this.vposStr = this.vpos + "px";
    }
  }
</script>

<style scoped lang="scss">
img {
	position: fixed;
	left: 50px;
}
</style>
