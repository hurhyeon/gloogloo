<script setup>
import { ref } from 'vue'

const name = ref('Vue.js')

function color(event) {
  alert(`안녕 ${name.value}!`)
  // 'event'는 네이티브 DOM 이벤트 객체입니다.
  if (event) {
    alert(event.target.tagName)
  }
}
</script>x
<template>
  <div class="app" :class="(mode === 'dark') ? 'dark' : 'light'">
    <div>
    <h1>hi1</h1>
    <h1>hi2</h1>
    </div>
	<button @click="color">환영하기</button>
    
  </div>
  </template>

<script>
export default {
      name: "app",
      data(){
        return{
          mode:'dark'
        }
      },
    }

</script>
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    .app{
      width: 100vw;
      min-height: 100vw;
      background: #f3f3f3;
      color:#1f1f1f;
    }

    .dark{
      background: #1f1f1f;
      color: #f3f3f3;
    }
  </style>