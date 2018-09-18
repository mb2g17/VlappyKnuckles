<template>
	<div>

		<v-container fill-height>
			<v-layout align-center justify-center row fill-height>
				<v-flex xs8 text-xs-center>

					<transition-card :show="showCard">

							<v-card-title class="justify-center">
					  		<img id="logo" src="../../assets/logo.png" />
							</v-card-title>

							<v-card-text class="px-5">
								<img id="knuckles" src="../../assets/k-fly.png" />
								<p>Hello! My name is Matthew Barnes. I developed Vlappy Knuckles as my first proper project in Vue.js. This uses Vue.js, Vuex and Vuetify.</p>
								<p>Rights for the Sonic franchise belong to SEGA and Sonic Team.</p>
							</v-card-text>

							<v-card-actions class="justify-center">
								<v-btn outline color="red" @click="play">Play</v-btn>
								<v-btn outline color="blue" @click="highscores">Highscores</v-btn>
								<v-btn outline color="green" @click="playOriginal">Play the original</v-btn>
								<v-btn outline color="purple" @click="portfolio">Visit my portfolio</v-btn>
							</v-card-actions>

					</transition-card>

				</v-flex>
			</v-layout>
		</v-container>

	</div>
</template>

<script>
  import TransitionCard from '../objects/ui/TransitionCard';

  export default {
    name: 'MainMenu',
    components: { TransitionCard },
    data: function() {
    	return {
    		showCard : false
    	};
    },
    methods: {
    	// Runs when 'Play' is clicked
    	play: function() {
    		this.leaveRoom(() => {
          this.$store.commit('setRoom', 'Game');
    		});
    	},

    	// Runs when 'Highscores' is clicked
    	highscores: function() {
    		this.leaveRoom(() => {
          this.$store.commit('setRoom', 'Highscore');
    		});
    	},

    	// Runs when 'Play the original' button is clicked
    	playOriginal: function() {
    		this.leaveRoom(() => {
    			window.location.href = "https://play.google.com/store/apps/details?id=com.mattbarnes.flappyknucklesrerelease";
    		});
    	},

    	// Runs when 'Visit my portfolio' is clicked
    	portfolio: function() {
    		this.leaveRoom(() => {
    			window.location.href = "http://www.matthewbarnes.x10.mx";
    		});
    	},

    	// Function to call when we want to leave the room. Runs leaving animation and takes a function parameter.
    	leaveRoom: function (leaveAction) {
    		this.showCard = false;
    		setTimeout(() => {
    			leaveAction();
    		}, 500);
    	},
    },
    // Shows the card after the page has been loaded
    created: function() {
    	setTimeout(() => {
    		this.showCard = true;
    	}, 500);
    }
  }
</script>

<style lang="scss">
#logo {
	display:inline-block;
	width:50%;
}
#knuckles {
	padding-bottom:20px;
}
</style>
