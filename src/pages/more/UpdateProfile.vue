<template>
  <div style="min-height:100%">
    <v-toolbar tabs fixed color="white">
      <v-btn icon @click.native="history.back()">
            <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>Ubah Profil</v-toolbar-title>
    </v-toolbar>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3 class="pa-4">
        <v-form v-model="valid" ref="form" lazy-validation>
          <v-flex xs12 text-xs-center layout align-center justify-center class="pb-4">
            <v-avatar :size="90" class="grey lighten-4" >
              <img src="https://next.vuetifyjs.com/static/doc-images/lists/1.jpg" alt="avatar">
            </v-avatar>
            <v-list-tile-content class="pl-2">
              <v-list-tile-title v-html="'<b>Nama Pengguna</b>'"></v-list-tile-title>
              <v-list-tile-title v-html="form.fullname.value"></v-list-tile-title>
              <a href="#" class="pt-1" color="orange">Verifikasi Sekarang</a>
            </v-list-tile-content>
          </v-flex>
          <v-text-field v-model="form.fullname.value" :label="form.fullname.label" :hide-details="true" required ></v-text-field>
          <v-text-field v-model="form.email.value" :label="form.email.label" :hide-details="true" required ></v-text-field>
          <v-text-field v-model="form.bio.value" :label="form.bio.label" :hide-details="true" ></v-text-field>
          <v-text-field v-model="form.website.value" :label="form.website.label" :hide-details="true" ></v-text-field>
          <v-text-field v-model="form.address.value" :label="form.address.label" :hide-details="true" multi-line></v-text-field>
          <v-text-field v-model="form.telephone1.value" :label="form.telephone1.label" :hide-details="true" required ></v-text-field>
          <v-text-field v-model="form.telephone2.value" :label="form.telephone2.label" :hide-details="true" ></v-text-field>
          <v-text-field v-model="form.telephone3.value" :label="form.telephone3.label" :hide-details="true" ></v-text-field>
          <v-text-field v-model="form.bb.value" :label="form.bb.label" :hide-details="true" ></v-text-field>
          <v-btn class="mt-4" dark block @click.native="console.log('Submited')" color="orange darken-3" :disabled="!valid">Simpan</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      form: {
        fullname: { label: 'Nama Lengkap', value: 'Najih Azkalhaq' },
        email: { label: 'Email', value: 'najih@urbanindo.com' },
        bio: { label: 'Biodata Singkat', value: null },
        website: { label: 'Situs', value: null },
        address: { label: 'Alamat', value: null },
        telephone1: { label: 'Telepon', value: '08999359899' },
        telephone2: { label: 'Telepon 2', value: null },
        telephone3: { label: 'Telepon 3', value: null },
        bb: { label: 'Blackberry PIN', value: null }
      },
      select: null
    }),
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
