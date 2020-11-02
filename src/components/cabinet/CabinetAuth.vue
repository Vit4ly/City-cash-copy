<script>
import successful from "@/assets/auth/successful.png"
import goldCoin from "@/assets/gold-coin.png"
import coin from "@/assets/silver-coin.png"
import getCoin from "@/assets/cabimg/coin.png"
import arrow from "@/assets/cabimg/arrow.png"
import visa from "@/assets/cabimg/visa.png"

export default {
  name: 'CabinetAuth',
  data: () => ({

    history: false,
    qr: false,
    qrIncluded: false,
    changePass: false,
    passChanged: false,
    changeEmail: false,
    emailChanged: false,
    cabinetOperations: false,

    instructionQr: `Отсканируйте этот QR код с помощью приложения Google Authentificator
     или введите номер вручную.
        После этого введите шестизначный код подтверждения в поле ниже и нажмите «Отправить»`,

    src: successful,
    arrow: arrow,
    getCoin: getCoin,
    visa: visa,

    input: '',
    btnQr: true,

    operations: [
      {time: '2 мин назад', name: 'Пополнение баланса', score: '+12490', coin: coin},
      {time: '2 мин назад', name: 'Сбор ренты', score: '+12490', coin: coin},
      {time: '2 мин назад', name: 'Уплата налогов', score: '+12490', coin: coin},
      {time: '2 мин назад', name: 'Обмен', score: '+12490', coin: coin},
      {time: '2 мин назад', name: 'Вывод денег', score: '+12490', coin: goldCoin},
      {time: '2 мин назад', name: 'Пополнение баланса', score: '+12490', coin: coin},
      {time: '2 мин назад', name: 'Пополнение баланса', score: '+12490', coin: coin},
      {time: '2 мин назад', name: 'Пополнение баланса', score: '+12490', coin: coin},
      {time: '2 мин назад', name: 'Пополнение баланса', score: '+12490', coin: coin},
      {time: '2 мин назад', name: 'Пополнение баланса', score: '+12490', coin: coin},
      {time: '2 мин назад', name: 'Пополнение баланса', score: '+12490', coin: coin},
      {time: '2 мин назад', name: 'Пополнение баланса', score: '+12490', coin: coin},
    ]

  }),

  methods: {
    toggleBtnQr() {
      this.btnQr = !this.btnQr
    }
  }

}
</script>


