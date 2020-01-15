<template>

</template>

<script>

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

    }



}

</script>