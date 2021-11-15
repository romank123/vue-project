<template>
  <div class="layout-wrapper">
    <div class="content-wrapper">
      <h1 class="header">Собери свой идеальный офис</h1>
      <button class="button" @click="$emit('incrementStep')">
        Собрать офис
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "showCover",
  mounted() {
    document.body.classList.add("coverBg");
  },
  beforeDestroy() {
    document.body.classList.remove("coverBg");
  },
};
</script>

<style>
.coverBg {
  background-image: url(../assets/first-screen-cover.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

h1.header {
  text-align: left;
  margin: 0 0 2rem 0;
  color: white;
  font-size: 5rem;
  text-shadow: 2px 2px 3px grey;
  /* margin-bottom: 2rem; */
}

.button {
  appearance: none;
  border: none;
  background-color: #447be0;
  color: white;
  padding: 22px 50px 22px 30px;
  font-size: 16px;
  text-transform: uppercase;
}

.layout-wrapper {
  display: flex;
  width: 50%;
  margin-left: auto;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
}

.content-wrapper {
  width: 70%;
}
</style>
