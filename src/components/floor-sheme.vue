<template>
  <div>
    <p>выбранная зона {{selectedZone}}</p>
    <component 
    :is="getCurrentFloorSheme" 
    ref="floorSheme" 
    class="floorSheme"
    v-on:click="checkClickZone"
    />
  </div>
</template>

<script>
export default {
  name: "floorShemeBase",
  props: ["floorNumber"],
  data: function () {
    return {
      selectedZone: "",
    };
  },
  computed: {
    getCurrentFloorSheme: function () {
      let currentFloorNumber = this.floorNumber;
      //todo: так и не научился ловить промис после загрузки компонента
      return () => import(`../assets/svg/floor-${currentFloorNumber}.svg`);
    },
  },
  methods: {
    checkClickZone: function (event) {
      this.selectedZone = event.target.id
    },
    debug: function (msg) {
      console.log(msg);
    }
  }
};
</script>


<style scoped>
.floorSheme {
  max-width: 90vw;
  max-height: 100vh;
}
.floorSheme .zone:hover {
  fill-opacity: 1;
}
</style>
