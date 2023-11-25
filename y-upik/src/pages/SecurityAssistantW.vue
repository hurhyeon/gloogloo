<template>
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, user-scalable=no"
    />
  </head>
 
  <div class="container"> 
    <nav class="navbar">
      <div class="navbar-content">
        <div class="frame-parent">
          <div class="frame-group">
            <div class="robot-parent">
              <img class="robot-icon" alt="" src="/robot.png" />
              <b class="security-assiatant">security assistant</b>
            </div>
            <img class="blackAndWhiteCollection11" alt="" src="/black-and-white-collection-11.svg" @click="onMainClick"/>
          </div>
          <!-- <div class="list1">
            <b class="list-chat">or 1=1</b>
          </div>
          <div class="list2">
            <b class="list-chat">sql injection</b>
          </div>
          <div class="list3">
            <b class="list-chat">aaaa</b>
          </div> -->
        </div>
      </div>
    </nav>
   
    <div class="home">
      <!-- <div class="container-box">
        <div class="chat1">
          <img class="pencil-icon" alt="" src="/pencil.png" />
        </div>
        <div class="chat2"></div>
        <div class="chat3"></div> -->
        <!-- <div class=" thumbs">
          <img class="thumbs-up" src="/hand-thumbs-up-fill.png" alt="" />
          <img class="thumbs-down" src="/hand-thumbs-down-fill.png" alt="" />
        </div> -->
        <!-- <div class="request">
        <div class="request1">request 1</div>
        <div class="request2">request 2</div>
        <div class="request3">request 3</div>
      </div> -->
      <!-- <div class="search">
      <input class="conversation" type="text" placeholder="검색어 입력">
      <img class="send-icon" src="/send.png" @click="sendButtonClick">
    </div> -->
    <div ref="messageContainer" class="container-box" >
          <div v-for="(message, index) in messages" :key="index" class="message" :class="{ 'user-message': message.sender === 'user', 'bot-message': message.sender === 'bot' }">
        {{ message.text }}
     
      </div>
    </div>
    
    <div class="search">
      <input class="conversation" v-model="userMessage" @keydown.enter="sendMessage" type="text" placeholder="메시지를 입력하세요..." />
      <!-- <img class="send-icon" src="/send.png" @click="sendMessage"> -->
    
    </div>
   
    </div> 
      </div>
    <!-- </div> -->
  
</template>

<script>
export default {
  name: "SecurityAssistantW",
  data() {
    return {
      userMessage: '',
      messages: [],
      apiKey: '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',
      apiEndpoint: 'http://118.36.189.70:8000/get_prompt/1',
      conversation: [],
      aiResponse:'',
    };
  },

  
  methods: {
    onMainClick() {
      this.$router.push("/");
    },

    addMessage(sender, text) {
       this.messages.push({ sender, text });
     },
     
    async fetchPromptFromAPI(question) {
  try {
    const apiUrl = `http://118.36.189.70:8000/get_prompt/1?q=${encodeURIComponent(question)}`;
    console.log('API URL:', apiUrl);
    const response = await fetch(apiUrl,{mode:'cors'});

      if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      console.error('네트워크에 문제가 있습니다. 인터넷 연결을 확인하세요.');
    } else {
      console.error('API에서 프롬프트를 가져오는 동안 오류 발생:', error);
    }
  }
},
     
streamAIResponse(response) {
          console.log('AI 응답 처리:', response);
        
        },
    async fetchAIResponse(prompt) {
      this.conversation.push({ role: 'user', content: prompt });
},

    async sendMessage() {
      const message = this.userMessage.trim();
      if (message.length === 0) return;

      try{
      this.addMessage('user', message);
      this.userMessage = '';
      
     
      const aiResponse = await this.fetchAIResponse(message);

      const questionResponse = await this.fetchPromptFromAPI(message);
  
    
     console.log('Question Response:', questionResponse);
     
     this.$nextTick(() => {
  this.addMessage('bot', questionResponse);
});

      this.streamAIResponse(aiResponse);
    } catch (error){
      console.error('메시지 전송중 오류 발생',error);
    }
    },
  }
  }

</script>

<style scoped>

.home {
  justify-content: center;
  align-items: flex-start; 
  height: 100vh; 
  padding-top: 20px; 
  padding-left: 300px;

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
  position:relative;
  padding: 20px; 
  border: 1px solid #bfbfc0; 
  border-radius: 13px; 
  width: 75vw; 
  height: 60vh; 
  margin-bottom: 5vh;
  overflow-y: auto;
}

.container-box::-webkit-scrollbar {
  width: 8px; /* 수직 스크롤바의 너비 조절 */
  
}

.container-box::-webkit-scrollbar-track {
  
  border-radius: 13px;
}

.container-box::-webkit-scrollbar-thumb {
  background: #888; /* 스크롤바 손잡이의 배경색 */
  border-radius: 13px;
}

.container-box::-webkit-scrollbar-thumb:hover {
  background: #555;
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
  margin-top: 10%;
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
  position: relative;
  width: 100%;
  height: 20%;
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
 top:  535px;
 left: 1400px;
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
  

  .message {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 5px;
    background-color: #dfeeff;
    border-radius: 13px; 
}

.user-message {
  align-self: flex-end;
  background-color: #a8d0ff;
  border-radius: 13px; 
  text-align: right;
}

.bot-message {
  align-self: flex-start;
}



.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column-reverse;
}

.blackAndWhiteCollection11{
  cursor: pointer;
  margin-top:39rem;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

/* 화면이 768px 이하로 줄어들 때만 chat-container와 user-input 보이기 */
@media screen and (max-width: 768px) {
  .navbar {
    display: none;
  }

  .home {
    padding-left: 20px; /* 좌측 패딩을 작게 조절하여 좁은 화면에서도 보이도록 함 */
  }

  .container-box {
    width: 100%;
  }

  .search {
    width: 100%;
  }
}




</style>