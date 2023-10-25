<template>
 <div>
    <nav class="navbar">
      <div class="navbar-content">
        <div class="frame-parent">
          <div class="frame-group">
            <div class="frame-child" />
            <div class="robot-parent">
              <img class="robot-icon" alt="" src="/robot.png" />
              <b class="security-assistant"> security assistant</b>
            </div>
          </div>
          <div class="or-11-wrapper">
            <b class="sql-injection">or 1=1</b>
          </div>
          <div class="sql-injection-wrapper">
            <b class="sql-injection">sql injection</b>
          </div>
          <div class="awdasdfjkasdl-wrapper">
            <b class="sql-injection">
              <p class="blank-line">awdasdfjkasdl</p>
            </b>
          </div>
        </div>
      </div>
    </nav>
    <div class="home">
      <div class="container-box">
        <div class="chat1"></div>
        <div class="chat2"></div>
        <div class="chat3"></div>
        <div>
          <img class="thumbs-up" src="/hand-thumbs-up-fill.png" alt="" />
        </div>
        <div>
          <img class="thumbs-down" src="/hand-thumbs-down-fill.png" alt="" />
        </div>
        <div class="request">
        <div class="request1">request 1</div>
        <div class="request2">request 2</div>
        <div class="request3">request 3</div>
      </div>
      <div class="conversation">
          <!-- 대화창 내용 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecurityAssistantW'
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
  background-color: #0075ff;
  color: white;
}

.navbar-content {
  padding: 20px;
}

.container-box {
  padding: 20px; 
  border: 2px solid #000; 
  border-radius: 10px; 
  width: 75vw; 
  height: 60vh; 
}
.chat1 {
  width: 73vw; 
  height: 6vh; 
  background-color: #ff0000; 
}
.chat2{
 width: 73vw;
 height: 5vh;
}
.chat3{
 width: 73vw;
 height: 38vh;
 background-color: aquamarine;
}

.request {
  display: flex;
  flex-direction: row; /* 요소를 가로로 배치 */
  justify-content: space-between; /* 가로 공간 동일하게 분배 */
  width: 100%; /* 가로 공간을 100% 사용 */
}
  

.request1{
  padding: 20px; 
  border: 2px solid #000; 
  border-radius: 10px; 
  width: 10vw; 
  height: 10vh; 
  
}

.request2{
  
padding: 20px; 
  border: 2px solid #000; 
  border-radius: 10px; 
  width: 10vw; 
  height: 10vh; 
}

.request3{
  padding: 20px; 
  border: 2px solid #000; 
  border-radius: 10px; 
  width: 10vw; 
  height: 10vh; 
}

.conversation {
  width: 100%;
  height: 10%; 
  background-color: lightgray; 
  margin-top: 20px; 
  border: 2px solid #000; 
  border-radius: 10px; 
}
 
.frame-child {
    background-color: #da2121;
    overflow: hidden;
    z-index: 0;
  }
  .robot-icon {
    position: relative;
    width: 3rem;
    height: 2.88rem;
  }
  .security-assiatant {
    position: relative;
    display: flex;
    align-items: center;
    width: 11.31rem;
    height: 1.5rem;
    flex-shrink: 0;
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
  .or-11-wrapper {
    align-self: stretch;
    flex: 1;
    border-radius: var(--br-smi);
    background-color: #f60b0b;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-lg) var(--padding-13xl);
  }
  .sql-injection {
    align-self: stretch;
    flex: 1;
    position: relative;
  }
  .sql-injection-wrapper {
    align-self: stretch;
    flex: 1;
    border-radius: var(--br-smi);
    background-color: #ee2121;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-lg) var(--padding-13xl);
  }
  .blank-line {
    margin: 0;
  }
  .awdasdfjkasdl-wrapper {
    align-self: stretch;
    flex: 1;
    border-radius: var(--br-smi);
    background-color: #ad2222;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-lg) var(--padding-13xl);
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