<template>
  <div class="cabinet">
    <!--  ================ cabinet__history ================  -->
    <div class="cabinet__history"
         v-if="history">
      <p class="cabinet__history-empty">
        Здесь будет отображаться ваша история счета
      </p>
    </div>
    <!--  ================ cabinet__qr ================  -->
    <div class="cabinet__qr"
         v-if="qr">
      <h1
        class="cabinet__qr-title cabinet_all-title">
        Двухфакторная авторизация
      </h1>

      <p
        class="cabinet__qr-text cabinet_all-text">
        {{ InstructionQr }}
      </p>

      <el-form
        ref="form"
        :model="form"
        class="cabinet__qr-form">

        <div class="cabinet__qr-block">
          <div class="cabinet__qr-auth">
            <div class="cabinet__qr-auth_code"></div>
            <p class="cabinet__qr-auth_pass">
              fskDjjs2813jdjs!toq*23ja
            </p>
          </div>
        </div>

        <div class="cabinet__qr-inner">
          <el-input class="cabinet__qr-inp cabinet_all-inp"
                    placeholder="Введите код подтверждения"
                    v-model="input">
          </el-input>
          <el-button
            class="cabinet__qr-btn"
            type="primary"
            @click="toggleBtnQr">

            {{ !btnQr ? "Отключить двухфакторную авторизацию" : "Включить двухфакторную авторизацию" }}
          </el-button>
        </div>
      </el-form>
    </div>
    <!--  ================ cabinet__qr-included ================  -->
    <div class="cabinet__qr-included"
         v-if="qrIncluded">

      <img
        class="cabinet__qr-included-img cabinet__all-img"
        :src="src" alt="">

      <h1
        class="cabinet__qr-included-title cabinet__all-title">
        Двухфакторная авторизация включена
      </h1>

      <p class="cabinet__qr-included-text cabinet__all-text">
        {{ InstructionQr }}
      </p>

      <div class="cabinet__qr-included-inner">
        <el-button
          class="cabinet__qr-included-inner-btn"
          type="primary"
          @click="toggleBtnQr">
          {{ btnQr ? "Отключить двухфакторную авторизацию" : "Включить двухфакторную авторизацию" }}
        </el-button>
      </div>

    </div>
    <!--  ================ cabinet__change-pass ================  -->
    <div class="cabinet__change-pass"
         v-if="changePass">

      <h1 class="cabinet__change-pass-title cabinet__all-title">
        Изменение пароля
      </h1>
      <p class="cabinet__change-pass-text cabinet__all-text">
        Consisted we otherwise arranging commanded discovery it explained.
        Does cold even song like two yet been.
        Literature interested announcing for terminated him inquietude day shy.
        Himself he fertile chicken perhaps
        waiting if highest no it.
      </p>
      <el-form
        ref="form"
        :model="form"
        class="cabinet__change-pass-form">

        <p>
          <el-input
            placeholder="Введите старый пароль от вашего аккаунта"
            v-model="input"
            clearable
            show-password
            class="cabinet__change-pass-inp cabinet__all-inp">
          </el-input>
        </p>

        <p class="cabinet__change-pass_inp-block">
          <el-input
            placeholder="Введите новый пароль"
            v-model="input"
            clearable
            show-password
            class="cabinet__change-pass-inp cabinet__all-inp">
          </el-input>
          <span
            class="cabinet__change-pass-label">
            Пароль должен быть не менее, чем из 10 знаков,
            и содержать как минимум одну заглавную букву и как
            минимум
            один спец. символ
          </span>
        </p>

        <p>
          <el-input
            placeholder="Введите новый пароль еще раз"
            v-model="input"
            clearable
            show-password
            class="cabinet__change-pass-inp cabinet__all-inp">
          </el-input>
        </p>

        <div class="cabinet__change-pass-inner">
          <el-button
            class="cabinet__change-pass-inner-btn"
            type="primary">
            Изменить пароль
          </el-button>
        </div>

      </el-form>
    </div>
    <!--  ================ cabinet__pass-changed ================  -->
    <div class="cabinet__pass-changed"
         v-if="passChanged">
      <img
        :src="src" alt=""
        class="cabinet__pass-changed-img cabinet__all-img">

      <h1 class="cabinet__pass-changed-title cabinet__all-title">
        Пароль от вашего аккаунта успешно изменен
      </h1>

      <p class="cabinet__pass-changed-text cabinet__all-text">
        Consisted we otherwise arranging commanded discovery it
        explained. Does cold even song like two yet been.
        Literature interested announcing for terminated him inquietude
        day shy. Himself he fertile.
      </p>

      <div class="cabinet__pass-changed-inner">
        <el-button
          class="cabinet__pass-changed-inner-btn"
          type="primary">
          Вернуться на страницу профиля
        </el-button>
      </div>

    </div>
    <!--  ================ cabinet__change-email ================  -->
    <div class="cabinet__change-email"
         v-if="changeEmail">

      <h1 class="cabinet__change-email-tile cabinet__all-title">
        Изменение Email адреса
      </h1>

      <p class="cabinet__change-email-text cabinet__all-text">
        Consisted we otherwise arranging commanded discovery it
        explained. Does cold even song like two yet been.
        Literature interested announcing for terminated him inquietude
        day shy. Himself he fertile chicken perhaps waiting if highest no it.
      </p>

      <el-form
        ref="form"
        :model="form"
        class="cabinet__change-email-form">

        <p class="cabinet__change-email_inp-block">
          <el-input
            placeholder="Введите ваш новый Email"
            v-model="input"
            clearable
            class="cabinet__change-email-inp cabinet__all-inp">
          </el-input>
          <span
            class="cabinet__change-email-label">
       Введите email адрес, на который собираетесь изменить ваш текущий.
          </span>
        </p>

        <div class="cabinet__change-email_inner">
          <el-button class="cabinet__change-email_inner-btn"
                     type="primary">
            Изменить Email
          </el-button>
        </div>

      </el-form>


    </div>
    <!--  ================ cabinet__email-changed ================  -->
    <div class="cabinet__email-changed"
         v-if="emailChanged">

      <img
        :src="src"
        alt=""
        class="cabinet__email-changed-img cabinet__all-img">

      <h1 class="cabinet__email-changed-title cabinet__all-title">
        Изменение Email адреса
      </h1>

      <p class="cabinet__email-changed-text cabinet__text">
        Мы отправили ссылку с дальнейшими инструкциями на ваш текущий
        email. Пожалуйста, откройте письмо и следуйте инструкциям
      </p>

      <div class="cabinet__email-changed_inner">
        <el-button
          class="cabinet__email-changed_inner-btn"
          type="primary">
          Вернуться на страницу профиля
        </el-button>
      </div>

    </div>
    <!--  ================ cabinet__recent-operations ================  -->
    <div class="cabinet__operations" v-if="cabinetOperations">

      <div class="cabinet__operations-pass"
           v-show="true">
        <div class="cabinet__operations-pass-message">

            <span class="cabinet__operations-new-pass-message-title">
              Пароль изменен
            </span>

          <div class="cabinet__operations-new-pass-message-text">
            Ваш новый пароль –
            <span class="cabinet__operations-new-pass-message-text_pass">
                dDo29l1
              </span>
            Сохраните его или поменяйте
            на свой
          </div>

        </div>

        <el-button
          class="cabinet__operations-btn"
          type="primary">
          Изменить
        </el-button>

      </div>

      <h3 class="cabinet__operations-title cabinet__all-title ">
        Последние операции
      </h3>

      <div class="cabinet__operations-table">

        <div class="cabinet__operations-table-thead">
          <div class="cabinet__operations-table-thead-col">Дата</div>
          <div class="cabinet__operations-table-thead-col">Операция</div>
          <div class="cabinet__operations-table-thead-col">Счет</div>
        </div>

        <div class="cabinet__operations-table-tbody"
             v-for="({ time, name, score, coin }, id) in operations"
             :key="id">
          <div class="cabinet__operations-table-tbody-col_time">
            {{ time }}
          </div>
          <div class="cabinet__operations-table-tbody-col">
            {{ name }}
          </div>
          <div
            class="cabinet__operations-table-tbody-col
            cabinet__operations-table-tbody-col-inner">
            {{ score }}
            <img
              :src="coin"
              alt=""
              class="cabinet__operations-table-tbody_img-1">
          </div>

        </div>

      </div>

    </div>
    <!--  ================ get-money ================  -->
    <div class="cabinet__get-money">

      <img
        :src="arrow"
        alt="arrow"
        class="cabinet__get-money-arrow"
      >

      <div class="cabinet__get-money-header">
        <div class="cabinet__get-money-header_block-title">
          <img
            :src="getCoin"
            alt="getCoin"
            class="cabinet__get-money-header-img cabinet__all-img">
          <h1 class="cabinet__all-title">Вывести средства</h1>
        </div>

        <nav class="cabinet__get-money-header_block-nav">
          <span>Все</span>
          <span>Рубли</span>
          <span>Евро</span>
          <span>USD</span>
          <span>Криптовалюты</span>
        </nav>

      </div>
    </div>

  </div>
