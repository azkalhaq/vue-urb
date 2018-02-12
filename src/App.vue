<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
    <v-bottom-nav fixed :value="true" color="white">
      <v-btn flat color="teal" to="/home">
        <span>Search</span>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn flat color="teal" to="/account">
        <span>Account</span>
        <v-icon>account_circle</v-icon>
      </v-btn>
      <v-btn flat color="teal" to="/add">
        <span>Jual</span>
        <v-icon>add_box</v-icon>
      </v-btn>
      <v-btn flat color="teal" to="/favorites">
        <span>Favorites</span>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn flat color="teal" to="/more">
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
.bottom-nav {
    bottom: -1px !important;
}
</style>

