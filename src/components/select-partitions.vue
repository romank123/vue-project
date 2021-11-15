<template>
  <div class="page-wrapper">
    <h1>Вариант отделки перегородки</h1>
    <div class="options-group">
      <input type="checkbox" id="scales" />
      <label for="scales">Гипрок</label> <br />
      <input type="checkbox" id="scales" />
      <label for="scales">Оргстекло</label> <br />
      <input type="checkbox" id="scales" />
      <label for="scales">Гипрок + Оргстекло</label> <br />
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