</template>


<style scoped lang="scss">
.cabinet {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  width: calc(100% - 64px);
  background-color: #f5f7ff;
  background-size: cover;
  border-radius: 64px;
  margin: 32px;

  display: flex;
  justify-content: flex-end;

  &__all-title {
    color: #232336;
    font-size: 48px;
    font-weight: 700;
    text-align: left;

  }

  &__all-text {
    width: 950px;
    color: #5a5a89;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    line-height: 30px;

  }

  &__all-inp {
    width: 426px;
    height: 89px;
    border-radius: 24px;
    background-color: #eef1fe;

  }

  &__all-img {
    max-width: 245px;
    width: 100%;
    height: auto;
    margin-top: 72px;

  }

  // ========== empty-history =========================

  &__history {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(80% - 64px);
    margin: 36px;
    background-size: cover;
    background-image: linear-gradient(180deg, rgba(235, 238, 252, 0) 0%, rgba(235, 238, 252, 0.68) 26%, #ebeefc 51%, rgba(235, 238, 252, 0.78) 72%, rgba(235, 238, 252, 0) 100%);

  }

  &__history-empty {
    opacity: 0.5;
    color: #5a5a89;
    font-size: 24px;
    font-weight: 700;
    text-align: center;

  }

  // ============== qr-auth ===========================
  &__qr {
    margin-right: 74px;

  }

  &__qr-title {
    margin-top: 77px;

  }

  &__qr-text {
  }

  &__qr-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 60px 0 80px;

  }

  &__qr-block {
    width: 909px;
    height: 392px;
    background-image: linear-gradient(to right, rgba(235, 238, 252, 0) 0%, rgba(235, 238, 252, 0.68) 26%, #ebeefc 51%, rgba(235, 238, 252, 0.78) 72%, rgba(235, 238, 252, 0) 100%);

  }

  &__qr-auth {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &_code {
      margin-top: 72px;
      width: 200px;
      height: 200px;
      background-color: #5a5a89;

    }

    &_pass {
      margin-top: 68px;
      color: #5a5a89;
      font-size: 20px;
      font-weight: 700;
      line-height: 30px;
      text-align: left;

    }
  }

  &__qr-inner {
    margin-top: 32px;

  }

  &__qr-inp {
    display: block;

  }

  &__qr-btn {
    display: inline-block;
    text-align: center;
    margin-top: 32px;

  }

  //  ============== qr-included ======================
  &__qr-included {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: 64px;

  }

  &__qr-included-img {
  }

  &__qr-included-inner-title {
    width: 950px;
    margin-top: 69px;

  }

  &__qr-included-inner-text {
    margin-top: 43px;

  }

  &__qr-included-inner {
    text-align: left;
    margin-top: 64px;

  }

  &__qr-included-inner-btn {
    display: inline-block;

  }

  //  ============== change-pass ======================

  &__change-pass {
    margin-right: 64px;

    &_inp-block {
      display: flex;
      align-items: center;

    }


  }

  &__change-pass-title {
    margin-top: 77px;

  }

  &__change-pass-text {
    margin-top: 47px;
    width: 960px;

  }

  &__change-pass-form {
    margin-top: 106px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

  }

  &__change-pass-inp {
    display: block;

  }

  &__change-pass-label {
    margin-left: 32px;
    width: 411px;
    color: #bcbfd7;
    font-size: 16px;
    font-weight: 700;
    text-align: left;

  }

  &__change-pass-inner {
    text-align: left;

  }

  &__change-pass_inner-btn {
    margin-top: 40px;

  }

  //  ============ cabinet__pass-changed ===========

  &__pass-changed {
    margin-right: 69px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

  }

  &__pass-changed-title {
    margin-top: 69px;
    width: 919px;
    line-height: 60px;

  }

  &__pass-changed-text {
    margin-top: 43px;
    width: 960px;

  }

  &__pass-changed-inner {
    margin-top: 64px;
    text-align: left;

  }


  //  ============ cabinet__change-email ================

  &__change-email {
    margin-right: 64px;

    &_inp-block {
      display: flex;
      align-items: center;

    }

    &_inner {
      margin-top: 40px;
      text-align: left;

    }

    &_inner-btn {
    }
  }

  &__change-email-title {
    margin-top: 77px;

  }

  &__change-email-text {
    width: 960px;
    margin-top: 47px;

  }

  &__change-email-form {
    margin-top: 106px;

  }

  &__change-email-label {
    margin-left: 32px;
    width: 409px;
    height: 41px;
    color: #bcbfd7;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    text-align: left;

  }

  // =================== cabinet__email-changed ============
  &__email-changed {
    margin-right: 64px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    &_inner {
      margin-top: 64px;
      text-align: left;

    }
  }

  &__email-changed-title {
    margin-top: 69px;

  }

  &__email-changed-text {
    margin-top: 43px;

  }

  // =================== cabinet__operations ============

  &__operations {
    margin: 56px;

  }

  &__operations-pass {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 30px;
    border-radius: 24px;
    background-color: #eef1fe;
  }

  &__operations-pass-message {
    text-align: left;
    //width: 100%;
  }

  &__operations-new-pass-message-title {
    color: #188fff;
    //font-size: 0.8403361344537815vw;
    font-size: 16px;
    font-weight: 700;
    text-align: left;

  }

  &__operations-new-pass-message-text {
    color: #5a5a89;
    //font-size: 1.050420168067227vw;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    text-align: left;
    padding-right: 2.8361344537815127vw;


    &_pass {
      color: #232336;

    }

  }

  &__operations-btn {

  }

  &__operations-title {
    margin-top: 53px;

  }

  &__operations-table {
    display: table;

  }

  &__operations-table-thead {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 8.3vw;
    margin-bottom: 32px;

  }

  &__operations-table-thead-col {
    color: #c3c7e6;
    font-size: 20px;
    font-weight: 500;
    text-align: left;

    &:last-child {
      padding-left: 20px;
    }

  }

  &__operations-table-tbody {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 8.3vw;

  }

  &__operations-table-tbody-col {
    color: #5a5a89;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    margin-bottom: 33px;

    &_time {
      opacity: 0.5;
      color: #5a5a89;
      font-size: 20px;
      font-weight: 700;
      text-align: left;

    }

    &_img {
      display: block;
      max-width: 5px;
      width: 100%;
      height: auto;
      margin-left: 10px;
    }
  }

  &__operations-table-tbody-col-inner {
    display: grid;
    grid-template-columns: 0.3fr 0.2fr 1fr;
    grid-column-gap: 5px;
    align-items: center;
    padding-left: 20px;
  }

  //  ================== __get-money ====================
  &__get-money {
    margin-top: 72px;
    width: 100%;
  }

  &__get-money-arrow {

    position: absolute;
    top: 40%;
    left: 0;

  }

  &__get-money-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &_block-title {
      display: flex;
      align-items: center;
    }

    &_block-nav {

    }
  }

  &__get-money-header-img {
    max-width: 49px;
    height: auto;
  }

}
</style>
