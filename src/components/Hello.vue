<template>
  <div class="hello">
    <div class="content">
                <div class="contop">
                    <div class="left fl">
                        <div class="title">
                            <h3>教务系统登陆入口</h3>
                            <a href="#">教师专用入口</a>
                        </div>
                        <input type="text" placeholder="用户名"/>
                        <input type="text" />
                        <input type="text" placeholder="验证码" />
                        <span><a href="#">看不清换一张</a></span>
                        <div class="radio">
                            <input name="sel" type="radio"/>
                            <label>部门</label>
                            <input name="sel" type="radio"/>
                            <label>教师</label>
                            <input name="sel" type="radio"/>
                            <label>学生</label>
                            <input name="sel" type="radio"/>
                            <label>访客</label>
                        </div>
                        <div class="btn">
                            <input type="button" value="登录" />
                            <input type="button" value="重置" />
                        </div>
                    </div>
                    <div class="mid fl">
                        <div class="title">
                            <h3>教务公告</h3>
                            <a href="#">更多</a>
                        </div>
                        <ul>
                            <li v-for="item in article"><a href="#">{{ item.type }}</a> <a href="#">{{ item.title }}</a> <span>{{ item.date }}</span></li>
                        </ul>
                    </div>
                    <div class="right fl">
                        <div class="title">
                            <h3>办事指南</h3>
                            <a href="#">更多</a>
                        </div>
                        <ul>
                            <li class="fl" v-for="item in banshi"><a href="#">{{ item }}</a></li>
                        </ul>                        
                    </div>
                </div>
                <div class="condown">
                    <div class="left fl">
                        <div class="title">
                            <h3>本学期第20个教学周</h3>
                        </div>
                    </div>
                    <div class="mid fl">
                        <div class="title">
                            <h3>教务新闻</h3>
                            <a href="#">更多</a>
                        </div>
                        <ul>
                            <li v-for="item in jiaowu"><a href="#">{{ item.title }}</a><span>{{ item.date }}</span></li>
                        </ul>
                    </div>
                    <div class="right fl">
                        <div class="title">
                            <h3>相关链接</h3>
                        </div>
                        <ul>
                            <li v-for="item in lianjie" :key="item.index"><a href="#">{{ item }}</a></li>                        </ul>
                    </div>
                </div>
            </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
        article:[],
        banshi:[],
        jiaowu:[],
        lianjie:[]
    }
  },
  created: function() {
    this.$http.get('api/article')
    .then((res) => {
        this.article = res.data;
    }, (err) => {
        console.log(err);
    });
    this.$http.get('api/banshi')
    .then((res) => {
        this.banshi = res.data;
    }, (err) => {
        console.log(err);
    });
    this.$http.get('api/jiaowu')
    .then((res) => {
        this.jiaowu = res.data;
    }, (err) => {
        console.log(err);
    });
    this.$http.get('api/lianjie')
    .then((res) => {
        this.lianjie = res.data;
    }, (err) => {
        console.log(err);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
    width: 100%;
    min-height: 660px;
}
.content .contop{
    width:100%;
    height:310px;
    margin:10px 0;
}
.content .contop .left,.content .contop .right{
    height: 310px;
    width: 242px;
}
.content .contop .mid{
    height: 310px;
    width:490px;
    margin:0 10px;
}
.content .condown .left,.content .condown .right{
    height: 340px;
    width: 242px;
}
.content .condown .mid{
    height: 340px;
    width: 490px;
    margin:0 10px;
}
.content .contop .left,
.content .contop .right,
.content .contop .mid,
.content .condown .left,
.content .condown .right,
.content .condown .mid{
    border: 1px solid #d9d9d9;
    background-color: #fff;
}
.content .title{
    height: 30px;
    background-color:#FFCD9E;
    color:#2620F5;
    position: relative;
    padding-top: 13px;
}
.content .title h3{
    font-size: 16px;
    font-family: "微软雅黑";
    font-weight: normal;
    border-left: 4px solid #2620f5;
    /*line-height: 43px;*/
    padding-left:10px;
}
.content .title a{
    color:#ff0000;
    position: absolute;
    top: 16px;
    right:10px;
}
.content .title a:hover{
    text-decoration: underline;
}
.left input{
    height: 34px;
    width:215px;
    padding-left:10px;
    margin-left: 8px;
    margin-top: 10px
}
.left input:nth-child(2){
    margin-top:15px;
}
.left input:nth-child(4){
    width:120px;
}
.radio{
    width: 242px;
}
.radio input{
    width:15px;
    height: 48px;
    vertical-align:middle; 
    margin-bottom:10px;
}
.btn{
    padding:0;
    margin-top:-20px;
    border-top-style:none;
    border-bottom-style:none;
    border-right-style:none;
    border-left-style:none;
}
.btn input{
    width:104px;
    height: 32px;
    padding: auto;
    background-color:#5358Ed;
    border:0;
    color:#fff;
    text-align: center;
}
.btn input:hover{
    background-color:#2620F5;
}

.mid ul {
    padding-top:18px;
}
.mid ul li {
    font-size: 14px;
    padding-left:14px;
    margin-bottom:14px;
}
.mid ul li a:hover{
    text-decoration:underline;
}
.mid ul li span{
    position: relative;
    left: 90px;
    color:#737373;
}

.contop .right ul li{
    height: 35px;
    width:104px;
    background-color: #f3f3f3;
    border-radius:4px;
    margin-left: 14px;
    margin-top: 8px;
    text-align: center;
    padding:auto;
}
.contop .right ul li:hover{
    background-color:#e8e8e8;
}
.contop .right ul li a{
    font-size: 14px;
    line-height: 35px;
}

.condown .right ul {

}
.condown .right ul li{
    height: 27px;
    width:190px;
    background-color: #f3f3f3;
    border-radius:4px;
    margin-left: 16px;
    margin-top: 9px;
    text-align: center;
}
.condown .right ul li a{
    font-size: 13px;
    text-align: center;
    line-height: 27px;
}
.condown .right ul li:hover{
    background-color: #e8e8e8;
}
</style>
