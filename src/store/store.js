import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({ 
	state: {
		roomName: 'MainMenu'
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