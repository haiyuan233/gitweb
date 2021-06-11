<template>
  <div>
    <h2>
      <img v-if="data.icon !== null" :src="data.icon" style="vertical-align:middle" width="30">
      <el-avatar  shape="square" :size="30" v-if="data.icon === null" style="vertical-align:middle"> 暂无 </el-avatar>
      {{data.name}}
    </h2>
    <div style="margin-bottom: 20px">
      <template>
        <template v-if="data.type"><el-tag type="danger" effect="dark">主动技能</el-tag></template>
        <template v-else><el-tag type="warning" effect="dark">被动技能</el-tag></template>
      </template>
      <template>
        <template v-if="data.restrict" ><el-tag type="danger" effect="dark">主职专用</el-tag></template>
        <template v-else><el-tag type="success" effect="dark">副职可用</el-tag></template>
      </template>
      <template>
        <template v-if="data.restrictWp !== null" ><el-tag type="danger" effect="dark">{{data.restrictWp}}限定</el-tag></template>
      </template>
    </div>

    <div v-for="item in data.message">
      <li>{{item}}</li>
    </div>


    <div style="padding-top: 50px" v-if="data.level !== null">
      <el-table
          :data="data.level">
        <el-table-column
            prop="name"
            label="设定项目"
            width="200"
            align="center"
            >
        </el-table-column>
        <template v-for="m in data.maxlevel">
          <el-table-column
              :prop="data[m-1]"
              :label="'Lv' + m"
              width="60"
              align="center"
              >
            <template slot-scope="scope">
              {{scope.row.data[m-1] + scope.row.unit}}
            </template>
          </el-table-column>
        </template>

      </el-table>
    </div>


  </div>
</template>

<script>
export default {
  name: "SkillTable",
  props: {
    data: Object
  },
  data: function() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
table {
  margin: 0 0 !important;
}
</style>
