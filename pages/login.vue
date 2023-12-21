<script setup lang="ts">
import { ref } from "vue";
import instance from "../utils/request";
const form = ref({
  username: "",
  password: "",
});
const login = async () => {
  const res = await instance({
    method: "post",
    url: "/user/login",
    data: form.value,
  });
  //
  setToken(res.data.token);
  showSuccessToast("登录成功");
  navigateTo("/");
};
</script>

<template>
  <div class="register-container">
    <van-cell-group>
      <van-field
        v-model="form.username"
        label="用户名"
        placeholder="请输入用户名"
      ></van-field>
      <van-field
        v-model="form.password"
        label="密码"
        placeholder="请输入密码"
        type="password"
      ></van-field>
      <van-button
        type="primary"
        text="登录"
        @click="login"
        size="large"
        class="btn"
      ></van-button>
    </van-cell-group>
  </div>
</template>

<style scoped>
.register-container {
  padding: 20px;
}
.btn {
  margin-top: 30px;
}
</style>
