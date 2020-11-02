<script>
export default {
  name: 'MenuProfile',

  data: () => ({
    options: [{
      value: 'Ru',
      label: 'Ru'
    }],

    lang: 'Ru'
  })
}
</script>

<template>
  <div class="menu-profile">
    <div class="menu-profile__actions">
      <el-button class="menu-profile__logout">
        <span class="menu-profile__logout-icon"></span>
      </el-button>

      <div class="menu-profile__photo">
        <img
          class="menu-profile__photo-image"
          src="../../assets/menu/avatar.png"
        />
      </div>

      <el-select
        v-model="lang"
        class="menu-profile__select"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="menu-profile__name">Janefoster</div>
    <div class="menu-profile__open">View Profile</div>
  </div>
</template>

<style scoped lang="scss">
.menu-profile {
  margin-bottom: 50px;

  &__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;
  }

  &__logout {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #5A5A89 !important;
    width: 48px;
    height: 48px;
    padding: 0 !important;
    flex-shrink: 0;
  }

  &__logout-icon {
    display: block;
    width: 18px;
    height: 18px;
    background: url('../../assets/menu/logout.png');
  }

  &__photo {
    margin: 0 28px;
    border-radius: 12px;
    overflow: hidden;
    width: 96px;
    height: 96px;
    flex-shrink: 0;
  }

  &__select {
    display: flex !important;
    align-items: center;
    justify-content: center;
    border: 1px solid #5A5A89 !important;
    border-radius: 12px;
    width: 56px !important;
    height: 48px !important;
    box-sizing: border-box;
    padding: 0 0 0 8px;
  }

  &__name {
    font-size: 20px;
    font-weight: 700;
  }

  &__open {
    color: #BCBFD7;
    cursor: pointer;
  }
}
</style>
