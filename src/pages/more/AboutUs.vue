<template>
  <div style="min-height:100%">
    <v-toolbar tabs fixed color="white">
      <v-btn icon @click.native="history.back()">
            <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>About Us</v-toolbar-title>
      <v-tabs v-model="model" fixed-tabs color="transparent" slot="extension">
        <v-tabs-slider color="grey"></v-tabs-slider>
        <v-tab href="#tab-1" class="">
          <b>Perihal</b>
        </v-tab>
        <v-tab href="#tab-2" class="">
          <b>Ketentuan</b>
        </v-tab>
      </v-tabs>
    </v-toolbar>
    <v-tabs-items v-model="model" class="white tab-container">
      <v-tab-item class="tab-content" :key="1" :id="'tab-1'">
        
      </v-tab-item>
      <v-tab-item class="tab-content" :key="2" :id="'tab-2'">
        
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
