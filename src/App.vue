<template>
    <div>
        app-{{$store.state.gadVal}}-{{$store.state.count}} -{{$store.getters.getCount}}
        <!--<div>
            app-{{$store.getters['a/getCount']}}
        </div>-->
        <div>
            app-{{$store.state.a.b.count}}
        </div>
        <button @click="clickEvent">commit</button>
        <button @click="clickEvent2">dispatch</button>
        <button @click="clickEvent3">event</button>
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
            clickEvent2() {
                this.$store.dispatch('a/incrementAsync')
            },
            clickEvent3() {
                //this.$store.commit('a/increment')
                console.log(this.$store.getters['a/getCount3'])
            }
        },
        mounted() {
            console.log('gsdApp', this.$store)
        }
    }
</script>

<style scoped>

</style>
