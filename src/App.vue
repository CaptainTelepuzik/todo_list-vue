<template>
    <div class="dark-theme full-screen App__wrapper "><h1>Первое приложение!</h1>
        <p>
            <!-- используем компонент router-link для навигации -->
            <!-- входной параметр `to` определяет URL для перехода -->
            <!-- `<router-link>` по умолчанию отображается тегом `<a>` -->
            <router-link to="/login">Перейти к Login</router-link>
            <router-link to="/">Перейти к Home</router-link>

        </p>
        <!-- отображаем тут компонент, для которого совпадает маршрут -->
        <router-view></router-view>
    </div>

</template>

<script>


    export default {
        name: 'App',
        components: {}
    }
</script>


<style src="./assets/style.less" lang="less"></style>
<style lang="less">
    .App__wrapper {
        background: var(--main-background-color);
    }
</style>

