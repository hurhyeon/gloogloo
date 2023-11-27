<template>
  <div>
 
 
  
  <div class="home2">

    
    <img class="robot-icon" alt="" src="/robot.png" />
    <div class="security-assiatant">Security Assistant</div>
   

    <div ref="messageContainer" class="container-box" >
          <div v-for="(message, index) in messages" :key="index" class="message" :class="{ 'user-message': message.sender === 'user', 'bot-message': message.sender === 'bot' }" v-html="message.text"></div>    
    </div>
    
    <div class="search-bar">
  <label for="search-input" class="search-icon">
    <img class="send-icon22" alt="" src="../send.png" >
  </label>
  <input id="search" type="text" class="search-search" v-model="userMessage" @keydown.enter="sendMessage" placeholder="질문을 입력해 주세요">
  </div>
   
    </div> 
    
  </div>
  
</template>


<script>
export default {
  name: "SecurityAssistantW",
  data() {
    return {
      userMessage: '',
      messages: [],
      apiKey: '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',
      apiEndpoint: 'https://api.openai.com/v1/chat/completions',
      conversation: [],
      aiResponse:'',
    };
  },

  
  methods: {  
    onMainClick() {
      this.$router.push("/");
    },

    addMessage(sender, text) {
      if(sender == "user"){
      this.messages.push({sender, text});
      this.messages.push({sender : "bot", text : " "});
    }
    else{
      this.messages[this.messages.length-1].text = this.messages[this.messages.length-1].text + text
      // console.log('message', this.messages[this.messages.length-1].text)
    }
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

    // API 응답을 OpenAI에 전달
    await this.fetchAIResponse(data, question);

    // this.addMessage('bot', data);

    return data;
  } catch (error) {
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      console.error('네트워크에 문제가 있습니다. 인터넷 연결을 확인하세요.');
    } else {
      console.error('API에서 프롬프트를 가져오는 동안 오류 발생:', error);
    }
  }
},


extractContent(str) {
    const regex = /"content":"(.*?)"/g;
    const extractedContents = str.match(regex) || [];
    try{
      for (let i=0;i<=extractedContents.length; i++){
        extractedContents[i] = extractedContents[i].slice(11,-1);
      }

    } catch(error){
      // console.error('extract content error', error)
    }

    
    return extractedContents;

}, 
    scrollMessageContainer() {
      const container = this.$refs.messageContainer;
      container.scrollTop = container.scrollHeight;
    },

    async fetchAIResponse(prompt, question) {
    this.conversation.push({ role:'system', content: "You are an assistant for question-answering tasks. Use the following pieces of retrieved assistant content to answer the question. If you don't know the answer or question is not question's format, just said that retrieved content don't have related content and what you know. You should add the source of contents in metadata with same format as a last of answer. The answer should be detailed. Be sure to answer in Korean and use polite language."});
    this.conversation.push({ role: 'user', content: question});
    this.conversation.push({role: 'assistant', content: prompt})

    const requestOptions = {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
            model: "gpt-4-1106-preview",
            messages: this.conversation,
            max_tokens:4096,
            stream:true
        }),
    };

    try {
        // OpenAI API에 요청 보내기
        const response = await fetch(this.apiEndpoint, requestOptions);

        if (!response.ok) {
            throw new Error(`HTTP 오류! 상태: ${response.status}`);
        }

        // 응답 데이터를 읽기 위한 ReadableStream 사용
        const reader = response.body.getReader();
        let result = '';

        let done = false;
        while (!done) {
            const { done, value } = await reader.read();

            if (done) {
                break;
            }
            
            // UTF-8로 디코딩하고 결과에 추가
            const text = new TextDecoder('utf-8').decode(value);
            result += text;

            // 예시 사용
            const extractedContent = this.extractContent(text);
            
            // console.log('Extracted Content:', extractedContent);
            // 결과를 처리 (필요에 따라 UI 업데이트)
            // console.log('Streaming Data:', text);
            
            // done = done;
            // 스트리밍 데이터를 받을 때마다 UI 업데이트
            if(extractedContent.length >=1){
              this.addMessage('bot', extractedContent.join('').replace(/\\n/g, '<br>').replace("\\"," "));
            this.scrollMessageContainer();
          }
        }

        // 마지막 결과를 처리 (필요하면)
        this.handleFinalResult(result);

    } catch (error) {
        console.error('OpenAI API 스트리밍 오류:', error);
        // 오류 처리, UI 업데이트 등을 수행할 수 있습니다.
    }
},

handleFinalResult(result) {
  // 최종 결과 처리 (예: UI 업데이트, 데이터 저장)
  console.log('최종 결과:', result);
  
  // 예시: 최종 결과로 UI 업데이트
  // this.addMessage('assistant', result);
  // this.streamAIResponse(result);
},

    async sendMessage() {
      const message = this.userMessage.trim();
      if (message.length === 0) return;

      try{
      this.addMessage('user', message);
      this.userMessage = '';
      
     

      // const aiResponse = await this.fetchAIResponse(message);

      const questionResponse = await this.fetchPromptFromAPI(message);
  
    
     console.log('Question Response:', questionResponse);
     
     this.$nextTick(() => {
  // this.addMessage('bot', questionResponse);
});

      // this.streamAIResponse(aiResponse);
    } catch (error){
      console.error('메시지 전송중 오류 발생',error);
    }
    },
  }
  }

</script>


<style scoped>

.home2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}


.container-box {
  position:relative;
  margin-top: 10px;
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 20px;
  height: 500px;
  width: 1300px;
  overflow-y: auto;
  border: 1px solid #bfbfc0; 
  border-radius: 13px; 
 
}

.message-container {
  display: flex;
  justify-content: flex-end; 
  margin-bottom: 10px;
}

.container-box::-webkit-scrollbar-track {
  border-radius: 13px;
}

.search-bar{
  position: relative;
}
.search{
  width: 100%;
  height: 30%;  
  
}
.search-search:focus {
  outline: none; 
  border-color: #0075ff; 
}
.send-icon{
 cursor: pointer;
 position: fixed;
 top:  535px;
 left: 1400px;
}

.robot-icon {
    position: relative;
    width: 55px;
    height: 55px;
    margin-top:5px;
  }

.security-assiatant {
  font-size: 30px;
  color: #0065a1;
  margin-bottom: 10px;
  font-weight: bold;
  }

.robot-parent {
    margin: 0;
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

.message {
    padding: 10px;
    margin: 20px;
    background-color: #dfeeff;
}

.user-message { 
  align-items: flex-end;
  text-align: right;
  background-color: #a8d0ff;
  border-radius: 13px;
}

.bot-message {
  align-self: flex-start;
}

.search-search{
 position: absolute 50%;
  height: 44px;
  width: 1200px;
  border-radius: 25px;
  padding: 1px 44px 1px 52px;
  border-color: #0075ff;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column-reverse;
}
.send-icon22{
  position: absolute;
  top:10px;
  margin-left: 15px;
}
.search{
  position: relative;
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