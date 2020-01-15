<template>
    <div class="title">{{message}}</div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                message: 'Vue的最终实现方案'
            }
        }
    }
</script>

<style scoped>
    .title {
        fontsize: 30px;
        color: green;
    }
</style>

