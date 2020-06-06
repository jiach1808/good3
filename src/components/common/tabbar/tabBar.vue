<template>
    <div id="tab-bar">
        <slot></slot>

    </div>
</template>

<script>
    export default {
        name: "tabBar"
    }
</script>

<style scoped>
  #tab-bar{
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    box-shadow: 0 -5px 2px rgb(100 100 1000 .2);
  }

</style>
