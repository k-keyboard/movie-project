<template>
  <div>
    <a-row id="card" type="flex">
    <card-movie
      v-for="(item, index) in employees.slice(0,limit)"
      :id="item.id"
      :key="index"
      :name="item.name"
      :score="item.score"
      :image="item.image"
      :year="item.year"
      :lable="lable"
    />
    </a-row>
  </div>
    
  
</template>

<script>
import CardMovie from './CardMovie.vue'
export default {
  name:"ListData",
  components: { CardMovie },
  props:{
    // eslint-disable-next-line vue/require-default-prop
    limit:{
      type:Number
    },
    // eslint-disable-next-line vue/require-default-prop
    lable:{
      type:Number
    },
  },
  data() {
    return {
      employees: [
        {
          id: 1,
          name: 'Top Gun: Maverick',
          score: 50,
          image: '/_nuxt/assets/card-images/poster6 1.png',
          year: "2022",
        },
        {
          id: 2,
          name: 'Fantastic Beasts: The Secrets of Dumbledore',
          score: 60,
          image: '/_nuxt/assets/card-images/poster3 1.png',
          year: "2022",
        },
        {
          id: 3,
          name: 'Top Gun: Maverick',
          score: 80,
          image: '/_nuxt/assets/card-images/poster6 1.png',
          year: "2022",
        },
        {
          id: 4,
          name: 'Fantastic Beasts: The Secrets of Dumbledore',
          score: 90,
          image: '/_nuxt/assets/card-images/poster3 1.png',
          year: "2022",
        },
        {
          id: 5,
          name: 'Top Gun: Maverick',
          score: 45,
          image: '/_nuxt/assets/card-images/poster6 1.png',
          year: "2022",
        },
        {
          id: 6,
          name: 'Fantastic Beasts: The Secrets of Dumbledore',
          score: 100,
          image: '/_nuxt/assets/card-images/poster3 1.png',
          year: "2022",
        },
        {
          id: 7,
          name: 'Top Gun: Maverick',
          score: 45,
          image: '/_nuxt/assets/card-images/poster6 1.png',
          year: "2022",
        },
        {
          id: 8,
          name: 'Fantastic Beasts: The Secrets of Dumbledore',
          score: 100,
          image: '/_nuxt/assets/card-images/poster3 1.png',
          year: "2022",
        },
        {
          id: 9,
          name: 'Top Gun: Maverick',
          score: 45,
          image: '/_nuxt/assets/card-images/poster6 1.png',
          year: "2022",
        },
        {
          id: 10,
          name: 'Fantastic Beasts: The Secrets of Dumbledore',
          score: 100,
          image: '/_nuxt/assets/card-images/poster3 1.png',
          year: "2022",
        },
        
      ],
    }
  },
  
}
</script>
