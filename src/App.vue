<template>
    <div>
        <!--app-{{$store.state.count}}-{{$store.getters.getCount}}
        <button @click="clickEvent">commit</button>
        <button @click="clickEvent2">dispatch</button>-->
    </div>
</template>

<script>
    export default {
        name: "App",
        methods: {
            /*clickEvent() {
                this.$store.commit('increment')
            },
            clickEvent2() {
                this.$store.dispatch('incrementAsync')
            }*/
        },
        mounted() {
            console.log('gsdApp', this.$store)
        }
    }
</script>

<style scoped>

</style>
