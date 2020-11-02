<script>
export default {
  name: 'Login',

  data: () => ({
    form: {
      email: '',
      password: ''
    }
  })
}
</script>

<template>
  <section class="login">
    <div class="container">
      <div class="login__nav">
        <router-link to="/login" class="login__nav-item">Вход</router-link>
        <router-link to="/registration" class="login__nav-item">Регистрация</router-link>
      </div>

      <div class="login__form">

        <div class="login__form-warning">
          <img src="../../assets/auth/warning.png" alt="">
          <span>Неверный логин или пароль. Попробуйте снова</span>
        </div>

        <form>
          <div class="login__form-item">
            <label class="login__form-label">Введите ваш Email</label>
            <el-input v-model="form.email"></el-input>
          </div>

          <div class="login__form-item">
            <label class="login__form-label">Введите пароль</label>
            <el-input type="password" v-model="form.password"></el-input>
          </div>

          <div class="login__btns">
            <el-button class="btn btn_primary login__btn">Войти</el-button>
          </div>

          <div class="login__btns">
            <router-link to="/forgot" class="login__form-forgot">Забыли пароль?</router-link>
          </div>

        </form>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../../styles/settings/colors";
@import "../../styles/settings/indent";

.login {
  width: 100%;
  background: url('../../assets/auth/login-bg.png') right center no-repeat;
  background-size: contain;
  padding: 160px 0 60px;

  &__nav {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 70px;
  }

  &__nav-item {
    color: $dark;
    font-size: 64px;
    font-weight: 700;

    &:not(:last-child) {
      margin-right: 70px;
    }
  }

  &__form {
    max-width: 700px;
  }

  &__form-item {
    box-sizing: border-box;
    height: 90px;
    border-radius: $border-radius;
    background: $input-bg;
    padding: 20px 32px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 32px;
  }

  &__form-label {
    color: $label;
    font-weight: 700;
    font-size: 16px;
  }

  &__form-forgot {
    margin: 0;
    color: $primary;
    font-size: 24px;
    font-weight: 700;
  }

  &__form-warning {
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    height: 100px;
    border-radius: $border-radius;
    background-color: rgba(248, 196, 0, .1);
    padding: 0 16px;
    color: #d79703;
    font-size: 20px;
    font-weight: 700;

    img {
      width: 72px;
      margin-right: 32px;
    }
  }

  &__btns {
    display: flex;
    margin-bottom: 40px;
  }

  &__btn {
    box-sizing: border-box;
    height: 90px !important;
    padding: 0 64px !important;
    font-size: 24px !important;
  }
}

