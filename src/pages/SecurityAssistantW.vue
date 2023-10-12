<template>
    <div :class="$style.securityAssistantW">
      <img :class="$style.securityAssistantWChild" alt="" src="/line-3.svg" />
      <div :class="$style.securityAssistantWItem" />
      <div :class="$style.rectangleParent">
        <div :class="$style.frameChild" />
        <div :class="$style.typeNewQuestionsParent">
          <div :class="$style.typeNewQuestions">Type new questions</div>
          <img :class="$style.frameItem" alt="" src="/vector-6.svg" />
        </div>
      </div>
      <div :class="$style.frameParent">
        <div :class="$style.rectangleGroup">
          <div :class="$style.frameInner" />
          <div :class="$style.getHttp19216801indexhParent">
            <div :class="$style.typeNewQuestions">
              get http://192.168.0.1/index.html?text='or 1=1'
            </div>
            <img :class="$style.groupIcon" alt="" src="/group-6.svg" />
          </div>
        </div>
        <div :class="$style.urlHttp19216801index">
          <p :class="$style.p">
            주어진 URL "http://192.168.0.1/index.html?text='or 1=1'"은 SQL
            Injection 공격을 시도하는 시도로 보입니다. 이 공격은
          </p>
          <p :class="$style.p">
            웹 애플리케이션에서 사용자 입력을 받아 데이터베이스 쿼리를 생성하는
            부분에서 발생할 수 있습니다.
          </p>
        </div>
        <div :class="$style.http19216801indexhtmlWrapper">
          <div :class="$style.typeNewQuestions">
            <p :class="$style.p">
              "http://192.168.0.1/index.html": 이 부분은 웹 서버의 주소와 요청한
              리소스를 나타냅니다.
            </p>
            <p :class="$style.p">
              공격은 해당 웹 페이지의 "text" 매개변수를 통해 이루어집니다.
            </p>
            <p :class="$style.p"></p>
            <p :class="$style.p">
              "?text='or 1=1'": 이 부분은 URL에 포함된 쿼리 문자열입니다.
            </p>
            <p :class="$style.p">
              여기서 'or 1=1'는 SQL Injection의 일반적인 패턴 중 하나입니다.
            </p>
            <p :class="$style.p">
              이것은 데이터베이스 쿼리에 악의적인 SQL 코드를 삽입하기 위한
              시도입니다.
            </p>
            <p :class="$style.p"></p>
            <p :class="$style.p">
              'or 1=1'는 SQL WHERE 절에 사용되며 항상 참인 조건을 생성합니다. 즉,
              데이터베이스의 모든 행이 선택됩니다.
            </p>
            <p :class="$style.p"></p>
            <p :class="$style.p">
              이로 인해 데이터베이스에서 모든 데이터를 반환하거나 데이터베이스에
              대한 무단 액세스를 시도하는
            </p>
            <p :class="$style.p">공격자의 의도를 달성할 수 있습니다.</p>
            <p :class="$style.p"></p>
            <p :class="$style.p">
              이러한 공격을 방지하기 위해서는 웹 애플리케이션에서 사용자 입력을
              받을 때 입력 유효성 검사를 수행하고,
            </p>
            <p :class="$style.p">
              입력을 데이터베이스 쿼리에 직접 삽입하지 않고 파라미터화된 쿼리나
              ORM(Object-Relational Mapping)을 사용하는 것이 중요합니다.
            </p>
            <p :class="$style.p">
              또한 웹 애플리케이션을 보호하기 위해 웹 방화벽 및 보안 정책을
              구현하는 것이 좋습니다.
            </p>
          </div>
        </div>
      </div>
      <div :class="$style.sqlInjectionWrapper">
        <div :class="$style.typeNewQuestions">
          SQL Injection은 무엇이며, 웹 애플리케이션에서 어떻게 발생할 수 있나요?
        </div>
      </div>
      <div :class="$style.sqlInjectionContainer">
        <div :class="$style.typeNewQuestions">
          SQL Injection과 관련된 최신 보안 사건들이 무엇이 있나요?
        </div>
      </div>
      <div :class="$style.sqlInjectionFrame">
        <div :class="$style.typeNewQuestions">
          SQL Injection 공격으로부터 웹 애플리케이션을 어떻게 보호할 수 있을까요?
        </div>
      </div>
      <div :class="$style.frameGroup">
        <div :class="$style.urlSqlWrapper">
          <b :class="$style.typeNewQuestions">주어진 URL에서의 SQL..</b>
        </div>
        <div :class="$style.frameDiv">
          <b :class="$style.typeNewQuestions">SQL Injection</b>
        </div>
        <div :class="$style.frameDiv">
          <b :class="$style.typeNewQuestions">text=’or’1=1’’</b>
        </div>
      </div>
      <img
        :class="$style.handThumbsUpFillIcon"
        alt=""
        src="/handthumbsupfill.svg"
      />
      <img
        :class="$style.handThumbsDownFillIcon"
        alt=""
        src="/handthumbsdownfill.svg"
      />
      <b :class="$style.securityAssistant">Security Assistant </b>
      <img :class="$style.robotIcon" alt="" src="/robot1.svg" />
    </div>
  </template>
  <script>
    import { defineComponent } from "vue";
  
    export default defineComponent({
      name: "SecurityAssistantW",
    });
  </script>
  <style module>
    .securityAssistantWChild {
      position: absolute;
      top: 0px;
      left: 349px;
      width: 1px;
      height: 1579px;
    }
    .securityAssistantWItem {
      position: absolute;
      top: 51px;
      left: 425px;
      border-radius: 13px;
      background-color: #fff;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      width: 1362px;
      height: 823px;
    }
    .frameChild {
      position: relative;
      border-radius: 11px;
      background-color: #fff;
      border: 1px solid #0075ff;
      box-sizing: border-box;
      width: 1364px;
      height: 64px;
      z-index: 0;
    }
    .typeNewQuestions {
      position: relative;
    }
    .frameItem {
      position: relative;
      border-radius: 1px;
      width: 23.54px;
      height: 23.07px;
    }
    .typeNewQuestionsParent {
      margin: 0 !important;
      position: absolute;
      top: 17px;
      left: 36px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 1078px;
      z-index: 1;
    }
    .rectangleParent {
      position: absolute;
      top: 1382px;
      left: 425px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 10px;
      color: #5c5f62;
    }
    .frameInner {
      position: relative;
      border-radius: 13px;
      background-color: #a8d0ff;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      width: 1307px;
      height: 65px;
      z-index: 0;
    }
    .groupIcon {
      position: relative;
      width: 33px;
      height: 33px;
    }
    .getHttp19216801indexhParent {
      margin: 0 !important;
      position: absolute;
      top: 16px;
      left: 77px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 710px;
      z-index: 1;
    }
    .rectangleGroup {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      position: relative;
      gap: 10px;
    }
    .p {
      margin: 0;
    }
    .urlHttp19216801index {
      position: relative;
      display: inline-block;
      width: 1141px;
      height: 56px;
      flex-shrink: 0;
    }
    .http19216801indexhtmlWrapper {
      border-radius: 13px;
      background-color: #dfeeff;
      overflow: hidden;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 53px 20px;
    }
    .frameParent {
      position: absolute;
      top: 82px;
      left: 453px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 26px;
    }
    .sqlInjectionWrapper {
      position: absolute;
      top: 887px;
      left: 1048px;
      border-radius: 11px;
      background-color: #ededed;
      border: 1px solid #c0c0c0;
      overflow: hidden;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 17px 20px;
    }
    .sqlInjectionContainer {
      position: absolute;
      top: 887px;
      left: 424px;
      border-radius: 11px;
      background-color: #ededed;
      border: 1px solid #c0c0c0;
      overflow: hidden;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 17px 20px;
    }
    .sqlInjectionFrame {
      position: absolute;
      top: 963px;
      left: 424px;
      border-radius: 11px;
      background-color: #ededed;
      border: 1px solid #c0c0c0;
      overflow: hidden;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 17px 18px;
    }
    .urlSqlWrapper {
      border-radius: 13px;
      background-color: #ededed;
      border: 1px solid #bfbfc0;
      box-sizing: border-box;
      width: 314px;
      overflow: hidden;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 14px 81px;
      color: #1f1f1f;
    }
    .frameDiv {
      border-radius: 13px;
      background-color: #fff;
      width: 314px;
      overflow: hidden;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 15px 81px;
      box-sizing: border-box;
    }
    .frameGroup {
      position: absolute;
      top: 96px;
      left: 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 19px;
      font-size: 27px;
    }
    .handThumbsUpFillIcon {
      position: absolute;
      top: 821px;
      left: 1660px;
      width: 30px;
      height: 30px;
    }
    .handThumbsDownFillIcon {
      position: absolute;
      top: 821px;
      left: 1716px;
      width: 30px;
      height: 30px;
    }
    .securityAssistant {
      position: absolute;
      top: 25px;
      left: 73px;
      font-size: 27px;
      display: inline-block;
      width: 292px;
    }
    .robotIcon {
      position: absolute;
      top: 14px;
      left: 7px;
      width: 56px;
      height: 56px;
    }
    .securityAssistantW {
      position: relative;
      background-color: #fff;
      border: 1px solid #9e9e9e;
      box-sizing: border-box;
      width: 100%;
      height: 1582px;
      overflow: hidden;
      text-align: left;
      font-size: 22px;
      color: #000;
      font-family: Inter;
    }
  </style>
  