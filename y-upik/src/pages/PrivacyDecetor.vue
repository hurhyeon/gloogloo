<template>
  <div>
    <div class="bg-white text-black min-h-screen flex items-center justify-center">
      <div class="lg:w-1/2 2xl:w-1/3 p-8 rounded-md bg-gray-100">
        <h1 class="text-3xl font-bold mb-6">
          Streaming OpenAI API Completions in JavaScript
        </h1>
        <div id="resultContainer" class="mt-4 h-48 overflow-y-auto">
          <p class="text-gray-500 text-sm mb-2">Generated Text</p>
          <p id="resultText" class="whitespace-pre-line">{{ generatedText }}</p>
        </div>
        <input
          type="text"
          v-model="promptInput"
          class="w-full px-4 py-2 rounded-md bg-gray-200 placeholder-gray-500 focus:outline-none mt-4"
          placeholder="Enter prompt..."
          @keyup.enter="generate"
        />
        <div class="flex justify-center mt-4">
          <button
            @click="generate"
            :disabled="generateBtnDisabled"
            class="w-1/2 px-4 py-2 rounded-md bg-black text-white hover:bg-gray-900 focus:outline-none mr-2 disabled:opacity-75 disabled:cursor-not-allowed"
          >
            Generate
          </button>
          <button
            @click="stop"
            :disabled="stopBtnDisabled"
            class="w-1/2 px-4 py-2 rounded-md border border-gray-500 text-gray-500 hover:text-gray-700 hover:border-gray-700 focus:outline-none ml-2 disabled:opacity-75 disabled:cursor-not-allowed"
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      promptInput: "",
      generatedText: "",
      generateBtnDisabled: false,
      stopBtnDisabled: true,
      controller: null,
      API_URL: "https://api.openai.com/v1/chat/completions",
      API_KEY: "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",
    };
  },
  methods: {
    async generate() {
      // Alert the user if no prompt value
      if (!this.promptInput) {
        alert("Please enter a prompt.");
        return;
      }

      // Disable the generate button and enable the stop button
      this.generateBtnDisabled = true;
      this.stopBtnDisabled = false;
     

      // Create a new AbortController instance
      this.controller = new AbortController();
      const signal = this.controller.signal;

      try {
        // Fetch the response from the OpenAI API with the signal from AbortController
        const response = await fetch(this.API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: this.promptInput }],
            max_tokens: 100,
            stream: true, // For streaming responses
          }),
          signal, // Pass the signal to the fetch request
        });

        // Read the response as a stream of data
        const reader = response.body.getReader();
        const decoder = new TextDecoder("utf-8");
        this.generatedText = "";

        let done = false;

        while (!done) {
          const { value, done: iterationDone } = await reader.read();
          done = iterationDone;

          // Massage and parse the chunk of data
          const chunk = decoder.decode(value);
          const lines = chunk.split("\n");
          const parsedLines = lines
            .map((line) => line.replace(/^data: /, "").trim())
            .filter((line) => line !== "" && line !== "[DONE]")
            .map((line) => JSON.parse(line));

          for (const parsedLine of parsedLines) {
            const { choices } = parsedLine;
            const { delta } = choices[0];
            const { content } = delta;
            // Update the UI with the new content
            if (content) {
              this.generatedText += content;
            }
          }
        }
      } catch (error) {
        // Handle fetch request errors
        if (signal.aborted) {
          this.generatedText = "Request aborted.";
        } else {
          console.error("Error:", error);
          this.generatedText = "Error occurred while generating.";
        }
      } finally {
        // Enable the generate button and disable the stop button
        this.generateBtnDisabled = false;
        this.stopBtnDisabled = true;
        this.controller = null; // Reset the AbortController instance
      }
    },

    stop() {
      // Abort the fetch request by calling abort() on the AbortController instance
      if (this.controller) {
        this.controller.abort();
        this.controller = null;
      }
    },
  },
};
</script>
