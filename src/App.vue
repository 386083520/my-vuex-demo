<template>
    <div>
        app-{{$store.state.gadVal}}-{{$store.state.count}} -{{$store.getters.getCount}}
        <button @click="clickEvent">commit</button>
        <!--<button @click="clickEvent2">dispatch</button>-->
        <child></child>
    </div>
</template>

<script>
    import Child from "./Child";
    export default {
        name: "App",
        components: {Child},
        methods: {
            clickEvent() {
                this.$store.state.gadVal += 10
            },
            /*clickEvent2() {
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
