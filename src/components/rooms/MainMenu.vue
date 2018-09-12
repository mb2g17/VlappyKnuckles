<template>
	<div>
	  <h1>This is MainMenu</h1>
	  <img src="../../assets/k-fly.png" />
	  <button @click="test">clickme</button>
	</div>
</template>

<script>
  export default {
    name: 'MainMenu',
    methods: {
    	test: function() {
    		this.$store.commit('setRoom', 'Game');
    	}
    }
  }
</script>

<style lang="scss">
</style>
