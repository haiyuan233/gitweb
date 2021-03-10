<template>
  <div>
    <template>
      <el-radio-group v-model="radio" >
        <el-radio-button label="背部" >背部防具</el-radio-button>
        <el-radio-button label="手部" >手部防具</el-radio-button>
        <el-radio-button label="腿部" >腿部防具</el-radio-button>
      </el-radio-group>
    </template>
    <!-- 背部 -->
    <H2>{{radio}}防具</H2>
    <div v-if="radio === '背部'">
      <el-table
          highlight-current-row
          @current-change="rowChange1"
          :data="armorB.slice((currentPage1-1)*pageSize1,currentPage1*pageSize1)"
          :default-sort="{prop: 'rank', order: 'descending'}"
          style="width: 100%">
        <el-table-column
            prop="name"
            label=""
            width="50">
          <template slot-scope="scope">
            <img :src="scope.row.pic" style="vertical-align:middle" />
          </template>
        </el-table-column>
        <el-table-column
            prop="name"
            label="防具"
            width="150">
          <template slot-scope="scope">
            {{scope.row.name}}
          </template>
        </el-table-column>
        <el-table-column
            prop="rank"
            label="稀有度"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="HP"
            label="HP"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="PP"
            label="PP"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="patk"
            label="打击力"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="satk"
            label="射击力"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="tatk"
            label="法击力"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="gp"
            label="技量"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="pdef"
            label="打击防御"
            sortable
            width="50">
          <template slot-scope="scope">
            {{parseInt(scope.row.pdef * 1.4)}}
          </template>
        </el-table-column>
        <el-table-column
            prop="sdef"
            label="射击防御"
            sortable
            width="50">
          <template slot-scope="scope">
            {{parseInt(scope.row.sdef * 1.4)}}
          </template>
        </el-table-column>
        <el-table-column
            prop="tdef"
            label="法击防御"
            sortable
            width="50">
          <template slot-scope="scope">
            {{parseInt(scope.row.tdef * 1.4)}}
          </template>
        </el-table-column>
        <el-table-column
            prop="pg"
            label="打击耐性"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="sg"
            label="射击耐性"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="tg"
            label="法击耐性"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="fdown"
            label="炎耐性"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="idown"
            label="冰耐性"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="tdown"
            label="雷耐性"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="wdown"
            label="风耐性"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="ldown"
            label="光耐性"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="ddown"
            label="暗耐性"
            sortable
            width="50">
        </el-table-column>
      </el-table>
      <el-pagination align='center'
                     @size-change="handleSizeChange1"
                     @current-change="handleCurrentChange1"
                     :current-page="currentPage1"
                     :page-size="pageSize1"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="armorB.length">
      </el-pagination>
    </div>
    <div v-if="radio === '手部'">
      <el-table
          highlight-current-row
          @current-change="rowChange2"
          :data="armorA.slice((currentPage2-1)*pageSize2,currentPage2*pageSize2)"
          :default-sort="{prop: 'rank', order: 'descending'}"
          style="width: 100%">
        <el-table-column
            prop="name"
            label=""
            width="50">
          <template slot-scope="scope">
            <img :src="scope.row.pic" style="vertical-align:middle" />
          </template>
        </el-table-column>
        <el-table-column
            prop="name"
            label="防具"
            width="150">
          <template slot-scope="scope">
            {{scope.row.name}}
          </template>
        </el-table-column>
        <el-table-column
            prop="rank"
            label="稀有度"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="HP"
            label="HP"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="PP"
            label="PP"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="patk"
            label="打击力"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="satk"
            label="射击力"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="tatk"
            label="法击力"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="gp"
            label="技量"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="pdef"
            label="打击防御"
            sortable
            width="50">
          <template slot-scope="scope">
            {{parseInt(scope.row.pdef * 1.4)}}
          </template>
        </el-table-column>
        <el-table-column
            prop="sdef"
            label="射击防御"
            sortable
            width="50">
          <template slot-scope="scope">
            {{parseInt(scope.row.sdef * 1.4)}}
          </template>
        </el-table-column>
        <el-table-column
            prop="tdef"
            label="法击防御"
            sortable
            width="50">
          <template slot-scope="scope">
            {{parseInt(scope.row.tdef * 1.4)}}
          </template>
        </el-table-column>
        <el-table-column
            prop="pg"
            label="打击耐性"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="sg"
            label="射击耐性"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="tg"
            label="法击耐性"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="fdown"
            label="炎耐性"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="idown"
            label="冰耐性"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="tdown"
            label="雷耐性"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="wdown"
            label="风耐性"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="ldown"
            label="光耐性"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="ddown"
            label="暗耐性"
            sortable
            width="50">
        </el-table-column>
      </el-table>
      <el-pagination align='center'
                     @size-change="handleSizeChange2"
                     @current-change="handleCurrentChange2"
                     :current-page="currentPage2"
                     :page-size="pageSize2"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="armorB.length">
      </el-pagination>
    </div>
    <div v-if="radio === '腿部'">
      <el-table
          highlight-current-row
          @current-change="rowChange3"
          :data="armorL.slice((currentPage3-1)*pageSize3,currentPage3*pageSize3)"
          :default-sort="{prop: 'rank', order: 'descending'}"
          style="width: 100%">
        <el-table-column
            prop="name"
            label=""
            width="50">
          <template slot-scope="scope">
            <img :src="scope.row.pic" style="vertical-align:middle" />
          </template>
        </el-table-column>
        <el-table-column
            prop="name"
            label="防具"
            width="150">
          <template slot-scope="scope">
            {{scope.row.name}}
          </template>
        </el-table-column>
        <el-table-column
            prop="rank"
            label="稀有度"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="HP"
            label="HP"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="PP"
            label="PP"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="patk"
            label="打击力"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="satk"
            label="射击力"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="tatk"
            label="法击力"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="gp"
            label="技量"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="pdef"
            label="打击防御"
            sortable
            width="50">
          <template slot-scope="scope">
            {{parseInt(scope.row.pdef * 1.4)}}
          </template>
        </el-table-column>
        <el-table-column
            prop="sdef"
            label="射击防御"
            sortable
            width="50">
          <template slot-scope="scope">
            {{parseInt(scope.row.sdef * 1.4)}}
          </template>
        </el-table-column>
        <el-table-column
            prop="tdef"
            label="法击防御"
            sortable
            width="50">
          <template slot-scope="scope">
            {{parseInt(scope.row.tdef * 1.4)}}
          </template>
        </el-table-column>
        <el-table-column
            prop="pg"
            label="打击耐性"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="sg"
            label="射击耐性"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="tg"
            label="法击耐性"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="fdown"
            label="炎耐性"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="idown"
            label="冰耐性"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="tdown"
            label="雷耐性"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="wdown"
            label="风耐性"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="ldown"
            label="光耐性"
            sortable
            width="50">
        </el-table-column>
        <el-table-column
            prop="ddown"
            label="暗耐性"
            sortable
            width="50">
        </el-table-column>
      </el-table>
      <el-pagination align='center'
                     @size-change="handleSizeChange3"
                     @current-change="handleCurrentChange3"
                     :current-page="currentPage3"
                     :page-size="pageSize3"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="armorB.length">
      </el-pagination>
    </div>

    <div style="margin-top: 10px">
      <span style="font-size: 18px;color: #475669">背部防具已选择:</span>
      <template v-if="value.armorB!==null">
        <el-avatar shape="square" size="small" style="vertical-align:middle" :src="value.armorB.pic"></el-avatar>
        <el-tag style="vertical-align:middle">{{value.armorB.name}}</el-tag>
      </template><br/>

      <span style="font-size: 18px;color: #475669">手部防具已选择:</span>
      <template v-if="value.armorA!==null">
        <el-avatar shape="square" size="small" style="vertical-align:middle" :src="value.armorA.pic"></el-avatar>
        <el-tag style="vertical-align:middle">{{value.armorA.name}}</el-tag>
      </template><br/>

      <span style="font-size: 18px;color: #475669">腿部防具已选择:</span>
      <template v-if="value.armorL!==null">
        <el-avatar shape="square" size="small" style="vertical-align:middle" :src="value.armorL.pic"></el-avatar>
        <el-tag style="vertical-align:middle">{{value.armorL.name}}</el-tag>
      </template><br/>
    </div>
  </div>
