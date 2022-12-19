<template>
<a-layout>
 <a-layout-content>
    <div
      :style="{
        padding: '50px 60px',
        background: '#161616',
        minHeight: '100vh',
      }"
      class="movie-content"
    >
      <a-row>
        <a-col :span="24" :offset="0">
          <p>Welcome to <span>Watchlists</span></p>
          <p>
            Browse movies, add them to watchlists and share them with friends.
          </p>
          <p>
            Just click the to add a movie, the
            <img src="~/assets/icon-button/Property 1=Default.svg" alt="" />
            poster to see more details or
            <img src="~/assets/icon-button/Property 1=Default (1).svg" alt="" />
            to mark the movie as watched.
          </p>
        </a-col>
      </a-row>
      <a-input-search
        placeholder="Search for movies by title"
        enter-button="Search"
        size="large"
        @search="onSearch"
      >
        <a-icon
          slot="prefix"
          type="search"
          :style="{ color: 'rgba(217, 217, 217, 0.3)' }"
        />
      </a-input-search>
      <p>Popular movies right now</p>

      <a-row id="card" type="flex">
        <a-col :flex="1">
          <img
            id="lable"
            src="~/assets/icon-button/Property 1=Default.svg"
            alt=""
          />

          <a-card hoverable style="width: 100%">
            <img
              slot="cover"
              alt="example"
              src="~/assets/card-images/poster6 1.png"
            />
            <div id="score">
              <div>
                <img src="~/assets/card-images/Vector.svg" height="19" alt="" />
              </div>
              <div>83</div>
              <div>/100</div>
            </div>
            <p>
              Top Gun:
              <br />
              Maverick
              <br />
              (2022)
            </p>
          </a-card>
        </a-col>
        <a-col :flex="1">
          <img
            id="lable"
            src="~/assets/icon-button/Property 1=Default.svg"
            alt=""
          />

          <a-card hoverable style="width: 100%">
            <img
              slot="cover"
              alt="example"
              src="~/assets/card-images/poster3 1.png"
            />
            <div id="score">
              <div>
                <img src="~/assets/card-images/Vector.svg" height="19" alt="" />
              </div>
              <div>83</div>
              <div>/100</div>
            </div>
            <p>
              Top Gun:
              <br />
              Maverick
              <br />
              (2022)
            </p>
          </a-card>
        </a-col>
        <a-col :flex="1">
          <img
            id="lable"
            src="~/assets/icon-button/Property 1=Default.svg"
            alt=""
          />

          <a-card hoverable style="width: 100%">
            <img
              slot="cover"
              alt="example"
              src="~/assets/card-images/poster6 1.png"
            />
            <div id="score">
              <div>
                <img src="~/assets/card-images/Vector.svg" height="19" alt="" />
              </div>
              <div>83</div>
              <div>/100</div>
            </div>
            <p>
              Top Gun:
              <br />
              Maverick
              <br />
              (2022)
            </p>
          </a-card>
        </a-col>
        <a-col :flex="1">
          <img
            id="lable"
            src="~/assets/icon-button/Property 1=Default.svg"
            alt=""
          />

          <a-card hoverable style="width: 100%">
            <img
              slot="cover"
              alt="example"
              src="~/assets/card-images/poster3 1.png"
            />
            <div id="score">
              <div>
                <img src="~/assets/card-images/Vector.svg" height="19" alt="" />
              </div>
              <div>83</div>
              <div>/100</div>
            </div>
            <p>
              Fantastic Beasts:
              <br />
              The Secrets of Dumbledore
              <br />
              (2022)
            </p>
          </a-card>
        </a-col>
        <a-col :flex="1">
          <img
            id="lable"
            src="~/assets/icon-button/Property 1=Default.svg"
            alt=""
          />

          <a-card hoverable style="width: 100%">
            <img
              slot="cover"
              alt="example"
              src="~/assets/card-images/poster6 1.png"
            />
            <div id="score">
              <div>
                <img src="~/assets/card-images/Vector.svg" height="19" alt="" />
              </div>
              <div>83</div>
              <div>/100</div>
            </div>
            <p>
              Top Gun:
              <br />
              Maverick
              <br />
              (2022)
            </p>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </a-layout-content>
</a-layout>
  
</template>
<script>
export default {
  methods: {
    onSearch(value) {
      console.log(value)
    },
  },
}
</script>
