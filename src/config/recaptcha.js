const state = {
  verified: false,
};

const getters = {
  getVerification: (state) => state.verified,
};

const actions = {
  setVerification({ commit }, b) {
    commit("doneVerification", b);
  },
};

const mutations = {
  doneVerification(state, data) {
    state.verified = data;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
