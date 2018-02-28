<template>
	<v-slide-y-transition mode="out-in">
	  <v-layout column align-center>
		<v-toolbar fixed extended color="white">
		  <img class="logo" src="https://d1101gxsp27gd6.cloudfront.net/evaluasi-harga/img/logo-urban-gray.png" alt="">
      <v-tabs
        v-model="tabs"
        fixed-tabs
        color="transparent"
        slot="extension"
      >
        <v-tabs-slider></v-tabs-slider>
        <v-tab-item href="#mobile-tabs-5-1" class="primary--text">
          <v-icon>phone</v-icon>
        </v-tab-item>
        <v-tab-item href="#mobile-tabs-5-2" class="primary--text">
          <v-icon>favorite</v-icon>
        </v-tab-item>
        <v-tab-item href="#mobile-tabs-5-3" class="primary--text">
          <v-icon>account_box</v-icon>
        </v-tab-item>
      </v-tabs>
		</v-toolbar>
		<div class="property-list">
		  <v-tabs-items v-model="tabs" class="white elevation-1">
      <v-tab-item
        v-for="i in 3"
        :key="i"
        :id="'mobile-tabs-5-' + i"
      >
        <v-card>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
		</div>
	  </v-layout>
	</v-slide-y-transition>
</template>
<script>
  export default {
    data () {
      return {
        tabs: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.logo{
  height: 35px;
  margin: auto !important;
  position: relative;
}
.search{
  margin-right: 0px !important;
  margin-left: 20px !important;
  margin-bottom: 20px !important;
  margin-top: 20px !important;
  /* border: 1px solid grey; */
}
.card{
  margin: 10px;
}
</style>
