<template>
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, user-scalable=no"
    />
  </head>
   <nav class="navbar">
      <div class="navbar-content">
        <div class="frame-parent">
          <div class="frame-group">
            <div class="robot-parent">
              <img class="robot-icon" alt="" src="/robot.png" />
              <b class="security-assiatant">security assistant</b>
            </div>
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
  <div class="chat-container">
    <div class="chat-messages">
      <div v-for="(message, index) in messages" :key="index" class="message" :class="{ 'user-message': message.sender === 'user', 'bot-message': message.sender === 'bot' }">
        {{ message.text }}
      </div>
    </div>
    <div class="user-input">
      <input v-model="userMessage" @keydown.enter="sendMessage" type="text" placeholder="메시지를 입력하세요..." />
      <button @click="sendMessage">전송</button>
      <button type="button"><img src="./send.png" alt=""></button>
    </div>
  </div>
</template>

<script>
export default {
  name:"PrivacyDecetor",
  data() {
    return {
      userMessage: '',
      messages: [],
      apiKey: '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',
      apiEndpoint: 'https://api.openai.com/v1/chat/completions',
    };
  },
  methods: {
    addMessage(sender, text) {
      this.messages.push({ sender, text });
    },
    async fetchAIResponse(prompt) {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: prompt }
          ],
        }),
      };

      try {
        const response = await fetch(this.apiEndpoint, requestOptions);
        const data = await response.json();
        const aiResponse = data.choices[0].message.content;
        return aiResponse;
      } catch (error) {
        console.error('OpenAI API 호출 중 오류 발생:', error);
        return 'OpenAI API 호출 중 오류 발생';
      }
    },
    async sendMessage() {
      const message = this.userMessage.trim();
      if (message.length === 0) return;

      this.addMessage('user', message);
      this.userMessage = '';

      const aiResponse = await this.fetchAIResponse(message);
      this.addMessage('bot', aiResponse);
    },
  },
};
</script>
<style scoped>

.message {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 5px;
  background-color: #e6e6e6;
}

.user-message {
  align-self: flex-end;
  background-color: #1e88e5;
  color: white;
}

.bot-message {
  align-self: flex-start;
}

.chat-container {
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  overflow-y: auto;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column-reverse;
}

.user-input {
  display: flex;
  padding: 10px;
}

.user-input input {
  flex: 1;
  padding: 10px;
  outline: none;
}

.user-input button {
  border: none;
  background-color: #1e88e5;
  color: white;
  padding: 10px 15px;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .navbar {
    display: none;
  }

  .chat-container {
    width: 100%;
    height: 100vh;
  }
}
</style>