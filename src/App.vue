<template>
  <div id="app">
    <show-cover             @incrementStep="incrementStep"                                v-if="step.current === 0"/>  <!-- обложка --> 
    <select-square          @incrementStep="incrementStep" @decrementStep="decrementStep" v-if="step.current === 1"/>  <!-- выберете прощадь -->
    <select-building        @incrementStep="incrementStep" @decrementStep="decrementStep" v-if="step.current === 2"/>  <!-- выберете корпус --> 
    <select-floor           @incrementStep="incrementStep" @decrementStep="decrementStep" v-if="step.current === 3"/>  <!-- выберете этаж -->
    <select-area            @incrementStep="incrementStep" @decrementStep="decrementStep" v-if="step.current === 4"/>  <!-- выберете офис на конкретном этаже -->
    <select-options         @incrementStep="incrementStep" @decrementStep="decrementStep" v-if="step.current === 5"/>  <!-- выберете дополнительные опции для офиса-->  
    <select-walls           @incrementStep="incrementStep" @decrementStep="decrementStep" v-if="step.current === 6"/>  <!-- варианты отделки: стены -->
    <select-flooring        @incrementStep="incrementStep" @decrementStep="decrementStep" v-if="step.current === 7"/>  <!-- варианты отделки: напольное покрытие -->
    <select-ceiling         @incrementStep="incrementStep" @decrementStep="decrementStep" v-if="step.current === 8"/>  <!-- варианты отделки: потолок -->  
    <select-layout-options  @incrementStep="incrementStep" @decrementStep="decrementStep" v-if="step.current === 9"/>  <!-- варианты планировки -->
    <select-partitions      @incrementStep="incrementStep" @decrementStep="decrementStep" v-if="step.current === 10"/> <!-- варинты отделки: перегородки --> 
    <send-request                                                                         v-if="step.current === 11"/> <!-- отправка заявки -->
  </div>
</template>

<script>
import showCover from "./components/show-cover.vue";
import selectSquare from "./components/select-square.vue";
import selectBuilding from './components/select-building.vue';
import selectFloor from './components/select-floor.vue';
import selectArea from './components/select-area.vue';
import selectOptions from "./components/select-options.vue";
import selectWalls from "./components/select-walls.vue";
import selectFlooring from "./components/select-flooring.vue";
import selectCeiling from "./components/select-ceiling.vue";
import selectLayoutOptions from "./components/select-layoutOptions.vue";
import selectPartitions from "./components/select-partitions.vue";
import sendRequest from "./components/send-request.vue";

export default {
  name: "App",
  data: function () {
    return {
      step: {
        current: 0,
        min: 0,
        max: 11,
      },
    };
  },
  components: {
    showCover,
    selectSquare,
    selectBuilding,
    selectFloor,
    selectArea,
    selectOptions,
    selectWalls,
    selectFlooring,
    selectCeiling,
    selectLayoutOptions,
    selectPartitions,
    sendRequest
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
h1,h2,h3,h4,h5 {
  font-family: Oswald, system-ui;
}

h1 {
  text-align: center;
}

body {
  margin: 5rem;
}

p,span,label {
  font-family: system-ui;
  font-size: 18px;
}


</style>
