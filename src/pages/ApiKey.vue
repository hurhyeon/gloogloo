<template>
  <div class="app" :class="(mode === 'dark') ? 'dark' : 'light'">
    <nav class="navbar">
      <div class="navbar-content">
        <div class="frame-parent">
          <div class="frame-group">
            <div class="yupik">
              <img class="blackAndWhiteCollection11" alt="" src="/black-and-white-collection-11.svg" @click="onMainClick"/>
              <b class="yu-pik">Yu-pik</b>
            </div>
          </div>
          <div class="list1">
            <b class="list-chat">chat model</b>
          </div>
          <div class="list2">
            <b class="list-chat">api key</b>
          </div>
        </div>
      </div>
    </nav>
    <div class = "home">
    <div class="rectangleDiv" />
      <div class="mainmainBChild1" />
      <img class="icon" alt="" src="/1.svg" />
      <b class="chatModel1">Chat Model</b>
      <div class="mainmainBChild2" />
      <div class="mainmainBChild3" @click ="onSecurityClick" />
      <div class="mainmainBChild4" @click ="onPrivircyClick"/>
      <div class="mainmainBChild5" />
      <div class="mainmainBChild6" />
      <div class="mainmainBChild7" />
      <div class="mainmainBChild8" />
      <b class="securityAssistant" @click="onSecurityClick">Security Assistant</b>
      <b class="p" @click="onSecurityClick">챗봇이다.</b>
      <b class="privacyDetector" @click = "onPrivircyClick">Privacy Detector</b>
      <b class="b1" @click = "onPrivircyClick">디텍터이다.</b>
    </div>
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

  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    background-color: #1f1f1f;
    border-right: 1px solid #a0a1a2;
  
}



.frame-parent {
  position: relative;
  width: 100%;
  height: 21.94rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10%;
  text-align: center;
  font-size: var(--font-size-8xl);
  color: var(--color-black);
  font-family: var(--font-inter);
}
.frame-group {
  width: 14.31rem;
  height: 3.13rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: 0.63rem;
  text-align: left;
  font-size: 1.25rem;
}  
.yupik {
  margin: 0 !important;
  position: absolute;
  left: 0rem;
  width: 15.6rem;
  height: 5rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  border-bottom:1px solid#a0a1a2;
  
}
  
.yu-pik {
    position: relative;
    display: flex;
    align-items: center;
    width: 29.7rem;
    height: 3.5rem;
    margin-left: 43%;
    color:#ffffff;
    font-size: 36px;
}

.list-chat {
  position: relative;
  color:#000;
  align-items: center;
}

.list1 {
    align-self: stretch;
    border-radius: 13px;
    background-color: #a0a1a2;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-lg) var(--padding-13xl);
    cursor: pointer;
    background-color: #00c3a4;
    border: 1px solid #bfbfc0;
    font-size: 27px;
    margin-left:5%;
    margin-right:5%;
    height: 20%;
  }
  
.list2 {
  align-self: stretch;
    border-radius: 13px;
    background-color: #a0a1a2;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-lg) var(--padding-13xl);
    cursor: pointer;
    background-color: #00c3a4;
    border: 1px solid #bfbfc0;
    font-size: 27px;
    margin-left:5%;
    margin-right:5%;
    height: 20%;
    
  }
 
  .blackAndWhiteCollection11 {
      position: absolute;
      top:5%;
      left: 10%;
      overflow: hidden;
      cursor: pointer;
    }

    .rectangleDiv {
      
      background-color: #333539;
      border: 1px solid #bfbfc0;
      border-left: hidden;
      border-top: hidden;
    }
    .mainmainBChild1{
      margin-left:17%;
      margin-top:2%;
      border-radius: 13px;
      background-color: #1f1f1f;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      height: 90vh;
      width: 80vw;
    }
    .icon{
      position: relative;
      margin-left: 68%;
      width: 50vw;
      height: 5vh;
      cursor: pointer;
      bottom: 38rem;
    }
    .chatModel1 {
      position: relative;
      bottom: 38rem;
      left: 23%;
      font-size: 40px;
     
    }

    .mainmainBChild2 {
      position: relative;
      bottom: 38rem;
      left: 23%;
      border-radius: 13px;
      background-color: #333539;
      border: 1px solid #24262e;
      box-sizing: border-box;
      width: 70%;
      height: 70vh;
      
    }

    .mainmainBChild3 {
      position: absolute;
      top: 30%;
      left: 25%;
      border-radius: 13px;
      background-color: #1f1f1f;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      width: 20%;
      height: 20%;
      cursor: pointer;
      
    }

    .mainmainBChild4 {
      position: absolute;
      top: 30%;
      left: 48%;
      border-radius: 13px;
      background-color: #1f1f1f;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      width: 20%;
      height: 20%;
      cursor: pointer;
      
    }

    .mainmainBChild5 {
      position: absolute;
      top: 30%;
      left: 71%;
      border-radius: 13px;
      background-color: #1f1f1f;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      width: 20%;
      height: 20%;
      
    }

    .mainmainBChild6 {
      position: absolute;
      top: 60%;
      left: 25%;
      border-radius: 13px;
      background-color: #1f1f1f;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      width: 20%;
      height: 20%;
     
    }

    .mainmainBChild7 {
      position: absolute;
      top: 60%;
      left: 48%;
      border-radius: 13px;
      background-color: #1f1f1f;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      width: 20%;
      height: 20%;
     
    }
    .mainmainBChild8 {
      position: absolute;
      top: 60%;
      left: 71%;
      border-radius: 13px;
      background-color: #1f1f1f;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      width: 20%;
      height: 20%;
     
    }

    .securityAssistant {
      position: absolute;
      cursor: pointer;
      top: 33%;
      left: 27%;
      
    }

    .p {
      position: absolute;
      top:40%;
      left:27%;
      cursor: pointer;
      display: inline-block;
     
      
    }
    .b {
      position: absolute;
      top: 471px;
      cursor: pointer;
      display: inline-block;
      width: 120px;
      height: 55px;
      
    }
    .privacyDetector {
      position: absolute;
      cursor: pointer;
      top: 33%;
      left: 50%;
      
    }
    .b1 {
      position: absolute;
      top: 40%;
      left: 50%;
      cursor: pointer;
      display: inline-block;
   
     
    }
</style>