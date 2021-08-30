<template>
  <div id="app">
    <show-cover @incrementStep="incrementStep" v-if="step.current === 0"/>
    <select-square v-if="step.current === 1"/>
  </div>
</template>

<script>
import SelectSquare from './components/select-square.vue';
import ShowCover from './components/show-cover.vue';

export default {
  name: "App",
  data: function() {
    return {
      step: {
        current: 1,
        min: 0,
        max: 3
      }
    }
  },
  components: {
    ShowCover,
    SelectSquare,
  },
  methods: {
    incrementStep: function () {
      if (this.step.current <= this.step.max) this.step.current++;
      else return;
    },
    decrementStep: function () {
      if (this.step.current > this.step.min) this.step.current--;
      else return;
    },
  }
};
</script>

<style>
  body {
    margin: 0;
  } 
</style>
