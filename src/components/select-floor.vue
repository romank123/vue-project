<template>
  <div class="page-wrapper">
    <h1>Выберете этаж</h1>
    <h3>Выбранный корпус {{selectedBuilding}}</h3>
    <h3>Доступные этажи: {{possibleFloorArr.join(' , ')}}</h3>
    <div class="page">
      <floorSсhemeSVG class="floorSсheme" ref="floorSсheme" @mouseover="updateFloorByHover($event)"/>
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
import floorSсhemeSVG from "../assets/svg/svg-floor-sheme-new.svg";

export default {
  name: "selectFloor",
  components: {
    floorSсhemeSVG,
  },
  data: function () {
    return {
      svgFloorEls: {},
      possibleFloorElArr: [],
      possibleFloorArr: [],
    };
  },
  mounted() {
    //наполним из svg узлов переменные possibleFloorElArr и possibleFloorArr возможными для выбора этажами
    this.svgFloorEls = this.$refs.floorSсheme.getElementsByClassName("floor");
    this.svgFloorEls.forEach(el => {
      if(el.dataset.buildingNumber == this.$store.state.selectedZone.building) 
         this.possibleFloorElArr.push(el);
      });
    this.possibleFloorElArr.sort((a,b)=>a.dataset.floorNumber-b.dataset.floorNumber);
    this.possibleFloorElArr.forEach(el => {
      this.possibleFloorArr.push(el.dataset.floorNumber)
    });
    //запишем в стор самый нижний из возможных этажей
    this.$store.commit("updateSelectedFloor",this.possibleFloorArr[0])
  },   
  computed: {
    selectedBuilding() {
      return this.$store.state.selectedZone.building;
    },
    selectedFloor() {
      return this.$store.state.selectedZone.floor;
    },
  },
  methods: {
    getFloorElByNumber: function (number) {
      let result;
      this.svgFloorEls.forEach((el) => {
        if (el.dataset.floorNumber == number && el.dataset.buildingNumber == this.selectedBuilding) {
          result = el;
        }
      });
      return result;
    },
    incrementFloor() {
      let oldValueIndex = this.possibleFloorArr.findIndex(currentValue => currentValue == this.selectedFloor);
      if (oldValueIndex < this.possibleFloorArr.length-1) this.$store.commit("updateSelectedFloor",this.possibleFloorArr[oldValueIndex + 1])
      else return;
    },
    decrementFloor() {
      let oldValueIndex = this.possibleFloorArr.findIndex(currentValue => currentValue == this.selectedFloor);
      if (oldValueIndex > 0) this.$store.commit("updateSelectedFloor",this.possibleFloorArr[oldValueIndex - 1])
      else return;
    },
    updateFloorByHover(e) {
      let hoverFloor = e.relatedTarget.dataset.floorNumber;
      if (hoverFloor && this.possibleFloorArr.includes(hoverFloor)) {
        this.$store.commit("updateSelectedFloor", hoverFloor)
      }
    }
  },
  watch: {
    selectedFloor: function () {
        this.svgFloorEls.forEach((el) =>
          el.setAttribute("fill", "transparent")
        );
        this.getFloorElByNumber(this.selectedFloor).setAttribute(
          "fill",
          "#3498DB"
        );

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
