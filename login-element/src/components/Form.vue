<template>
    <form>
        <slot></slot>
    </form>
</template>

<script>
    export default {
        provide(){
            return {
                kForm: this
            }
        },
        props:{
            model:{
                type:Object,
                required:true
            },
            rules:{
                type:Object
            }
        }
    }
</script>

<style scoped>

</style>