</template>

<script>
import {equip} from '/docs/js/equip';
export default {
  name: "com-equip",
  data:function () {
    return {
      armorB:equip().armorB.sort(this.up),
      armorA:equip().armorA.sort(this.up),
      armorL:equip().armorL.sort(this.up),
      radio:"背部",
      currentPage1: 1, // 当前页码
      currentPage2: 1, // 当前页码
      currentPage3: 1, // 当前页码
      total1: 20, // 总条数
      total2: 20, // 总条数
      total3: 20, // 总条数
      pageSize1: 10, // 每页的数据条数,
      pageSize2: 10, // 每页的数据条数,
      pageSize3: 10, // 每页的数据条数,
      value:{
        armorB:null,
        armorA:null,
        armorL:null
      }
    }
  },
  methods:{
    //每页条数改变时触发 选择一页显示多少行
    handleSizeChange1(val) {
      this.currentPage1 = 1;
      this.pageSize1 = val;
    },
    handleSizeChange2(val) {
      this.currentPage2 = 1;
      this.pageSize2 = val;
    },
    handleSizeChange3(val) {
      this.currentPage3 = 1;
      this.pageSize3 = val;
    },
    //当前页改变时触发 跳转其他页
    handleCurrentChange1(val) {
      this.currentPage1 = val;
    },
    handleCurrentChange2(val) {
      this.currentPage2 = val;
    },
    handleCurrentChange3(val) {
      this.currentPage3 = val;
    },
    up(x,y){
      return y.rank-x.rank
    },
    rowChange1(row) {
      this.value.armorB = row
      console.log(row)
    },
    rowChange2(row) {
      this.value.armorA = row
      console.log(row)
    },
    rowChange3(row) {
      this.value.armorL = row
      console.log(row)
    },

  }

}
</script>

<style scoped>

</style>
