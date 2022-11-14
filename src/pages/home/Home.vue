<template src="./template.html"/>

<script>
    import {AuthHelpers} from "@/helpers/AuthHelpers";
    import AddForm from "@/pages/addForm/AddForm";

    export default {
        name: "HomePage",
        components: {AddForm},
        data() {
            return {
                addFormVisible: false
            }
        },
        methods: {
            logout() {
                AuthHelpers.logout();
            },
            changeAddFormVisible() {
                this.addFormVisible = !this.addFormVisible;
            }
        },
        computed: {
            userName() {
                const userData = AuthHelpers.getUserInfo();
                return userData.surname + ' ' + userData.name[0] + '.';
            }
        }
    }
</script>

<style scoped src="./style.less" lang="less"></style>