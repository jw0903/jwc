<template>
    <div>
        <div class="left fl">
            <div class="title">办事管理</div>
        </div>
        <div class="right fr">
            <input type="text" placeholder="全站搜索"/>
        </div>
    </div>
</template>

<script>
    export  default {
        
    }
</script>

<style scoped>
    .left{
        width: 738px;
        background-color:#fff;
        margin-top:68px;
        border:1px solid #d9d9d9;
        border-top:2px solid #1EABDA;
    }
    .left .title{
        height: 52px;
        line-height: 52px;
        padding-left:70px;
        font-size: 18px;
        color: #565656;
        background: linear-gradient(to bottom, #fff,#f3f3f3);
    }
    .right{
        margin-top: 68px;
        background-color: #fff;
    }
    .right input{
        width: 232px;
        height: 34px;
        border: 2px solid #ddd;
        padding-left: 10px;
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
        padding:20px 0 20px 20px;
        line-height: 20px;
    }
    .right ul li:first-child{
        border-top:4px solid #0da4d5;
    }
    .right ul li:hover{
        text-decoration: underline;
    }
</style>