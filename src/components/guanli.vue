<template>
    <div>
        <div class="left fl">
            <ul>
                <li><a href="#">教育部/教育厅文件</a></li>
                <li><a href="#">教务/教材管理</a></li>
                <li><a href="#">学籍管理</a></li>
                <li><a href="#">考务管理</a></li>
                <li><a href="#">教学质量监控</a></li>
                <li><a href="#">实践教学管理</a></li>
                <li><a href="#">教学研究与评估</a></li>
                <li><a href="#">教学研究与评估中心</a></li>
                <li><a href="#">教学观摩/双鱼教学管理</a></li>
            </ul>
        </div>
        <div class="right fr">
            <input type="text" placeholder="全站搜索"/>
            <ul>
                <li><a href="#">教育部/教育厅文件</a></li>
                <li><a href="#">教务/教材管理</a></li>
                <li><a href="#">学籍管理</a></li>
                <li><a href="#">考务管理</a></li>
                <li><a href="#">教学质量监控</a></li>
                <li><a href="#">实践教学管理</a></li>
                <li><a href="#">教学研究与评估</a></li>
                <li><a href="#">教学研究与评估中心</a></li>
                <li><a href="#">教学观摩/双鱼教学管理</a></li>
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