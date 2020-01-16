<template>
    <el-table
        :data="tableData"
        style="width: 100%"
        height="250">
        <el-table-column fixed="left" type="selection" width="35" v-if="multiple&&columns.length>0"></el-table-column>
        <template v-for="(column,index) in columns">
            <template v-if="column.children && column.children.length>0">
                <el-table-column :key="column" :prop="column.prop" :label="column.label">
                    <template v-for"childColumn in column.children">
                        <el-table-column :key="childColumn" :prop="childColumn.prop" :label="childColumn.label" :min-width="childColumn.width>width?childColumn.width:width">
                            <template slot="header" slot-scope="slot">
                                <template v-if="childColumn.filterConfig&&childColumn.filterConfig.type">
                                    <div :id="`${childColumn.filterConfig.type}_${childColumn.prop}`">
                                        <div>{{childColumn.label}}</div>
                                        <filter
                                            :type="childColumn.type"
                                            :filtercolumn="childColumn.filterConfig.column"
                                            :pname="childColumn.filterConfig.ftn"
                                            :defaultFilters="defaultFilters"
                                            @get-filters="getFilters"
                                        />
                                    </div>
                                </template>
                            </template>
                        </el-table-column>
                    </template>
                </el-table-column>
            </template>

            <template v-else>
                <el-table-column :key="column" align="center" :prop="column.prop" :label="column.label" :min-width="column.width>width?column.width:width">
                    <template slot="header" slot-scope="slot">
                        <template v-if="column.filterConfig&&column.filterConfig.type">
                            <div :id="`${column.filterConfig.type}_${column.prop}`">
                                <div>{{column.label}}</div>
                                <filter
                                    :type="column.type"
                                    :filtercolumn="column.filterConfig.column"
                                    :pname="column.filterConfig.ftn"
                                    :defaultFilters="defaultFilters"
                                    @get-filters="getFilters"
                                />
                            </div>
                        </template>
                    </template>
                </el-table-column>
            </template>
        </template>
    </el-table>
</template>

<script>
import Filter from './filter/index.vue'

export default {
    name: 'tableTest',
    props: {
        multiple:{
            type:Boolean,
            default:true
        },
        columns:{
            type:Array,
            default(){return []}
        },
        data{
            type:Array,
            default(){return []}
        }
    },
    components:{
        Filter
    }
    data(){
        return {}
    }
}
</script>