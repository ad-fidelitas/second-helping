<template>
 <nav>

    <v-toolbar flat app class="accent">
      <v-toolbar-side-icon @click="drawer = !drawer" class="primary--text"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase primary--text">
        <span>NOURRI</span>
        <i class="material-icons">
local_grocery_store
</i>


      </v-toolbar-title>
      <v-spacer></v-spacer>
      
      <v-btn flat color="grey" class="primary--text" href="/home">
        <span pa-1>Home</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
      <v-btn flat color="grey" class="primary--text" href="/about">
        <span pa-1>About</span>
        <v-icon right>not_listed_location</v-icon>
      </v-btn>
      <v-btn flat color="grey" class="primary--text" href="/login">
        <span pa-1>Login</span>
        <v-icon right>lock_open</v-icon>
      </v-btn>
      <v-btn flat color="grey" class="primary--text" href="/signup">
        <span pa-1>Sign Up</span>
        <v-icon right>lock</v-icon>
      </v-btn>
      <v-btn flat color="grey" class="primary--text" href="/map">
        <span pa-1>Map</span>
        <v-icon right>add_location</v-icon>
      </v-btn>
      
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="secondary">
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>
    export default {
       data() {
    return {
      drawer: false,
      links: [
        { icon: 'home', text: 'Home', route: '/' },
        { icon: 'not_listed_location', text: 'About', route: '/about' },
        { icon: 'lock_open', text: 'Login', route: '/login' },
        { icon: 'lock', text: 'Signup', route: '/signup' },
        { icon: 'add_location', text: 'Map', route: '/map' },
        
      ]
    }
  }
    };
</script>

<style>
</style>
