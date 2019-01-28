<template>
     <div id="login">
        <v-container pa-5>
            <v-form>
                <div class="text-xs-center">
                    <h2 class="display-5" pa-5  >Login</h2>
                </div>
                <v-text-field label="Email" prepend-icon="person"></v-text-field>
                <v-text-field label="Password" prepend-icon="lock"></v-text-field>
                <div class="text-xs-center"><v-btn class="accent">submit</v-btn></div>
            </v-form>
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                //
            };
        }
    };
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Krub');

.container {
  max-width: 900px;
}
#login{
    font-family: 'Krub', sans-serif;
}

</style>

