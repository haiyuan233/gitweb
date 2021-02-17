<template>
    <div class="row">
        <el-row :gutter="24">
            <el-col :span="4">
                <h3>Draggable</h3>
                <draggable
                        class="dragArea list-group"
                        :list="list1"
                        :group="{ name: 'people', pull: 'clone', put: false }"
                        :clone="cloneDog"
                        @change="log"
                >
                    <div class="list-group-item" v-for="element in list1" :key="element.code" style="font-size: 11px">
                        {{ element.name }}
                    </div>
                </draggable>
            </el-col>
            <el-col :span="4">
                <h3>Draggable 1</h3>
                <draggable
                        class="dragArea list-group"
                        :list="list2"
                        group="people"
                        @change="log"
                >
                    <div class="list-group-item" v-for="element in list2" :key="element.code">
                        {{ element.name }}
                    </div>
                </draggable>
            </el-col>
            <el-col :span="4">
                <h3>Draggable 2</h3>
                <draggable
                        class="dragArea list-group"
                        :list="list3"
                        group="people"
                        @change="log"
                >
                    <div class="list-group-item" v-for="element in list3" :key="element.code">
                        {{ element.name }}
                    </div>
                </draggable>
            </el-col>
            <el-col :span="4">
                <h3>Draggable 3</h3>
                <draggable
                        class="dragArea list-group"
                        :list="list4"
                        group="people"
                        @change="log"
                >
                    <div class="list-group-item" v-for="element in list4" :key="element.code">
                        {{ element.name }}
                    </div>
                </draggable>
            </el-col>
            <el-col :span="4">
                <h3>Draggable 4</h3>
                <draggable
                        class="dragArea list-group"
                        :list="list5"
                        group="people"
                        @change="log"
                >
                    <div class="list-group-item" v-for="element in list5" :key="element.code">
                        {{ element.name }}
                    </div>
                </draggable>
            </el-col>
            <el-col :span="4">
                <h3>Draggable 5</h3>
                <draggable
                        class="dragArea list-group"
                        :list="list6"
                        group="people"
                        @change="log"
                >
                    <div class="list-group-item" v-for="element in list6" :key="element.code">
                        {{ element.name }}
                    </div>
                </draggable>
            </el-col>
        </el-row>

<!--        <rawDisplayer class="col-3" :value="list1" title="List 1" />-->

<!--        <rawDisplayer class="col-3" :value="list2" title="List 2" />-->
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    import {params} from '/docs/js/param'
    // let idGlobal = 8;
    export default {
        name: "com-exam-one",
        display: "Custom Clone",
        components: {
            draggable,
        },
        data: function () {
            return {
                list1: [

                ],
                list2: [

                ],
                list3: [

                ],
                list4: [

                ],
                list5: [

                ],
                list6: [

                ],
            };
        },
        mounted() {
            this.list1 = params().abilityList
        },
        methods: {
            log: function(evt) {
                window.console.log(evt);
            },
            cloneDog({ name }) {
                return {
                    // id: `${e.code}`,
                    // gid: `${e.gid}`,
                    // lvup: `${e.lvup}`,
                    // extend: `${e.extend}`,
                    // generate: `${e.generate}`,
                    // status: `${e.status}`,
                    // effect: `${e.effect}`,
                    // cls: `${e.cls}`,
                    // dom: `${e.dom}`,
                    name: `${name}`
                };
            }
        }
    }
</script>

<style scoped>

</style>