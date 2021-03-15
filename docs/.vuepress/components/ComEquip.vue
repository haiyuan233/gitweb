<template>
  <div>
    <template >
      <el-radio-group v-model="radio" >
        <el-radio-button label="背部" >背部</el-radio-button>
        <el-radio-button label="手部" >手部</el-radio-button>
        <el-radio-button label="腿部" >腿部</el-radio-button>
      </el-radio-group>
    </template>
    <!-- 背部 -->
    <div style="margin-bottom: 10px"></div>
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
      <div style="margin-bottom: 15px">
        <span style="font-size: 18px;color: #475669;">背部防具:</span>
        <template v-if="value.armorB!==null">
          <el-avatar shape="square" size="small" style="vertical-align:middle" :src="value.armorB.pic"></el-avatar>
          <el-tag style="vertical-align:middle">{{value.armorB.name}}</el-tag>
        </template><br/>
      </div>

      <div style="margin-bottom: 15px">
      <span style="font-size: 18px;color: #475669;margin-bottom: 10px">手部防具:</span>
      <template v-if="value.armorA!==null">
        <el-avatar shape="square" size="small" style="vertical-align:middle" :src="value.armorA.pic"></el-avatar>
        <el-tag style="vertical-align:middle">{{value.armorA.name}}</el-tag>
      </template><br/>
      </div>

      <div style="margin-bottom: 15px">
      <span style="font-size: 18px;color: #475669;margin-bottom: 10px">腿部防具:</span>
      <template v-if="value.armorL!==null">
        <el-avatar shape="square" size="small" style="vertical-align:middle" :src="value.armorL.pic"></el-avatar>
        <el-tag style="vertical-align:middle">{{value.armorL.name}}</el-tag>
      </template><br/>
      </div>

      <H2>附加属性</H2>
      <div>

        <el-form :inline="true" :model="formData" class="demo-form-inline">
          <el-form-item label="HP">
            <el-input size="mini" v-model="formData.HP" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="PP">
            <el-input size="mini" v-model="formData.PP" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="技量">
            <el-input size="mini" v-model="formData.gp" placeholder="审批人"></el-input>
          </el-form-item>

          <el-form-item label="打击力">
            <el-input size="mini" v-model="formData.patk" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="射击力">
            <el-input size="mini" v-model="formData.satk" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="法击力">
            <el-input size="mini" v-model="formData.tatk" placeholder="审批人"></el-input>
          </el-form-item>
        </el-form>

        <el-form :inline="true" :model="formData" class="demo-form-inline">
          <el-form-item label="打击防御">
            <el-input size="mini" v-model="formData.pdef" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="射击防御">
            <el-input size="mini" v-model="formData.sdef" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="法击防御">
            <el-input size="mini" v-model="formData.tdef" placeholder="审批人"></el-input>
          </el-form-item>

          <el-form-item label="打击耐性">
            <el-input size="mini" v-model="formData.pg" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="射击耐性">
            <el-input size="mini" v-model="formData.sg" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="法击耐性">
            <el-input size="mini" v-model="formData.tg" placeholder="审批人"></el-input>
          </el-form-item>
        </el-form>

        <el-form :inline="true" :model="formData" class="demo-form-inline">
          <el-form-item label="炎耐性">
            <el-input size="mini" v-model="formData.fdown" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="冰耐性">
            <el-input size="mini" v-model="formData.idown" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="雷耐性">
            <el-input size="mini" v-model="formData.tdown" placeholder="审批人"></el-input>
          </el-form-item>

          <el-form-item label="风耐性">
            <el-input size="mini" v-model="formData.wdown" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="光耐性">
            <el-input size="mini" v-model="formData.ldown" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="暗耐性">
            <el-input size="mini" v-model="formData.ddown" placeholder="审批人"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <el-button style="margin-top: 10px;margin-bottom: 15px" type="primary" @click="addList()">添加对比</el-button>

      <div>
        <el-table
            :data="dataList"
            :default-sort="{prop: 'rank', order: 'descending'}"
            style="width: 100%">
          <el-table-column
              prop="name"
              label="防具"
              width="150">
            <template slot-scope="scope">
              <img v-for="pic in scope.row.pic" :src="pic" style="vertical-align:middle" />
            </template>
          </el-table-column>
          <el-table-column
              prop="HP"
              label="HP"
              sortable
              width="60">
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
              width="60">
            <template slot-scope="scope">
              {{parseInt(scope.row.pdef)}}
            </template>
          </el-table-column>
          <el-table-column
              prop="sdef"
              label="射击防御"
              sortable
              width="60">
            <template slot-scope="scope">
              {{parseInt(scope.row.sdef)}}
            </template>
          </el-table-column>
          <el-table-column
              prop="tdef"
              label="法击防御"
              sortable
              width="60">
            <template slot-scope="scope">
              {{parseInt(scope.row.tdef)}}
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
      </div>


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
      },
      dataList:[],
      formData:{
        HP:0,PP:0,patk:0,satk:0,tatk:0,gp:0,pdef:0,sdef:0,tdef:0,pg:0,sg:0,tg:0,fdown:0,idown:0,tdown:0,wdown:0,ldown:0,ddown:0
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
    addList(){
      let list = this.value
      let datas = {pic:[],HP:0,PP:0,patk:0,satk:0,tatk:0,gp:0,pdef:0,sdef:0,tdef:0,pg:0,sg:0,tg:0,fdown:0,idown:0,tdown:0,wdown:0,ldown:0,ddown:0}
      if (list.armorB!==null && list.armorA!==null && list.armorL!==null) {
        datas = this.sumList(list.armorB,datas)
        datas = this.sumList(list.armorA,datas)
        datas = this.sumList(list.armorL,datas)
        datas = this.sumdata(this.formData,datas)
        this.dataList.push(datas)
        this.value = {
          armorB:null,
          armorA:null,
          armorL:null
        }
        console.log(this.dataList)
      }

    },
    sumList(listdata,datas){
      if (listdata !== undefined && listdata !== null){
        datas.pic.push(listdata.pic)
        datas.HP += listdata.HP
        datas.PP += listdata.PP
        datas.patk += listdata.patk
        datas.satk += listdata.satk
        datas.tatk += listdata.tatk
        datas.gp += listdata.gp
        datas.pdef += listdata.pdef * 1.4
        datas.sdef += listdata.sdef * 1.4
        datas.tdef += listdata.tdef * 1.4
        datas.pg += listdata.pg
        datas.sg += listdata.sg
        datas.tg += listdata.tg
        datas.fdown += listdata.fdown
        datas.idown += listdata.idown
        datas.tdown += listdata.tdown
        datas.wdown += listdata.wdown
        datas.ldown += listdata.ldown
        datas.ddown += listdata.ddown
      }
      return datas
    },
    sumdata(listdata,datas){
      if (listdata !== undefined && listdata !== null){
        datas.HP += parseInt(listdata.HP)
        datas.PP += parseInt(listdata.PP)
        datas.patk += parseInt(listdata.patk)
        datas.satk += parseInt(listdata.satk)
        datas.tatk += parseInt(listdata.tatk)
        datas.gp += parseInt(listdata.gp)
        datas.pdef += parseInt(listdata.pdef)
        datas.sdef += parseInt(listdata.sdef)
        datas.tdef += parseInt(listdata.tdef)
        datas.pg += parseInt(listdata.pg)
        datas.sg += parseInt(listdata.sg)
        datas.tg += parseInt(listdata.tg)
        datas.fdown += parseInt(listdata.fdown)
        datas.idown += parseInt(listdata.idown)
        datas.tdown += parseInt(listdata.tdown)
        datas.wdown += parseInt(listdata.wdown)
        datas.ldown += parseInt(listdata.ldown)
        datas.ddown += parseInt(listdata.ddown)
      }
      return datas
    }
  }

}
</script>

<style scoped>
/deep/.el-form-item{
  width: 15% !important;
}
/deep/.el-form-item__content{
  width: 40% !important;
}
/deep/.el-input__inner {
  padding: 0 5px !important;
}
</style>
