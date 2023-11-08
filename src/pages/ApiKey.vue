<template>
  <div class="home" >
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
            <b class="list-chat">Model</b>
          </div>
          <div class="list2">
            <b class="list-chat">API</b>
          </div>
        </div>
      </div>
    </nav>
    
    <div class="rectangleDiv"> </div> 
      <div class="mainmainBChild1">
        <img class="icon" alt="" src="/1.svg" />
      <b class="chatModel1">Model</b>
      <div class="mainmainBChild2" >
      <div class="mainmainBChild3" @click ="onSecurityClick">
        <b class="securityAssistant" @click="onSecurityClick">Security Assistant</b>
      <b class="p" @click="onSecurityClick">The assistant-chatbot for information security industries.</b></div>
      <div class="mainmainBChild4" @click ="onPrivircyClick">
        <b class="privacyDetector" @click = "onPrivircyClick">Privacy Detector</b>
      <b class="b1" @click = "onPrivircyClick">Masking the private information contained in the file such as hwp or docx.</b></div>
      <div class="mainmainBChild5"> </div>
      <div class="mainmainBChild6"> </div>
      <div class="mainmainBChild7"> </div>
      <div class="mainmainBChild8"> </div>
       
    </div>
      </div>
    </div>
  
</template>

<script>
 import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "ApiKey",
    data(){
      return{
        mode:'dark'
      }
    },
    methods: {
      onSecurityClick() {
        this.$router.push("/security-assistant-w");
      },
        onMainClick() {
        this.$router.push("/");
      },
        onPrivircyClick() {
          this.$router.push("/privacy-decetor");
        },
        onApiClick(){
          this.$router.push("/api-key");
        },
      },
  });
  
</script>


<style scoped>    
.home {

  height: 100vh; /* 화면 전체 높이에 맞추기 */
  background-color:#000;

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
    margin-left: 7rem;
    color:#ffffff;
    font-size: 36px;
}

.list-chat {
  position: relative;
  color:#ffffff;
  align-items: center;
}

.list1 {
    align-self: stretch;
    border-radius: 13px;
   
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-lg) var(--padding-13xl);
    cursor: pointer;
   
    border: 1px solid #bfbfc0;
    font-size: 27px;
    margin-left:5%;
    margin-right:5%;
    height: 20%;
    margin-top:5%;
  }
  
.list2 {
  align-self: stretch;
    border-radius: 13px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-lg) var(--padding-13xl);
    cursor: pointer;
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
      margin-left: 17rem;
      margin-top:4rem;
      border-radius: 13px;
      background-color: #1f1f1f;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      height: 40rem;
      width: 75rem;
      
    }
    .icon{
      position: absolute;
      bottom:77%;
      left:90%; 
      cursor: pointer;
      overflow:hidden;
      
    }
    .chatModel1 {
      position: relative;
      left:5rem;
      top:4rem;
      font-size: 40px;
      color:#ffffff;
    }

    .mainmainBChild2 {
      left: 3rem;
      top: 5rem;
      position: relative;
      border-radius: 13px;
      background-color: #333539;
      border: 1px solid #24262e;
      box-sizing: border-box;
      width: 68rem;
      height: 30rem;
     
    }

    .mainmainBChild3 {
      position: relative;
      border-radius: 13px;
      background-color: #1f1f1f;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      width: 20rem;
      height: 10rem;
      cursor: pointer;
      top: 3rem;
      left: 4rem;
    }

    .mainmainBChild4 {
      position: relative;
      left: 25rem;
      bottom:7rem;
      border-radius: 13px;
      background-color: #1f1f1f;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      width: 20rem;
      height: 10rem;
      cursor: pointer;
      
    }

    .mainmainBChild5 {
      position: relative;
      left: 46rem;
      bottom:17rem;
      border-radius: 13px;
      background-color: #1f1f1f;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      width: 20rem;
      height: 10rem;
      
    }

    .mainmainBChild6 {
      position: relative;
      left: 4rem;
      bottom: 14rem;
      border-radius: 13px;
      background-color: #1f1f1f;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      width: 20rem;
      height: 10rem;
     
    }

    .mainmainBChild7 {
      position: relative;
      bottom: 24rem;
      left: 25rem;
      border-radius: 13px;
      background-color: #1f1f1f;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      width: 20rem;
      height: 10rem;
    }
    .mainmainBChild8 {
      position: relative;
      bottom: 34rem;
      left: 46rem;
      border-radius: 13px;
      background-color: #1f1f1f;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      width: 20rem;
      height: 10rem;
     
    }

    .securityAssistant {
      position: relative;
      cursor: pointer;
      font-size: 30px;
      color:#ffffff;
      left: 1rem;
      top:1rem;
    }

    .p {
      position: absolute;
      top:50%;
      left:8%;
      cursor: pointer;
      display: inline-block;
      color:#77787f;
      font-weight: 200;
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
      color:#ffffff;
      font-size:30px;
      left: 1rem;
      top: 1rem;
    }
    .b1 {
      position: absolute;
      top: 50%;
      left: 8%;
      cursor: pointer;
      display: inline-block;
      color:#77787f;
      font-weight: 200;
    }

    .list1:hover{
      background-color: #00c3a4;
    }

    .list2:hover{
      background-color: #00c3a4;
    }
</style>