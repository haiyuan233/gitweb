<template>
  <div>
    <div class="tab-content">
      <H2>通常追加</H2>
      <el-table
          v-show="load"
          :data="ability"
          stripe
          border style="margin-bottom:14px;"
      >
        <el-table-column property="name" label="OP" align="center" width="200">
          <template slot-scope="props">
            {{props.row.name}}
          <el-tooltip class="item" effect="dark" :content="props.row.effect" placement="top-start">
            <i class="el-icon-warning-outline"></i>
          </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column property="list" label="对应PSO2特殊能力" align="center"></el-table-column>
      </el-table>
      <H2>武器SOP</H2>
      <el-table
          v-show="load"
          :data="abilitySop"
          stripe
          border style="margin-bottom:14px;"
      >
        <el-table-column property="name" label="OP" align="center" width="200">
          <template slot-scope="props">
            {{props.row.name}}
            <el-tooltip class="item" effect="dark" :content="props.row.effect" placement="top-start">
              <i class="el-icon-warning-outline"></i>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column property="oldAB" label="对应PSO2特殊能力" align="center"></el-table-column>
      </el-table>
      <H2>防具SOP</H2>
      <el-table
          v-show="load"
          :data="unitAbilitySop"
          stripe
          border style="margin-bottom:14px;"
      >
        <el-table-column property="name" label="OP" align="center" width="200">
          <template slot-scope="props">
            {{props.row.name}}
            <el-tooltip class="item" effect="dark" :content="props.row.effect" placement="top-start">
              <i class="el-icon-warning-outline"></i>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column property="oldAB" label="对应PSO2特殊能力" align="center"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {ngsParams} from "../../js/ngs";

export default {
  name: "com-old-NGS",
  data: function () {
    return {
      load:true,
      param:[],
      ability:[],
      unitAbilitySop:[],
      abilitySop:[],
      paramPage:[],
      keyword:'',
      total: 0,
      currentPage:1,
    }
  },
  mounted() {
    this.ability = ngsParams().ability
    this.unitAbilitySop = ngsParams().unitAbilitySop
    this.abilitySop = ngsParams().abilitySop
    this.reloadP()
  },methods:{
    reloadP(){
      this.load = true
      this.$nextTick(() => {
        this.load = true
      })
    }
  }
}
</script>

<style scoped>

</style>
