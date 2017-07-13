<template>
    <div>
        <router-view>
        <left v-if="!show"></left>
        </router-view>
        <div class="right fr">
            <input type="text" placeholder="全站搜索"/>
            <ul>
                <li><router-link to="/jigou/jwc">教务处领导</router-link></li>
                <li>综合科</li>
                <li>教务科</li>
                <li>学籍科</li>
                <li>考务科</li>
                <li>教学质量监控科</li>
                <li>实践教学科</li>
                <li>教学研究与评估中心</li>
                <li>教师教学发展中心</li>
            </ul>
        </div>
    </div>
</template>

<script>
    var pattern = /jigou\//
    import left from './left.vue'
    export  default {
        components:{
            left
        },
        data () {
            return {
                ktype:[],
                show:true
            }
        },
        created () {
            this.$http.get('/api/ktype')
            .then((res) => {
                this.ktype = res.data;
            }, (err) => {
                console.log(err);
            })
            this.show = pattern.test(window.location.pathname)
            console.log(this.show);
        }
    }
</script>

<style scoped>
    .left{
        width: 738px;
        background-color:#fff;
        margin-top:68px;
        border:1px solid #d9d9d9;
    }
    .left ul{
        padding: 50px;
    }
    .left ul li{
        font-size: 13px;
        line-height: 25px;
        list-style-type: disc;
    }
    .left ul li a:hover{
        text-decoration:underline;
    }
    .right{
        min-height: 400px;
        margin-top: 68px;
        background-color: #fff;
    }
    .right input{
        width: 242px;
        height: 34px;
        border: 2px solid #ddd;
    }
    .right ul{
        margin-top: 10px;
        width: 242px;
        border-left:2px solid #ddd;
        border-right:2px solid #ddd;
        border-bottom:2px solid #ddd;
    }
    .right ul li {
        width: 222px;
        height: 40px;
        padding-left: 20px;
        line-height: 40px;
        border-top: 1px solid #f1f1f1;
    }
    .right ul li:first-child{
        border-top:4px solid #0da4d5;
    }
    .right ul li:hover{
        background-color: #f1f1f1
    }
</style>