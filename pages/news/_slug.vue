<template>
  <div>
    <AppBackgroundHolder :title="title" />
      <!-- {{ list }} -->
    <!-- <h2>
      <v-list-item v-for="news in list"
        :key="news.id"
        active-class="blue lighten-4"
        shaped
        >
        <v-list-item-content>
          <v-list-item-title>
            {{ news }} -->
          <!-- </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </h2> -->
    <!-- {{ list }} -->
    <!-- {{ test }} -->
    <!-- <h2>{{ $route.params.id }}</h2> -->
    <!-- <h2>{{ list }}</h2> -->
    <!-- <h1>{{ list.title }}</h1>
    <h2>{{ list.id }}</h2>
    <h3>{{ list.createdAt }}</h3> -->
    <!-- <h4>{{ `${list.content}` }}</h4> -->

    <h1>{{ list.content }}</h1>
    <nuxt-content :document="list" />
  </div>  
</template>

<script>

export default {
  data: (params) => ({
    title: 'News',
    test: params.id,
    // const { id } : this.$route.params,
  }),
  
  async asyncData({ params, $microcms }) {
    const path_parameter_id = `${params.slug}`
    const newsList = await $microcms.get({
      // endpoint: `news/${path_parameter_id}`
      endpoint: `news/${path_parameter_id}`
      // endpoint: "news" 
      // endpoint: "news/zg1ggdowrf"
    })
    .catch((error) =>
      console.log('aaaaa'))

    return {
      list: newsList,
      test: path_parameter_id
    }
      

  }


}
</script>

<style lang="scss" scoped>
.news-wrapper {
  // width: 80%;
  text-align: center;
}

.ul-none {
  padding-left:0;
}

.li-none {
  list-style:none;
}

.theme--light.v-list {
  // background: FFFEF5;
}
.v-list-item-wrapper {
  width: 50%;
  margin: 0 auto;
}
.not-link {
  text-decoration: none;
  color: black;
}
</style>