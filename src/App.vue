<template>
  <div id="app" :style="{backgroundImage: 'url(' + bg1 + ')'}">
    <div id="box" class="w1000 mc">
      <div class="header" :style="{backgroundImage: 'url(' + bg2 + ')'}">
        <img class="logo_img" src="./img/logo.png" height="81" width="446" alt="logo图片" />
        <img class="head_img" src="./img/head_bg.png" alt="head照片" />
      </div>
      <div class="nav w100p mc clear">
              <ul>
                  <router-link to='/'><li>首页</li></router-link>
                  <router-link to='/jigou'><li>机构设置</li></router-link>
                  <router-link to='/major'><li>专业设置</li></router-link>
                  <router-link to='/guanli'><li>管理文件</li></router-link>
                  <router-link to='/banshi'><li>办事指南</li></router-link>
                  <router-link to='/ziliao'><li>资料下载</li></router-link>
                  <router-link to='/jiaowu'><li>教务处邮箱</li></router-link>
              </ul>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
      <div class="footer clear">
        <!-- <p>华南农业大学首页</p> -->
        <router-link to='/'>华南农业大学首页</router-link>
        <p>华南农业大学行政办公楼三楼 广州市天河区五山路483号 510642</p>
        <p>华南农业大学教务处 版权所有</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bg1: require('./img/bg1.jpg'),
      bg2: require('./img/bg2.jpg')
    }
  }
}
</script>

<style>
html{color:#000;background:#fff;}
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,input,button,textarea,p,blockquote,th{margin:0;padding:0; font-family:"微软雅黑";}
body{font:12px/1 Tahoma,Helvetica,Arial,"\5b8b\4f53",sans-serif;}
img{border:none;}
em,strong{font-style:normal;font-weight:normal;}
ul,li,h1,p{ background:none;}
li{list-style:none;}
table {border-collapse:collapse;border-spacing:0;}
h1{font-size:18px;}
h2{font-size:16px;}
h3{font-size:14px;}
h4, h5, h6{font-size:100%;}
q:before,q:after{content:'';}/* 消除q前后的内容 */
button,input,select,textarea{font-size:100%;}/* 使得表单元素在 ie 下能继承字体大小 */
input,button,textarea,select,optgroup,option{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;}
address,cite,dfn,em,var{font-style:normal;} /* 将斜体扶正 */
/* link */
a{color:#333;text-decoration:none;}
article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary {display: block;}
.clear{ clear:both;}
/*common*/
.fl{ float:left;}
.fr{ float:right;}
.clear{ clear:both;}
.mc{ margin:0 auto;}
.show{ display:block;}
.hide{ display:none;}

.w100p{ width:100%;}
.w1000{ width:1000px;}
.border{ border:1px solid #d9d9d9;}
.w242{ width:242px;}
.w736{ width:736px;}
.w490{ width:490px;}

body{
    /*background-image: url(bg1.jpg);*/
    background-repeat: repeat-x;
    background-position:top center;
}
#box{
    min-height: 700px;
    /*background-image: url(bg2.jpg);*/
    background-repeat: repeat-x;
    background-position:bottom center;
}
#box .header{
    min-height: 170px;
    position: relative;
}
/*.header .logo_img{
  position: absolute;
  left:0;
}*/
.header .head_img{
  position: absolute;
  right:0;
}
.nav {
    height: 48px;
    background-color: #087945;
    border-radius: 8px;
}
.nav ul a{
    float: left;
    line-height: 48px;
    height: 48px;
    text-align: center;
    padding:0 42px;
    font-size: 15px;
    box-sizing: border-box;
}
.nav ul a:hover{
    background-color:#065d35;
    cursor: pointer;
}
.nav ul a:first-child:hover{
    border-top-left-radius: 8px;
    border-bottom-left-radius:8px;
}
.nav ul a:last-child{
    padding:0 45px;
}
.nav ul a:last-child:hover{
    border-top-right-radius:8px;
    border-bottom-right-radius:8px;
}
.nav ul li{
    color: #fff;
}
.content{
  min-height: 400px;
}

.footer{
    text-align: center;
    fong-family:'微软雅黑';
    font-size: 13px;
    padding-top:20px;
    padding-bottom:30px;
}
.footer p{
    margin-top:10px;
    color: #808080;
}
.footer a{
    margin-top:20px;
}

</style>
