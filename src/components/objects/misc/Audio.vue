<template>
	
</template>

<script>
	export default {
		name: 'Audio',
		props: ['sound', 'loop'],

		data: function() {
			return {
				audio: undefined,
			};
		},

		created: function() {
			this.audio = new Audio(this.sound);
			
			if (this.loop !== undefined)
				this.audio.loop = this.loop;
		},

		methods: {
			play: function() {
				this.audio.play();
			},

			stop: function() {
				this.audio.pause();
				this.audio.currentTime = 0;
			}
		}
	}
</script>

<style lang="scss">
</style>