<template>
	<div>

		<v-container fill-height>
			<v-layout align-center justify-center row fill-height>
				<v-flex xs8 text-xs-center>

				  <transition-card :show="showCard">

							<v-card-title class="justify-center">
					  		<h1>Highscores</h1>
							</v-card-title>

							<v-card-text class="px-5">
						  	<v-data-table
						  		:headers="headers"
						  		:items="$store.state.highscoreItems"
						  		:pagination.sync="pagination"
						  		must-sort
						  		hide-actions
						  	>
						  		<template slot="items" slot-scope="props">
						  			<td>{{ props.item.name }}</td>
						  			<td>{{ props.item.score }}</td>
						  		</template>
						  	</v-data-table>
							</v-card-text>

							<v-card-actions class="justify-center">
								<v-btn outline color="red" @click="back">Back</v-btn>
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
    name: 'Highscore',
    components: { TransitionCard },
    data: function() {
    	return {
    		showCard: false,
    		pagination: {
    			"sortBy": "score",
    			"descending": true
    		},
    		headers: [
    			{
            text: 'Name',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          {
          	text: 'Score',
          	align: 'center',
          	value: 'score'
        	},
      	]
    	};
    },
    methods: {
    	// When back button is clicked, go back to main menu
    	back: function() {
    		this.showCard = false;
    		setTimeout(() => {
    			this.$store.commit('setRoom', 'MainMenu');
    		}, 500);
    	}
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
</style>
