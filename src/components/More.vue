<template>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-toolbar fixed color="white">
          <img class="logo" src="https://d1101gxsp27gd6.cloudfront.net/evaluasi-harga/img/logo-urban-gray.png" alt="">
          <v-btn icon @click.stop="rightDrawer = !rightDrawer">
            <v-icon color="grey">email</v-icon>
          </v-btn>
        </v-toolbar>
        <div class="content">
          
        </div>
      </v-layout>
    </v-slide-y-transition>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          action: 'move_to_inbox',
          title: 'Inbox'
        },
        {
          action: 'send',
          title: 'Sent'
        },
        {
          action: 'delete',
          title: 'Trash'
        },
        {
          action: 'report',
          title: 'Spam'
        },
        { divider: true },
        { header: 'Labels' },
        {
          action: 'label',
          title: 'Family'
        },
        {
          action: 'label',
          title: 'Friends'
        },
        {
          action: 'label',
          title: 'Work'
        }
      ]
    })
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
a {
  color: #42b983;
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
.content{
  margin-top: 60px;
  margin-bottom: 60px;
  width: 100%;
}
.card{
  margin: 10px;
}
</style>
