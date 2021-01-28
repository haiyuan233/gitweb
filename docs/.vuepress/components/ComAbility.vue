<template>
  <div>
    <H2>特殊能力一览</H2>
    <div class="tab-content">
      <div class="block">
        <el-row :gutter="20">
          <el-col :span="14">
            <el-cascader
                v-model="value"
                :options="options"
                :props="{ checkStrictly: true }"
                @change="handleChange"
                clearable></el-cascader>
          </el-col>
          <el-col :span="8">
            <el-input v-model="input" placeholder="input ability name"></el-input>
          </el-col>
          <el-col :span="2">
            <el-button  icon="el-icon-search" circle @click="reloadP"></el-button>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="tab-content">
      <el-table
          :data="paramPage"
          stripe
          border style="margin-bottom:14px;"
      >
        <el-table-column property="name" label="OP" align="center" width="200"></el-table-column>
        <el-table-column property="effect" label="效果" align="center"></el-table-column>
      </el-table>
      <div class="paginationClass" v-if="load">
        <el-pagination
            background
            @current-change="changePage"
            layout="prev, pager, next"
            page-size="15"
            :total="total"
        >
        </el-pagination>
      </div>
    </div>
    <div style="margin-top: 50px"></div>
    <H2>能力合成</H2>
    <div class="tab-content2">
      <div class="block2">
        <el-row :gutter="20">
          <el-col :span="14">
            <el-cascader
                v-model="mixValue"
                :options="mixOptions"
                :props="{ checkStrictly: true }"
                @change="handleChange2"
                clearable></el-cascader>
          </el-col>
          <el-col :span="8">
            <el-input v-model="input2" placeholder="input ability name"></el-input>
          </el-col>
          <el-col :span="2">
            <el-button  icon="el-icon-search" circle @click=""></el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import {params} from '/docs/js/param';
export default {
  name: "com-ability",
  data: function () {
    return {
      value: [],
      mixValue: [],
      input:'',
      input2:'',
      options: [{
        value: 'ALL',
        label: 'ALL',
      },{
        value: 'A',
        label: 'ステータス',
        children: [{
          value: 'レッサー',
          label: 'レッサー系',
        },{
          value: 'EV',
          label: 'EV系',
        }]
      },{
        value: 'A+',
        label: 'ステータス(特殊)',
        children: [{
          value: 'マーク',
          label: 'マーク系',
        },{
          value: 'ディバイン',
          label: 'ディバイン系',
        },{
          value: 'ファクター',
          label: 'ファクター系',
        },{
          value: 'レヴリー',
          label: 'レヴリー系',
        },{
          value: 'グレア',
          label: 'グレア系',
        },{
          value: 'アルター',
          label: 'アルター系',
        },{
          value: 'フリクト',
          label: 'フリクト系',
        },{
          value: 'リガンド',
          label: 'リガンド系',
        }]
      },{
        value: 'A++',
        label: 'フレイズ・センテンス系',
        children: [{
          value: 'フレイズ',
          label: 'フレイズ系',
        },{
          value: 'センテンス',
          label: 'センテンス系',
        }]
      },{
        value: 'B',
        label: 'カタリスト・特殊系',
        children: [{
          value: 'カタリスト',
          label: 'カタリスト系',
        }]
      },{
        value: 'C',
        label: 'レセプター系',
      },{
        value: 'D',
        label: 'ソール系',
      },{
        value: 'D+',
        label: 'フィーバー系',
      },{
        value: 'E',
        label: 'レジスト系',
      },{
        value: 'E+',
        label: '状態異常付与',
      },{
        value: 'E++',
        label: '倍率特効',
      },{
        value: 'E+++',
        label: 'ブースト系',
      }],
      mixOptions:[
          {
            value: 'ALL',
            label: 'ALL',
          }
      ],
      param:[],
      paramA:[],
      paramPage:[],
      keyword:[],
      keyword2:[],
      total: 0,
      currentPage:1,
      load:1,
    }
  },
  mounted() {
    this.paramA = params().abilityList
    this.reloadP()
    this.changePage(1)
  },
  methods: {
    handleChange(value) {
      this.keyword = value
      this.reloadP()
      console.log(value);
    },
    handleChange2(value) {
      this.keyword2 = value
      console.log(value);
    },
    reloadP(){
      this.load = 0
      let input = this.input
      this.input = ''
      let that = this
      let keyword = this.keyword
      let dataP = []
      let dataA = []
      let datas = this.paramA
      let count = 1
      let total = 0
      datas.forEach (data =>{
        if (count === 15){
          dataA.push(dataP)
          dataP = []
          count = 1
        }else if(datas[datas.length-1].code === data.code){
          dataA.push(dataP)
        }
        if (keyword.length !== 0){
          if (keyword[0] === data.gid){
            if (keyword.length === 2 && that.fuzzyMatch(data.name,keyword[1]) && (that.fuzzyMatch(data.name,input) || input === '')){

              dataP.push(that.toForm(data))
              total ++
              count ++
            }else if (keyword.length === 1 && (that.fuzzyMatch(data.name,input) || input === '')){
              dataP.push(that.toForm(data))
              total ++
              count ++
            }
          }else if(keyword[0] === 'ALL' && (that.fuzzyMatch(data.name,input) || input === '')) {
            dataP.push(that.toForm(data))
            total ++
            count ++
          }
        }else{
          if (that.fuzzyMatch(data.name,input) || input === ''){
            dataP.push(that.toForm(data))
            total ++
            count ++
          }
        }

      })
      console.log(dataA)
      this.param = dataA
      this.total = total
      this.changePage(1)
      // 分页样式重置
      this.$nextTick(() => {
        this.load = 1
      })
    },
    toForm(data){
      if (data.make !== undefined) {
        let form = {
          code:data.code,
          gid:data.gid,
          name:data.name,
          effect:data.effect,
          make:data.make
        }
        return form
      }else{
        let form = {
          code:data.code,
          gid:data.gid,
          name:data.name,
          effect:data.effect,
          make:''
        }
        return form
      }

    },
    fuzzyMatch(str, key) {
      let index = -1, flag = false;
      for(var i = 0, arr = key.split(""); i < arr.length; i++ ){
        if(str.indexOf(arr[i]) < 0){
          break;
        }else{
          let match = str.matchAll(arr[i]);
          let next = match.next();
          while (!next.done){
            if(next.value.index > index){
              index = next.value.index;
              if(i === arr.length - 1){
                flag = true
              }
              break;
            }
            next = match.next();
          }

        }
      }
      return flag
    },
    async changePage(e){
      this.paramPage = this.param[e-1]
    },

  }
}
</script>

<style scoped>
.tab-content {
  margin-top: 10px;
}

.tab-content2 {
  margin-top: 10px;
}
</style>
