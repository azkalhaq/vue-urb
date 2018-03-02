<template>
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
                <v-btn block color="orange darken-3" to="/login" dark>Login</v-btn>
                <center>
                    <a href="#" class="orange--text">Lupa Password</a>
                    <br>
                    <p>
                        Belum punya akun? <a href="#" class="orange--text">Daftar</a>
                    </p>
                </center>
            </v-flex>
            </v-layout>
        </v-container>
</template>
