<template>
  <div id="app">
    <show-cover       @incrementStep="incrementStep"                                v-if="step.current === 0"/>
    <select-square    @incrementStep="incrementStep" @decrementStep="decrementStep" v-if="step.current === 1"/>
    <select-building  @incrementStep="incrementStep" @decrementStep="decrementStep" v-if="step.current === 2"/>
    <select-floor     @incrementStep="incrementStep" @decrementStep="decrementStep" v-if="step.current === 3"/>
    <select-zone      @incrementStep="incrementStep" @decrementStep="decrementStep" v-if="step.current === 4"/>
  </div>
</template>

<script>
import SelectBuilding from './components/select-building.vue';
import SelectFloor from './components/select-floor.vue';
import SelectSquare from "./components/select-square.vue";
import SelectZone from './components/select-zone.vue';
import ShowCover from "./components/show-cover.vue";

export default {
  name: "App",
  data: function () {
    return {
      step: {
        current: 2,
        min: 0,
        max: 4,
      },
    };
  },
  components: {
    ShowCover,
    SelectSquare,
    SelectZone,
    SelectFloor,
    SelectBuilding,
  },
  methods: {
    incrementStep: function () {
      if (this.step.current < this.step.max) this.step.current++;
      else return;
    },
    decrementStep: function () {
      if (this.step.current > this.step.min) this.step.current--;
      else return;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
</style>
