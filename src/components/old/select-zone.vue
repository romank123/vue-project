<template>
  <div>
    <h1>Выберете помещение</h1>
    <h3>Выбранный корпус {{ selectedBuilding }}</h3>
    <h3>Выбранный этаж: {{ selectedFloor }}</h3>
    <button v-on:click="decrementFloor">Предыдущий</button>
    <span>{{ selectedFloor }}</span>
    <button v-on:click="incrementFloor">Следующий</button>
    <br />
    <br />
    <floorSheme v-bind:floor-number="selectedFloor" />
    <div class="control-panel">
      <button class="button" @click="$emit('decrementStep')">Назад</button>
      <button class="button" @click="$emit('incrementStep')">Далее</button>
    </div>
  </div>
</template>

<script>
import floorSheme from "./floor-sheme.vue";

export default {
  name: "selectZone",
  data: function () {
    return {
      selectedFloor: 1,
      maxFloorCount: 3,
    };
  },
  components: {
    floorSheme,
  },
  methods: {
    decrementFloor: function () {
      if (this.selectedFloor > 1) this.selectedFloor--;
    },
    incrementFloor: function () {
      if (this.selectedFloor < this.maxFloorCount) this.selectedFloor++;
    },
    console: function (msg) {
      console.log(msg);
    },
  },
};
</script>

<style>
.control-panel {
  margin-top: 2vh;
  display: flex;
  justify-content: space-between;
}
</style>
