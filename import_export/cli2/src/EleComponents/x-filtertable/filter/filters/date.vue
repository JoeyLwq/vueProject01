<template>
    <el-date-picker
        v-model="currentValue"
        type="date"
        placeholder="请选择"
        format="yyyy-MM-dd"
        value-format="yyyy-MM-dd"
        @change="change"
    />
</template>

<script>

export default {
    props: {
        filterKey:{
            type:String,
            default:''
        },
        filterColumn:{
            type:String,
            default:''
        },
        defaultFilters:{
            type:Array,
            default(){return []}
        },
        bardata:{
            type:Array,
            default:(){return []}
        },
        value:[String,Array,Number,Object]
    },
    data(){
        return {
            currentValue: '',
        }
    },
    methods: {
        change(){
        },
    }
}
</script>