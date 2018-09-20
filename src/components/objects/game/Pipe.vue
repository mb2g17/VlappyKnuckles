<template>
	<div class="pipe" :style="{ right: pos + 'px', transform: 'translate(0,' + spacePosData + 'px)' }">

		<div class="top" :style="{ top: 'calc(-50vh - ' + (spaceHeight / 2) + 'px)' }">
			<img class="body" src="../../../assets/pipeBody.png" /><img class="head" src="../../../assets/pipeHead.png" />
		</div>

		<div class="bottom" :style="{ top: 'calc(-50vh + ' + (spaceHeight / 2) + 'px)' }">
			<img class="body" src="../../../assets/pipeBody.png" /><img class="head" src="../../../assets/pipeHead.png" />
		</div>
			
	</div>
</template>

<script>
	export default {
		name: 'Pipe',

		props: {
			spaceHeight: { // The height of the space in pixels
				type: Number,
				default: 125
			},
			spacePos: { // The position of the space relative to the middle
				type:Number,
				default:0
			},
			speed: { // The speed of the pipe scrolling
				type:Number,
				default:4
			},
			pkey: { // The key of this pipe
				type:Number,
				required:true
			}
		},

		data: function() {
			return {
				pos: -38,
				spacePosData: 0 // True version of spacePos in data, so Vue doesn't whine at me
			}
		},

		created: function() {
			this.spacePosData = this.spacePos;
		},

		methods: {
			update: function() {
				// Goes further
				this.pos += this.speed;

				// If we're past Knuckles, send event that this pipe is gone
				if (this.pos >= window.innerWidth) {
					this.$emit('gone', this.pkey);
				}
			},

			// Puts the pipe back
			putBack: function() {
				this.pos = -38;
			},

			// Mutator for spacePos data
			setSpacePos: function(newSpacePos) {
				this.spacePosData = newSpacePos;
			}
		}
	}
</script>

<style scoped lang="scss">

.pipe {
	position:fixed;
	right:50vw;
	height:200vh;

	// TOP + BOTTOM
	.top, .bottom {
		display:block;
		width: 38px;
		height: 100vh;

		.body {
			width: 30px;
			height: calc(100vh - 17px);
		}
	}

	// TOP
	.top {
		position:relative;
		top:calc(-50vh - 50px);
		.body {
			position:absolute;
			top:0px;
			left:4px;
		}
		.head {
			position:absolute;
			bottom:4px;
		}
	}

	// BOTTOM
	.bottom {
		position:relative;
		top:calc(-50vh + 50px);
		.body {
			position:absolute;
			bottom:0;
			left:4px;
		}
		.head {
			position:absolute;
			top:4px;
		}
	}
}

</style>