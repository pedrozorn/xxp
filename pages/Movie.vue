<template>
  <div class="pagination">
    <div class="text-center container">
      <AppBackgroundHolder :title="title" />
      <v-container>
        <div class="movie-area">
          <div
            class="col-md-6 col-sm-10 cole"
            v-for="list in displayLists"
            :key="list.url"
          >
            <v-card elevation="23" shaped tile>
              <div class="frame-wrapper__video">
                <iframe
                  width="560"
                  height="315"
                  class="addTagManager"
                  :src="list.url"
                  :title="list.name"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </v-card>
          </div>
        </div>
        <v-pagination
          class="pagination"
          v-model="page"
          :length="length"
          @input="pageChange"
        ></v-pagination>
      </v-container>
    </div>
  </div>
</template>

<script>
import pagination from "./common/pagination";

export default {
  data() {
    title: "Moive";
    acontents: [];
    return {
      title: "Moive",
      page: 1,
      length: 0,
      lists: [], //全データ
      displayLists: [], //表示データ格納
      pageSize: 2,
    };
  },
  methods: {
    getNumber: function (number) {
      console.log(number);
    },
    pageChange: function (pageNumber) {
      this.displayLists = this.lists.slice(
        this.pageSize * (pageNumber - 1),
        this.pageSize * pageNumber
      );
      console.log(this.displayLists);
    },
  },
  mounted: function () {
    /* eslint-disable */
    // listにページ番号をふりたい
    // オブジェクトにindexを付与して戻したい。
    this.lists = pagination.movieList.map((movie, index) => {
      movie["index"] = index;
      return movie;
    });
    this.length = Math.ceil(this.lists.length / this.pageSize);
    this.displayLists = this.lists.slice(0, this.pageSize);
    console.log(this.displayLists.length)
    // console.log(this.lists)
  },
};
</script>
<style lang="scss" scoped>
.pagination-link {
  font: 100;
}

.movie-area {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.video-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 2px;
}
.frame-wrapper__video {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
  margin-bottom: 50px;
}

.frame-wrapper__video iframe {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.pagination {
  padding-bottom:30px;
}

</style>
