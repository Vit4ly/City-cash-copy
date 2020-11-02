<script>
import MenuProfile from '@/components/layout/MenuProfile'

export default {
  name: 'Menu',
  components: { MenuProfile }
}
</script>

<template>
  <div
    id="left-menu"
    class="menu"
  >
    <div class="menu__logo"></div>
    <MenuProfile />

    <div class="menu__actions">
      <div class="menu__actions-item">
        <div class="menu__actions-coin">
          <img src="../../assets/menu/coin-simple.png">
        </div>
        <div class="menu__actions-value">192 382</div>
        <el-button
          type="primary"
          class="menu__actions-btn menu__actions-btn_primary"
        >Пополнить</el-button>
      </div>

      <div class="menu__actions-item">
        <div class="menu__actions-coin">
          <img src="../../assets/menu/coin-gold.png">
        </div>
        <div class="menu__actions-value">192 382</div>
        <el-button
          class="menu__actions-btn"
        >Вывести</el-button>
      </div>
    </div>

    <div class="menu__nav">
      <a href="" class="menu__nav-item">Игровое поле</a>
      <a href="" class="menu__nav-item">
        Бонусы
        <span class="menu__nav-item-badge">Есть бонус!</span>
      </a>
      <a href="" class="menu__nav-item">
        Рефералы
        <span class="menu__nav-item-badge">12</span>
      </a>
      <a href="" class="menu__nav-item">
        Поддержка
        <span class="menu__nav-item-badge">1</span>
      </a>
      <a href="" class="menu__nav-item">Конкурс</a>
    </div>

    <div class="menu__links">
      <a href="" class="menu__links-item">Главная</a>
      <a href="" class="menu__links-item">Новости</a>
      <a href="" class="menu__links-item">Правила игры</a>
      <a href="" class="menu__links-item">Последние выплаты</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu {
  box-sizing: border-box;
  max-width: 340px;
  padding: 30px;
  background: #ffffff;

  &__logo {
    width: 197px;
    height: 59px;
    background: url('../../assets/logo.png');
    margin: 0 auto 56px;
  }

  &__actions {
    margin-bottom: 40px;
  }

  &__actions-item {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &__actions-coin {
    margin-right: 18px;
  }

  &__actions-value {
    color: #5A5A89;
    font-weight: 700;
  }

  &__actions-btn {
    margin-left: auto;
    height: 32px !important;
    font-size: 14px !important;
    padding: 0 18px !important;
    background: rgba(#0083FF, 0.1);
    color: #0083FF;
    width: 110px;

    &_primary {
      color: #fff;
      background: #0083FF;
    }
  }

  &__nav {
    background: linear-gradient(to right, #F6F8FC, #fff);
    margin: 0 -30px;
    padding: 30px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__nav-item {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 700;
    color: #5A5A89;
    width: 100%;

    &:not(:last-child) {
      margin-bottom: 20px;
    }

    &:hover {
      color: #0083FF;
    }
  }

  &__nav-item-badge {
    line-height: 25px;
    font-size: 14px;
    color: #0083FF;
    background: rgba(#0083FF, 0.1);
    height: 25px;
    padding: 0 12px;
    border-radius: 12px;
  }

  &__links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__links-item {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: #5A5A89;
  }
}
</style>
