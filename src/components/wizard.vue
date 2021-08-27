<template>
  <div class="stepper-wrapper">
    <p>шаг {{ currentStep }}</p>
    <p>выбранный корпус {{ this.$root.$data.selectedBuilding }}</p>
    <button v-on:click="decrementStep" v-show="currentStep > 0">Назад</button>
    <button v-on:click="incrementStep" v-show="currentStep < maxStep">Вперёд</button>
    <br>
    <br>
    <selectBuilding v-if="currentStep===0" @buildingSelected="saveBuildingNumber($event)"></selectBuilding>
    <select-zone v-if="currentStep===1"/>
    <select-additional v-if="currentStep===2"/>
  </div>
</template>

<script>
import selectBuilding from "../components/select-building.vue";
import SelectZone from './select-zone.vue';

export default {
  name: "wizard",
  components: {
    selectBuilding,
    SelectZone
  },
  data: function () {
    return {
      currentStep: 0,
      maxStep: 3,
    };
  },
  methods: {
    incrementStep: function () {
      if (this.currentStep <= this.maxStep) this.currentStep++;
      else return;
    },
    decrementStep: function () {
      if (this.currentStep > 0) this.currentStep--;
      else return;
    },
    saveBuildingNumber: function(number) {
      this.$root.$data.selectedBuilding = number;
      this.incrementStep();
    }
  },
};
</script>
