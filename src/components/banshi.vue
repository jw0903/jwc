<template>
    <div>
        <div class="left fl">
            <div class="title">办事管理</div>
            <ul>
                <li>
                    <table>
                        <tr>
                            <td>学籍科:</td>
                            <td>
                                <span>注册</span>
                                <span>退学</span>
                                <span>休学</span>
                                <span>复学</span>
                                <span>转专业</span>
                                <span>转专业</span>
                                <span>转专业</span>
                                <span>保留/恢复入学资格</span>
                                <span>保留/恢复入学资格</span>
                                <span>保留/恢复入学资格</span>
                                <span>保留/恢复入学资格</span>
                                <span>保留/恢复入学资格</span>
                                <span>保留/恢复入学资格</span>
                                <span>保留/恢复入学资格</span>
                                <span>保留/恢复入学资格</span>
                                <span>保留/恢复入学资格</span>
                                <span>保留/恢复入学资格</span>
                                <span>保留/恢复入学资格</span>
                                <span>保留/恢复入学资格</span>
                            </td>
                        </tr>
                        <tr>
                            <td>教务科:</td>
                            <td>
                                <span>选课</span>
                                <span>借课室</span>
                                <span>调停课</span>
                            </td>
                        </tr>
                        <tr>
                            <td>考务科:</td>
                            <td>
                                <span>缓考</span>
                                <span>重修</span>
                                <span>提前考试申请提前考试申请</span>
                            </td>
                        </tr>
                        <tr>
                            <td>实践教学科:</td>
                            <td>
                                <span>实习经费申请</span>
                                <span>实践教学基地申报</span>
                            </td>
                        </tr>
                        <tr>
                            <td>教学质量监控科:</td>
                            <td>
                                <span>开具学生评教结果证明</span>
                                <span>教学差错与教学事故处理流程</span>
                                <span>教学差错与教学事故处理流程</span>
                                <span>学生信息反馈流程</span>
                            </td>
                        </tr>
                    </table>
                </li>
            </ul>
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
        color: #40ABDD;
        background: linear-gradient(to bottom, #fff,#f3f3f3);
    }
    .left ul{
        padding:20px;
        margin: 0 auto;
    }
    .left ul li{
        padding:24px 0;
    }
    .left ul li table{
        border-collapse:collapse;
    }
    .left ul li tr{
        border-collapse:collapse;
    }
    .left ul li tr td:first-child{
        width: 22%;
        min-height: 60px;
        line-height: 60px;
        text-align: center;
        color:#40ABDD;
    }
    .left ul li tr td span{
        display: inline-block;
        height: 30px;
        line-height: 30px;
        min-width: 50px;
        padding:0px 20px;
        margin:5px;
        background-color: #f3f3f3;
        font-size: 13px;
        border-radius:8px;
        text-align: center;
    }
    .left ul li tr td span:hover{
        background-color: #1eabda;
        color:#fff;
    }
    .right{
        margin-top: 68px;
        background-color: #fff;
    }
    .right input{
        width: 232px;
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