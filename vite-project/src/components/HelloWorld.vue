<script setup lang="ts">
import login from '../views/login/index.vue'
defineProps<{ msg: string }>()

const showLoginBox = ref(false)

onMounted(()=>{
  typing()
})

//打字效果
const typing =() => {
  const h1=document.querySelector('h1')
  if (!h1) {
    return
  }
  h1.innerHTML = h1?.textContent?.replace(/\S/g,"<span>$&</span>") as string
  // 让文字逐个展示
  let delay=0
  document.querySelectorAll('span').forEach((span,index)=>{
    if(index===0) {
      delay+=0.1
      return
    }
    delay+=0.8
     if(index===3) {
      delay+=0.3
      setTimeout(()=>{
        document.querySelector('h1')?.classList.add('ended')
      },5500)
     }
    span.style.setProperty('--delay',`${delay}s`)
  })
}
</script>

<template>
  <div class="box">
    <!--登录-->
    <login v-if="showLoginBox" class="slide-bottom"></login>
    <h2 @click="showLoginBox = true" :class="{ 'flip-scale-up-hor': showLoginBox }" class="vibrate-1">Check in 🥳</h2>
  </div>
  <h1>{{ msg }}</h1>
</template>

<style scoped lang="scss">
h1 {    
  height: 60px;
  position: relative; 
  //width: 2ch;
  //overflow: hidden;
// animation: 2s typing steps(4,jump-none) forwards;
  :deep(span) {  
   // --delay:10s;   
    display: inline-block;
    overflow: hidden;
    width: 0ch;
    animation: 1s text-in ease-in-out forwards;
    animation-delay: var(--delay);
  }  
  &::after {
    content:'';
    display:inline-block;
    position: absolute;
    width: 5px;
    background-color: #213547;
    height: 50px;
    border-radius: 2px;
   top:3px;
   animation: 1.1s cursor steps(2,jump-none) infinite;
   right: -10px;
  }

}
h1.ended::after {
  display: none;
}
.text-focus-in {
  -webkit-animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}

.vibrate-1 {
  -webkit-animation: vibrate-1 0.3s linear infinite both;
  animation: vibrate-1 0.3s linear infinite both;
}

.flip-scale-up-hor {
  -webkit-animation: flip-scale-up-hor 0.5s linear both;
  animation: flip-scale-up-hor 0.5s linear both;
}

.slide-bottom {
  -webkit-animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.7s both;
}

@keyframes cursor {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes text-in {
  from {
    width: 0ch;
  }
  to {
    width: 2ch;
  }
}
@keyframes typing {
  from {
    width: 2ch;
  }
  to {
    width: 8ch;
  }
}

@keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }

  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}

@keyframes vibrate-1 {
  0% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }

  20% {
    -webkit-transform: translate(-2px, 2px);
    transform: translate(-2px, 2px);
  }

  40% {
    -webkit-transform: translate(-2px, -2px);
    transform: translate(-2px, -2px);
  }

  60% {
    -webkit-transform: translate(2px, 2px);
    transform: translate(2px, 2px);
  }

  80% {
    -webkit-transform: translate(2px, -2px);
    transform: translate(2px, -2px);
  }

  100% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
}

@keyframes slide-bottom {
  0% {
    display: none;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
  }
}

@keyframes flip-scale-up-hor {
  0% {
    -webkit-transform: scale(1) rotateX(0);
    transform: scale(1) rotateX(0);
  }

  50% {
    -webkit-transform: scale(2.5) rotateX(-90deg);
    transform: scale(2.5) rotateX(-90deg);
  }

  100% {
    -webkit-transform: scale(1) rotateX(-180deg);
    transform: scale(1) rotateX(-180deg);
    display: none;
  }
}

@keyframes flip-scale-down-hor {
  0% {
    -webkit-transform: scale(1) rotateX(0);
    transform: scale(1) rotateX(0);
  }

  50% {
    -webkit-transform: scale(0.4) rotateX(90deg);
    transform: scale(0.4) rotateX(90deg);
  }

  100% {
    -webkit-transform: scale(1) rotateX(180deg);
    transform: scale(1) rotateX(180deg);
  }
}

h2 {
  cursor: pointer;

  span {
    color: rebeccapurple;
  }
}

.read-the-docs {
  color: #888;
}
</style>
