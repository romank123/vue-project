<template>
  <div>
    <vue-range-slider ref="slider" v-model="value"></vue-range-slider>
  </div>
</template>

<script>
import 'vue-range-component/dist/vue-range-slider.css'
import VueRangeSlider from 'vue-range-component'

export default {
  data() {
    return {
      value: [0,100]
    }
  },
  components: {
    VueRangeSlider
  },
  methods: {
      getAvailableValue: function() {
          console.log(this.$root.$data)
      }
  },
  created() {
      console.log(this.$store.state.totalTvCount);
  }
};
</script>

<style scoped>
  
</style>