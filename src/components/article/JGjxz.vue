<template>
    <div>
        <jgzhk :JG="JG"></jgzhk>
    </div>
</template>

<script>
    import jgzhk from './JGdemo.vue';
    export default {
        data () {
            return {
                JG:{}
            }
        },
        components: {
            jgzhk
        },
        created () {
            this.$http.get('/api/JGzhk')
            .then((res) => {
                this.JG = res.data;
            }, (err) => {
                console.log(err);
            })
        }
    }
</script>

<style scoped>
</style>
