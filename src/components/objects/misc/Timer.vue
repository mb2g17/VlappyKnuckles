<template>
	
</template>

<script>
	export default {
		name: 'Timer',
		props: ['duration'],

		data: function() {
			return {
				enabled: true,
				counter: 0
			}
		},

		methods: {
			update() {
				// If we're enabled
				if (this.enabled)
				{
					// Increment counter
					this.counter++;

					// If counter is past duration, execute event and reset counter
					if (this.counter > this.duration) {
						this.$emit('tick');
						this.counter = 0;
					}
				}
			}
		}
	}
</script>

<style lang="scss">
</style>