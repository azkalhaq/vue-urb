<template>
  <div style="min-height:100%">
    <v-toolbar tabs fixed color="white">
      <img class="logo" src="https://d1101gxsp27gd6.cloudfront.net/evaluasi-harga/img/logo-urban-gray.png" alt="">
      <v-tabs
        v-model="model"
        fixed-tabs
        color="transparent"
        slot="extension"
      >
        <v-tabs-slider color="grey"></v-tabs-slider>
        <v-tab href="#tab-1" class="">
          <b>Properti Favorit</b>
        </v-tab>
        <v-tab href="#tab-2" class="">
          <b>Agen Favorit</b>
        </v-tab>
      </v-tabs>
    </v-toolbar>
    <v-tabs-items v-model="model" class="white tab-container">
      <v-tab-item
        class="tab-content"
        v-for="tab in tabs"
        :key="tab.id"
        :id="'tab-' + tab.id"
      >
      <div>
        <v-container grid-list-md>
        <v-layout row>
          <v-flex xs12>
            <v-text-field 
              class="elevation-0 grey lighten-4"
              solo
              v-model="tab.model"
              :name="'form-' + tab.id"
              :label="'Cari ' + tab.title"
              :append-icon="'search'"
            ></v-text-field>
            <center class="ma-2">
              <subheader>{{ 'Daftar ' + tab.title }}</subheader>
            </center>
          </v-flex>
        </v-layout>
        </v-container>
      </div>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        model: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tabs: [
          {
            id: '1',
            model: null,
            title: 'Properti Favorit',
            items: [],
            img: 'Tentang Kami',
            subtitle: ''
          },
          {
            id: '2',
            model: null,
            title: 'Agent Favorit',
            items: [],
            img: 'Tentang Kami',
            subtitle: ''
          }
        ]
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-container{
  margin-top: 50px;
  min-height: 100%;
}
.tab-content{
  min-height: 100%;
}
</style>
