<template>
  <div class="page-wrapper">
    <h1>Вариант планировки</h1>
    <div class="options-group">
      <input type="checkbox" id="scales" />
      <label for="scales">1 кабинет и Open Space</label> <br />
      <input type="checkbox" id="scales" />
      <label for="scales">3 кабинета и Open Space</label> <br />
      <input type="checkbox" id="scales" />
      <label for="scales">Open Space</label> <br />
      <input type="checkbox" id="scales" />
      <label for="scales">Кабинетная</label> <br />
    </div>

    <div class="control-panel">
      <button class="button" @click="$emit('decrementStep')">Назад</button>
      <button class="button" @click="$emit('incrementStep')">Далее</button>
    </div>
  </div>
</template>


<style>
/* .page-wrapper {
  width: 90vw;
  height: 90vh;
} */
</style>