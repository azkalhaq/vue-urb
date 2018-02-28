<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
    <v-bottom-nav fixed :value="true" color="white">
      <v-btn flat color="orange" to="/home">
        <span>Search</span>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn flat color="orange" to="/account">
        <span>Account</span>
        <v-icon>account_circle</v-icon>
      </v-btn>
      <v-btn flat color="orange" to="/add">
        <span>Jual</span>
        <v-icon>add_box</v-icon>
      </v-btn>
      <v-btn flat color="orange" to="/favorites">
        <span>Favorites</span>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn flat color="orange" to="/more">
        <span>More</span>
        <v-icon>more_horiz</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      right: true,
      rightDrawer: false,
      title: 'Urbanindo'
    }
  },
  name: 'App'
}
</script>

<style>
.logo{
  height: 35px;
  margin: auto !important;
  position: relative;
}

.bottom-nav {
    bottom: -1px !important;
}

.content{
  margin-top: 60px;
  margin-bottom: 60px;
  width: 100%;
}

.application.theme--light {
    background: #ffffff !important;
    color: rgba(0,0,0,.87);
}
</style>

