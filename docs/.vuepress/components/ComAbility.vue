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
                ></el-cascader>
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
            :page-size=15
            :total="total"
        >
        </el-pagination>
      </div>
    </div>

    <div style="margin-top: 50px"></div>
    <H2>通常能力合成(施工中)</H2>

    <div style="margin-top: 50px"></div>
    <H2>高级能力合成</H2>
    <div class="tab-content2">
      <div class="block2">
        <el-row :gutter="20">
          <el-col :span="14">
            <el-cascader
                v-model="mixValue"
                :options="mixOptions"
                :props="{ checkStrictly: true }"
                @change="handleChange2"
                ></el-cascader>
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

    <div v-show="keyword2 === 'EV'">
      <div style="margin-top: 50px">
        <el-carousel type="card" arrow="never" :autoplay="false" height="600px" indicator-position="none" ref="carousel0">
          <el-carousel-item @click.native="carousel(1)">
            <div class="item-box">
              <h2>レッサー・XXXXⅤ的合成</h2>
              レッサー系存在以下种类
              <ul style="color: #d77494;font-weight: 600">
                <li>レッサーパワー</li>
                <li>レッサーシュート</li>
                <li>レッサーテクニック</li>
                <li>レッサースタミナ</li>
                <li>レッサースピリタⅤ</li>
              </ul>
              以レッサーパワー为例，其他的合成/继承方法相同
              <div style="margin-top: 15px">
                <el-table
                        :cell-style="{'font-size':'10px'}"
                        :data="[
                      {title:'继承',param1num1:'-',param1num2:'80%',param1num3:'100%',param2num1:'-',param2num2:'70%',param2num3:'100%',param3num1:'-',param3num2:'50%',param3num3:'100%',param4num1:'-',param4num2:'40%',param4num3:'100%',param5num1:'-',param5num2:'30%',param5num3:'100%',},
                      {title:'合成',param1num1:'-',param1num2:'-',param1num3:'-',param2num1:'-',param2num2:'70%',param2num3:'70%',param3num1:'-',param3num2:'50%',param3num3:'50%',param4num1:'-',param4num2:'-',param4num3:'30%',param5num1:'-',param5num2:'-',param5num3:'20%',},
                      ]"
                        :header-row-style="{'font-size':'10px'}"
                >
                  <el-table-column
                          label="级别">
                    <el-table-column
                            prop="title"
                            label="同名能力数"
                            width="90">
                    </el-table-column>
                  </el-table-column>
                  <el-table-column
                          prop="param1"
                          label="Ⅰ">
                    <el-table-column
                            prop="param1num1"
                            label="1">
                    </el-table-column>
                    <el-table-column
                            prop="param1num2"
                            label="2">
                    </el-table-column>
                    <el-table-column
                            prop="param1num3"
                            label="3">
                    </el-table-column>
                  </el-table-column>
                  <el-table-column
                          prop="param2"
                          label="Ⅱ">
                    <el-table-column
                            prop="param2num1"
                            label="1">
                    </el-table-column>
                    <el-table-column
                            prop="param2num2"
                            label="2">
                    </el-table-column>
                    <el-table-column
                            prop="param2num3"
                            label="3">
                    </el-table-column>
                  </el-table-column>
                  <el-table-column
                          prop="param3"
                          label="Ⅲ">
                    <el-table-column
                            prop="param3num1"
                            label="1">
                    </el-table-column>
                    <el-table-column
                            prop="param3num2"
                            label="2">
                    </el-table-column>
                    <el-table-column
                            prop="param3num3"
                            label="3">
                    </el-table-column>
                  </el-table-column>
                  <el-table-column
                          prop="param4"
                          label="Ⅳ">
                    <el-table-column
                            prop="param4num1"
                            label="1">
                    </el-table-column>
                    <el-table-column
                            prop="param4num2"
                            label="2">
                    </el-table-column>
                    <el-table-column
                            prop="param4num3"
                            label="3">
                    </el-table-column>
                  </el-table-column>
                  <el-table-column
                          prop="param5"
                          label="Ⅴ">
                    <el-table-column
                            prop="param5num1"
                            label="1">
                    </el-table-column>
                    <el-table-column
                            prop="param5num2"
                            label="2">
                    </el-table-column>
                    <el-table-column
                            prop="param5num3"
                            label="3">
                    </el-table-column>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item @click.native="carousel(2)">
            <div class="item-box">
              <h2>EV系的合成</h2>
              当素材中存在レッサーパワーⅤ/レッサーシュートⅤ/レッサーテクニックⅤ和<br/>
              レッサースタミナⅤ/レッサースピリタⅤ各一种时，50%概率合成<br/>
              <div style="margin-top: 15px">
                <el-table
                        height="300"
                        :cell-style="{'font-size':'10px'}"
                        :data="[
                      {param1:'レッサーパワーⅤ',param2:'レッサースタミナⅤ',mix:'EV・パワーHP',success:'50%'},
                      {param1:'レッサーパワーⅤ',param2:'レッサースピリタⅤ',mix:'EV・パワーPP',success:'50%'},
                      {param1:'レッサーシュートⅤ',param2:'レッサースタミナⅤ',mix:'EV・シュートHP',success:'50%'},
                      {param1:'レッサーシュートⅤ',param2:'レッサースピリタⅤ',mix:'EV・シュートPP',success:'50%'},
                      {param1:'レッサーテクニックⅤ',param2:'レッサースタミナⅤ',mix:'EV・テクニックHP',success:'50%'},
                      {param1:'レッサーテクニックⅤ',param2:'レッサースピリタⅤ',mix:'EV・テクニックPP',success:'50%'},
                      ]"
                >
                  <el-table-column
                          prop="param1"
                          label="素材1">
                  </el-table-column>
                  <el-table-column
                          prop="param2"
                          label="素材2">
                  </el-table-column>
                  <el-table-column
                          prop="mix"
                          label="合成结果">
                  </el-table-column>
                  <el-table-column
                          prop="success"
                          label="成功率">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div style="margin-top: 50px">
        <el-steps :active="step" align-center>
          <el-step title="步骤1" description="レッサー・XXXXⅤ的合成" @click.native="loadStep(1,0)"></el-step>
          <el-step title="步骤2" description="EV系的合成" @click.native="loadStep(2,0)"></el-step>
        </el-steps>
      </div>
    </div>

    <div v-show="keyword2 === 'ジソール'">
      <div style="margin-top: 50px">
        <el-carousel type="card" arrow="never" :autoplay="false" height="600px" indicator-position="none" ref="carousel1">
          <el-carousel-item @click.native="carousel(1)">
            <div class="item-box">
              <h2>○○・ジ・ソール的合成</h2>
              一共存在<span style="font-weight: 600">アクト・ジ・ソール</span>、<span style="font-weight: 600">ティル・ジ・ソール</span>、<span style="font-weight: 600">マギー・ジ・ソール</span>、<span style="font-weight: 600">アレス・ジ・ソール</span>四个种类<br/>
              EP1～3的BOSSソール系能力 +  EP4～5的行星BOSSソール系能力合成，成功率70%<br/>
              <span style="font-weight: 600">EP1～3的BOSSソール系能力</span>
              <ul style="color: #d77494;font-weight: 600">
                <li>グンネ・ソール</li>
                <li>ジグモル・ソール</li>
                <li>ヴォル・ソール</li>
                <li>クォーツ・ソール</li>
                <li>ファング・ソール</li>
                <li>ネプト・ソール</li>
                <li>スノウ・ソール</li>
                <li>エクス・ソール</li>
                <li>ヴァーダー・ソール</li>
                <li>シュレイダ・ソール</li>
                <li>メデューナ・ソール</li>
                <li>リンガ・ソール</li>
                <li>バル・ソール</li>
              </ul>
              <span style="font-weight: 600">EP4～5的BOSSソール系能力</span>
              <ul style="color: #d77494;font-weight: 600">
                <li>トウオウ・ソール</li>
                <li>フルベガス・ソール</li>
                <li>エスカード・ソール</li>
                <li>ファーブラ・ソール</li>
                <li>イストリア・ソール</li>
              </ul>
              EP1～3的BOSSソール系能力 +  EP6的超界BOSSソール系能力合成，成功率90%<br/>
              <span style="font-weight: 600">EP6的超界BOSSソール系能力</span>
              <ul style="color: #d77494;font-weight: 600">
                <li>イクスアクト・ソール</li>
                <li>イクスティル・ソール</li>
                <li>イクスマギー・ソール</li>
                <li>イクスアレス・ソール</li>
              </ul>
              <span style="font-weight: 600">继承</span>
              <div style="margin-top: 15px">
                <el-table
                    :cell-style="{'font-size':'10px'}"
                    :data="[
                      {param1:'○○・ジ・ソール',param2:'○○・ジ・ソール',param3:'-',success:'25%'},
                      {param1:'○○・ジ・ソール',param2:'○○・ジ・ソール',param3:'○○・ジ・ソール',success:'40%'},
                      {param1:'○○・ジ・ソール',param2:'ソールレセプター',param3:'-',success:'50%'}
                      ]"
                >
                  <el-table-column
                      prop="param1"
                      label="素材1">
                  </el-table-column>
                  <el-table-column
                      prop="param2"
                      label="素材2">
                  </el-table-column>
                  <el-table-column
                      prop="param3"
                      label="素材3">
                  </el-table-column>
                  <el-table-column
                      prop="success"
                      label="成功率">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div style="margin-top: 50px">
        <el-steps :active="step" align-center>
          <el-step title="步骤1" description="○○・ジ・ソール的合成" @click.native="loadStep(1,6)"></el-step>
        </el-steps>
      </div>
    </div>

    <div v-show="keyword2 === 'アストラル'">
      <div style="margin-top: 50px">
        <el-carousel type="card" arrow="never" :autoplay="false" height="600px" indicator-position="none" ref="carousel2">
          <el-carousel-item @click.native="carousel(1)">
            <div class="item-box">
              <h2>ソール・カタリスト(魂触媒)的合成</h2>
              当素材中存在以下五种魂能力(ソール系)时出现，成功率10%
              <ul style="color: #d77494;font-weight: 600">
                <li>アプレンティス・ソール</li>
                <li>エルダー・ソール</li>
                <li>ルーサー・ソール</li>
                <li>ダブル・ソール</li>
                <li>ペルソナ・ソール</li>
              </ul>
              ソール・カタリスト可继承<br/>
              但同为カタリスト系的其他几种触媒无法共存
              <div style="margin-top: 15px">
                <el-table
                        :cell-style="{'font-size':'10px'}"
                        :data="[
                      {param1:'ソール・カタリスト',param2:'ソール・カタリスト',param3:'-',success:'10%'},
                      {param1:'ソール・カタリスト',param2:'ソール・カタリスト',param3:'ソール・カタリスト',success:'30%'},
                      {param1:'ソール・カタリスト',param2:'カタリストレセプター',param3:'-',success:'100%'}
                      ]"
                >
                  <el-table-column
                          prop="param1"
                          label="素材1">
                  </el-table-column>
                  <el-table-column
                          prop="param2"
                          label="素材2">
                  </el-table-column>
                  <el-table-column
                          prop="param3"
                          label="素材3">
                  </el-table-column>
                  <el-table-column
                          prop="success"
                          label="成功率">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item @click.native="carousel(2)">
            <div class="item-box">
              <h2>アストラル・ソール(星界魂)的合成</h2>
              当素材中存在四个魂触媒(ソール・カタリスト)和一个深远魂(ダークネス・ソール)
              时出现，成功率10%<br/>
              <div style="margin-top: 15px">
                <el-table
                        :cell-style="{'font-size':'5px'}"
                        :data="[
                      {param1:'ソール・カタリスト',param2:'ソール・カタリスト',param3:'ソール・カタリスト',param4:'ソール・カタリスト',param5:'ダークネス・ソール',success:'30%'}
                      ]"
                >
                  <el-table-column
                          prop="param1"
                          label="素材1">
                  </el-table-column>
                  <el-table-column
                          prop="param2"
                          label="素材2">
                  </el-table-column>
                  <el-table-column
                          prop="param3"
                          label="素材3">
                  </el-table-column>
                  <el-table-column
                          prop="param4"
                          label="素材4">
                  </el-table-column>
                  <el-table-column
                          prop="param5"
                          label="素材5">
                  </el-table-column>
                  <el-table-column
                          prop="success"
                          label="成功率">
                  </el-table-column>
                </el-table>
              </div>
              アストラル・ソール可通过ソールレセプター(魂保)继承<br/>
              <div style="margin-top: 15px">
                <el-table
                        :cell-style="{'font-size':'5px'}"
                        :data="[
                      {param1:'アストラル・ソール',param2:'ソールレセプター',param3:'',success:'10%'},
                      ]"
                >
                  <el-table-column
                          prop="param1"
                          label="素材1">
                  </el-table-column>
                  <el-table-column
                          prop="param2"
                          label="素材2">
                  </el-table-column>
                  <el-table-column
                          prop="param3"
                          label="素材3">
                  </el-table-column>
                  <el-table-column
                          prop="success"
                          label="成功率">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div style="margin-top: 50px">
        <el-steps :active="step" align-center>
          <el-step title="步骤1" description="ソール・カタリスト(魂触媒)的合成" @click.native="loadStep(1,2)"></el-step>
          <el-step title="步骤2" description="アストラル・ソール(星界魂)的合成" @click.native="loadStep(2,2)"></el-step>
        </el-steps>
      </div>
    </div>

    <div v-show="keyword2 === 'エーテル'">
      <div style="margin-top: 50px">
        <el-carousel type="card" arrow="never" :autoplay="false" height="600px" indicator-position="none" ref="carousel3">
          <el-carousel-item @click.native="carousel(1)">
            <div class="item-box">
              <h2>ファクター・カタリスト(因子触媒)的合成</h2>
              当素材中存在以下三种因子能力(ファクター系)时出现，成功率10%
              <ul style="color: #d77494;font-weight: 600">
                <li>ヤマト・ファクター</li>
                <li>マザー・ファクター</li>
                <li>デウス・ファクター</li>
              </ul>
              也可以通过使用道具<span style="color: #d77494;font-weight: 600">特殊能力(ファクターC)</span>直接100%追加<br/>
              ファクター・カタリスト可继承<br/>
              但同为カタリスト系的其他几种触媒无法共存
              <div style="margin-top: 15px">
                <el-table
                        :cell-style="{'font-size':'10px'}"
                        :data="[
                      {param1:'ファクター・カタリスト',param2:'ファクター・カタリスト',param3:'-',success:'10%'},
                      {param1:'ファクター・カタリスト',param2:'ファクター・カタリスト',param3:'ファクター・カタリスト',success:'30%'},
                      {param1:'ファクター・カタリスト',param2:'カタリストレセプター',param3:'-',success:'100%'}
                      ]"
                >
                  <el-table-column
                          prop="param1"
                          label="素材1">
                  </el-table-column>
                  <el-table-column
                          prop="param2"
                          label="素材2">
                  </el-table-column>
                  <el-table-column
                          prop="param3"
                          label="素材3">
                  </el-table-column>
                  <el-table-column
                          prop="success"
                          label="成功率">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item @click.native="carousel(2)">
            <div class="item-box">
              <h2>エーテル・ソール(以太魂)的合成</h2>
              当素材中存在以下三种魂能力其中之二时出现，成功率10%
              <ul style="color: #d77494;font-weight: 600">
                <li>トウオウ・ソール</li>
                <li>フルベガス・ソール</li>
                <li>エスカード・ソール</li>
              </ul>
              也可以通过使用道具<span style="color: #d77494;font-weight: 600">特殊能力(エーテルS)</span>直接100%追加<br/>
              エーテル・ソール可通过ソールレセプター(魂保)继承<br/>
              <div style="margin-top: 15px">
                <el-table
                    :cell-style="{'font-size':'5px'}"
                    :data="[
                      {param1:'エーテル・ソール',param2:'ソールレセプター',param3:'',success:'10%'},
                      ]"
                >
                  <el-table-column
                      prop="param1"
                      label="素材1">
                  </el-table-column>
                  <el-table-column
                      prop="param2"
                      label="素材2">
                  </el-table-column>
                  <el-table-column
                      prop="param3"
                      label="素材3">
                  </el-table-column>
                  <el-table-column
                      prop="success"
                      label="成功率">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item @click.native="carousel(3)">
            <div class="item-box">
              <h2>エーテル・ファクター(以太因子)的合成</h2>
              当素材中存在四个因子触媒(ファクター・カタリスト)和一个以太魂(エーテル・ソール)
              时出现，成功率10%<br/>
              <div style="margin-top: 15px">
                <el-table
                        :cell-style="{'font-size':'5px'}"
                        :data="[
                      {param1:'ファクター・カタリスト',param2:'ファクター・カタリスト',param3:'ファクター・カタリスト',param4:'ファクター・カタリスト',param5:'エーテル・ソール',success:'30%'}
                      ]"
                >
                  <el-table-column
                          prop="param1"
                          label="素材1">
                  </el-table-column>
                  <el-table-column
                          prop="param2"
                          label="素材2">
                  </el-table-column>
                  <el-table-column
                          prop="param3"
                          label="素材3">
                  </el-table-column>
                  <el-table-column
                          prop="param4"
                          label="素材4">
                  </el-table-column>
                  <el-table-column
                          prop="param5"
                          label="素材5">
                  </el-table-column>
                  <el-table-column
                          prop="success"
                          label="成功率">
                  </el-table-column>
                </el-table>
              </div>
              エーテル・ファクター可通过ファクターレセプター(因子保)继承<br/>
              <div style="margin-top: 15px">
                <el-table
                        :cell-style="{'font-size':'5px'}"
                        :data="[
                      {param1:'エーテル・ファクター',param2:'ファクターレセプター',param3:'',success:'10%'},
                      ]"
                >
                  <el-table-column
                          prop="param1"
                          label="素材1">
                  </el-table-column>
                  <el-table-column
                          prop="param2"
                          label="素材2">
                  </el-table-column>
                  <el-table-column
                          prop="param3"
                          label="素材3">
                  </el-table-column>
                  <el-table-column
                          prop="success"
                          label="成功率">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div style="margin-top: 50px">
        <el-steps :active="step" align-center>
          <el-step title="步骤1" description="ファクター・カタリスト(因子触媒)的合成" @click.native="loadStep(1,3)"></el-step>
          <el-step title="步骤2" description="エーテル・ソール(以太魂)的合成" @click.native="loadStep(2,3)"></el-step>
          <el-step title="步骤2" description="エーテル・ファクター(以太因子)的合成" @click.native="loadStep(3,3)"></el-step>
        </el-steps>
      </div>
    </div>

    <div v-show="keyword2 === 'マナ'">
      <div style="margin-top: 50px">
        <el-carousel type="card" arrow="never" :autoplay="false" height="600px" indicator-position="none" ref="carousel4">
          <el-carousel-item @click.native="carousel(1)">
            <div class="item-box">
              <h2>レヴリー・カタリスト(梦境触媒)的合成</h2>
              当素材中存在以下五种梦境能力(レヴリー系)时出现，成功率10%
              <ul style="color: #d77494;font-weight: 600">
                <li>アプレジナ・レヴリー</li>
                <li>エルダー・レヴリー</li>
                <li>ルーサー・レヴリー</li>
                <li>ダブル・レヴリー</li>
                <li>ペルソナ・レヴリー</li>
              </ul>
              也可以通过使用道具<span style="color: #d77494;font-weight: 600">特殊能力(レヴリーC)</span>直接100%追加<br/>
              レヴリー・カタリスト可继承<br/>
              但同为カタリスト系的其他几种触媒无法共存
              <div style="margin-top: 15px">
                <el-table
                    :cell-style="{'font-size':'10px'}"
                    :data="[
                      {param1:'レヴリー・カタリスト',param2:'レヴリー・カタリスト',param3:'-',success:'10%'},
                      {param1:'レヴリー・カタリスト',param2:'レヴリー・カタリスト',param3:'ファクター・カタリスト',success:'30%'},
                      {param1:'レヴリー・カタリスト',param2:'カタリストレセプター',param3:'-',success:'100%'}
                      ]"
                >
                  <el-table-column
                      prop="param1"
                      label="素材1">
                  </el-table-column>
                  <el-table-column
                      prop="param2"
                      label="素材2">
                  </el-table-column>
                  <el-table-column
                      prop="param3"
                      label="素材3">
                  </el-table-column>
                  <el-table-column
                      prop="success"
                      label="成功率">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item @click.native="carousel(2)">
            <div class="item-box">
              <h2>オメガ・メモリア(欧米茄回忆)的合成</h2>
              当素材中存在以下三种能力时出现，成功率10%
              <ul style="color: #d77494;font-weight: 600">
                <li>ファーブラ・ソール</li>
                <li>イストリア・ソール</li>
                <li>オメガ・レヴリー</li>
              </ul>
              也可以通过使用道具<span style="color: #d77494;font-weight: 600">特殊能力(オメガM)</span>直接100%追加<br/>
              オメガ・メモリア可继承<br/>
              <div style="margin-top: 15px">
                <el-table
                    :cell-style="{'font-size':'10px'}"
                    :data="[
                      {param1:'オメガ・メモリア',param2:'オメガ・メモリア',param3:'-',success:'50%'},
                      {param1:'オメガ・メモリア',param2:'オメガ・メモリア',param3:'オメガ・メモリア',success:'80%'},
                      ]"
                >
                  <el-table-column
                      prop="param1"
                      label="素材1">
                  </el-table-column>
                  <el-table-column
                      prop="param2"
                      label="素材2">
                  </el-table-column>
                  <el-table-column
                      prop="param3"
                      label="素材3">
                  </el-table-column>
                  <el-table-column
                      prop="success"
                      label="成功率">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item @click.native="carousel(3)">
            <div class="item-box">
              <h2>マナ・レヴリー(马纳梦境)的合成</h2>
              当素材中存在四个梦境触媒(レヴリー・カタリスト)和一个欧米茄回忆(オメガ・メモリア)
              时出现，成功率10%<br/>
              <div style="margin-top: 15px">
                <el-table
                    :cell-style="{'font-size':'5px'}"
                    :data="[
                      {param1:'レヴリー・カタリスト',param2:'レヴリー・カタリスト',param3:'レヴリー・カタリスト',param4:'レヴリー・カタリスト',param5:'オメガ・メモリア',success:'30%'}
                      ]"
                >
                  <el-table-column
                      prop="param1"
                      label="素材1">
                  </el-table-column>
                  <el-table-column
                      prop="param2"
                      label="素材2">
                  </el-table-column>
                  <el-table-column
                      prop="param3"
                      label="素材3">
                  </el-table-column>
                  <el-table-column
                      prop="param4"
                      label="素材4">
                  </el-table-column>
                  <el-table-column
                      prop="param5"
                      label="素材5">
                  </el-table-column>
                  <el-table-column
                      prop="success"
                      label="成功率">
                  </el-table-column>
                </el-table>
              </div>
              マナ・レヴリー可通过レヴリーレセプター(梦境保)继承<br/>
              <div style="margin-top: 15px">
                <el-table
                    :cell-style="{'font-size':'5px'}"
                    :data="[
                      {param1:'マナ・レヴリー',param2:'レヴリーレセプター',param3:'',success:'10%'},
                      ]"
                >
                  <el-table-column
                      prop="param1"
                      label="素材1">
                  </el-table-column>
                  <el-table-column
                      prop="param2"
                      label="素材2">
                  </el-table-column>
                  <el-table-column
                      prop="param3"
                      label="素材3">
                  </el-table-column>
                  <el-table-column
                      prop="success"
                      label="成功率">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div style="margin-top: 50px">
        <el-steps :active="step" align-center>
          <el-step title="步骤1" description="レヴリー・カタリスト(梦境触媒)的合成" @click.native="loadStep(1,4)"></el-step>
          <el-step title="步骤2" description="オメガ・メモリア(欧米茄回忆)的合成" @click.native="loadStep(2,4)"></el-step>
          <el-step title="步骤2" description="マナ・レヴリー(马纳梦境)的合成" @click.native="loadStep(3,4)"></el-step>
        </el-steps>
      </div>
    </div>

    <div v-show="keyword2 === 'アブソリュート'">
      <div style="margin-top: 50px">
        <el-carousel type="card" arrow="never" :autoplay="false" height="600px" indicator-position="none" ref="carousel5">
          <el-carousel-item @click.native="carousel(1)">
            <div class="item-box">
              <h2>グレア・カタリスト(闪触媒)的合成</h2>
              当素材中存在以下五种闪能力(グレア系)其中四个时出现，成功率10%<br/>
              <span style="color: #0099ff ;font-weight: 600">アンジュール</span>与<span style="color: #0099ff;font-weight: 600">ドゥミヌス</span>为互相替换的关系
              <ul style="color: #d77494;font-weight: 600">
                <li style="color: #0099ff">アンジュール・グレア</li>
                <li style="color: #0099ff">ドゥミヌス・グレア</li>
                <li>ベルージュ・グレア</li>
                <li>フォードルス・グレア</li>
                <li>エクゼクル・グレア</li>
              </ul>
              グレア・カタリスト只可通过触媒保(カタリストレセプター)继承。<br/>
              同为カタリスト系的其他几种触媒无法共存
              <div style="margin-top: 15px">
                <el-table
                    :cell-style="{'font-size':'10px'}"
                    :data="[
                      {param1:'グレア・カタリスト',param2:'カタリストレセプター',param3:'-',success:'100%'}
                      ]"
                >
                  <el-table-column
                      prop="param1"
                      label="素材1">
                  </el-table-column>
                  <el-table-column
                      prop="param2"
                      label="素材2">
                  </el-table-column>
                  <el-table-column
                      prop="param3"
                      label="素材3">
                  </el-table-column>
                  <el-table-column
                      prop="success"
                      label="成功率">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item @click.native="carousel(2)">
            <div class="item-box">
              <h2>フォトナー・グレア(光子闪)的合成</h2>
              当素材中存在以下四种闪能力(グレア系)时出现，成功率10%
              <ul style="color: #d77494;font-weight: 600">
                <li>シバ・グレア</li>
                <li>ヴァルナ・グレア</li>
                <li>ミトラ・グレア</li>
                <li>オリジン・グレア</li>
              </ul>
              フォトナー・グレア可继承<br/>
              <div style="margin-top: 15px">
                <el-table
                    :cell-style="{'font-size':'10px'}"
                    :data="[
                      {param1:'フォトナー・グレア',param2:'-',success:'30%'},
                      {param1:'フォトナー・グレア',param2:'フォトナー・グレア',success:'50%'},
                      ]"
                >
                  <el-table-column
                      prop="param1"
                      label="素材1">
                  </el-table-column>
                  <el-table-column
                      prop="param2"
                      label="素材2">
                  </el-table-column>
                  <el-table-column
                      prop="success"
                      label="成功率">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item @click.native="carousel(3)">
            <div class="item-box">
              <h2>アブソリュート・グレア的合成</h2>
              当素材中存在四个闪触媒(グレア・カタリスト)和一个光子闪(フォトナー・グレア)
              时出现，成功率10%<br/>
              <div style="margin-top: 15px">
                <el-table
                    :cell-style="{'font-size':'5px'}"
                    :data="[
                      {param1:'グレア・カタリスト',param2:'グレア・カタリスト',param3:'グレア・カタリスト',param4:'グレア・カタリスト',param5:'フォトナー・グレア',success:'30%'}
                      ]"
                >
                  <el-table-column
                      prop="param1"
                      label="素材1">
                  </el-table-column>
                  <el-table-column
                      prop="param2"
                      label="素材2">
                  </el-table-column>
                  <el-table-column
                      prop="param3"
                      label="素材3">
                  </el-table-column>
                  <el-table-column
                      prop="param4"
                      label="素材4">
                  </el-table-column>
                  <el-table-column
                      prop="param5"
                      label="素材5">
                  </el-table-column>
                  <el-table-column
                      prop="success"
                      label="成功率">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div style="margin-top: 50px">
        <el-steps :active="step" align-center>
          <el-step title="步骤1" description="グレア・カタリスト(闪触媒)的合成" @click.native="loadStep(1,5)"></el-step>
          <el-step title="步骤2" description="フォトナー・グレア(光子闪)的合成" @click.native="loadStep(2,5)"></el-step>
          <el-step title="步骤2" description="アブソリュート・グレア的合成" @click.native="loadStep(3,5)"></el-step>
        </el-steps>
      </div>
    </div>

    <div v-show="keyword2 === 'ガーディアン'">
      <div style="margin-top: 50px">
        <el-carousel type="card" arrow="never" :autoplay="false" height="600px" indicator-position="none" ref="carousel6">
          <el-carousel-item @click.native="carousel(1)">
            <div class="item-box">
              <h2>ガーディアン・ソール的合成</h2>
              当素材中存在以下四种能力时出现，成功率10%<br/>
              <ul style="color: #d77494;font-weight: 600">
                <li>アストラル・ソール/星界魂</li>
                <li>エーテル・ファクター/以太因子</li>
                <li>マナ・レヴリー/马纳梦境</li>
                <li>アブソリュート・グレア/绝对真理闪</li>
              </ul>
              ガーディアン・ソール可通过魂保(ソールレセプター)继承。<br/>
              同为ソール系的能力无法共存
              <div style="margin-top: 15px">
                <el-table
                    :cell-style="{'font-size':'10px'}"
                    :data="[
                      {param1:'ガーディアン・ソール',param2:'ソールレセプター',param3:'-',success:'100%'}
                      ]"
                >
                  <el-table-column
                      prop="param1"
                      label="素材1">
                  </el-table-column>
                  <el-table-column
                      prop="param2"
                      label="素材2">
                  </el-table-column>
                  <el-table-column
                      prop="param3"
                      label="素材3">
                  </el-table-column>
                  <el-table-column
                      prop="success"
                      label="成功率">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div style="margin-top: 50px">
        <el-steps :active="step" align-center>
          <el-step title="步骤1" description="ガーディアン・ソール的合成" @click.native="loadStep(1,1)"></el-step>
        </el-steps>
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
      step:1,
      input:'',
      input2:'',
      options:
          [
      {
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
            value: 'EV',
            label: 'EV系',
          },{
            value: 'ジソール',
            label: '○○・ジ・ソール/合成魂',
          },{
            value: 'アストラル',
            label: 'アストラル・ソール/星界魂',
          },{
            value: 'エーテル',
            label: 'エーテル・ファクター/以太因子',
          },{
            value: 'マナ',
            label: 'マナ・レヴリー/马纳梦',
          },{
            value: 'アブソリュート',
            label: 'アブソリュート・グレア/绝对真理闪',
          },{
            value: 'ガーディアン',
            label: 'ガーディアン・ソール/守护辉士魂',
          },
      ],
      param:[],
      paramA:[],
      paramPage:[],
      keyword:[],
      keyword2:'EV',
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
    carousel(e) {
      console.log(e)
      this.step = e
    },
    loadStep(e,num){
      this.step = e
      switch (num) {
        case 0:
          this.$refs.carousel0.setActiveItem(e-1)
          break
        case 1:
          this.$refs.carousel1.setActiveItem(e-1)
          break
        case 2:
          this.$refs.carousel2.setActiveItem(e-1)
          break
        case 3:
          this.$refs.carousel3.setActiveItem(e-1)
          break
        case 4:
          this.$refs.carousel4.setActiveItem(e-1)
          break
        case 5:
          this.$refs.carousel5.setActiveItem(e-1)
          break
        case 6:
          this.$refs.carousel6.setActiveItem(e-1)
          break
        default:
          break
      }
      console.log(this.$refs.carousel)
    },
    handleChange(value) {
      this.keyword = value
      this.reloadP()
      console.log(value);
    },
    handleChange2(value) {
      this.keyword2 = value[0]
      this.step = 1
      console.log(value)
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
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background: url("http://42.193.176.171/footer-banner-bg.png") repeat;
}

.el-carousel__item:nth-child(2n+1) {
  /*background-color: #d3dce6;*/
  background: url("http://42.193.176.171/footer-banner-bg.png") repeat;
}
.el-table__header {
  height: 50px !important;
}

.item-box {
  padding: 20px;font-size: 13px;line-height: 25px;max-height: 600px;overflow: scroll;
}
body .el-table th.gutter{
  display: table-cell!important;
}
</style>
