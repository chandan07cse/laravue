<template>
    <div id="message">
        {{message}}
    </div>
</template>
<script>
    export default {
        data(){
            return {
                message:'Frontend With Vue 2 & Backend With Laravel 5.5'
            }

        }
    }
</script>
<style>
    #message{
        margin-top: 50px;
    }
</style>