---
title: S级特殊能力
date: 2021-1-26
sidebar: true
categories:
 - pso2
tags:
 - pso2
---

<style scoped>
ul li {

  margin: 0;
  padding: 0;
  list-style: none;
}

.tab-tilte{
  width: 90%;
}
.tab-tilte li{
  float: left;
  width: 10%;
  padding: 10px 0;
  text-align: center;
  background-color:#f4f4f4;
  cursor: pointer;
}
/* 点击对应的标题添加对应的背景颜色 */
.tab-tilte .active{
  background-color: #09f;
  color: #fff;
}
.tab-content {
  display: inline;
}

.tab-content div{
  width: 75%;
  line-height: 100px;
  text-align: center;
}
</style>

  <ul class="tab-tilte">
    <li v-for="item in items" @click="cur=item" :class="{active:cur.code===item.code}">S{{item.code + 1}}</li>    
  </ul>
  <div class="tab-content">
    <div v-for="item in cur.data">{{item.name}}</div>
  </div>
  
  <script>
  export default {
    name: "sop",
    data: function () {
      return {
        cur:{
            code:0,
            data: [
                {
                name:'s1:sdad',
                effect:'adwawd'
                },{
                name:'s1:sdad2',
                effect:'adwawd'
                }
            ],
        },
        items:[
            {
                code:0,
                data: ['S1DATA'],
            },{
                code:1,
                data: ['S2DATA'],
            },{
                code:2,
                data: ['S3DATA'],
            },{
                code:3,
                data: ['S4DATA'],
            },{
                code:4,
                data: ['S5DATA'],
            },{
                code:5,
                data: ['S6DATA'],
            },{
                code:6,
                data: ['S7DATA'],
            },{
                code:7,
                data: ['S8DATA'],
            },
          ]
      }
    }
  }
  </script>

