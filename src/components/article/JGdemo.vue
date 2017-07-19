<template>
    <div>
        <div class="detail fl">
            <div class="title">
                <h1>{{ JG.title }}</h1>
            </div>
            <div class="detail_main">
                <div class="job">
                    <p>工作职责</p>
                    <hr />
                    <p v-for="item in JG.job"><span>{{ item }}</span></p>
                </div>
                <div class="person">
                    <p>工作人员</p>
                    <hr />
                    <p><span v-for="item in JG.person">{{ item }}</span></p>
                </div>
                <div class="contact">
                    <span>联系方式:</span><span>{{ JG.contact[0] }}</span><span>办公地点：</span><span>{{ JG.contact[1] }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            JG: {}
        }
        // data () {
        //     return {
        //         zhk:{}
        //     }
        // },
        // created () {
        //     this.$http.get('/api/JGzhk')
        //     .then((res) => {
        //         this.zhk = res.data;
        //     },(err) => {
        //         console.log(err);
        //     })
        // }
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
    .detail_main{
        margin:0 auto;
        width:650px;
        padding:35px 50px;
        margin-bottom:40px;
        border-bottom: 1px dashed #e5e5e5;
    }
    .detail_main p{
        width:650px;
        /*padding: 40px 50px 0 50px;*/
        font-size: 18px;
        line-height: 27px;
        font-family: 楷体,楷体_GB2312, SimKai;
        /*font-weight: bold;*/
        color: #000;
    }
    .job p:first-child,.person p:first-child{
        line-height: 30px;
        margin-top:10px;
        margin-bottom: 10px;
        font-weight:bold;
    }
    .job p span,.person p span{
        font-family: 楷体,楷体_GB2312, SimKai;
        font-size: 18px;
        color:#333;
    }
    .person p span{
        padding-left:20px;
    }
    .contact{
        margin-top: 20px;
    }
    .contact span:nth-child(odd){
        width:550px;
        /*padding: 40px 50px 0 50px;*/
        font-size: 18px;
        line-height: 27px;
        font-family: 楷体,楷体_GB2312;
        color: #000;
        font-weight: bold;
    }
    .contact span:nth-child(even) {
        font-size: 18px;
        font-family: "微软雅黑";
        color:#333;
        padding-right: 10px;
    }
</style>
