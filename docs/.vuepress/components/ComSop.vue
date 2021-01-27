<template>
    <div>
        <div class="active-box">
          <el-row :gutter="20">
            <el-col :span="14">
              <el-tabs  @tab-click="reloadP">
                <el-tab-pane v-for="item in cur" :label="item.name" :title="item.code"></el-tab-pane>
              </el-tabs>
            </el-col>
            <el-col :span="8">
              <el-input v-model="keyword" placeholder="input sop name"></el-input>
            </el-col>
            <el-col :span="2">
              <el-button  icon="el-icon-search" circle @click="reloadP('search')"></el-button>
            </el-col>
          </el-row>

        </div>
        <div class="tab-content">
          <el-table
              :data="paramPage"
              stripe
              border style="margin-bottom:14px;"
            >
            <el-table-column property="name" label="SOP" align="center" width="150"></el-table-column>
            <el-table-column property="effect" label="效果" align="center"></el-table-column>
          </el-table>
          <div class="paginationClass" v-if="load">
            <el-pagination
                background
                @current-change="changePage"
                layout="prev, pager, next"
                :total="total"
            >
            </el-pagination>
          </div>
        </div>
    </div>
</template>

<script>
    import {params} from '/docs/js/param';
    export default {
        name: "com-sop",
        data: function () {
            return {
                load:1,
                mark:'YE',
                cur:
                    [{
                        name: 'S1',
                        code: 'YE',
                    },{
                        name: 'S2',
                        code: 'YF',
                    },{
                        name: 'S3',
                        code: 'YG',
                    },{
                        name: 'S4',
                        code: 'YH',
                    },{
                        name: 'S5',
                        code: 'YI',
                    },{
                        name: 'S6',
                        code: 'YJ',
                    },{
                        name: 'S7',
                        code: 'YK',
                    },{
                        name: 'S8',
                        code: 'YL',
                    },{
                        name: 'ALL',
                        code: 'ALL',
                    },
                    ],
                param:[],
                paramA:[],
                paramPage:[],
                keyword:'',
                total: 0,
                currentPage:1,
            }
        },
        mounted() {
          this.paramA = params().sAbilityList
          this.reloadP()
          this.changePage(1)
        },
        methods: {
            reloadP(e){
              this.load = 0
              let keyword = this.keyword
              this.keyword = ''
              if (e===undefined || e===null){
                this.mark='YE'
              }else if(e === 'search'){

              } else {
                this.mark=e.$attrs.title
              }
              let that = this
              let dataP = []
              let dataA = []
              let datas = this.paramA
              let count = 1
              let total = 0
              datas.forEach (data =>{
                if (count === 10){
                  dataA.push(dataP)
                  dataP = []
                  count = 1
                }else if(datas[datas.length-1].code === data.code){
                  dataA.push(dataP)
                }
                if (that.fuzzyMatch(data.code,that.mark) || that.mark === 'ALL'){
                  if (keyword === '' || that.fuzzyMatch(data.name,keyword)){
                    dataP.push(data)
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
            test(){
                //打印出来是3
                console.log("add=====",params())
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
    ul li {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .active-box{
        display: inline;
    }
    .tab-tilte{
        width: 90%;
    }
    .tab-tilte li{
        float: left;
        width: 80px;
        height: 15px;
        border-radius: 15px;
        padding: 10px 0;
        margin: 0 2px;
        text-align: center;
        background-color:#f4f4f4;
        line-height: 15px;
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
        width: 100%;
        /*line-height: 20px;*/
        /*text-align: center;*/
    }

</style>
