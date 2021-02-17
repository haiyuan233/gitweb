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
                    <div class="list-group-item" v-for="element in list1" :key="element.id">
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
                    <div class="list-group-item" v-for="element in list2" :key="element.id">
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
                    <div class="list-group-item" v-for="element in list3" :key="element.id">
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
                    <div class="list-group-item" v-for="element in list4" :key="element.id">
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
                    <div class="list-group-item" v-for="element in list5" :key="element.id">
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
                    <div class="list-group-item" v-for="element in list6" :key="element.id">
                        {{ element.name }}
                    </div>
                </draggable>
            </el-col>
        </el-row>

        <rawDisplayer class="col-3" :value="list1" title="List 1" />

        <rawDisplayer class="col-3" :value="list2" title="List 2" />
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    let idGlobal = 8;
    export default {
        name: "com-exam-one",
        display: "Custom Clone",
        components: {
            draggable,
        },
        data: function () {
            return {
                list1: [
                    { name: "dog 1", id: 1 },
                    { name: "dog 2", id: 2 },
                    { name: "dog 3", id: 3 },
                    { name: "dog 4", id: 4 }
                ],
                list2: [
                    { name: "cat 5", id: 5 },
                    { name: "cat 6", id: 6 },
                    { name: "cat 7", id: 7 }
                ],
                list3: [
                    { name: "cat 5", id: 5 },
                    { name: "cat 6", id: 6 },
                    { name: "cat 7", id: 7 }
                ],
                list4: [
                    { name: "cat 5", id: 5 },
                    { name: "cat 6", id: 6 },
                    { name: "cat 7", id: 7 }
                ],
                list5: [
                    { name: "cat 5", id: 5 },
                    { name: "cat 6", id: 6 },
                    { name: "cat 7", id: 7 }
                ],
                list6: [
                    { name: "cat 5", id: 5 },
                    { name: "cat 6", id: 6 },
                    { name: "cat 7", id: 7 }
                ],
            };
        },
        methods: {
            log: function(evt) {
                window.console.log(evt);
            },
            cloneDog({ id }) {
                return {
                    id: idGlobal++,
                    name: `cat ${id}`
                };
            }
        }
    }
</script>

<style scoped>

</style>