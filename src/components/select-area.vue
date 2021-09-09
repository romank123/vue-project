<template>
  <div class="page-wrapper">
    <h1>Выберете помещение</h1>
    <h3>Выбранный корпус {{ selectedBuilding }}</h3>
    <h3>Выбранный этаж: {{ selectedFloor }}</h3>
    <h3>Выбранное помещение: {{ selectedArea }}</h3>
    <component :is="getCurrentFloorSheme" ref="floorSheme" class="floorSheme" @click="updateCurrentArea($event)"/>
    <div class="control-panel">
      <button class="button" @click="$emit('decrementStep')">Назад</button>
      <button class="button" @click="$emit('incrementStep')">Далее</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "selectArea",
  methods: {
      updateCurrentArea: function(e) {
          this.$store.commit("updateSelectedArea", e.target.closest(".areaItem-wrapper").id );
      }
  },
  computed: {
    selectedBuilding() {
      return this.$store.state.selectedZone.building;
    },
    selectedFloor() {
      return this.$store.state.selectedZone.floor;
    },
    selectedArea() {
      return this.$store.state.selectedZone.areaId;
    },
    getCurrentFloorSheme: function () {
      let currentFloorNumber = this.floorNumber;
      return () =>
        import(
          `../assets/svg/building-${this.selectedBuilding}-floor-${this.selectedFloor}.svg`
        );
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
.floorSheme {
  max-width: 70vw;
  max-height: 70vh;
  margin: auto;
}
.floorSheme .zone:hover {
  fill-opacity: 1;
}

.areaItem-wrapper:hover {
    stroke-opacity:1;
}
</style>