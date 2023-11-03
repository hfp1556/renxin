<template>
    <div class="index">
        <!-- <img src="../../assets/img/myself.jpg"/> -->

        <p>find</p>
        <p>your life</p>
        <input type="text" placeholder="what's your name?" v-model="user" class="login-input">
        <p title="点我注册/登录" class="login" @click="login">🏃</p>

    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const toPage = (url: string) => {
    router.push(url)
}

const inputColor = ref('#fff')
const user = ref('')

const login = () => {
    if (!user.value.trim()) {
        inputColor.value = "#db3030"
        return
    }

    toPage('/yourSelef')

}
</script>
<style>
@import url('https://fonts.font.im/css?family=Hanalei+Fill|Kirang+Haerang');
</style>
<style scoped lang="scss">
.index {
    font-family: 'Hanalei Fill', cursive;
    border-radius: 20px;
    color: #fff;
    height: 270px;
    padding: 30px 10px;
    box-shadow: 18px 18px 30px rgba(0, 0, 0, 0.2), -18px -18px 30px rgba(255, 255, 255, 1);
    transition: all 0.2s ease-out;
    cursor: pointer;
    position: relative;

    //background-image: url('../../assets/img/myself.jpg');
    // background-size: cover;
    // background-repeat: no-repeat;
    // &:hover {
    //     box-shadow: 0 0 0 rgba(0,0,0,0.2),0 0 0 rgba(255,255,255,0.8),inset 10px 10px 10px rgba(0,0,0,0.1),
    //     inset -18px -18px 30px rgba(255,255,255,1);
    // }
    input {
        height: 40px;
        width: 200px;
        border-radius: 10px;
        outline: none;
        border: 1px solid #fff;
        width: 300px;
        margin-top: 5rem;
        border-color: v-bind(inputColor);
        background-color: v-bind(inputColor);
    }

    img {
        z-index: -1;
        position: absolute;
        height: 100%;
        width: 100%;
        border-radius: 20px;

    }

    .login {
        font-size: 1.3rem;
        margin-bottom: 0;
    }

    .earth {
        font-size: 1.3rem;
        animation: earth-sport 2s ease infinite;
    }

    @keyframes earth-sport {
        0% {
            -webkit-transform: rotate(90deg)
        }

        50% {
            -webkit-transform: rotate(180deg);
        }

        100% {
            -webkit-transform: rotate(360deg);

            //transform: rotate(360deg);
            // margin-left: 100px;
            // -webkit-transform: scaleX(1.5);
            // translate: 100px;
            // transform: translateX(100%);
        }

    }
}</style>