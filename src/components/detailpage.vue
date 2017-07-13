<template>
    <div>
        <div class="detail fl">
            <div class="title">
                <h1>教务处领导</h1>
            </div>
            <ul>
                <li v-for="item in jiaodao">
                    <span>{{ item.title }}</span>
                    <span>{{ item.work }}</span>
                    <p>{{ item.phone }}</p>
                    <p>{{ item.place }}</p>
                </li>
               <!--  <li>
                    <span>处长：张永亮</span>
                    <span>主持全处工作，分管综合科、教学研究与评估中心。联系农学院、海洋学院、工程学院、食品学院、经济管理学院、公共管理学院。</span>
                    <p>联系电话：020-85285931</p>
                    <p>办公地点：行政楼322室</p>
                </li>
                <li>
                    <span>处长：张永亮</span>
                    <span>主持全处工作，分管综合科、教学研究与评估中心。联系农学院、海洋学院、工程学院、食品学院、经济管理学院、公共管理学院。</span>
                    <p>联系电话：020-85285931</p>
                    <p>办公地点：行政楼322室</p>
                </li>
                <li>
                    <span>处长：张永亮</span>
                    <span>主持全处工作，分管综合科、教学研究与评估中心。联系农学院、海洋学院、工程学院、食品学院、经济管理学院、公共管理学院。</span>
                    <p>联系电话：020-85285931</p>
                    <p>办公地点：行政楼322室</p>
                </li>
                <li>
                    <span>处长：张永亮</span>
                    <span>主持全处工作，分管综合科、教学研究与评估中心。联系农学院、海洋学院、工程学院、食品学院、经济管理学院、公共管理学院。</span>
                    <p>联系电话：020-85285931</p>
                    <p>办公地点：行政楼322室</p>
                </li> -->
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                jiaodao:{}
            }
        },
        created () {
            this.$http.get('/api/jwc')
            .then((res) => {
                this.jiaodao = res.data;
            },(err) => {
                console.log(err);
            })
        }
    }
</script>

<style scoped>
    .detail{
        width: 738px;
        background-color:#fff;
        margin-top:68px;
        padding-top:43px;
        border:1px solid #d9d9d9;
    }
    .detail .title{
        margin:0 auto;
        padding-bottom:40px;
        width:650px;
        border-bottom:1px dashed #e5e5e5;
    }
    .detail .title h1{
        font-weight: normal;
        font-size: 18px;
        color:#343434;
        text-align: center;
    }
    .detail ul{
        padding-left: 50px;
        margin-bottom:40px;
    }
    .detail ul li{
        width:550px;
        padding: 40px 50px 0 50px;
        font-size: 13px;
        line-height: 25px;
    }
    ul li:last-child{
        padding-bottom:60px;
        border-bottom:1px dashed #e5e5e5;
    }
    li span:nth-child(1){
        font-size: 19px;
        font-weight: bold;
        font-family: 楷体_GB2312;
    }
    li span:nth-child(2){
        font-size: 18px;
        font-family: 楷体;
        text-align: left;
    }
    li p:nth-child(3) {
        padding-top:40px;
    }
    li p:nth-child(3),li p:nth-child(4){
        font-weight: normal;
        font-size: 19px;
        font-family: 楷体;
        padding-left:285px;
    }


</style>
