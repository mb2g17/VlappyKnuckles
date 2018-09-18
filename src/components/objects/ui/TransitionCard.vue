<template>
	<transition>
		<v-card v-if="show">
			<slot></slot>
		</v-card>
	</transition>
</template>

<script type="text/javascript">
  export default {
    name: 'TransitionCard',
    props: ['show']
  }
</script>

<style lang="scss">
// Transitions
.v-enter-active, .v-leave-active {
	transition: all 0.3s ease;
}
.v-enter {
	transform: translateX(-100px);
	opacity: 0
}
.v-leave-to {
	transform: translateX(100px);
	opacity: 0;
}
</style>