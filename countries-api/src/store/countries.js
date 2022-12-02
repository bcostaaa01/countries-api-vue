import axios from "axios";
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

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
    getCountriesData() {
        console.log('action has been called')
        const response = axios.get(API)
        console.log(response)
        // .then((response) => response)
    }
};

const getters = {
    getAllCountries: (state) => {
        return state.allCountries;
    }
};

export default new Vue.Store({
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
})