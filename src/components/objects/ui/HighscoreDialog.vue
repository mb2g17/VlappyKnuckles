<template>
	<v-dialog
    v-model="show"
    width="500"
    persistent
  >
    <v-card>
      <v-card-title
        class="headline grey lighten-2"
        primary-title
      >
        A new high-score!
      </v-card-title>

      <v-card-text>
        <p>Congratulations! You've earned a new high-score of {{ score }}!</p>
        <p>You are number {{ this.$store.getters.isHighScore(score) + 1 }} in the high-score table!</p>
        <p>Please type in your name and click 'Submit'!</p>

        <v-form ref="form" v-model="nameValid" lazy-validation>
          <v-text-field
			      v-model="name"
			      :rules="[v => (v && v.length <= 10) || 'Name must be less than 10 characters']"
			      :counter="10"
			      label="Name"
			      maxlength="10"
			      required
			    ></v-text-field>
        </v-form>

      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="red"
          flat
          @click="$emit('close')"
        >
        	Do not save my score
        </v-btn>
        <v-btn
          color="blue"
          flat
          @click="submit()"
        >
        	Submit
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
	export default {
		name: 'HighscoreDialog',
		props: ['show', 'score'],

		data: function() {
			return {
				name: '', // The name they input
	    	nameValid: true, // Stores validity of name in high-score dialog
			};
		},

		methods: {
			// When user clicks 'submit'
			submit: function() {
    		this.$store.dispatch('setHighscore', {name: this.name, score: this.score});
    		this.$emit('close');
			}
		}
	}
</script>

<style lang="scss">
</style>