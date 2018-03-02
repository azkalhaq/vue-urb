<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
    <v-toolbar fixed color="white">
		  <img class="logo" src="https://d1101gxsp27gd6.cloudfront.net/evaluasi-harga/img/logo-urban-gray.png" alt="">
		</v-toolbar>
      <v-list list>
          <v-list-tile avatar class="mb-4 mt-3">
          <v-flex xs12 text-xs-center layout align-center justify-center>
            <v-avatar :size="60" class="grey lighten-4" >
              <img src="https://next.vuetifyjs.com/static/doc-images/lists/1.jpg" alt="avatar">
            </v-avatar>
            <v-list-tile-content class="pl-2">
              <v-list-tile-title v-html="'Najih Azkalhaq'"></v-list-tile-title>
              <a href="#" class="pt-1" color="orange">Verifikasi Sekarang</a>
            </v-list-tile-content>
          </v-flex>
          </v-list-tile>
          <v-list-tile avatar v-for="item in profiles" :key="item.title" @click="">
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
          <v-subheader inset>Fitur Lainnya</v-subheader>
          <v-divider inset></v-divider>
          <v-list-tile avatar v-for="item in features" :key="item.title" @click="">
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
          <v-subheader inset>UrbanIndo</v-subheader>
          <v-divider inset></v-divider>
          <v-list-tile v-for="item in urbanindo" :key="item.title" avatar @click="">
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
          <v-list-tile>
            <v-btn block color="orange darken-3" to="/login" dark>Logout</v-btn>
          </v-list-tile>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        profiles: [
          { icon: 'edit', iconClass: 'grey lighten-1 white--text', title: 'Ubah Profil', subtitle: '' },
          { icon: 'lock', iconClass: 'grey lighten-1 white--text', title: 'Ubah Password', subtitle: '' }
        ],
        features: [
          { icon: 'place', iconClass: 'grey lighten-1 white--text', title: 'Pencarian Peta', subtitle: '' },
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Direktori Agen dan perusahaan', subtitle: '' },
          { icon: 'developer_board', iconClass: 'grey lighten-1 white--text', title: 'Kalkulator KPR', subtitle: '' },
          { icon: 'account_balance', iconClass: 'grey lighten-1 white--text', title: 'Pembiayaan KPR', subtitle: '' }
        ],
        urbanindo: [
          { icon: 'help', iconClass: 'grey white--text', title: 'Tentang Kami', subtitle: '' },
          { icon: 'sms', iconClass: 'grey white--text', title: 'Saran untuk Urbanindo', subtitle: '' }
        ]
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.list{
  width: 100%;
}

.logo{
  height: 35px;
  margin: auto !important;
  position: relative;
}
</style>
