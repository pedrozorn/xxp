<!-- <template>
  <div>
    <Header/>
      <nuxt class="bg" />
    <Footer/>
  </div>
</template> -->
<template>
  <v-app id="app" class="bgs">
      <Header/>
      <nuxt class="bg" />
      <Footer/>
    </v-app>
</template>

<style lang="scss" scoped>
.bg {
  background-image: url("assets/img/tenagabg.png");
  background-size: cover;
  background-position: center center;
  width: 100%;
  //height: 50vh;
  height: 100%;
  // filter: grayscale(70%);
  filter: opacity;
}
</style>