.entrance {
  &__inner {

    display: grid;
    grid-template-columns: 1fr 1fr;

  }

  &__form {

    &_title {



      &_entry {
      }

    }

    &_warning {
      margin: 0 0 32px 0;
      display: flex;
      align-items: center;
      width: 695px;
      height: 104px;
      border-radius: 24px;
      background-color: rgba(248, 196, 0, .1);

      &_img {

        width: 72px;
        margin: 0 32px 0 16px;

      }

      &_text {

        color: #d79703;
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
      }
    }

    &_col {

      position: relative;

    }

    &_item {

      vertical-align: top;
      position: relative;

      &_pass {

        margin: 0 0 15px 0;
        display: grid;
        grid-template-columns: .1fr 0.2fr;
        grid-column-gap: 32px;

      }
    }

    &_input {

      font-weight: 700;
      font-size: 1.429em;

      margin: 0 0 32px 0;
      padding: 22px 0 0 34px;
      width: 695px;
      height: 89px;

      color: #5a5a89;
      border-radius: 24px;
      border: 1px solid #dedee7;
      transition: 300ms;

      &:focus + label,
      &:not(:placeholder-shown) + label {

        top: 19px;

      }

      &:focus {

        border: none;
        background-color: #eef1fe;

      }

      &_captcha {

        padding: 0 0 0 34px;
        width: 267px;
        height: 89px;
        background-color: #bcbfd7;

      }

      &_pass {

        padding: 0 0 0 34px;
        width: 396px;
        height: 89px;

        &:focus {
          border: none;
          background-color: #eef1fe;

        }

        &::placeholder {

          color: #bcbfd7;

        }
      }
    }

    &_label {

      height: 19px;
      font-size: 16px;
      color: #bcbfd7;
      font-weight: 700;
      position: absolute;
      pointer-events: none;
      left: 35px;
      transition: .3s;

    }

    &_forgot {

      color: #0084ff;
      font-size: 24px;
      font-weight: 700;

    }
  }

  &__btn {

    margin: 18px 0 41px 0;
    width: 695px;
    display: grid;
    grid-template-columns: .2fr 0.3fr;
    grid-column-gap: 32px;
    align-items: center;

    &_start {

      font-size: 24px;
      font-weight: 700;

      padding: 32px 61px;
      border-radius: 20px;
      color: #ffffff;

    }

    &_col {

      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 32px;

    }

    &_icon {

      color: #0084ff;
      padding: 28px 30px;
      border-radius: 20px;
      background-color: rgba(0, 132, 255, .1);
      text-align: center;
      font-size: 34.5px;
      transition: .3s;

      &:hover {

        color: #ffffff;
        background-color: rgb(0, 132, 255);

      }

      &:last-child {

        padding: 28px 37px;

      }
    }
  }

  &__img-background {

    padding: 0 0 0 10vw;
    max-width: 55vw;
    height: auto;

    position: absolute;
    top: -80px;
    right: -90px;

  }

  @media (min-width: 2560px) {

    &__form {
      &_title {

        width: 100vw;
        height: 7.004830917874397vw;

      }
    }

    &__img-background {

      padding: 0 0 0 10vw;
      max-width: 55vw;
      height: auto;

      position: absolute;
      top: 280px;
      right: -90px;

    }
  }

  @media (max-width: 1440px) {

    margin: 8.59375vw 0 4.947916666666666vw 0;

    &__form {

      &_title {

        padding: 0 0 3.8194444444444446vw 0;
        width: 48.61111111111111vw;
        font-size: 3.3333333333333335vw;
        line-height: 5.364583333333333vw;

        a {

          &:active,
          &:hover,
          &focus {

            color: #0083ff;

          }

          padding: 0 4vw 0 0;

        }
      }

      &_warning {

        margin: 0 0 1.6666666666666667vw 0;
        width: 36vw;
        height: 5.416666666666667vw;
        border-radius: 1.25vw;

        &_img {

          width: 3.75vw;
          margin: 0 1.6666666666666667vw 0 0.8333333333333334vw;

        }

        &_text {

          font-size: 1.0416666666666665vw;
          line-height: 1.5625vw;

        }

      }

      &_item {
        &_pass {

          margin: 0 0 1.0416666666666665vw 0;
          grid-column-gap: 1.6666666666666667vw;

        }
      }

      &_input {

        font-size: 1.0416666666666665vw;
        margin: 0 0 2.2222222222222223vw 0;
        padding: 1.5277777777777777vw 0 0 1.8229166666666667vw;
        width: 36vw;
        height: 4.635416666666667vw;
        border-radius: 1.25vw;

        &:focus + label,
        &:not(:placeholder-shown) + label {

          top: 1.3194444444444444vw;

        }

      }

      &_label {

        height: 1.3194444444444444vw;
        font-size: 0.8333333333333334vw;
        left: 1.8229166666666667vw;

      }

      &_forgot {

        font-size: 1.25vw;

      }

      &_forgot {

        margin: 7.8125vw 0 0 0;
        font-size: 1.25vw;

      }
    }

    &__btn {

      margin: 0 0 2.1354166666666665vw 0;
      width: 30vw;
      grid-column-gap: 1.6666666666666667vw;

      &_start {

        font-size: 1.25vw;
        padding: 1.6666666666666667vw 3.177083333333333vw;
        border-radius: 1.0416666666666665vw;

      }

      &_col {

        grid-column-gap: 1.6666666666666667vw;
      }

      &_icon {

        padding: 1.4583333333333333vw 1.5625vw;
        border-radius: 1.0416666666666665vw;
        font-size: 1.7968749999999998vw;

        &:last-child {

          padding: 1.4583333333333333vw 1.9270833333333335vw;

        }
      }
    }

    &__img-background {

      max-width: 57vw;
      height: auto;
      position: absolute;
      top: -40px;
      right: -75px;

    }
  }

  @media (max-width: 1366px) {
    &__img-background {

      max-width: 60vw;
      top: 130px;
      right: -70px;

    }
  }


  @media screen and (max-width: 1024px) and (max-height: 1366px) {
    &__img-background {

      max-width: 89vw;
      top: 380px;
      right: -82px;

    }

    @media (orientation: landscape) {
      &__img-background {

        max-width: 63vw;
        top: 60px;
        right: -55px;

      }
    }
  }

  @media (max-width: 768px) {

    &__img-background {

      max-width: 89vw;
      top: 280px;
      right: -63px;

    }
  }

  @media (max-width: 812px) {
    @media(orientation: landscape) {
      &__img-background {

        max-width: 57vw;
        top: -35px;
        right: -40px;

      }
    }
  }

  @media (max-width: 736px) {
    @media(orientation: landscape) {
      &__img-background {

        max-width: 57vw;
        top: -35px;
        right: -35px;

      }
    }
  }

  @media (max-width: 414px) {

    margin: 23vw 0 0 0;

    &__inner {

      display: grid;
      grid-template-columns: 1fr;

    }

    &__form {
      &_title {

        margin: 0 0 5vw 0;
        padding: 0 0 7.487922705314009vw 0;
        width: 72.46376811594203vw;
        //height: 7.004830917874397vw;
        font-size: 5.797101449275362vw;
        line-height: 0;

      }

      &_warning {
        margin: 0 0 7.487922705314009vw 0;
        width: 100%;
        height: 19.082125603864732vw;
        border-radius: 5.797101449275362vw;

        &_img {
          width: 13.526570048309178vw;
          margin: 0 3.864734299516908vw 0 2.898550724637681vw;

        }

        &_text {

          font-size: 3.3816425120772946vw;
          line-height: 4.830917874396135vw;

        }

      }

      &_item {
        &_pass {

          display: grid;
          grid-template-columns: 1fr;
          grid-column-gap: 0;

        }
      }


      &_input {

        font-size: 3.864734299516908vw;
        margin: 0 0 5.797101449275362vw 0;
        padding: 5.314009661835748vw 0 0 4.830917874396135vw;
        width: 100%;
        height: 19.082125603864732vw;
        border-radius: 5.797101449275362vw;

        &:focus + label,
        &:not(:placeholder-shown) + label {

          top: 19px;

        }
      }

      &_label {

        height: 4.5893719806763285vw;
        font-size: 2.898550724637681vw;
        left: 5.314009661835748vw;

      }

      &_forgot {
        margin: 0 19vw 0 21vw;
        font-size: 4.830917874396135vw;
        text-align: center;
      }

    }

    &__btn {

      margin: 0 0 7.971014492753622vw 0;
      width: 100%;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      grid-row-gap: 5.314009661835748vw;

      &_start {

        width: 100%;
        font-size: 4.3478260869565215vw;
        padding: 6vw 14.734299516908212vw;
        border-radius: 4.3478260869565215vw;

      }

      &_col {

        grid-column-gap: 14.009661835748794vw;

      }

      &_icon {

        padding: 4.5893719806763285vw 4.830917874396135vw;
        border-radius: 4.830917874396135vw;
        font-size: 6.521739130434782vw;

        &:last-child {

          padding: 4.5893719806763285vw 6.521739130434782vw;

        }

      }
    }

    &__img-background {

      display: none;

    }

  }
}

</style>
