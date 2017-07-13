<template>
    <div>
        <div class="left fl">
            <ul>
                <li><router-link to="/jigou/jwc">教务处领导</router-link></li>
                <li><a href="#">综合科</a></li>
                <li><a href="#">教务科</a></li>
                <li><a href="#">学籍科</a></li>
                <li><a href="#">考务科</a></li>
                <li><a href="#">教学质量
                监控科</a></li>
                <li><a href="#">实践教学科</a></li>
                <li><a href="#">教学研究与评估中心</a></li>
                <li><a href="#">教师教学发展中心</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {

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