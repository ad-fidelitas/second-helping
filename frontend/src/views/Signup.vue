<template>
    <div id="signup">
        <v-container pa-5>
            <v-form class="primary">
                <div class="text-xs-center">
                    <h2 class="display-5" pa-5  >Sign Up</h2>
                </div>
                <v-text-field label="Email" prepend-icon="person"></v-text-field>
                <v-text-field label="Password" prepend-icon="lock"></v-text-field>
                <div class="text-xs-center"><v-btn color="accent">submit</v-btn></div>
            </v-form>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'Signup', 
        data() {
            return {
                
            };
        }
    };
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Krub');

.container {
  max-width: 900px;
}
#signup{
    font-family: 'Krub', sans-serif;
}
</style>


