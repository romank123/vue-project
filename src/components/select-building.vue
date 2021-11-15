<template>
  <div class="page-wrapper">
    <h1>Выберете корпус</h1>
    <div class="page">
      <svgBuildingSheme ref="buildingSсheme" @mouseover="checkHover($event)" />
      <div class="floor-panel" ref="radioGroup">
        <div>
          <input
            type="radio"
            id="buildingSelection-1"
            name="buildingSelection"
            value="1"
            @change="updateStoreOnRadioButton($event)"
          />
          <label for="buildingSelection-1">Первый корпус</label>
        </div>

        <div>
          <input
            type="radio"
            id="buildingSelection-2"
            name="buildingSelection"
            value="2"
            @change="updateStoreOnRadioButton($event)"
          />
          <label for="buildingSelection-2">Второй корпус</label>
        </div>

        <div>
          <input
            type="radio"
            id="buildingSelection-3"
            name="buildingSelection"
            value="3"
            @change="updateStoreOnRadioButton($event)"
          />
          <label for="buildingSelection-3">Третий корпус</label>
        </div>

        <div>
          <input
            type="radio"
            id="buildingSelection-4"
            name="buildingSelection"
            value="4"
            @change="updateStoreOnRadioButton($event)"
          />
          <label for="buildingSelection-4">Четвёртый корпус</label>
        </div>

        <p>Выбраннный корпус: {{ getSelectedBuilding }}</p>
      </div>
    </div>
    <div class="control-panel">
      <button class="button" @click="$emit('decrementStep')">Назад</button>
      <button class="button" @click="$emit('incrementStep')">Далее</button>
    </div>
  </div>
</template>

<script>
import svgBuildingSheme from "../assets/svg/svg-building-sheme.svg";

export default {
  name: "selectBuilding",
  components: {
    svgBuildingSheme,
  },
  data: function () {
    return {
      svgBuildingElsArray: [],
    };
  },
  computed: {
    getSelectedBuilding() {
      return this.$store.state.selectedZone.building;
    },
  },
  mounted() {
    let svgEl = this.$refs.buildingSсheme;
    this.svgBuildingElsArray[0] = false; //для простоты нумерации нулевого здания у нас не будет
    svgEl.getElementsByClassName("building").forEach((el, i) => {
      this.svgBuildingElsArray[i + 1] = svgEl.querySelector(
        `[data-building-number="${i + 1}"]`
      );
    });

    this.svgBuildingElsArray[this.getSelectedBuilding].setAttribute(
      "fill",
      "#3498DB"
    );
    this.$refs.radioGroup.querySelector(
      `[value="${this.getSelectedBuilding}"]`
    ).checked = true;
  },
  watch: {
    getSelectedBuilding: function (newVal, oldVal) {
      // this.svgBuildingElsArray.forEach(el=>{if(el) el.setAttribute("fill" , "transparent")});
      //if(this.svgBuildingElsArray[newVal] == undefined) debugger;

      this.svgBuildingElsArray[oldVal].setAttribute("fill", "transparent");
      this.svgBuildingElsArray[newVal].setAttribute("fill", "#3498DB");
      this.$refs.radioGroup.querySelector(`[value="${newVal}"]`).checked = true;
    },
  },
  methods: {
    updateStoreOnRadioButton: function (e) {
      this.$store.commit("updateSelectedBuilding", e.target.value);
    },
    checkHover: function (e) {
      if (e.target.dataset.buildingNumber) {
        this.$store.commit(
          "updateSelectedBuilding",
          e.target.dataset.buildingNumber
        );
      } else {
        return;
      }
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}

/* .page-wrapper {
  width: 90vw;
  height: 90vh;
} */

.page {
  display: flex;
  height: 50vh;
}

.floorSheme {
  margin: auto;
  max-width: 100%;
  max-height: 100%;
}

.floor-panel {
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/* .page-wrapper {
  width: 90vw;
  height: 90vh;
} */
</style>
