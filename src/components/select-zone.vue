<template>
    <div>
        <button v-on:click="decrementFloor">Предыдущий</button>
        <span>{{selectedFloor}}</span>
        <button v-on:click="incrementFloor">Следующий</button>
        <br>
        <br>
        <floorSheme v-bind:floor-number="selectedFloor"/>
    </div>
</template>

<script>
// @hook:beforeCreate="console('beforeCreate')"
// @hook:created="console('created')"
// @hook:beforeMount="console('beforeMount')"
// @hook:mounted="console('mounted')"
// @hook:beforeUpdate="console('beforeUpdate')"
// @hook:updated="console('updated')"
// @hook:activated="console('activated')"
// @hook:deactivated="console('deactivated')"
// @hook:beforeDestroy="console('beforeDestroy')"
// @hook:destroyed="console('destroyed')"
// @hook:errorCaptured="console('errorCaptured')"

import floorSheme from './floor-sheme.vue'

export default {
  name: 'selectZone',
  data: function() {
      return {
          selectedFloor: 1,
          maxFloorCount: 3
      }
  },
  components: {
      floorSheme
  },
  methods: {
      decrementFloor: function() {
          if (this.selectedFloor>1) this.selectedFloor--;
      },
      incrementFloor: function() {
          if (this.selectedFloor<this.maxFloorCount) this.selectedFloor++;
      },
      console: function(msg) {
          console.log(msg)
      }
  }
}
</script>