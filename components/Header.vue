

<template>
  <div class="header">
    <v-app-bar
      app
      fixed
      elevate-on-scroll
      dark
      color="secondary"
    >
    <v-tabs secondary>
        <div class="header-wrapper">
          <div class="header-icon">
            <a href="/">イメージ画像</a>
          </div>
          <div class="header-items"> 
            <v-tab class="header-item" to="/">HOME</v-tab>
            <v-tab class="header-item" to="/news">NEWS</v-tab>
            <v-tab class="header-item" to="/movie">MOVIE</v-tab>
            <v-tab class="header-item" to="/testcontact">TESTCONTACT</v-tab>
            <v-tab class="header-item" to="/contact">CONTACTs</v-tab>
          </div>
        </div>
        <v-tabs-slider color="white"></v-tabs-slider>
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
.header {
  padding-bottom: 56px;
}
.header-wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.header-item {
  text-decoration: none;
  color: white;
}
.header-items {
  display: flex;
}
v.toolbar_title {
  overflow: visible !important;
  margin-right: 50px !important;
}
.header-menu {
  display: flex;
  justify-content: flex-end;
  font-size: 45px;
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