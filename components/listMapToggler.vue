<template>
    <div class="row justify-content-md-end justify-content-center">
                <button v-if="this.listOrMap === 'list'" class="col-sm-2 col-md-1 col-2 rounded-end rounded-5 border-0 text-bg-dark">list</button>
                <button v-if="this.listOrMap === 'list'" @click="changeListToMap"  class="col-sm-2 col-md-1 col-2 rounded-start rounded-5 border-0">map</button>
                <button v-if="this.listOrMap === 'map'" @click="changeMapToList" class="col-sm-2 col-md-1 col-2 rounded-end rounded-5 border-0">list</button>
                <button v-if="this.listOrMap === 'map'" class="col-sm-2 col-md-1 col-2 rounded-start rounded-5 border-0 text-bg-dark">map</button>
            </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex';

export default {
    name: "listMapToggler",
    
    computed: mapState(['listOrMap']),
    methods: {
        ...mapMutations(['listToMapToggle', 'mapToListToggle']),
        
        changeListToMap(){
            this.listToMapToggle()
        },
        changeMapToList(){
            this.mapToListToggle()
        }
    }
}
</script>