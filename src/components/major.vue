<template>
    <div>
        <div class="left fl">
            <ul>
                <li><a href="#">华南农业大学本科专业设置（2017年4月更新）</a><span class="fr">[2017-07-06]</span></li>
            </ul>
        </div>
        <div class="right fr">
            <input type="text" placeholder="全站搜索"/>
            <ul>
                <li>华南农业大学本科专业设置（2017年4月更新）</li>
            </ul>
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
    .left ul li span{
        color:#737373;
    }
    .right{
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