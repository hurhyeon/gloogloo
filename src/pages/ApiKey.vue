<template>
  <div class="MainmainB" :class="(mode === 'dark') ? 'dark' : 'light'">
    <div :class="$style.mainmainB" >
      <div :class="$style.mainmainBChild"  />
      <div :class="$style.mainmainBItem"  />
      <div :class="$style.mainmainBInner" />
      <img :class="$style.blackAndWhiteCollection11" alt="" src="/black-and-white-collection-11.svg" @click="onMainClick"/>
      <b :class="$style.yUpik" @click="onMainClick" >Y-upik</b> 
      <div :class="$style.chatModelWrapper" @click="onMainClick"> 
        <b :class="$style.chatModel" @click ="onMainClick"> Chat Model </b>
      </div>
      <div :class="$style.apiKeyWrapper" @click ="onApiClick">
        <b :class="$style.apiKey" @click ="onApiClick">API Key </b>
      </div>
      <div :class="$style.rectangleDiv" />
      <div :class="$style.mainmainBChild1" />
      <img :class="$style.icon" alt="" src="/1.svg" />
      <b :class="$style.chatModel1">Api key</b>
      <div :class="$style.mainmainBChild2" />
      <div :class="$style.mainmainBChild3" @click ="onSecurityClick" />
      <div :class="$style.mainmainBChild4" @click ="onPrivircyClick"/>
      <div :class="$style.mainmainBChild5" />
      <div :class="$style.mainmainBChild6" />
      <div :class="$style.mainmainBChild7" />
      <div :class="$style.mainmainBChild8" />
      <b :class="$style.securityAssistant" @click="onSecurityClick">Security Assistant</b>
      <b :class="$style.p" @click="onSecurityClick">챗봇이다.</b>
      <b :class="$style.privacyDetector" @click = "onPrivircyClick">Privacy Detector</b>
      <b :class="$style.b1" @click = "onPrivircyClick">디텍터이다.</b>
    </div>
  </div>
  </template>
  <script>
    import { defineComponent } from "vue";
  
    export default defineComponent({
      name: "MainmainB",
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
  <style module>

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    .app{
      width: 100vw;
      min-height: 100vw;
      background: #f3f3f3;
      color:#1f1f1f;
    }

    .dark{
      background: #1f1f1f;
      color: #f3f3f3;
    }
    .mainmainBChild {
      position: absolute;
      background-color: #1f1f1f;
      top: 0px;
      left: 0px;
      width: 342px;
      height: 700px;
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
      border: 1px solid #1f1f1f;
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
      cursor: pointer;
    }
    .yUpik {
      position: absolute;
      top: 16px;
      left: 150px;
      font-size: 36px;
      cursor: pointer;
      
    }
    .chatModel {
      position: absolute;
      top: 15px;
      left: 81px;
      cursor: pointer;
    }
    .chatModelWrapper {
      position: absolute;
      top: 97px;
      left: 15px;
      border-radius: 13px;
      background-color: #1f1f1f;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      width: 314px;
      height: 63px;
      overflow: hidden;
      cursor: pointer;
      font-size: 27px;
    }
    .chatModelWrapper:focus{
      background-color: #00c3a4;
    }
    .chatModelWrapper:hover{
      background-color: #00c3a4;
    }
    .apiKey {
      position: absolute;
      cursor: pointer;
      top: 15px;
      left: 106.5px;
    }
    .apiKeyWrapper {
      position: absolute;
      cursor: pointer;
      top: 178px;
      left: 15px;
      border-radius: 13px;
      background-color: #00c3a4;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      width: 314px;
      height: 63px;
      overflow: hidden;
      font-size: 27px;
    }
    .apiKeyWrapper:active{
      background-color: #1f1f1f;
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
      cursor: pointer;
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
      cursor: pointer;
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
      cursor: pointer;
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
      cursor: pointer;
      top: 405px;
      left: 648px;
    }
    .p {
      position: absolute;
      top:471px;
      left:650px;
      cursor: pointer;
      display: inline-block;
      width: 210px;
      height: 100px;
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
      top: 405px;
      left: 981px;
    }

    .b1 {
      position: absolute;
      top: 471px;
      left: 982px;
      cursor: pointer;
      display: inline-block;
      width: 192px;
      height: 50px;
    }
    .mainmainB {
      position: relative;
      width: 100%;
      height: 1080px;
      text-align: left;
      font-size: 30px;
      color: #fff;
      font-family: Inter;
    }
  </style>