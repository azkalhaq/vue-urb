<template>
  <div style="min-height:100%">
    <v-toolbar tabs fixed color="white">
      <v-btn icon @click.native="history.back()">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>Direktori</v-toolbar-title>
      <v-tabs
        v-model="model"
        fixed-tabs
        color="transparent"
        slot="extension"
      >
        <v-tabs-slider color="grey"></v-tabs-slider>
        <v-tab href="#tab-1" class="">
          <b>Agen</b>
        </v-tab>
        <v-tab href="#tab-2" class="">
          <b>Perusahaan</b>
        </v-tab>
      </v-tabs>
    </v-toolbar>
    <v-tabs-items v-model="model" class="white tab-container">
      <v-tab-item class="tab-content" v-for="tab in tabs" :key="tab.id" :id="'tab-' + tab.id">
      <div>
        <v-container grid-list-md>
        <v-layout row>
          <v-flex xs12>
            <v-text-field solo v-model="tab.model" :name="'form-' + tab.id" :label="'Cari ' + tab.title" :append-icon="'search'" ></v-text-field>
            <v-tabs color="grey lighten-5" show-arrows class="mt-3">
              <v-tabs-slider color="grey"></v-tabs-slider>
              <v-tab v-for="i in tab.filters" :key="i" :href="'#tab-' + i">
                &nbsp;{{ i }}&nbsp;
              </v-tab>
              <v-tabs-items>
                <v-tab-item v-for="i in tab.filters" :key="i" :id="'tab-' + i" cycle="true" lazy>
                  <center class="ma-2">
                    {{ 'Daftar ' + tab.title }}
                  </center>
                  <v-flex xs12 v-for="item in tab.data" :key="item.id" class="mt-2 mb-3 pb-1">
                    <v-card>
                      <v-container fluid grid-list-md>
                        <v-layout row>
                          <v-flex xs3>
                            <center>
                              <v-avatar :size="75" class="grey lighten-4" >
                                <img :src="item.img" alt="avatar">
                              </v-avatar>
                            </center>
                          </v-flex>
                          <v-flex xs9>
                            <div>
                              <div class="title">{{ item.name }}</div>
                              <div>{{ item.role }}</div>
                              <div>{{ item.location }}</div>
                              <div>{{ item.property }} Properti/ {{ item.sold }} Terjual/ {{ item.rent }} Tersewa</div>
                              <v-btn class="ml-0"
                                color="orange"
                                dark
                                small
                              >
                                <v-icon>phone</v-icon> Kontak
                              </v-btn>
                            </div>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card>
                  </v-flex>
                </v-tab-item>
              </v-tabs-items>
            </v-tabs>
          </v-flex>
        </v-layout>
        </v-container>
      </div>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
  import AgentServices from '@/services/AgentServices'

  export default {
    data () {
      return {
        model: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tabs: [
          {
            id: '1',
            model: null,
            title: 'Agen',
            items: [],
            filters: [ 'All', 'A', 'B', 'C', 'D', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '#' ],
            data: AgentServices.getAgents(),
            img: 'Tentang Kami',
            subtitle: ''
          },
          {
            id: '2',
            model: null,
            title: 'Perusahaan',
            items: [],
            filters: [ 'All', 'A', 'B', 'C', 'D', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '#' ],
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
