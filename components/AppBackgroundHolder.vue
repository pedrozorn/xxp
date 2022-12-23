<template>
  <section class="background-holder">
    <v-container fluid fill-height class="background-holder__content">
      <v-row>
        <v-col class="background-holder__content-text">
          <p class="page-title">{{ title }}</p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.background-holder__content {
  width: 100%;
  height: 20vh;

  &-text {
    color: white;
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;

    @include display_pc {
      font-size: 40px;
    }
  }
}

.befbackground-holder__content {
  background: url("../assets/img/tenagabg.png");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 30vh;

  &-text {
    color: white;
    text-align: center;
    font-size: 28px;
    font-weight: bold;

    @include display_pc {
      font-size: 40px;
    }
  }
}
.page-title {
  max-width: 100%;
  font-family: 'M PLUS 1 Code', sans-serif;
  font-weight: 900;
  font-size: 4rem;
  margin: auto;
}
</style>
