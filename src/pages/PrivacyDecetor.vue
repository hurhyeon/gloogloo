<template>
  <div class="app" :class="(mode === 'dark') ? 'dark' : 'light'">
    <h1>hi</h1>
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