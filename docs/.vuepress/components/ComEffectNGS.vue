<template>
  <div>
    <div style="margin-bottom: 20px"><span style="vertical-align:middle;font-size: 20px;font-weight: bolder">翻译来源:</span> &nbsp;&nbsp;&nbsp;
      <a href="https://space.bilibili.com/2456508/" title="天狐又仙的主页" style="text-decoration: none"><i class="iconfont reco-bilibili cursorsHover" style="color:#d77494;vertical-align:middle;font-size: 30px"></i></a>
      &nbsp;&nbsp;&nbsp;<el-tag type="danger">SHIP 9 - ルルティエ</el-tag>
    </div>
    <template>
      <div>
        <span style="font-size: 20px;font-weight: bolder">职业选择：</span>
        <el-radio-group v-model="radio" >
          <el-radio-button label="hu" title="HU"><img src="https://image.swiki.jp/img1/?host=pso2ngs&page=%E7%94%BB%E5%83%8F%E7%BD%AE%E5%A0%B4&src=%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC.png"></el-radio-button>
          <el-radio-button label="fi" title="FI"><img src="https://image.swiki.jp/img1/?host=pso2ngs&page=%E7%94%BB%E5%83%8F%E7%BD%AE%E5%A0%B4&src=%E3%83%95%E3%82%A1%E3%82%A4%E3%82%BF%E3%83%BC.png"></el-radio-button>
          <el-radio-button label="ra" title="RA"><img src="https://image.swiki.jp/img1/?host=pso2ngs&page=%E7%94%BB%E5%83%8F%E7%BD%AE%E5%A0%B4&src=%E3%83%AC%E3%83%B3%E3%82%B8%E3%83%A3%E3%83%BC.png"></el-radio-button>
          <el-radio-button label="gu" title="GU"><img src="https://image.swiki.jp/img1/?host=pso2ngs&page=%E7%94%BB%E5%83%8F%E7%BD%AE%E5%A0%B4&src=%E3%82%AC%E3%83%B3%E3%83%8A%E3%83%BC.png"></el-radio-button>
          <el-radio-button label="fo" title="FO"><img src="https://image.swiki.jp/img1/?host=pso2ngs&page=%E7%94%BB%E5%83%8F%E7%BD%AE%E5%A0%B4&src=%E3%83%95%E3%82%A9%E3%83%BC%E3%82%B9.png"></el-radio-button>
          <el-radio-button label="te" title="TE"><img src="https://image.swiki.jp/img1/?host=pso2ngs&page=%E7%94%BB%E5%83%8F%E7%BD%AE%E5%A0%B4&src=%E3%83%86%E3%82%AF%E3%82%BF%E3%83%BC.png"></el-radio-button>
        </el-radio-group>

      </div>
      <div v-for="item in tableData">
        <template v-if="radio === item.occu" v-for="data in item.data">
          <div style="margin-top: 50px;border-bottom: #bfbfbf 1px solid;padding-bottom: 20px">
            <skill-table
                :data="data">
            </skill-table>
          </div>
        </template>

      </div>
    </template>
  </div>
</template>

<script>
import SkillTable from '../components/table/SkillTable'
import {effectTable} from '../../js/effect_NGS'
export default {
  name: "com-effect-NGS",
  components:{
    'SkillTable': SkillTable
  },
  data:function (){
    return {
      radio: 'hu',
      tableData: effectTable()
    };
  },
  mounted() {

  },
  methods:{

  }

}
</script>

<style>
.el-radio-button__orig-radio:checked+.el-radio-button__inner {
  color: #FFF;
  background-color: #d77494 !important;
  border-color: #d77494 !important;
}

</style>
