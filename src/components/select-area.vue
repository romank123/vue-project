<template>
  <div class="page-wrapper">
    <h1>Выберете помещение</h1>
    <p>Выбранный корпус {{ selectedBuilding }}</p>
    <p>Выбранный этаж: {{ selectedFloor }}</p>
    <p>Выбранное помещение: {{ selectedArea }}</p>
    <component
      :is="getCurrentFloorSheme"
      ref="floorSheme"
      class="floorSheme"
      @click="updateCurrentArea($event)"
    />
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
    updateCurrentArea: function (e) {
      this.$store.commit(
        "updateSelectedArea",
        e.target.closest(".areaItem-wrapper").id
      );
    },
  },
  computed: {
    selectedBuilding() {
      return this.$store.state.selectedZone.building;
    },
    selectedFloor() {
      return this.$store.state.selectedZone.floor;
    },
    selectedArea() {
      return this.$store.state.selectedZone.areaId
        ? this.$store.state.selectedZone.areaId
        : "не выбрано";
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
  max-width: 50vw;
  max-height: 50vh;
  margin: auto;
}

.floorSheme .zone:hover {
  fill-opacity: 1;
}

.areaItem-wrapper:hover {
  stroke-opacity: 1;
}
</style>
