<template>

	<div :style="{
		backgroundImage: 'url(' + bgImg + ')',
		backgroundSize: size,
		animationDuration: speed + 's',
		height: height }">
	</div>

</template>

<script>
	export default {
		name: 'ScrollingObject',
		props: {
			imageUrl: String, // The name/url of the image to scroll
			speed: Number, // The speed of the scrolling, bigger meaning slower, smaller meaning faster
			height: { // The height of the scrolling object, from the bottom of the screen up
				type: String,
				default: "100vh"
			},
			size: { // CSS property background-size, can either be 'cover' or 'contain'
				type: String,
				default: 'cover',
				validator: function(value) {
					return ['cover', 'contain'].indexOf(value) !== -1;
				}
			}
		},

		computed: {
			bgImg: function() {
				return require('../../../assets/' + this.imageUrl);
			}
		}
	}
</script>

<style scoped lang="scss">

div {
	position: fixed;
  left:0;
  bottom:0;
  width:100vw;

  background-color:#2020e0;
  background-repeat: repeat-x;

  animation-name: background-move;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  font-family: 'Roboto';
}

// Background movement animation
@keyframes background-move {
  from {background-position:0 0;}
  to {background-position:100vw 0;}
}

</style>