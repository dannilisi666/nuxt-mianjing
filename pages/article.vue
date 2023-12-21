<script setup lang="ts">
import { ref } from "vue";
import { getToken } from "../utils/cookie";
import { useRequest } from "../composables/useRequest";
const list = ref([]);
const getList = async () => {
  // const res = await useFetch<any>("/interview/query", {
  //   baseURL: "http://interview-api-t.itheima.net/h5/",
  //   method: "GET",
  //   headers: {
  //     Authorization: `Bearer ${getToken()}`,
  //   },
  // });
  // console.log(res.data?.value.data?.rows);

  // list.value.push(...res.data.value.data.rows);
  const res = await useRequest("/interview/query");
  list.value.push(...res.rows);
};
getList();
</script>

<template>
  <NuxtLayout name="tabbar">
    <h3>面经首页</h3>
    <div
      v-for="item in list"
      :key="item.id"
      @click="navigateTo(`/detail/${item.id}`)"
    >
      {{ item.stem }}
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
