<template>
    <jgjwk :JG="JG"></jgjwk>
</template>

<script>
    import jgjwk from './JGdemo.vue'
    export default {
        data () {
            return {
                JG:{}
            }
        },
        created () {
            this.$http.get('/api/JGjwk')
            .then((res) => {
                this.JG = res.data;
            }, (err) => {
                console.log(err);
            });
        },
        components: {
            jgjwk
        }
    }
</script>