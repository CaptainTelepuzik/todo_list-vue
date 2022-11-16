<template src="./template.html"/>

<script>
    import {AuthHelpers} from "@/helpers/AuthHelpers";
    import AddForm from "@/pages/addForm/AddForm";
    import SourceService from "@/services/SourceService";
    import Task from "@/components/Task/Task";

    export default {
        name: "HomePage",
        components: {AddForm, Task},
        data() {
            return {
                addFormVisible: false,
                items: [],
                source: new SourceService({endpoint: 'Task'})
            }
        },
        beforeMount() {
            this.getItems();
        },
        methods: {
            logout() {
                AuthHelpers.logout();
            },
            changeAddFormVisible() {
                this.addFormVisible = !this.addFormVisible;
            },
            getItems() {
                this.source.list().then((result) => {
                    if (result.success) {
                        this.items = result.data;
                    }
                });
            }
        },
        computed: {
            userName() {
                const userData = AuthHelpers.getUserInfo();
                return userData.surname + ' ' + userData.name[0] + '.';
            }
        },

    }
</script>

<style scoped src="./style.less" lang="less"></style>