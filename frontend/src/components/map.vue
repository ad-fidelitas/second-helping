<template>
    <div class="map">
        <div class="google-map" ref="map"></div>
    </div>

</template>
<script>
export default {
    // name: 'map', 
    data(){
        return {
            lat: 53, 
            lng: -2
        }
    }, 
    methods: {
        renderMap(){
            console.log(this.$refs.map)
            const map = new google.maps.Map(this.$refs.map, {
                center: {lat: this.lat, lng: this.lng},
                zoom: 6, 
                maxZoom: 15, 
                minZoom: 3, 
                streetViewControl: false, 

            })
        }
    }, 
    mounted(){
        this.renderMap()
        
    }
}
</script>
  
<style>
.google-map{
    width: 100%; 
    height: 100%; 
    margin: 0 auto; 
    background: #fff; 
    position: absolute; 
    top: 0; 
    left: 0; 
    /* z-index: -1;  */
}
</style>
