<template>
  <div>
    <h1>Заполните форму что бы получить подробную информацию по офису</h1>
    <!-- Простая форма, которая пошлёт GET запрос -->
    <form id="requsetForm" @submit.prevent="onSubmit">
      <label for="name">Введите имя:</label>&nbsp;
      <input id="name" type="text" name="name" placeholder="Имя" /> <br />

      <label for="email">Введите имя:</label>&nbsp;
      <input id="email" type="email" name="email" placeholder="info@mail.ru" />
      <br />

      <label for="phone">Введите телефон:</label>&nbsp;
      <input
        id="phone"
        type="tel"
        name="phone"
        placeholder="+7-777-777-77-77"
      />
      <br />

      <button type="submit" value="Save" class="button">
        Получить информацию
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "sendRequest",
  methods: {
    onSubmit: function (e) {
      console.log(e);
    },
  },
};
</script>

<style scoped>
#requsetForm input {
  font-size: 22px;
}

#requsetForm input,
#requsetForm label {
  margin-bottom: 2rem;
}
</style>
