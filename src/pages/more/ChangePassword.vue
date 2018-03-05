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
          <v-text-field
            v-model="form.password.value"
            :label="form.password.label"
            :append-icon="form.password.hide ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (form.password.hide = !form.password.hide)"
            :type="form.password.hide ? 'password' : 'text'"
            :hide-details="true" 
            ></v-text-field>
          <v-text-field
            v-model="form.newPassword.value"
            :label="form.newPassword.label"
            :append-icon="form.newPassword.hide ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (form.newPassword.hide = !form.newPassword.hide)"
            :type="form.newPassword.hide ? 'password' : 'text'"
            :hide-details="true" 
            ></v-text-field>
          <v-text-field
            v-model="form.confirmPassword.value"
            :label="form.confirmPassword.label"
            :append-icon="form.confirmPassword.hide ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (form.confirmPassword.hide = !form.confirmPassword.hide)"
            :type="form.confirmPassword.hide ? 'password' : 'text'"
            :hide-details="true" 
            ></v-text-field>
          
          <v-btn class="mt-4" dark block @click.native="console.log('Submited')" color="orange darken-3" :disabled="!valid">Ubah Password</v-btn>
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
        password: { label: 'Password Lama', value: null, hide: true },
        newPassword: { label: 'Password Baru', value: null, hide: true },
        confirmPassword: { label: 'Konfirmasi Password Baru', value: null, hide: true }
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
