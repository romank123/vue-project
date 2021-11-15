<template>
  <div class="page-wrapper">
    <h1>Вариант отделки стены</h1>
    <div class="options-group">
      <input type="checkbox" id="scales" />
      <label for="scales">Серая краска</label> <br />
      <input type="checkbox" id="scales" />
      <label for="scales">Декоративная шпатлёвка</label> <br />
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
