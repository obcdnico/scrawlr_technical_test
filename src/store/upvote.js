const state = {
  componentsList: []
}

const actions = {
  changeStatus ( { state, commit }, index) {
    console.log('store actions changeStatus', state);
    if (state.componentsList[index] && state.componentsList[index].status === 'normal') {
    	commit("changeStatusToSelected", index);
    } else {
    	commit("changeStatusToNormal", index);
    }

  },
  addComponent( { state, commit }) {
  	commit("addComponent");
  	
  }
}

const mutations = {
  changeStatusToSelected (state, index) {
  	if (!state.componentsList[index]) { state.componentsList[index] = {}; }
  	state.componentsList[index].status = 'selected'; 
    // state.status = p;
  },
  changeStatusToNormal (state, index) {
  	if (!state.componentsList[index]) { state.componentsList[index] = {}; }
  	state.componentsList[index].status = 'normal'; 
    // state.status = p;
  }
}

const getters = {};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}