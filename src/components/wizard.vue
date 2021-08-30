<template>
  <div>
    <!-- <show-cover @incrementStep="incrementStep" v-if="currentStep === 0" /> -->
    <!-- <selectBuilding v-if="currentStep === 1" @buildingSelected="saveBuildingNumber($event)" /> -->
    <!-- <select-zone v-if="currentStep === 2" /> -->
    <!-- <select-additional v-if="currentStep === 3" /> -->
  </div>
</template>

<script>
// import selectBuilding from "../components/select-building.vue";
// import SelectZone from "./select-zone.vue";
// import showCover from "./show-cover.vue";

export default {
  name: "wizard",
  components: {
    // selectBuilding,
    // SelectZone,
    // showCover,
  },
  data: function () {
    return {
      // currentStep: 0,
      // maxStep: 3,
    };
  },
    // saveBuildingNumber: function (number) {
    //   this.$root.$data.selectedBuilding = number;
    //   this.incrementStep();
    // },
    // console: function (msg) {
    //   console.log(msg);
    // },
  mounted() {
    console.log(this.$root.$data.store);
  }
};
</script>
