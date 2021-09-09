<template>
  <div id="app">
    <show-cover       @incrementStep="incrementStep"                                v-if="step.current === 0"/>
    <select-square    @incrementStep="incrementStep" @decrementStep="decrementStep" v-if="step.current === 1"/>
    <select-building  @incrementStep="incrementStep" @decrementStep="decrementStep" v-if="step.current === 2"/>
    <select-floor     @incrementStep="incrementStep" @decrementStep="decrementStep" v-if="step.current === 3"/>
    <select-area      @incrementStep="incrementStep" @decrementStep="decrementStep" v-if="step.current === 4"/>
    <select-options   @incrementStep="incrementStep" @decrementStep="decrementStep" v-if="step.current === 5"/>
    <select-walls   @incrementStep="incrementStep" @decrementStep="decrementStep" v-if="step.current === 6"/>
  </div>
</template>

<script>
import SelectWalls from "./components/select-walls.vue";
import SelectOptions from "./components/select-options.vue";
import SelectBuilding from './components/select-building.vue';
import SelectFloor from './components/select-floor.vue';
import SelectSquare from "./components/select-square.vue";
import SelectArea from './components/select-area.vue';
import ShowCover from "./components/show-cover.vue";

export default {
  name: "App",
  data: function () {
    return {
      step: {
        current: 0,
        min: 0,
        max: 6,
      },
    };
  },
  components: {
    ShowCover,
    SelectSquare,
    SelectArea,
    SelectFloor,
    SelectBuilding,
    SelectOptions,
    SelectWalls
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
