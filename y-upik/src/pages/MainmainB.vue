<template>
  <div class="home" >
    <nav class="navbar">
      <div class="navbar-content">
        <div class="frame-parent">
          <div class="frame-group">
            <div class="yupik">
              <img class="blackAndWhiteCollection11" alt="" src="/black-and-white-collection-11.svg" @click="onMainClick"/>
              <b class="yu-pik" @click="onMainClick">Y-upik</b>
            </div>
          </div>
          <div class="list1">
            <b class="list-chat">Model</b>
          </div>
          <div class="list2" @click="onApiClick">
            <b class="list-chat" @click="onApiClick">API</b>
          </div>
        </div>


        <div class="additional-content">
          <div class="list3" @click="onSecurityClick">
            <b class="list-chat">Security Assistant</b>
           
          </div>
          <div class="list4" @click="onPrivircyClick">
            <b class="list-chat">Privacy Detector</b>
            
          </div>
          <div class="list5" @click="onChainingClick">
            <b class="list-chat">Chaining</b>
            
          </div>
        </div>
      </div>
    </nav>
    
    <div class="rectangleDiv"> </div> 
      
    <div class="mainmainBChild1">
      
      
        <b class="chatModel1">Model</b>
      <div class="mainmainBChild2" >
        
      <div class="mainmainBChild3">
        <b class="securityAssistant" >Security Assistant</b>
      <b class="p">The assistant-chatbot for information security industries.</b>
      <div class="jyp1"> <img class="icon1" alt="" src="/gochain1.png" vaule="securitychain" /> <img class="icon2"  @click="onSecurityClick" alt="" src="/gorun1.png" /> </div>
    </div>



      <div class="mainmainBChild4">
        <b class="privacyDetector" >Privacy Detector</b>
      <b class="b1">Masking the private information contained in the file such as hwp or docx.</b>
      <div class="jyp2"> <img class="icon3" alt="" src="/gochain2.png" vaule="decetorchain" /> <img class="icon4"  @click ="onPrivircyClick" alt="" src="/gorun2.png" /> </div>
    </div>
   

      <div class="mainmainBChild5"  >
        <b class="privacyDetector">Search engine</b>
      <b class="b1" >Search the content of web page for keyword and summarize using LLM model</b>
        <div class="jyp3"><img class="icon5" alt="" src="/gochain3.png" vaule="searchchai" /> <img class="icon6" @click = "onSearchClick" alt="" src="/gorun3.png" /></div>
      </div>


      <div class="mainmainBChild6" @click ="onChainingClick">
        <b class="privacyDetector" @click = "onChainingClick">Chaining</b>
      <b class="b1" @click = "onChainingClick">임시 설명 임시 설명</b></div>
      

      <div class="mainmainBChild7"> </div>
      
      <div class="mainmainBChild8"> </div>
       
    </div>
      </div>
    </div>
  
</template>

<script>
 import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "MainmainB",
    data(){
      return{
        mode:'dark',
        darkMode:true
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
        onChainingClick(){
          this.$router.push("/chain-ing")
        },
        onSearchClick(){
          this.$router.push("/search-engine")
        }
      },
  });
  
</script>


<style scoped>    
  .home {
    height: 100vh;
    background-color:#000;
  }
  .body{
    margin:0;
  } 
  body{
    margin:0;
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
    cursor:pointer
}

.list-chat {
  position: relative;
  color:#ffffff;
  align-items: center;
}

.list1 {
    align-self: stretch;
    border-radius: 13px;
    background-color: #00c3a4;
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

  .list3 {
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

  .list4 {
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

  .list5 {
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
      height: 200px;
      top: 30px;
      left: 4rem;
    }

    .mainmainBChild4 {
      position: relative;
      border-radius: 13px;
      background-color: #1f1f1f;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      width: 20rem;
      height: 200px;
      bottom: 170px;
      left: 400px;
    }


    .mainmainBChild5 {
      position: relative;
      left: 46rem;
      bottom:370px;
      border-radius: 13px;
      background-color: #1f1f1f;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      width: 20rem;
      height: 200px;
    }

    .mainmainBChild6 {
      position: relative;
      left: 4rem;
      bottom: 350px;
      border-radius: 13px;
      background-color: #1f1f1f;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      width: 20rem;
      height: 200px;

    }

    .mainmainBChild7 {
      position: relative;
      bottom: 550px;
      left: 25rem;
      border-radius: 13px;
      background-color: #1f1f1f;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      width: 20rem;
      height: 200px;
    }
    .mainmainBChild8 {
      position: relative;
      bottom: 750px;
      left: 46rem;
      border-radius: 13px;
      background-color: #1f1f1f;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      width: 20rem;
      height: 200px;
     
    }

    .securityAssistant {
      position: relative;
      font-size: 30px;
      color:#ffffff;
      left: 1rem;
      top:1rem;
    }

    .p {
      position: absolute;
      top:70px;
      left:8%;
      display: inline-block;
      color:#77787f;
      font-weight: 200;
    }
    .b {
      position: absolute;
      top: 471px;
      display: inline-block;
      width: 120px;
      height: 55px;
      
    }

    .jyp1{
      position: relative;
      top:100px;
      left:25px;
    }

    .jyp2{
      position: relative;
      top:140px;
      left:25px;
    }

    .jyp3{
      position: relative;
      top:140px;
      left:25px;
    }
    .privacyDetector {
      position: absolute;
      color:#ffffff;
      font-size:30px;
      left: 1rem;
      top: 1rem;
    }
    .b1 {
      position: absolute;
      top: 70px;
      left: 8%;
      display: inline-block;
      color:#77787f;
      font-weight: 200;
    }

    .icon1{
      cursor:pointer;
    }
    .icon2{
      margin-left:5px;
      cursor: pointer;
    }
    .icon3{
      cursor:pointer;
    }
    .icon4{
      margin-left:5px;
      cursor: pointer;
    }
    .icon5{
      cursor:pointer;
    }
    .icon6{
      margin-left:5px;
      cursor: pointer;
    }
    .list2:hover{
      background-color: #00c3a4;
    }
    .list3:hover{
      background-color: #00c3a4;
    }
    .list4:hover{
      background-color: #00c3a4;
    }
    .list5:hover{
      background-color: #00c3a4;
    }
    .additional-content{
      display:none;
    }

 @media (max-width: 768px) {
  .rectangleDiv,
  .mainmainBChild1,
  .icon,
  .chatModel1,
  .mainmainBChild2,
  .mainmainBChild3,
  .mainmainBChild4,
  .mainmainBChild5,
  .mainmainBChild6,
  .mainmainBChild7,
  .mainmainBChild8 {
    display: none;
  }

  .navbarcontent .frame-group {
    display: none; /* 네비게이션 바의 일반 항목 숨기기 */
  }
  .yupik{
    border-bottom: hidden;
  }
  .additional-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 300px;
  }
  /* 네비게이션 바 스타일 수정 */
  .navbar {
    width: 100%; /* 화면 전체 너비로 설정 */
  }
 


  /* 다른 스타일이 필요한 경우 추가 */
}
</style>

