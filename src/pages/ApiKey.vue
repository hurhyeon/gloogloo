<template>
  <div class="home" >
    <nav class="navbar">
      <div class="navbar-content">
        <div class="frame-parent">
          <div class="frame-group">
            <div class="yupik">
              <img class="blackAndWhiteCollection11" alt="" src="/black-and-white-collection-11.svg" @click="onMainClick"/>
              <b class="yu-pik">Y-upik</b>
            </div>
          </div>
          <div class="list1" @click="onMainClick">
            <b class="list-chat" @click="onMainClick">Model</b>
          </div>
          <div class="list2">
            <b class="list-chat">API</b>
          </div>
        </div>


        <div class="additional-content">
          <div class="list3" @click="onSecurityClick">
            <b class="list-chat">Security Assistant</b>
           
          </div>
          <div class="list4" @click="onPrivircyClick">
            <b class="list-chat">Privacy Detector</b>
            
          </div>
        </div>
      </div>
    </nav>
    
    <div class ="blackspace"></div>
    
    <div class ="mainspace">
      <h1>API 명세페이지</h1>
      <p>이 문서는 Security Assistant API와 Privacy Decetor API를 사용한 구현 방법을 안내합니다.</p>

      <hr style="width: 70rem; margin: 20px 0;">

      <h1>Security Assistant</h1>

      <h1>요청</h1>

      <h2>쿼리 파라미터</h2>


      
      
      
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
  background-color:#333539;

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
    background-color: #00c3a4;
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
  .blackAndWhiteCollection11 {
      position: absolute;
      top:5%;
      left: 10%;
      overflow: hidden;
      cursor: pointer;
    }

  
    .blackspace{
      height: 5rem;
      border-bottom: solid 1px #a0a1a2;
      background-color: #1f1f1f;
    }

    .mainspace{
      margin-left: 300px;
      margin-top: 50px;
    }


    .api1 {
    font-size: 30px;
    color:#ffffff;
  }











    .list1:hover{
      background-color: #00c3a4;
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
    .additional-content{
      display:none;
    }

    h1,p,h2{
      color:#ffffff
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

