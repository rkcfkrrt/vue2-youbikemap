<template>
  <div class="home">
    <section class="home-banner">
      <div class="home-banner__wrap">
        <div class="home-banner__img"></div>
        <div class="home-banner__logo"></div>
        <div class="home-banner__subtitle">微笑單車．暢遊城市</div>
      </div>
    </section>
    <section class="home-btns">
      <el-button >尋找  Youbike</el-button>
      <el-button disabled>查詢自行車道</el-button>
      <el-button disabled>附近景點、美食</el-button>

    </section>
    <footer class="home-footer"><div>Where’s YouBike  © Code: WendyL  /  Design: KT</div></footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>
<style lang="scss" scoped>
.home {
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #FED801;
  &-banner {
    width: 100vw;
    height: 295px;    
    &__wrap {
      width: fit-content;
      // display: flex;
      // flex-direction: column;
      // align-items: flex-start;
      position: absolute;
      top: 150px;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
    }
    &__img {
      // position: absolute;
      width: 119px;
      height: 75px;
      background-image: url("../assets/img/title-bike.png");
    }
    &__logo {
      width: 245px;
      height: 47px;
      background-image: url("../assets/img/Logo-bike.png");
    }
    &__subtitle {
      font-family: Noto Sans TC;
      color: #000;
      font-size: 13px;
      letter-spacing: 14px;
    }
    
  }
  &-btns {
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-top: 114px;
    .el-button {
      width: 244px;
      height: 48px;
      border: 2px solid #000;
      border-radius: 10px;
      background-color: #FED801;
      color: #000;
      font-size: 16px;
      cursor: pointer;
    }
    .el-button+.el-button {
      margin-left: 0;
    }
    }
  footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    div {
      font-size: 12px;
      padding: 0 40px 20px 0;
    }
  }
}
</style>