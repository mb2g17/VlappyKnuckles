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
    	}
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
