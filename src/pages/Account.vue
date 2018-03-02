<template>
    <v-layout column align-center>
    <v-toolbar fixed color="white" class="elevation-0">
      <img class="logo" src="https://d1101gxsp27gd6.cloudfront.net/evaluasi-harga/img/logo-urban-gray.png" alt="">
    </v-toolbar>
    <v-flex xs12 text-xs-center layout align-center justify-center >
      <v-avatar :tile="tile" :size="60" class="grey lighten-4" >
        <img src="https://next.vuetifyjs.com/static/doc-images/lists/1.jpg" alt="avatar">
      </v-avatar>
      <v-list-tile-content class="pl-2">
        <v-list-tile-title v-html="'Najih Azkalhaq'"></v-list-tile-title>
        <v-list-tile-sub-title v-html="'Pemasang iklan | 0 Koin'"></v-list-tile-sub-title>
        <a href="#" class="pt-1">Lihat dan Ubah Profil</a>
      </v-list-tile-content>
    </v-flex>
    <v-layout row>
      <div class="statistic pa-2 pl-4 pr-4 ma-2">
        <center><b class="subheading">Statistik Semua Iklan 30 Hari Terakhir</b></center>
        <v-layout row>
          <v-flex xs4 order-md2 order-xs1>
            <v-card tile flat text-xs-center color="transparent">
              <center><b class="title">0</b></center>
              <center><b class="subheading">Dikunjungi</b></center>
            </v-card>
          </v-flex>
          <v-flex xs4 order-md3 order-xs2>
            <v-card tile flat text-xs-center color="transparent">
              <center><b class="title">0</b></center>
              <center><b class="subheading">Dihubungi</b></center>
            </v-card>
          </v-flex>
          <v-flex xs4 order-md1 order-xs3>
            <v-card tile flat text-xs-center color="transparent">
              <center><b class="title">0</b></center>
              <center><b class="subheading">Difavoritkan</b></center>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
    </v-layout>
    <v-tabs style="width:100%;" centered fixed-tabs color="transparent">
      <v-tabs-slider color="grey"></v-tabs-slider>
      <v-tab href="#tab-1">
        Iklan Saya
      </v-tab>
      <v-tab href="#tab-2">
        Layanan Premium
      </v-tab>
      <v-tab-item class="tab-content" v-for="tab in tabs" :key="tab.id" :id="'tab-' + tab.id">
        <template v-if="tab.id === '1'">
          <v-container grid-list-md>
          <v-layout row>
            <v-flex xs12>
              <v-card flat>
                <center>
                  <subheader>{{ tab.title }}</subheader>
                </center>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      solo
                      :name="'form-listing'"
                      :label="'Cari Iklan Anda'"
                      :append-icon="'search'"
                    ></v-text-field>
                    <template v-if="tab.items.length === 0">
                      <v-flex xs12 layout align-center justify-center class="ma-5">
                        <img src="../assets/home.png" alt="">
                      </v-flex>
                      <v-flex xs12 layout align-center justify-center class="ma-1">
                        <p>
                          <center>
                            Anda belum mempunyai properti untuk ditampilkan disini.
                          <br> Punya properti yang ingin dijual?
                          <br> <a to="/submit">Iklankan Properti</a>
                          </center>           
                        </p>
                      </v-flex>
                    </template>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
          </v-layout>
          </v-container>
        </template>
        <template v-else>
          <v-layout row>
            <v-list list class="mt-2">
            <center>
              <subheader>Koin</subheader>
            </center>
            <v-list-tile avatar v-for="item in coins" :key="item.title" @click="">
              <v-list-tile-avatar>
                <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon ripple>
                  <v-icon color="grey lighten-1">chevron_right</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
            <center>
              <subheader>Layanan Premium</subheader>
            </center>
            <v-list-tile avatar v-for="item in premiums" :key="item.title" @click="">
              <v-list-tile-avatar>
                <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon ripple>
                  <v-icon color="grey lighten-1">chevron_right</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
            </v-list>
          </v-layout>
        </template>
      </v-tab-item>
    </v-tabs>
    </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        model: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        coins: [
          { icon: 'copyright', iconClass: 'grey lighten-1 white--text', title: 'Beli Koin', subtitle: '' },
          { icon: 'data_usage', iconClass: 'grey lighten-1 white--text', title: 'Histori Pembelian Koin Saya', subtitle: '' }
        ],
        premiums: [
          { icon: 'loyalty', iconClass: 'grey lighten-1 white--text', title: 'Tukarkan Koin', subtitle: '' },
          { icon: 'replay', iconClass: 'grey lighten-1 white--text', title: 'History Layanan Premium', subtitle: '' },
          { icon: 'forward', iconClass: 'grey lighten-1 white--text', title: 'Perpanjang Masa Layanan', subtitle: '' }
        ],
        tabs: [
          {
            id: '1',
            model: null,
            title: 'Daftar Iklan Anda',
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
.section {
  display: flex;
  flex-direction: row;
  flex: 1;
  margin: 0 -8px;
}
.section > * {
  margin: 0 8px;
}
.divider {
  width: 2px;
  margin: 6px 0;
  background: grey;
}
.statistic{
  border: 1px solid grey;
  border-radius: 10px;
  width: 100%;
}
.statistic--item {
  flex: 0 1 auto;
}
.tab-content{
  width: 100%;
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
.list{
  width: 100%;
}
.list > li{
  display: list-item;
  margin: 0;
}
</style>
