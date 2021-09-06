<template>
  <div>
    <h1>Выберете желаемую прощадь офиса</h1>

    <div class="vue-range-slider__wrapper">
      <div class="vue-range-slider__tooltips">
        <!-- <span> от {{ smallestArea }}м² </span> -->
        <!-- <span> до {{ biggestArea }}м² </span> -->
      </div>

      <vue-range-slider
        :min="min"
        :max="max"
        :bg-style="bgStyle"
        :tooltip-style="tooltipStyle"
        :process-style="processStyle"
        v-model="value"
        ref="slider"
        :formatter="formatter"
        :tooltip-merge="true"
        :enable-cross="false"
        @slide-end="updateSelectedValue($event)"
      >
      </vue-range-slider>
      <p>{{ countOfSelectedZones }} свободных офисов есть с данной площадью</p>
      <div class="control-panel">
        <button class="button" @click="$emit('decrementStep')">Назад</button>
        <button class="button" @click="$emit('incrementStep')">Далее</button>
      </div>
    </div>
  </div>
</template>

<script>
import "vue-range-component/dist/vue-range-slider.css";
import VueRangeSlider from "vue-range-component";

export default {
  data() {
    return {
      value: [
        this.$store.getters.smallestArea,
        this.$store.getters.biggestArea,
      ],
    };
  },
  components: {
    VueRangeSlider,
  },
  methods: {
    // getAvailableValue: function () {
    //   console.log(this.$root.$data);
    // },
    updateSelectedValue: function (e) {
      // TODO: добавить тротлинг и дергать стор только если значения изменились
      this.$store.commit("setMinimumSuitableArea", e[0]);
      this.$store.commit("setTheMostSuitableArea", e[1]);
    },
  },
  computed: {
    smallestArea() {
      return this.$store.getters.smallestArea;
    },
    biggestArea() {
      return this.$store.getters.biggestArea;
    },
    countOfSelectedZones() {
      return this.$store.getters.countOfSelectedZones;
    },
  },
  created() {
    this.min = this.smallestArea;
    this.max = this.biggestArea;
    this.bgStyle = {
      backgroundColor: "#fff",
      boxShadow: "inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)",
    };
    this.tooltipStyle = {
      backgroundColor: "#5B9BD5",
      borderColor: "#5B9BD5",
    };
    this.processStyle = {
      backgroundColor: "#5B9BD5",
    };
    this.formatter = (value) => `${value}м²`;
  },
};
</script>

<style scoped>
.vue-range-slider__tooltips {
  display: flex;
  justify-content: space-between;
}

.vue-range-slider__wrapper {
  max-width: 90vw;
  margin: auto;
}

.control-panel {
  display: flex;
  justify-content: space-between;
}
</style>