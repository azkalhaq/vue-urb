<template>
      <v-layout column align-center>
        <v-toolbar class="elevation-0" fixed color="white">
          <img class="logo" src="https://d1101gxsp27gd6.cloudfront.net/evaluasi-harga/img/logo-urban-gray.png" alt="">
          <!-- <v-toolbar-title dark color="orange" slot="extension">Title</v-toolbar-title> -->
        </v-toolbar>
        <div class="property-list">
          <v-layout row wrap>
            <v-flex xs12 class="pl-2 pr-2 mb-2">
              <v-text-field class="elevation-1" solo :append-icon="'search'" slot="extension" name="search" label="Rumah dijual di Bandung" ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-btn small color="white" to="/detail-search" block>
                  Pencarian Detail
              </v-btn>
            </v-flex>
            <v-flex xs6>
              <v-btn small color="white" block>
                  Diutamakan<v-icon>keyboard_arrow_down</v-icon>
              </v-btn>
            </v-flex>
            <v-flex xs12 sm6 v-for="item in properties" :key="item.id">
              <v-card class="card">
                <v-card-media class="white--text" height="200px" :src="item.img">
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <!-- <span class="headline">Top 10 Australian beaches</span> -->
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-title>
                  <div>
                    <span class="title">{{ item.price }}</span><br>
                    <span>{{ item.title }}</span><br>
                    <span class="caption">{{ item.description }}</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn block dark color="orange darken-3">Kontak Agen</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </div>
      </v-layout>
</template>

<script>
  import PropertyServices from '@/services/PropertyServices'

  export default {
    data () {
      return {
        properties: PropertyServices.getProperties()
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
.search{
  margin-right: 0px !important;
  margin-left: 20px !important;
  margin-bottom: 20px !important;
  margin-top: 20px !important;
  /* border: 1px solid grey; */
}
.property-list{
  margin-top: 5px;
  width: 100%;
}
.card{
  margin: 10px;
}
</style>
