<template>
    
    <div>
        <h1>hi {{name}}</h1>
        <h2>num:{{$store.state.count}}</h2>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name:'开课吧'
        }
    }
}
</script>
