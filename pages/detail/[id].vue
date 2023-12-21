<script setup lang="ts">
const route = useRoute();
console.log(route);
</script>

<template>
  <h3>{{ $route.params }}</h3>
</template>

<style scoped></style>
