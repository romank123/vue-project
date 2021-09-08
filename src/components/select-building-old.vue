<template>
  <div class="building-list">
    <figure class="building-item" v-on:click="$emit('buildingSelected',1)">
      <img src="../assets/building-1.jpg" />
      <figcaption>Корпус 1</figcaption>
    </figure>
    <figure class="building-item" v-on:click="$emit('buildingSelected',2)">
      <img src="../assets/building-2.jpg" />
      <figcaption>Корпус 2</figcaption>
    </figure>
    <figure class="building-item" v-on:click="$emit('buildingSelected',3)">
      <img src="../assets/building-3.jpg" />
      <figcaption>Корпус 3</figcaption>
    </figure>
  </div>
</template>


<script>
export default {
  name: "selectBuilding",
  methods: {
      console: function(m) {
          console.log(m);
      }
  } 
};
</script>

<style scoped>
.building-list {
  display: flex;
  justify-content: center;
}

.building-item {
  border: 1px solid grey;
  padding: 2rem;
}

.building-item:hover {
  box-shadow: 1px 1px 8px 4px lightgrey;
}

figcaption {
    margin: 1rem;
}
</style>
