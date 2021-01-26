<template>
    <div>
        <div class="active-box">
            <ul class="tab-tilte">
                <li v-for="item in cur" @click="mark=item.code" :class="{active:mark===item.code}">{{item.name}}</li>
            </ul>
        </div>
        <div class="tab-content">
            <div v-for="data in param" v-if="fuzzyMatch(data.code,mark)">
                {{data.name}}:{{data.effect}}
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
                    },
                    ],
                param:null
            }
        },
        mounted() {
            this.test()
            this.param = params().sAbilityList
        },
        methods: {
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
            }
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
        width: 75%;
        /*line-height: 20px;*/
        /*text-align: center;*/
    }
</style>