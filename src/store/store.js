import Vuex from 'vuex';
import Vue from 'vue';
import storeSource from "../../public/store.json"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sourceZones: storeSource,
        selectedZone: {
            building: 4,
            minimumSuitableArea: 0,
            theMostSuitableArea: 0,
        },
    },
    getters: {
        smallestArea: state => {
            return Object.values(state.sourceZones).reduce((prev, curr) => prev.area < curr.area ? prev : curr).area
        },
        biggestArea: state => {
            return Object.values(state.sourceZones).reduce((prev, curr) => prev.area > curr.area ? prev : curr).area
        },
        countOfSelectedZones: state => {
            return Object.values(state.sourceZones).filter(c => c.area >= state.selectedZone.minimumSuitableArea && c.area <= state.selectedZone.theMostSuitableArea).length
        }
    },

    mutations: {
        setMinimumSuitableArea(state, newValue) {
            state.selectedZone.minimumSuitableArea = newValue;
        },
        setTheMostSuitableArea(state, newValue) {
            state.selectedZone.theMostSuitableArea = newValue;
        },
        updateSelectedBuilding(state, newValue) {
            state.selectedZone.building = newValue;
        }
    },

    actions: {

    }
});