<template>
  <div style="min-height:100%">
    <v-toolbar tabs fixed color="white">
      <v-btn icon>
            <v-icon>arrow_back</v-icon>
      </v-btn>
      <img class="logo" src="https://d1101gxsp27gd6.cloudfront.net/evaluasi-harga/img/logo-urban-gray.png" alt="">
      <v-tabs
        v-model="model"
        fixed-tabs
        color="transparent"
        slot="extension"
      >
        <v-tabs-slider color="grey"></v-tabs-slider>
        <v-tab href="#tab-1" class="">
          <b>Login</b>
        </v-tab>
        <v-tab href="#tab-2" class="">
          <b>Daftar</b>
        </v-tab>
      </v-tabs>
    </v-toolbar>
    <v-tabs-items v-model="model" class="white tab-container">
      <v-tab-item class="tab-content" v-for="tab in tabs" :key="tab.id" :id="'tab-' + tab.id">
      <template v-if="tab.id === '1'">
        <v-container grid-list-md>
        <v-layout row>
          <v-flex xs12>
            <v-btn block color="light-blue darken-4" to="/login" dark>{{ tab.facebookBtn }}</v-btn>
            <v-subheader>atau</v-subheader>
            <v-text-field
              solo
              label='Username'
              ></v-text-field>
              <v-text-field
                solo
                name="input-10-1"
                label="Password"
                :append-icon="e1 ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (e1 = !e1)"
                :type="e1 ? 'password' : 'text'"
                counter
              ></v-text-field>
              <br>
              <v-btn block color="orange darken-3" dark>Login</v-btn>
              <center>
                  <a href="#" class="orange--text">Lupa Password</a>
              </center>
          </v-flex>
        </v-layout>
        </v-container>
      </template>
      <template v-else>
        <v-container grid-list-md>
        <v-layout row>
          <v-flex xs12>
            <v-btn block color="light-blue darken-4" to="/login" dark>{{ tab.facebookBtn }}</v-btn>
            <v-subheader>atau</v-subheader>
              <v-text-field solo label='Nama Lengkap'></v-text-field>
              <v-text-field solo label='Username'></v-text-field>
              <v-text-field solo label='Email'></v-text-field>
              <v-text-field solo label='Telepon'></v-text-field>
              <v-text-field
                solo
                name="input-10-1"
                label="Password"
                :type="'password'"
                counter
              ></v-text-field>
              <v-text-field
                solo
                name="input-10-1"
                label="Ulangi Password"
                :type="'password'"
                counter
              ></v-text-field>
              <br>
              <v-btn block color="orange darken-3" dark>Daftar</v-btn>
          </v-flex>
        </v-layout>
        </v-container>
      </template>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        e1: false,
        model: null,
        tabs: [
          {
            id: '1',
            model: null,
            facebookBtn: 'Login menggunakan Facebook'
          },
          {
            id: '2',
            model: null,
            facebookBtn: 'Daftar menggunakan Facebook'
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
.logo{
    margin-left: 16.5% !important;
}
</style>
