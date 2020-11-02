<script>
export default {
  name: 'TheHeader'
}
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <router-link to="/" class="header__logo"></router-link>

        <nav class="header__nav">
          <a href="" class="header__link">Главная</a>
          <a href="" class="header__link">Новости</a>
          <a href="" class="header__link">Правила</a>
          <a href="" class="header__link">Последние выплаты</a>
          <a href="" class="header__link">FAQ</a>
          <a href="" class="header__link">Контакты</a>
        </nav>

        <div class="header__btns">
          <button class="btn btn_primary">Регистрация</button>
          <button class="btn btn_primary">Вход</button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding: 15px 0;

  &__logo {
    display: block;
    margin-right: 32px;
    width: 197px;
    height: 59px;
    flex-shrink: 0;
    background: url('../../assets/logo.png');
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__nav {
    display: flex;
    flex-wrap: nowrap;
  }

  &__link {
    font-weight: 700;
    font-size: 20px;
    color: #5a5a89;
    white-space: nowrap;

    &:not(:last-child) {
      margin-right: 32px;
    }

    &:hover {
      color: #0083ff;
      transition: 300ms;
    }
  }

  &__btns {
    display: flex;
    flex-wrap: nowrap;
    margin-left: 32px;

    .btn:not(:last-child) {
      margin-right: 16px;
    }
  }
}
</style>
