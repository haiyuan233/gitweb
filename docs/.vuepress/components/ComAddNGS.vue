<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-cascader
            v-model="value[0]"
            :options="options"
            :show-all-levels="false"
            placeholder="能力1"
            @change="handleChange"
            filterable
        ></el-cascader>
        <el-cascader
            v-model="value[1]"
            :options="options"
            :show-all-levels="false"
            placeholder="能力2"
            @change="handleChange"
            filterable
        ></el-cascader>
        <el-cascader
            v-model="value[2]"
            :options="options"
            :show-all-levels="false"
            placeholder="能力3"
            @change="handleChange"
            filterable
        ></el-cascader>
        <el-cascader
            v-model="value[3]"
            :options="options"
            :show-all-levels="false"
            placeholder="能力4"
            @change="handleChange"
            filterable
        ></el-cascader>
        <el-cascader
            v-model="value[4]"
            :options="options"
            :show-all-levels="false"
            placeholder="能力5"
            @change="handleChange"
            filterable
        ></el-cascader>
        <el-cascader
            v-model="value[5]"
            :options="options"
            :show-all-levels="false"
            placeholder="能力6"
            @change="handleChange"
            filterable
        ></el-cascader>
        <el-cascader
            v-model="value[6]"
            :options="options"
            :show-all-levels="false"
            placeholder="能力7"
            @change="handleChange"
            filterable
        ></el-cascader>
        <el-cascader
            v-model="value[7]"
            :options="options"
            :show-all-levels="false"
            placeholder="能力8"
            @change="handleChange"
            filterable
        ></el-cascader>
        <el-button type="danger" style="background: #d77494;width: 100%;height: 50px" @click="setProperty">确定</el-button>
      </el-col>
      <el-col :span="14">
        <el-card class="box-card">
          <div v-for="item in property">
            <div v-if="item.data !== 0 && item.data !== '' && item.label !== '累加'">{{item.label + item.data + item.symbol}}</div>
            <div v-else-if="item.label === '累加'">{{item.data}}</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <ul style="font-size: 16px">
      <li>大部分SOP未验证，按<a href="/views/ngs/ngsop" style="color: #d77494">对照表</a>进行计算，对照表中不存在的SOP自行计算</li>
      <li>伤害上升，减耗系按乘算</li>
    </ul>
  </div>
</template>

