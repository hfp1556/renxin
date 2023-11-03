<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

//上传照片并转换成base64存储在浏览器客户端
const uploadImg = (e: MouseEvent) => {
    let file = ((e.target as any)?.files as any)[0]

  let fileReader = new FileReader()
  fileReader.readAsDataURL(file)
  fileReader.onload = (e) => {
    let imgBase64 = e.target?.result
    window.localStorage.setItem('renbg', imgBase64 as string)
    let imgSrc = localStorage.getItem('renbg')
    if (imgSrc) {
          document.querySelector('img')?.setAttribute('src', imgSrc)
    }
  }
}
</script>

<template>
  <img src="./assets/img/myself.jpg" />
  <label title="点我自定义你的官网背景" for="avatar">🙃</label>
  <input type="file" accept="image/png, image/jpeg" id="avatar" name="avatar" hidden @input="uploadImg" />
  <HelloWorld msg="任性的人" />
</template>

<style scoped>
img {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  top: 0;
  left: 0;
  object-fit: cover;
}

label {
  font-size: 2rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
}
</style>
