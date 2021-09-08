<template>
  <div class="page-wrapper">
    <h1>Выберете этаж</h1>
    <div class="page">
      <floorSсhemeSVG class="floorSсheme" ref="floorSсheme" @mouseover="checkHover($event)"/>
      <div class="floor-panel">
        <button @click="incrementFloor">↑</button>
        <input type="number" :value="selectedFloor" min="1" max="21" />
        <button @click="decrementFloor">↓</button>
      </div>
    </div>
    <div class="control-panel">
      <button class="button" @click="$emit('decrementStep')">Назад</button>
      <button class="button" @click="$emit('incrementStep')">Далее</button>
    </div>
  </div>
</template>

<script>
import floorSсhemeSVG from "../assets/svg/svg-floor-sheme.svg";

export default {
  name: "selectFloor",
  components: {
    floorSсhemeSVG,
  },
  data: function () {
    return {
      svgFloorEls: {},
      selectedFloor: "",
    };
  },
  mounted() {
    this.svgFloorEls = this.$refs.floorSсheme.getElementsByClassName("floor");
  },
  computed: {
  },
  methods: {
    getFloorElByNumber: function (number) {
      let result;
      this.svgFloorEls.forEach((el) => {
        if (el.dataset.floorNumber == number) {
          result = el;
        }
      });
      return result;
    },
    incrementFloor() {
      if (this.selectedFloor < 21) this.selectedFloor++;
      else return;
    },
    decrementFloor() {
      if (this.selectedFloor > 1) this.selectedFloor--;
      else return;
    },
    checkHover(e) {
      if (e.relatedTarget.dataset.floorNumber) {
        this.selectedFloor = e.relatedTarget.dataset.floorNumber
      }
    }
  },
  watch: {
    selectedFloor: function () {
      if (this.selectedFloor >= 1 && this.selectedFloor <= 21) {
        this.svgFloorEls.forEach((el) =>
          el.setAttribute("fill", "transparent")
        );
        this.getFloorElByNumber(this.selectedFloor).setAttribute(
          "fill",
          "#3498DB"
        );
      }
    },
  },
};
</script>


<style scoped>
h1 {
  text-align: center;
}

.page-wrapper {
  width: 90vw;
  height: 90vh;
}

.page {
  display: flex;
  height: 70vh;
}

.floorSсheme {
  margin: auto;
  max-width: 100%;
  max-height: 100%;
}

.floor-panel {
  display: flex;
  flex-direction: column;
  margin: auto;
}

.floor-panel > * {
  font-size: 50px;
}

.control-panel {
  margin-top: 2vh;
  display: flex;
  justify-content: space-between;
}
</style>
