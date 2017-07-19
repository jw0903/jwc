<template>
    <div>
        <jgxjk :JG="JG"></jgxjk>
    </div>
</template>

<script>
    import jgxjk from './JGdemo.vue';
    export default {
        data () {
            return {
                JG:{}
            }
        },
        components: {
            jgxjk
        },
        created () {
            this.$http.get('/api/JGxjk')
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
