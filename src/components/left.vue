<template>
    <div>
        <div class="left fl">
            <ul>
                <li @click="hidden"><router-link to="/jigou/jwc">教务处领导</router-link></li>
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
    export default {
        props: {
            isShow:{
                type:Boolean,
                default:true
            }
        },
        methods: {
            hidden () {
                this.$emit('hidden');
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
</style>