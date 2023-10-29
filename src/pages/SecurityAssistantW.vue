<template>
 <div>
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
    
    <div class="home">
      <div class="container-box">
        <div class="chat1">
          <img class="pencil-icon" alt="" src="/pencil.png" />
        </div>
        <div class="chat2"></div>
        <div class="chat3"></div>
        <div class=" thumbs">
          <img class="thumbs-up" src="/hand-thumbs-up-fill.png" alt="" />
          <img class="thumbs-down" src="/hand-thumbs-down-fill.png" alt="" />
        </div>
        <div class="request">
        <div class="request1">request 1</div>
        <div class="request2">request 2</div>
        <div class="request3">request 3</div>
      </div>
      <div class="search">
      <input class="conversation" type="text" placeholder="검색어 입력">
      <img class="send-icon" src="/send.png" @click="sendButtonClick">
    </div>

        </div>
      </div>
    </div>
  
</template>

<script>
export default {
  name: 'SecurityAssistantW',
  methods:{
    sendButtonClick(){
      alert('send')
    }
  }
}
</script>

<style scoped>


.home {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* 중앙에서 조금 위로 배치 */
  height: 100vh; /* 화면 전체 높이에 맞추기 */
  padding-top: 20px; /* 위쪽 패딩 추가 */
  padding-left: 200px;

}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #ffffff;
  border-right: 1px solid #a0a1a2;
  
}

.navbar-content {
  padding: 20px;

}

.container-box {
  padding: 20px; 
  border: 1px solid #bfbfc0; 
  border-radius: 13px; 
  width: 75vw; 
  height: 60vh; 
  margin-bottom: 5vh;
}

.chat1 {
  width: 73vw; 
  height: 6vh; 
  background-color: #a8d0ff;
  border-radius: 13px; 
}

.pencil-icon{
  margin-left: 96%;
  margin-top: 0.5%;
  cursor: pointer;
}

.chat2{
 width: 73vw;
 height: 5vh;
}
.chat3{
 width: 73vw;
 height: 38vh;
 background-color: #dfeeff;
 border-radius: 13px; 
}

.thumbs{
  margin-left: 93%;
  margin-top: 2vh;
}
.thumbs-up{
  margin-right: 1vw;
  cursor: pointer;
}

.thumbs-down{
  cursor: pointer; 
}
.request {
  display: flex;
  flex-direction: row; /* 요소를 가로로 배치 */
  justify-content: space-between; /* 가로 공간 동일하게 분배 */
  margin-top: 5vh;
}
  

.request1{
  padding: 20px; 
  border: 1px solid #000; 
  border-radius: 13px; 
  width: 10vw; 
  height: 10vh; 
  border-color: #c0c0c0c0;
  background-color: #edededed;
  cursor: pointer;
}

.request2{
  padding: 20px; 
  border: 1px solid #000; 
  border-radius: 13px; 
  width: 10vw; 
  height: 10vh;
  border-color: #c0c0c0c0;
  background-color: #edededed;
  cursor: pointer;
}

.request3{
  padding: 20px; 
  border: 1px solid #000; 
  border-radius: 13px; 
  width: 10vw; 
  height: 10vh; 
  border-color: #c0c0c0c0;
  background-color: #edededed;
  cursor: pointer;
}



.conversation{
  width: 100%;
  height: 30%;
  background-color: #ffffff;  
  margin-top: 5vh; 
  border-radius: 10px;
  border-color: #0075ff;
  text-align: center;
  outline: #0075ff;
}
.search{
  width: 100%;
  height: 30%;  
  
}
.send-icon{
 cursor: pointer;
 position: fixed;
 top:  82%;
 left: 90%;
}
.robot-icon {
    position: relative;
    width: 3rem;
    height: 2.88rem;
    margin-right: 3%;
  }
.security-assiatant {
    position: relative;
    display: flex;
    align-items: center;
    width: 12.70rem;
    height: 2.5rem;
    
    color:#000;
  }
.robot-parent {
    margin: 0 !important;
    position: absolute;
    top: 0.06rem;
    left: 0rem;
    width: 14.31rem;
    height: 3rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    z-index: 1;
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

.list-chat {
    align-self: stretch;
    flex: 1;
    position: relative;
    color:#000;
  }
.list1 {
    align-self: stretch;
    flex: 1;
    border-radius: 13px;
    background-color: #ffffff;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-lg) var(--padding-13xl);
    cursor: pointer;
  }
  
.list2 {
    align-self: stretch;
    flex: 1;
    border-radius: 13px;
    background-color: #ffffff;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-lg) var(--padding-13xl);
    cursor: pointer;
  }
 
.list3 {
    align-self: stretch;
    flex: 1;
    border-radius: 13px;
    background-color: #ffffff;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-lg) var(--padding-13xl);
    cursor: pointer;
  }
.frame-parent {
    position: relative;
    width: 100%;
    height: 21.94rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2.81rem;
    text-align: center;
    font-size: var(--font-size-8xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }
  






</style>