<script>
import {params} from '/docs/js/param';
import {ngsParams} from '/docs/js/ngs';
export default {
  name: "com-add-NGS",
  data:function (){
    return {
      options: [
          {
            value: '',
            label: '无',
          },{
            value: 'A',
            label: 'ステータス',
            children: []
          },{
            value: 'A+',
            label: 'ステータス(特殊)',
            children: []
          },{
            value: 'A++',
            label: 'フレイズ・センテンス系',
            children: []
          },{
            value: 'B',
            label: 'カタリスト・特殊系',
            children: []
          },{
            value: 'C',
            label: 'レセプター系',
            children: []
          },{
            value: 'D',
            label: 'ソール系',
            children: []
          },{
            value: 'D+',
            label: 'フィーバー系',
            children: []
          },{
            value: 'E',
            label: 'レジスト系',
            children: []
          },{
            value: 'E+',
            label: '状態異常付与',
            children: []
          },{
            value: 'E++',
            label: '倍率特効',
            children: []
          },{
            value: 'E+++',
            label: 'ブースト系',
            children: []
          },{
            value: 'AB',
            label: 'S级特殊能力（武器）',
            children: []
          },{
            value: 'AB+',
            label: 'S级特殊能力（防具）',
            children: []
          }],
      value:['','','','','','','',''],
      property:[],
    }
  },
  mounted() {
    this.reloadP()
  },
  methods:{
    reloadP(){
      let options = this.options
      let paramS = params().sAbilityList
      let param = params().abilityList
      param.forEach(item => {
        switch (item.gid){
            case 'A':
            options[1].children.push({
              value:item.name,
              label:item.name
            })
            break;
            case 'A+':
            options[2].children.push({
              value:item.name,
              label:item.name
            })
            break;
            case 'A++':
            options[3].children.push({
              value:item.name,
              label:item.name
            })
            break;
            case 'B':
            options[4].children.push({
              value:item.name,
              label:item.name
            })
            break;
            case 'C':
            options[5].children.push({
              value:item.name,
              label:item.name
            })
            break;
            case 'D':
            options[6].children.push({
              value:item.name,
              label:item.name
            })
            break;
            case 'D+':
            options[7].children.push({
              value:item.name,
              label:item.name
            })
            break;
            case 'E':
            options[8].children.push({
              value:item.name,
              label:item.name
            })
            break;
            case 'E+':
            options[9].children.push({
              value:item.name,
              label:item.name
            })
            break;
            case 'E++':
            options[10].children.push({
              value:item.name,
              label:item.name
            })
            break;
            case 'E+++':
            options[11].children.push({
              value:item.name,
              label:item.name
            })
            break;
            default:
              break;
        }
      })
      paramS.forEach(item => {
        switch (item.gid) {
          case 'AB':
            options[12].children.push({
              value:item.name,
              label:item.name
            })
            break;
          case 'AB+':{
            options[13].children.push({
              value:item.name,
              label:item.name
            })
            break;
          }
        }
      })
    },
    handleChange(value){
      let v = this.value
      // console.log(v)
    },
    setProperty(){
      let that = this
      let value = this.value
      // let v = this.value
      // console.log(v)
      let ngs = ngsParams()
      let values = [
        {
          label:'威力+',
          data:0,
          symbol:'%'
        },{
          label:'打击威力+',
          data:0,
          symbol:'%'
        },{
          label:'射击威力+',
          data:0,
          symbol:'%'
        },{
          label:'法击威力+',
          data:0,
          symbol:'%'
        },{
          label:'滞空状態で威力+',
          data:0,
          symbol:'%'
        },{
          label:'HP+',
          data:0,
          symbol:''
        },{
          label:'PP+',
          data:0,
          symbol:''
        },{
          label:'PP+',
          data:0,
          symbol:'%'
        },{
          label:'PP消費軽減+',
          data:0,
          symbol:'%'
        },{
          label:'威力下限補正＋',
          data:0,
          symbol:'%'
        },{
          label:'ダメージ耐性+',
          data:0,
          symbol:'%'
        },{
          label:'バーン耐性+',
          data:0,
          symbol:'%'
        },{
          label:'フリーズ耐性+',
          data:0,
          symbol:'%'
        },{
          label:'ショック耐性+',
          data:0,
          symbol:'%'
        },{
          label:'ミラージュ耐性+',
          data:0,
          symbol:'%'
        },{
          label:'パニック耐性+',
          data:0,
          symbol:'%'
        },{
          label:'ポイズン耐性+',
          data:0,
          symbol:'%'
        },{
          label:'全ダウン耐性+',
          data:0,
          symbol:'%'
        },{
          label:'累加',
          data:'',
          symbol:''
        },
      ]
      value.forEach(item => {
        if (item !== '' ){
          ngs.ability.forEach(ability => {
            // console.log(item[1])
            ability.oldAB.split('|').forEach(split => {
              if (split===item[1]){
                console.log('对象',item[1])
                console.log('目标',split)
                console.log(ability)
                for (let i = 0; i < ability.type.length; i++) {
                  values = that.switchNgs(ability.value[i],ability.type[i],values)
                }
              }
            })

          })
          ngs.unitAbilitySop.forEach(unitAbilitySop => {
            unitAbilitySop.oldAB.split('|').forEach(split => {
              // console.log('对象',item[1])
              // console.log('目标',split)
              if (split===item[1]){
                for (let i = 0; i < unitAbilitySop.type.length; i++) {
                  values = that.switchNgs(unitAbilitySop.value[i],unitAbilitySop.type[i],values)
                }
              }
            })
          })
          ngs.abilitySop.forEach(abilitySop => {
            abilitySop.oldAB.split('|').forEach(split => {
              // console.log('对象',item[1])
              // console.log('目标',split)
              if (split===item[1]){
                for (let i = 0; i < abilitySop.type.length; i++) {
                  values = that.switchNgs(abilitySop.value[i],abilitySop.type[i],values)
                }
              }
            })
          })
        }
      })
      // console.log('values',values)
      this.property = values
    },
    switchNgs(splitV,splitT,value){
      switch (splitT){
        // 01239 倍率相乘
        // 8 减耗
        case 'A':
          // value[0].data = ((value[0].data+1)*(splitV*0.01+1)-1)*100
          // value[0].data = parseFloat().toFixed(2)
          value[0].data = parseFloat((value[0].data * 100 +10000) * (splitV * 100 + 10000) / 1000000 - 100).toFixed(4)
          break
        case 'A-':
          value[9].data = parseFloat((value[9].data * 100 +10000) * (splitV * 100 + 10000) / 1000000 - 100).toFixed(4)
          break
        case 'A+':
          value[4].data += splitV
          break
        case 'A++':
          value[18].data += splitV
          break
        case 'AA':
          value[1].data = parseFloat((value[1].data * 100 +10000) * (splitV * 100 + 10000) / 1000000 - 100).toFixed(4)
          break
        case 'AB':
          value[2].data = parseFloat((value[2].data * 100 +10000) * (splitV * 100 + 10000) / 1000000 - 100).toFixed(4)
          break
        case 'AC':
          value[3].data = parseFloat((value[3].data * 100 +10000) * (splitV * 100 + 10000) / 1000000 - 100).toFixed(4)
          break
        case 'B':
          value[5].data += splitV
          break
        case 'C':
          value[6].data += splitV
          break
        case 'C++':
          value[7].data += splitV
          break
        case 'C+':
          value[8].data = parseFloat((1- (1 - value[8].data*0.01) * (1 - splitV*0.01))*100).toFixed(4)
          break
        case 'D':
          value[10].data += splitV
          break
        case 'DA':
          value[11].data += splitV
          break
        case 'DB':
          value[12].data += splitV
          break
        case 'DC':
          value[13].data += splitV
          break
        case 'DD':
          value[14].data += splitV
          break
        case 'DE':
          value[15].data += splitV
          break
        case 'DF':
          value[16].data += splitV
          break
        case 'DG':
          value[17].data += splitV
          break
        default:
          break
      }
      return value

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
  }
}
</script>

<style scoped>
.box-card {
  height: 450px;
}
.el-cascader{
  margin-bottom:10px ;
}
</style>
