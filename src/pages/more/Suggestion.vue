<template>
  <div style="min-height:100%">
    <v-toolbar tabs fixed color="white">
      <v-btn icon @click.native="history.back()">
            <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>Saran</v-toolbar-title>
    </v-toolbar>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3 class="pa-4">
        <v-form v-model="valid" ref="form" lazy-validation>
          <v-text-field placeholder="Nama" v-model="form.name.value" :label="form.name.label"  required ></v-text-field>
          <v-text-field placeholder="Masukan saran Anda di sini" v-model="form.suggestion.value" :label="form.suggestion.label"  required multi-line ></v-text-field>

          <v-btn class="mt-4" dark block @click.native="console.log('Submited')" color="orange darken-3" :disabled="!valid">Kirim</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    data: () => ({
      e1: true,
      valid: true,
      form: {
        name: { label: 'Nama Lengkap', value: null, hide: true },
        suggestion: { label: 'Saran', value: null, hide: true }
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
