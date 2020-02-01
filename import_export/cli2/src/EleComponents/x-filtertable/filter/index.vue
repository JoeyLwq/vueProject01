<template>
    <div>
        <combox-filter
            v-if="type=='combox'"
            v-model="currentValue"
            :pname="pname"
            :filtercolumn="filtercolumn"
            :multiple="multiple"
            :defaultFilters="defaultFilters"
            @change="change"
        />
        <date-filter
            v-if="type=='date'"
            v-model="currentValue"
            :pname="pname"
            :filtercolumn="filtercolumn"
            :defaultFilters="defaultFilters"
            @change="change"
        />
    </div>
</template>

<script>
import dateFilter    from './filters/date.vue'
import comboxFilter  from './filters/combox.vue'

export default {
    props{
        value:[String,Number,Array,Object],
        type:{
            type:String,
            default:''
        },
        pname:{
            type:String,
            default:''
        },
        multiple:{
            type:Boolean,
            default:false
        },
        filtercolumn:{
            type:String,
            default:''
        },
        defaultFilters:{
            type:Array,
            default(){return []}
        }
    },
    components:{
        dateFilter,comboxFilter
    },
    data(){
        return {
            currentValue: this.value,
        }
    },
    methods:{
        change(value){
            this.$emit('getFilters',value)
        }
    }
}



}

</script>