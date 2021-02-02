<template>
  <div>
    <el-table
        :data="weaponAbility"
        style="width: 100%">
      <el-table-column
          prop="name"
          label="能力名"
          width="150">
        <template slot-scope="scope">
          <img src="https://image.swiki.jp/img1/?host=pso2&page=%E7%94%BB%E5%83%8F%E7%BD%AE%E5%A0%B4&src=%E6%BD%9C%E5%9C%A8%E8%83%BD%E5%8A%9B.png" style="vertical-align:middle" />
          {{scope.row.name}}
        </template>
      </el-table-column>
      <el-table-column
          prop="effect"
          label="效果"
          width="350">
        <template slot-scope="scope">
          <div class="wep-box">
            <div v-for="cur in scope.row.effect.split('/')">
              {{cur}}
            </div>
          </div>
        </template>

      </el-table-column>
      <el-table-column
          prop="data"
          label="适用武器">
        <template slot-scope="scope">
          <div v-for="cur in scope.row.data.list.length" class="wep-box">
            <img :src="scope.row.data.img[cur-1]" style="vertical-align:middle" />
            <span >{{scope.row.data.list[cur-1]}}</span>
          </div>
        </template>

      </el-table-column>
    </el-table>
<!--    <div v-for="item in weaponAbility" style="padding: 20px; border: #d77494 3px solid;border-bottom: #d77494 1px solid;">-->
<!--      <el-row :gutter="20">-->
<!--        <el-col :span="3">-->
<!--          <div class="wep-box">-->
<!--            {{item.name}}-->
<!--          </div>-->
<!--        </el-col>-->
<!--        <el-col :span="2"></el-col>-->
<!--        <el-col :span="10">-->
<!--          <div class="wep-box">-->
<!--            {{item.effect.split('/')[0]}} <br/> {{item.effect.split('/')[1]}}-->
<!--          </div>-->
<!--        </el-col>-->
<!--        <el-col :span="2"></el-col>-->
<!--        <el-col :span="8">-->
<!--          <div v-for="cur in item.list.length" class="wep-box">-->
<!--            <img :src="item.img[cur-1]" style="vertical-align:middle" />-->
<!--            <span >{{item.list[cur-1]}}</span>-->
<!--          </div>-->
<!--        </el-col>-->
<!--      </el-row>-->
<!--    </div>-->

  </div>
</template>

<script>
import {ngsParams} from "../../js/ngs";
export default {
  name: "com-old-weapon",
  data:function (){
    return {
      weaponAbility:ngsParams().weaponAbility
    }
  },
  mounted(){

  },
  methods:{

  }
}
</script>

<style scoped>
  .wep-box{
    min-height: 50px;
  }
</style>
