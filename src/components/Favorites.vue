<template>
  <div>
    <v-toolbar tabs fixed color="white">
      <img class="logo" src="https://d1101gxsp27gd6.cloudfront.net/evaluasi-harga/img/logo-urban-gray.png" alt="">
      <v-tabs
        v-model="tabs"
        fixed-tabs
        color="transparent"
        slot="extension"
      >
        <v-tabs-slider></v-tabs-slider>
        <v-tab href="#mobile-tabs-5-1" class="">
          <b>Properti Favorit</b>
        </v-tab>
        <v-tab href="#mobile-tabs-5-2" class="">
          <b>Agen Favorit</b>
        </v-tab>
      </v-tabs>
    </v-toolbar>
    <div class="content">
    <v-tabs-items v-model="tabs" class="white elevation-1">
      <v-tab-item
        v-for="i in 2"
        :key="i"
        :id="'mobile-tabs-5-' + i"
      >
        <v-card>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
    </div>
  </div>
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