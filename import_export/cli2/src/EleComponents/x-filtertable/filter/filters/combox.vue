<template>
    <el-select
        v-model="currentValue"
        filterable
        :multiple="multiple"
        placeholder="请选择"
        @focus="handleFocus"
        @change="change"
    >
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
    </el-select>
</template>

<script>
export default {
    props:{
        pname:{
            type:String,
            default:''
        },
        filterKey:{
            type:String,
            default:''
        },
        filterColumn:{
            type:String,
            default:''
        },
        multiple:{
            type:Boolean,
            default:true
        },
        defaultFilters:{
            type:Array,
            default(){return []}
        },
        value:[String,Array,Number,Object]
    },
    data(){
        return {
            loading:false,
            currentValue:this.value,
            options:[
                {
                    value:'选项一',
                    label:'苹果'
                },
                {
                    value:'选项二',
                    label:'香蕉'
                }
            ]
        }
    },
    methods:{
        handleFocus(){
        },
        change(value){
            let data={

            }
            this.$emit("change", data)
        }
    }
}
</script>