<template>
  <div class="page-wrapper">
    <h1>Вариант отделки напольное покрытие</h1>
    <div class="options-group">
      <input type="checkbox" id="scales" />
      <label for="scales">Светлый ковролин</label> <br />
      <input type="checkbox" id="scales" />
      <label for="scales">Темный ковролин</label> <br />
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
