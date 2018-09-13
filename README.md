# vue-demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



ChangeBoxArea.vue
```
<template>
    <div class="panel panel-default">
      <div class="panel-heading clearfix">
        <div class="pull-left">
          <div class="checkbox">
              <label>
                <input :disabled="data.length === 0" type="checkbox" @click="toggleAll()" :checked="selectedAllStatus"><span>{{title}}</span>
              </label>
          </div>
        </div>
        <span class="pull-right">{{selectItemNumber}}/{{data.length}}</span>
      </div>
      <div class="panel-body">
        <ul>
          <li v-for="item in data" :key="item.id">
             <div class="checkbox">
              <label>
                <input type="checkbox" v-model="item.isSelected"> {{item.name}}
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
export default {
  name: "ChangeBox",
  props: ["title", "data"],
  computed: {
    // 选择的数量
    selectItemNumber() {
      return this.data.filter(item => item.isSelected).length;
    },
    // 全选状态
    selectedAllStatus() {
      if (
        this.selectItemNumber === this.data.length &&
        this.selectItemNumber !== 0
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    // 全选及反选
    toggleAll() {
      let len = this.data.length;
      let slen = this.data.filter(item => item.isSelected).length;
      if (len !== slen) {
        this.data.map(item => (item.isSelected = true));
      } else {
        this.data.map(item => (item.isSelected = false));
      }
    }
  }
};
</script>
<style scoped>
ul {
  list-style: none;
  padding: 0;
}
.checkbox {
  margin: 0;
}
</style>
```

ChangeBox.vue
```
<template>
 <div class="container">
   <div class="row">
        <div class="col-md-5">
          <change-box-area :title="sourceTitle" :data="sourceList"></change-box-area>
        </div>
        <div class="col-md-2 text-center">
            <p><button :disabled="sourceList.length === 0 || sourceRefNum === 0" class="btn btn-primary" @click="toTarget()">》</button></p>
            <p><button :disabled="targetList.length === 0 || targetRefNum === 0" class="btn btn-primary" @click="toSource()">《</button></p>
        </div>
        <div class="col-md-5">
          <change-box-area :title="targetTitle" :data="targetList"></change-box-area>
        </div>
   </div>
 </div>
</template>
<script>
import ChangeBoxArea from "./ChangeBoxArea";
// 这里的 isSeleted 属性可以不用添加，可以在 JS 中进行处理，一般情况下后端返回的数据也不会带有类似这种静态状态的属性
let dataList = [
  { id: 1, name: "HTML5", isSelected: false },
  { id: 2, name: "CSS3", isSelected: false },
  { id: 3, name: "Angular", isSelected: false },
  { id: 4, name: "Vue", isSelected: false },
  { id: 5, name: "Linux", isSelected: false },
  { id: 6, name: "JavaScript", isSelected: false }
];
export default {
  components: {
    ChangeBoxArea
  },
  name: "ChangeBox",
  data() {
    return {
      sourceTitle: "请选择",
      targetTitle: "已选择",
      sourceList: dataList,
      targetList: []
    };
  },
  methods: {
    exchange(fd, td) {
      let selectedItem = fd.filter(item => item.isSelected).map(item => {
        return {
          ...item,
          isSelected: false
        };
      });
      td.push(...selectedItem);
      return fd.filter(item => !item.isSelected);
    },
    // 把选择数据转移到目标（右框）
    toTarget() {
      this.sourceList = this.exchange(this.sourceList, this.targetList);
    },
    // 把选择数据转回到源（左框）
    toSource() {
      this.targetList = this.exchange(this.targetList, this.sourceList);
    }
  },
  computed: {
    // 源数据中选中的数量
    sourceRefNum() {
      return this.sourceList.filter(item => item.isSelected).length;
    },
    // 目标数据中选中的数量
    targetRefNum() {
      return this.targetList.filter(item => item.isSelected).length;
      //   <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css">
    }
  }
};
</script>
```

<link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css">
  
  http://yunkus.com/vue-functional-module-time-shuttle-box/
