<template src="./template.html"/>

<script>
    import {AuthHelpers} from "@/helpers/AuthHelpers";

    export default {
        name: "HomePage",
        data(){
            return {
                userInfo: AuthHelpers.getUserInfo()
            }
        }
    }
</script>

<style scoped src="./style.less" lang="less"></style>