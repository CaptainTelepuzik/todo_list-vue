<template>
    <div class="dark-theme full-screen App__wrapper">
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'App',
        components: {}
    }
</script>

<style lang="less" src="./assets/style.less"></style>
<style lang="less">
  .App__wrapper {
    background: var(--main-background-color);
  }
</style>
