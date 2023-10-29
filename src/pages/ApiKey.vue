<template>
  <div class="app" :class="(mode === 'dark') ? 'dark' : 'light'">
    <nav class="navbar">
      <div class="navbar-content">
        <div class="frame-parent">
          <div class="frame-group">
            <div class="robot-parent">
              <img class="robot-icon" alt="" src="/robot.png" />
              <b class="security-assiatant">security assistant</b>
            </div>
          </div>
          <div class="list1">
            <b class="list-chat">or 1=1</b>
          </div>
          <div class="list2">
            <b class="list-chat">sql injection</b>
          </div>
          <div class="list3">
            <b class="list-chat">aaaa</b>
          </div>
        </div>
      </div>
    </nav>

  
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

<style scoped>
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

    .navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #1f1f1f;
  border-right: 1px solid #a0a1a2;
  
}

.navbar-content {
  padding: 20px;

}
</style>