<template>
<div>
  <v-app-bar
    app
    fixed
    elevate-on-scroll
    dark
    color="secondary"
  >
  <v-tabs secondary>
    <v-tabs-slider color="white"></v-tabs-slider>
    <div class="header-icon">
      <a href="">イメージ画像</a>
    </div>
    <div class="header-item-wrapper">
      <v-tab>
        <nuxt-link class="header-item" to="/">HOME</nuxt-link>
      </v-tab>
      <v-tab>
        <nuxt-link class="header-item" to="/news">NEWS</nuxt-link>
      </v-tab>
      <v-tab>
        <nuxt-link class="header-item" to="/movie">MOVIE</nuxt-link>
      </v-tab>
      <v-tab>
        <nuxt-link class="header-item" to="/contact">CONTACT</nuxt-link>
      </v-tab>
    </div>
  </v-tabs>
  <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  <v-navigation-drawer
      app
      dark
      class="header-menu"
      v-model="drawer"
      fixed
      temporary
      cliped-right
    >
      <v-list classnav dense>
        <v-list-item-group>
          <v-list-item
          >
            <v-list-item-title>HOME</v-list-item-title>
            <v-list-item-title>MOVIE</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</div>
</template>
<script>

export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.header-item-wrapper {
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
}
.header-link {
  display: flex;
}

.header-item {
  text-decoration: none;
  color: white;
}

v.toolbar_title {
  overflow: visible !important;
  margin-right: 50px !important;
}
.v-app-bar__nav-icon {
  @include display_pc {
    display: none !important;
  }
}

.v-tabs {
  display: none;

  @include display_pc {
    display: block !important;
  }
}

</style>
