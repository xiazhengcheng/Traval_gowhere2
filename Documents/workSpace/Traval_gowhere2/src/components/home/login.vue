<template>
    <div id="loginDiv">
        <div id="user">用户名：
        <input type="text"  ref="userText" placeholder="请输入用户名">
        </div>
        <div id="pwd">密&nbsp;&nbsp;&nbsp;&nbsp;码：
        <input type="text" ref='userPwd' id="pwdText" placeholder="请输入密码">
        </div>
        <button  class="loginBtn" v-on:click="loginClick" type="submit">登 录</button>
        <p> {{ message }} </p>
    </div>

</template>
<script>
// import Cookies from 'js-cookie'
export default {
  name: "login",
  data() {
    return {
      message: "请验证登录信息"
    };
  },
  methods: {
    loginClick() {
      if (this.$refs.userText.value === "xiazhengcheng" && this.$refs.userPwd.value === "123") {
          alert(this.$refs.userText.value + "成功！");
          this.$router.push("/home");

          // this.$store.commit('SET_TASK',this.$refs.userText.value);
      } else {
            alert('请输入正确的用户名、密码')
      }
    }
  }
};
</script>

<style scoped>
p {
  font-size: 16px;
  color: red;
  background-color: antiquewhite;
}
#pwd {
  margin-top: 30px;
}
.loginBtn {
  margin-top: 20px;
}
</style>

