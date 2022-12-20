<template>
  <div>
    <a-row id="card" type="flex">
      <card-movie
        v-for="(item, index) in movie.slice(0, limit)"
        :id="item.id"
        :key="index"
        :name="item.title"
        :score="item.rating"
        :image="item.image"
        :year="item.year"
        :lable="lable"
      />
    </a-row>
  </div>
</template>

<script>
import CardMovie from './CardMovie.vue'
const axios = require('axios')

export default {
  name: 'ListData',
  components: { CardMovie },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    limit: {
      type: Number,
    },
    // eslint-disable-next-line vue/require-default-prop
    lable: {
      type: Number,
    },
  },
  data() {
    return {
      movie: [],
      // employees: [
      //   {
      //     id: 1,
      //     name: 'Top Gun: Maverick',
      //     score: 50,
      //     image: '/_nuxt/assets/card-images/poster6 1.png',
      //     year: '2022',
      //   },
      //   {
      //     id: 2,
      //     name: 'Fantastic Beasts: The Secrets of Dumbledore',
      //     score: 60,
      //     image: '/_nuxt/assets/card-images/poster3 1.png',
      //     year: '2022',
      //   },
      //   {
      //     id: 3,
      //     name: 'Top Gun: Maverick',
      //     score: 80,
      //     image: '/_nuxt/assets/card-images/poster6 1.png',
      //     year: '2022',
      //   },
      //   {
      //     id: 4,
      //     name: 'Fantastic Beasts: The Secrets of Dumbledore',
      //     score: 90,
      //     image: '/_nuxt/assets/card-images/poster3 1.png',
      //     year: '2022',
      //   },
      //   {
      //     id: 5,
      //     name: 'Top Gun: Maverick',
      //     score: 45,
      //     image: '/_nuxt/assets/card-images/poster6 1.png',
      //     year: '2022',
      //   },
      //   {
      //     id: 6,
      //     name: 'Fantastic Beasts: The Secrets of Dumbledore',
      //     score: 100,
      //     image: '/_nuxt/assets/card-images/poster3 1.png',
      //     year: '2022',
      //   },
      //   {
      //     id: 7,
      //     name: 'Top Gun: Maverick',
      //     score: 45,
      //     image: '/_nuxt/assets/card-images/poster6 1.png',
      //     year: '2022',
      //   },
      //   {
      //     id: 8,
      //     name: 'Fantastic Beasts: The Secrets of Dumbledore',
      //     score: 100,
      //     image: '/_nuxt/assets/card-images/poster3 1.png',
      //     year: '2022',
      //   },
      //   {
      //     id: 9,
      //     name: 'Top Gun: Maverick',
      //     score: 45,
      //     image: '/_nuxt/assets/card-images/poster6 1.png',
      //     year: '2022',
      //   },
      //   {
      //     id: 10,
      //     name: 'Fantastic Beasts: The Secrets of Dumbledore',
      //     score: 100,
      //     image: '/_nuxt/assets/card-images/poster3 1.png',
      //     year: '2022',
      //   },
      // ],
    }
  },
  mounted() {
    const vm = this
    const options = {
      method: 'GET',
      url: 'https://imdb-top-100-movies.p.rapidapi.com/',
      headers: {
        'X-RapidAPI-Key': '5364e43201msh7e05079eee5843cp14d301jsn99dfbf47e6b6',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
      },
    }

    axios
      .request(options)
      .then(function (response) {
        vm.movie = response.data
        // console.log(response.data)
      })
      .catch(function (error) {
        console.error(error)
      })
  },
}
</script>
