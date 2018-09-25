<template>
	
	<div :style="{
		left: left + 'px',
		top: top + 'px',
		opacity: visible === true ? '1' : '0'
	}">
	</div>

</template>

<script>
	export default {
		name: 'Ring',
		props: ['left', 'top', 'visible']
	}
</script>

<style scoped lang="scss">
	div {
		background-image: url('../../../assets/ring.png');
		background-size: cover;

		position:fixed;

		animation: spin 3s infinite;

		width:25px;
		height:25px;
	}

	@keyframes spin {
		0% {transform: scaleX(1.0);}
		50% {transform: scaleX(-1.0);}
		100% {transform: scaleX(1.0);}
	}
</style>