<template>
  <div class="page-wrapper">
    <h1>Выберете дополнительные опции</h1>
    <div class="options-group">
      <input type="checkbox" id="scales" />
      <label for="scales">Интернет</label> <br />
      <input type="checkbox" id="scales" />
      <label for="scales">Телефония</label> <br />
      <input type="checkbox" id="scales" />
      <label for="scales">Доп освещение</label> <br />
      <input type="checkbox" id="scales" /><label for="scales">Скуд</label>
      <br />
      <input type="checkbox" id="scales" />
      <label for="scales">Система видеонаблюдения</label> <br />
      <input type="checkbox" id="scales" /> <label for="scales">Кухня</label>
      <br />
    </div>

    <div class="control-panel">
      <button class="button" @click="$emit('decrementStep')">Назад</button>
      <button class="button" @click="$emit('incrementStep')">Далее</button>
    </div>
  </div>
</template>


<style>
.page-wrapper {
  width: 90vw;
  height: 90vh;
}
</style>