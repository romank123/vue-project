import Vuex from 'vuex';
import Vue from 'vue';
import storeSource from "../../public/store.json"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        selected: storeSource,
    },

    getters: {

    },

    mutations: {

    },

    actions: {

    }
});