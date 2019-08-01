<template>
    <div id="loginDiv">
        <div id="user">用户名：
        <input type="text"  ref="userText" placeholder="请输入用户名">
        </div>
        <div id="pwd">密&nbsp;&nbsp;&nbsp;&nbsp;码：
        <input type="text"  id="pwdText" placeholder="请输入密码">
        </div>
        <button  class="loginBtn" v-on:click="loginClick" type="submit">登 录</button>
        <p> {{ message }} </p>
    </div>

</template>
<script>
export default {
    name: 'login',
    data () {
        return {
            message: '请验证登录信息',
        }
    },
    methods: {
        loginClick(){
            this.$router.push('/home');
            alert(this.$refs.userText.value + '成功！');
        }
    }
}

</script>

<style>
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

