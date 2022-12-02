import axios from "axios";

const API = process.env.VUE_APP_API_BASE_URL;

const state = {
    allCountries: []
};

const mutations = {
    SET_ALL_COUNTRIES(state, payload) {
        state.allCountries = payload;
    }
};

const actions = {
    setAllCountries({ commit }, data) {
        commit("SET_ALL_COUNTRIES", data)
    },
};

const getters = {
    getAllCountries: (state) => {
        return state.allCountries;
    }
};

const countriesModule = {
    state,
    mutations,
    actions,
    getters,
};

export default countriesModule;
