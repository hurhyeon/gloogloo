<template>
  <div>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
    </head>

    
    <div class="main">
      
    <div class="web-name">Search</div>
    <div class="input-group">
      <div class="search-bar">
  <label for="search-input" class="search-icon">
    <img class="search-icon22" alt="" src="../search-icon22.png" >
  </label>
  <input id="search-input" type="text" class="search-text" v-model="userMessage" @keydown.enter="sendMessage" placeholder="요약하고 싶은 내용을 입력해주세요">
  </div>
    </div>
  </div>
  
  
  
  <div ref="messageContainer" class="container-boxbox" >
    <div v-for="(message, index) in messages" :key="index" class="message" :class="{ 'users-message': message.sender === 'user', 'bots-message': message.sender === 'bot' }" v-html="message.text"></div>
 
    </div> 
    <img class="blackAndWhiteCollection" alt="" src="/black-and-white-collection-11.svg" @click="onMainClick"/>
  </div>
  


</template>

<script>
export default {
  name: "SecurityAssistantW",
  data() {
    return {
      
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
    const apiUrl = `http://118.36.189.70:8000/search_summary/2?q=${encodeURIComponent(question)}`;
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

    // console.log('Extracted Content:', extractedContents);
    return extractedContents;

}, 
    scrollMessageContainer() {
      const container = this.$refs.messageContainer;
      container.scrollTop = container.scrollHeight;
    },

    async fetchAIResponse(prompt, question) {
    this.conversation.push({ role:'system', content: "Summarize the assistant content. You should add the source url of contents. Be sure to answer in Korean and use polite language"});
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

<style>
/* .mainbody {
    background: #333539;
    font-family: 'Jua', sans-serif;
    font-size: 81.25%;
    color: snow;
} */

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.search-text {
  position: absolute 50%;
  height: 44px;
  width: 561px;
  border-radius: 25px;
  padding: 1px 44px 1px 52px;
}
  
.web-name {
  font-size: 80px;
  color: #00c3a4;
  margin-bottom: 10px;
  font-weight: bold;
}

.search-bar {
  position: relative;
}

.blackAndWhiteCollection {
  position: fixed;
  bottom: 10px; 
  left: 10px;   
  cursor: pointer;
  width: 70px;
  height: 70px;
}

.search-icon22{
  position: absolute;
  top:10px;
  margin-left: 15px;
}

.container-boxbox {
    margin-top: 10px;
    margin-left: 250px;
    margin-right: 250px;
    border-radius: 13px;
    height: 70vh;
    overflow-y: auto;
}


.users-message {
  align-self: center; 
  font-weight: bolder;
  font-size:20px;
  margin-top: 30px;
  margin-bottom: 10px;
}

.bots-message {
  margin-top:20px;
}



.chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 10px;
    display: flex;
  
}

.search-icon22{
  width:30px
}

</style>
