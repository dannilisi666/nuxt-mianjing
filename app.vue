<script setup lang="ts">
useSeoMeta({
  // title: "面经", //基础用法
  titleTemplate: (title) => {
    //进阶用法
    return title ? `${title}_一起找工作` : "面试经验";
  },
  description: "找工作的宝典",
  keywords: "找工作",
});
</script>
<template>
  <!-- <NuxtLink to="/">主页</NuxtLink> <br />
  <NuxtLink to="/my">用户页</NuxtLink> <br />
  <NuxtLink to="/article">文章列表页</NuxtLink> <br />
  <NuxtLink to="/article/detail">文章详情页</NuxtLink> <br /> -->

  <NuxtPage></NuxtPage>
</template>
