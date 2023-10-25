<template>
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
  <div class="MainmainB" :class="(mode === 'dark') ? 'dark' : 'light'">
    <div :class="$style.mainmainB" >
      <div :class="$style.mainmainBChild"  />
      <div :class="$style.mainmainBItem"  />
      <div :class="$style.mainmainBInner" />  
      <div :class="$style.maincontent">
      <div :class="$style.content">
      <img :class="$style.blackAndWhiteCollection11" alt="" src="/black-and-white-collection-11.svg" @click="onMainClick"/>
      <b :class="$style.yUpik" @click="onMainClick" >Y-upik</b> 
    </div>
      <div :class="$style.chatModelWrapper" @click ="onMainClick">
        <b :class="$style.chatModel" @click ="onMainClick"> Chat Model </b>
      </div>
      <div :class="$style.apiKeyWrapper" @click ="onApiClick">
        <b :class="$style.apiKey" @click ="onApiClick">API Key </b>
      </div>
    </div>
      <div :class="$style.rectangleDiv" />
      <div :class="$style.mainmainBChild1" />
      <img :class="$style.icon" alt="" src="/1.svg" />
      <b :class="$style.chatModel1">Chat Model</b>
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
      background: #1f1f1f;
      color: #1f1f1f;
      
    }

    .dark{
      
      background: #1f1f1f;
      color: #1f1f1f;
    }
    .mainmainBChild {
      position: absolute;
      
      top: 0px;
      left: 0px;
   
    }
    .mainmainBItem {
      position: absolute;
      background: #1f1f1f;
      top: 79px;
      left: 0px;
      
     
      
    }
    
    .maincontent{
      position: absolute;
      top: 0px;
      left: 0px;
      background: #1f1f1f;
      box-sizing: border-box;
      width: 342px;
      height: 1080px;
      border: 1px solid #bfbfc0;
      border-right: hidden;
      border-top: hidden;

      
    }
    .content{
      position: absolute;
      top: 0px;
      left: 0px;
      box-sizing: border-box;
      width: 340px;
      height: 80px;
      border: 1px solid #bfbfc0;
      border-right: hidden;
      border-top: hidden;
      border-left: hidden;
      
    }
    .mainmainBInner {
      position: absolute;
      top: 0px;
      left: 342px;
      background: #1f1f1f;
      box-sizing: border-box;
      width: 1571px;
      height: 1080px;
      border: 1px solid #bfbfc0;
      border-right: 1px solid #1f1f1f;
      border-top: 1px solid #1f1f1f;
    }
    .blackAndWhiteCollection11 {
      position: absolute;
      top:6px;
      left: 60px;
     
      overflow: hidden;
      
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
      background-color: #00c3a4;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      width: 314px;
      height: 63px;
      overflow: hidden;
      cursor: pointer;
      font-size: 27px;
      
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
     
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      width: 314px;
      height: 63px;
      overflow: hidden;
      font-size: 27px;
     
    }
    .apiKeyWrapper:hover{
      background-color: #00c3a4;
    }
    .rectangleDiv {
      position: absolute;
      top: 79px;
      left: 345px;
      background-color: #333539;
      width: 1568px;
      height: 1001px;
      border: 1px solid #bfbfc0;
      border-left: hidden;
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
      position: fixed;
      width: 100vw;
      height: 100vh;
      text-align: left;
      font-size: 30px;
      font-family: Inter;
      background-color: #1f1f1f;
      
    }

    
  </style>