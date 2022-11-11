<template src="./template.html"/>

<script>
    import SourceService from "@/services/SourceService";
    import {AuthHelpers} from "@/helpers/AuthHelpers";

    export default {
        name: "LoginPage",
        data() {
            return {
                isLoginType: true,
                loginForm: {
                    login: '',
                    password: ''
                },
                registrationForm: {
                    name: '',
                    surname: '',
                    second_name: '',
                    login: '',
                    password: ''
                },
                source: new SourceService({
                    endpoint: 'User',
                    bindings: {
                        login: 'Login'
                    }
                })
            }
        },
        methods: {
            _choseType() {
                this.isLoginType = !this.isLoginType;
            },
            _login() {
                this.source.customQuery('login', this.loginForm).then((result) => {
                    if (result.success) {
                        const res = result.data;
                        AuthHelpers.login(false, res.id, res);
                    }
                });
            },
            _registration() {
                const self = this;
                this.source.create(this.registrationForm).then((result) => {
                    if (result.success) {
                        self.source.update(result.data).then((result) => {
                            if (result.success) {
                                const res = result.data;
                                AuthHelpers.login(false, res.id, res);
                            }
                        });
                    }
                });
            }
        }
    }
</script>

<style scoped src="./style.less" lang="less"></style>