<template>
  <div class="home">
    <section class="home-banner">
      <div class="home-banner__wrap">
        <div class="home-banner__img"></div>
        <div class="home-banner__logo"></div>
        <div
          class="home-banner__subtitle"
          @click="handleRouteLinkClick('Search')"
        >
          微笑單車．暢遊城市
        </div>
      </div>
    </section>
    <section class="home-btns">
      <el-button @click="handleRouteLinkClick('Search')"
        >尋找 Youbike</el-button
      >
      <el-button disabled>查詢自行車道</el-button>
      <el-button disabled>附近景點、美食</el-button>
    </section>
    <footer class="home-footer">
      <div>Where’s YouBike © Code: WendyL / Design: KT</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    handleRouteLinkClick(newRoute) {
      // console.log("click", newRoute);
      // 避免相同頁面報錯
      if (this.$router.currentRoute.name !== newRoute)
        this.$router.push({ name: newRoute });
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fed801;
  &-banner {
    width: 100vw;
    height: 295px;
    &__wrap {
      width: fit-content;
      position: absolute;
      top: 150px;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
    }
    &__img {
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
    position: relative;
    height: 180px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-top: 114px;

    .home-btn {
      width: 244px;
      height: 48px;
      border: 2px solid #000;
      border-radius: 10px;
      background-color: #fed801;
      color: #000;
      font-size: 16px;
      cursor: pointer;
    }
    .el-button {
      width: 244px;
      height: 48px;
      border: 2px solid #000;
      border-radius: 10px;
      background-color: #fed801;
      color: #000;
      font-size: 16px;
      cursor: pointer;
    }
    .el-button + .el-button {
      margin-left: 0;
    }
  }
  footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: flex-end;

    @media screen and (max-width: 768px) {
      justify-content: center;
    }
    div {
      font-size: 12px;
      padding: 0 40px 20px 0;
      @media screen and (max-width: 768px) {
        padding: 0 0 13px;
      }

      @media screen and (max-width: 360px) {
        padding-bottom: 16px;
      }
    }
  }
}
</style>
