<template>
  <div class="page-wrapper">
    <h1>Выберете дополнительные опции</h1>
    <div class="options-group">
      <input type="checkbox" />
      <label>Интернет</label> <br />

      <input type="checkbox" />
      <label>Телефония</label> <br />

      <input type="checkbox" />
      <label>Доп освещение</label> <br />

      <input type="checkbox" />
      <label for="scales">Скуд</label> <br />

      <input type="checkbox" />
      <label for="scales">Система видеонаблюдения</label> <br />

      <input type="checkbox" />
      <label>Кухня</label> <br />
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

.options-group,
.options-group label {
  font-size: 30px;
}

.options-group input[type="checkbox"] {
  font-size: 30px;
  width: 15px;
  height: 15px;
  margin: 5px;
  vertical-align: 3px;
}
</style>