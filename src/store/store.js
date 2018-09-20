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
  },

  mutations: {
  	setRoom(state, roomName) {
  		state.roomName = roomName;
  	}
  },

  actions: {
  },

  modules: {
  }

});