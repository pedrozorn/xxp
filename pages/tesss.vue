<template>
  <div>
    <AppBackgroundHolder :title="title" />
    <v-list
    class="v-list-item-wrapper"
    elevation="24"
    color="white lighten-3"
    rounded
    >
      <v-list-item v-for="news in list"
        :key="news.id"
        active-class="blue lighten-4"
        @click="item.value = !item.value"
        shaped
        >
        <v-list-itemcontent>
          <v-list-item-title>
            <!-- {{ news.id }} -->
            <nuxt-link class="not-link":to="'hogehogehoge/' + news.id"　>
              {{ news.id }} aa {{ news.publishedAt }}
            </nuxt-link>
          </v-list-item-title>
        </v-list-itemcontent>
      </v-list-item>
    </v-list>

  </div>  
</template>

<script>
export default {
  data: () => ({
    title: 'News',
  }),

  async asyncData({ $microcms }) {
    const newsList = await $microcms.get({
      endpoint: 'news',
    })
    // .then((res) =>
    //       res.data.contents.map((content) => ({
    //         route: `/${content.id}`,
    //         payload: content
    //       }))
    //     )

    return {
      list: newsList.contents
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