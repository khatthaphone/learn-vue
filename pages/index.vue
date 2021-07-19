<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      {{ counter }}
    </v-col>
    <v-col cols="12" sm="8" md="6">
      <v-hover
        v-for="(post, index) in posts"
        :key="index"
        v-slot="{ hover }"
        class="transition"
      >
        <v-card
          :elevation="hover ? '12' : '4'"
          :class="['my-6', 'pa-8', 'rounded-xl', hover ? 'mx-0' : 'mx-4']"
        >
          {{ post.title }}
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  data: () => ({
    counter: 1,
  }),
  computed: {
    ...mapGetters({ posts: 'posts/getPosts' }),
  },
  mounted() {},
  created() {
    this.fetchPosts()

    setInterval(() => {
      this.counter = this.counter + 1
    }, 1000)
  },
  methods: {
    async fetchPosts() {
      await this.$store.dispatch('posts/fetchPosts')
      console.log('====')
      console.log(this.posts)
    },
  },
}
</script>

<style scoped>
.transition {
  transition: 0.25s all ease-in;
}
</style>
