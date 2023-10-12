<template>
    <div :class="$style.mainmainB" >
      <div :class="$style.mainmainBChild"  />
      <div :class="$style.mainmainBItem"  />
      <div :class="$style.mainmainBInner" />
      <img
        :class="$style.blackAndWhiteCollection11"
        alt=""
        src="/black-and-white-collection-11.svg"
      />
      <b :class="$style.yUpik">Y-upik</b> 
      <div :class="$style.chatModelWrapper">
        <b :class="$style.chatModel">Chat Model</b>
      </div>
      <div :class="$style.apiKeyWrapper">
        <b :class="$style.apiKey">API Key </b>
      </div>
      <div :class="$style.rectangleDiv" />
      <div :class="$style.mainmainBChild1" />
      <img :class="$style.icon" alt="" src="/1.svg" />
      <b :class="$style.chatModel1">Chat Model</b>
      <div :class="$style.mainmainBChild2" />
      <div :class="$style.mainmainBChild3" />
      <div :class="$style.mainmainBChild4" />
      <div :class="$style.mainmainBChild5" />
      <div :class="$style.mainmainBChild6" />
      <div :class="$style.mainmainBChild7" />
      <div :class="$style.mainmainBChild8" />
      <div :class="$style.securityAssistant" @click="onFrameContainerClick">Security Assistant</div>
      <b :class="$style.b">
        <p :class="$style.p" @click="onFrameContainerClick">챗봇이다.</p>
      </b>
      <b :class="$style.privacyDetector">Privacy Detector</b>
      <b :class="$style.b1">디텍터이다.</b>
    </div>
  </template>
  <script>
    import { defineComponent } from "vue";
  
    export default defineComponent({
      name: "MainmainB",
      methods: {
        onFrameContainerClick() {
          this.$router.push("/security-assistant-w");
        },
      },
    });
  </script>
  <style module>
    .mainmainBChild {
      position: absolute;
      background-color: #1f1f1f;
      top: 0px;
      left: 0px;
      width: 342px;
      height: 79px;
    }
    .mainmainBItem {
      position: absolute;
      background-color: #1f1f1f;
      top: 79px;
      left: 0px;
      width: 345px;
      height: 1001px;
    }
    .mainmainBInner {
      position: absolute;
      top: 0px;
      left: 342px;
      background-color: #1f1f1f;
      border: 1px solid #a0a1a2;
      box-sizing: border-box;
      width: 1571px;
      height: 1080px;
    }
    .blackAndWhiteCollection11 {
      position: absolute;
      height: 6.02%;
      width: 3.4%;
      top: 0.46%;
      right: 94.2%;
      bottom: 93.52%;
      left: 2.4%;
      max-width: 100%;
      overflow: hidden;
      max-height: 100%;
    }
    .yUpik {
      position: absolute;
      top: 16px;
      left: 131px;
      font-size: 36px;
    }
    .chatModel {
      position: absolute;
      top: 15px;
      left: 81px;
    }
    .chatModelWrapper {
      position: absolute;
      top: 97px;
      left: 15px;
      border-radius: 13px;
      background-color: #00c3a4;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      width: 314px;
      height: 63px;
      overflow: hidden;
      cursor: pointer;
      font-size: 27px;
    }
    .apiKey {
      position: absolute;
      top: 15px;
      left: 106.5px;
    }
    .apiKeyWrapper {
      position: absolute;
      top: 178px;
      left: 15px;
      border-radius: 13px;
      background-color: #1f1f1f;
      border: 1px solid #1f1f1f;
      box-sizing: border-box;
      width: 314px;
      height: 63px;
      overflow: hidden;
      font-size: 27px;
    }
    .rectangleDiv {
      position: absolute;
      top: 79px;
      left: 345px;
      background-color: #333539;
      width: 1568px;
      height: 1001px;
    }
    .mainmainBChild1 {
      position: absolute;
      top: 160px;
      left: 418px;
      border-radius: 13px;
      background-color: #1f1f1f;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      width: 1413px;
      height: 756px;
    }
    .icon {
      position: absolute;
      top: 196px;
      left: 1740px;
      width: 50px;
      height: 50px;
    }
    .chatModel1 {
      position: absolute;
      top: 289px;
      left: 544px;
      font-size: 40px;
    }
    .mainmainBChild2 {
      position: absolute;
      top: 351px;
      left: 544px;
      border-radius: 13px;
      background-color: #333539;
      border: 1px solid #24262e;
      box-sizing: border-box;
      width: 1160px;
      height: 378px;
    }
    .mainmainBChild3 {
      position: absolute;
      top: 383px;
      left: 634px;
      border-radius: 13px;
      background-color: #1f1f1f;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      width: 315px;
      height: 150px;
    }
    .mainmainBChild4 {
      position: absolute;
      top: 384px;
      left: 967px;
      border-radius: 13px;
      background-color: #1f1f1f;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      width: 315px;
      height: 150px;
    }
    .mainmainBChild5 {
      position: absolute;
      top: 384px;
      left: 1300px;
      border-radius: 13px;
      background-color: #1f1f1f;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      width: 315px;
      height: 150px;
    }
    .mainmainBChild6 {
      position: absolute;
      top: 546px;
      left: 634px;
      border-radius: 13px;
      background-color: #1f1f1f;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      width: 315px;
      height: 150px;
    }
    .mainmainBChild7 {
      position: absolute;
      top: 546px;
      left: 967px;
      border-radius: 13px;
      background-color: #1f1f1f;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      width: 315px;
      height: 150px;
    }
    .mainmainBChild8 {
      position: absolute;
      top: 546px;
      left: 1300px;
      border-radius: 13px;
      background-color: #1f1f1f;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      width: 315px;
      height: 150px;
    }
    .securityAssistant {
      position: absolute;
      top: 405px;
      left: 648px;
    }
    .p {
      margin: 0;
    }
    .b {
      position: absolute;
      top: 471px;
      left: 650px;
      display: inline-block;
      width: 120px;
      height: 55px;
    }
    .privacyDetector {
      position: absolute;
      top: 405px;
      left: 981px;
    }
    .b1 {
      position: absolute;
      top: 471px;
      left: 982px;
      display: inline-block;
      width: 192px;
      height: 50px;
    }
    .mainmainB {
      position: relative;
      width: 100%;
      height: 1080px;
      cursor: pointer;
      text-align: left;
      font-size: 30px;
      color: #fff;
      font-family: Inter;
    }
  </style>