import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({ 
	state: {
		roomName: 'MainMenu',
		highscoreItems: [
			{
				name: "Matthew",
				score: 20
			},
			{
				name: "Jennifer",
				score: 15
			},
			{
				name: "Max",
				score: 10
			},
			{
				name: "David",
				score: 5
			},
			{
				name: "Mary",
				score: 3
			},
		]
  },

  getters: {
  	// Returns the new position of the new score on the high-score board. -1 if no high-score.
  	isHighScore: (state) => (newScore) => {
  		for (let i = 0; i < 5; i++) {
  			if (state.highscoreItems[i].score < newScore)
  				return i;
  		}
  		return -1;
  	}
  },

  mutations: {
  	// Changes room
  	setRoom(state, roomName) {
  		state.roomName = roomName;
  	},

  	// -- DO NOT USE, USE ACTION EQUIVALENTS INSTEAD --
  	// Adds a new score, payload needs name, score and position
  	setHighscore(state, payload) {
  		// Get payload items
  		const {name: name, score: score, position: position} = payload;

  		// Add to high-score
  		state.highscoreItems.splice(position, 0, {
  			name: name,
  			score: score
  		});

  		// Chop off the end
  		state.highscoreItems.splice(state.highscoreItems.length - 1, 1);
  	},
  },

  actions: {
  	// Adds a new score to high-score, payload needs name and score
  	setHighscore(context, payload) {
  		// Gets high-score position
  		let position = context.getters.isHighScore(payload.score);

  		// If it's -1, don't bother
  		if (position !== -1) {
  			// Run mutation
  			context.commit('setHighscore', {
  				position: position,
  				...payload
  			});
  		}
  	}
  },

  modules: {
  }

});