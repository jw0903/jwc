<template>
    <div>
        <left v-if="show" :isShow="show" @hidden="hidden"></left>
        <router-view>
        </router-view>
        <div class="right fr">
            <input type="text" placeholder="全站搜索"/>
            <ul>
                <li @click="hidden"><router-link to="/jigou/jwc" >教务处领导</router-link></li>
                <li @click="hidden"><router-link to="/jigou/zhk">综合科</router-link></li>
                <li @click="hidden"><router-link to="/jigou/jwk">教务科</router-link></li>
                <li @click="hidden"><router-link to="/jigou/xjk">学籍科</router-link></li>
                <li @click="hidden"><router-link to="/jigou/kwk">考务科</router-link></li>
                <li @click="hidden"><router-link to="/jigou/jxz">教学质量监控科</router-link></li>
                <li @click="hidden"><router-link to="/jigou/sjk">实践教学科</router-link></li>
                <li @click="hidden"><router-link to="/jigou/jxy">教学研究与评估中心</router-link></li>
                <li @click="hidden"><router-link to="/jigou/jsj">教师教学发展中心</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import left from './left.vue'
    export  default {
        components:{
            left
        },
        data () {
            return {
                ktype:[],
                show: true,
            }
        },
        computed: {
        },
        created () {
            this.$http.get('/api/ktype')
            .then((res) => {
                this.ktype = res.data;
            }, (err) => {
                console.log(err);
            })  
        },
        methods: {
            hidden () {
              this.show = false;
            }
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
        padding-left: 5px;
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