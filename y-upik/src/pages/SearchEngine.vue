<template>
    <div class="home" >
      <nav class="navbar">
        <div class="navbar-content">
          <div class="frame-parent">
            <div class="frame-group">
              <div class="yupik">
                <img class="blackAndWhiteCollection11" alt="" src="/black-and-white-collection-11.svg" @click="onMainClick"/>
                <b class="yu-pik" @click="onMainClick">Y-upik</b>
              </div>
            </div>
            <div class="list1" @click="onMainClick">
              <b class="list-chat" @click="onMainClick">Model</b>
            </div>
            <div class="list2">
              <b class="list-chat">API</b>
            </div>
          </div>
  
  
          <div class="additional-content">
            <div class="list3" @click="onSecurityClick">
              <b class="list-chat">Security Assistant</b>
             
            </div>
            <div class="list4" @click="onPrivircyClick">
              <b class="list-chat">Privacy Detector</b>
              
            </div>
          </div>
        </div>
      </nav>
      
      <div class ="blackspace"></div>
      
      <div class ="mainspace">
        <h1>API 명세페이지</h1>
        <p>이 문서는 Security Assistant API와 Privacy Decetor API를 사용한 구현 방법을 안내합니다.</p>
  
        <hr style="width: 70rem; margin: 20px 0; margin-left:300px ;">
  
        <h1>Security Assistant</h1>
  
        <h1>요청</h1>
  
        <h2>쿼리 파라미터</h2>
  
        <table>
  <thead>
  <tr>
  <th>이름</th>
  <th>타입</th>
  <th>설명</th>
  <th>필수</th>
  </tr>
  </thead>
  <tbody><tr>
  <td>client_id</td>
  <td><code>String</code></td>
  <td>앱 REST API 키<br>[내 애플리케이션] &gt; [앱 키]에서 확인 가능</td>
  <td>O</td>
  </tr>
  <tr>
  <td>redirect_uri</td>
  <td><code>String</code></td>
  <td>인가 코드를 전달받을 서비스 서버의 URI<br>[내 애플리케이션] &gt; [카카오 로그인] &gt; [Redirect URI]에서 등록</td>
  <td>O</td>
  </tr>
  <tr>
  <td>response_type</td>
  <td><code>String</code></td>
  <td><code>code</code>로 고정</td>
  <td>O</td>
  </tr>
  <tr>
  <td>scope</td>
  <td><code>String</code></td>
  <td><a href="#request-code-additional-consent">추가 항목 동의 받기</a> 요청 시 사용<br>사용자에게 동의 요청할 동의항목 ID 목록<br>동의항목의 ID는 <a href="../kakaologin/common#user-info">사용자 정보</a> 또는 [내 애플리케이션] &gt; [카카오 로그인] &gt; [동의항목]에서 확인 가능<br>쉼표(,)로 구분해 여러 개 전달 가능<br><br><strong>주의</strong>: OpenID Connect를 사용하는 앱의 경우, <code>scope</code> 파라미터 값에 <code>openid</code>를 반드시 포함해야 함, 미포함 시 ID 토큰이 재발급되지 않음 (<a href="../kakaologin/common#additional-consent-scope">참고: scope 파라미터</a>)</td>
  <td>X</td>
  </tr>
  <tr>
  <td>prompt</td>
  <td><code>String</code></td>
  <td>동의 화면 요청 시 추가 상호작용을 요청할 때 사용<br>쉼표(,)로 구분된 문자열 값 목록으로 전달<br><br>다음 값 사용 가능<br><code>login</code>: 기존 사용자 인증 여부와 상관없이 사용자에게 카카오계정 로그인 화면을 출력하여 다시 사용자 인증을 수행하고자 할 때 사용, 카카오톡 인앱 브라우저에서는 이 기능이 제공되지 않음<br><code>none</code>: 사용자에게 동의 화면과 같은 대화형 UI를 노출하지 않고 인가 코드 발급을 요청할 때 사용, 인가 코드 발급을 위해 사용자의 동작이 필요한 경우 에러 응답 전달<br><code>create</code>: 사용자가 카카오계정 신규 가입 후 로그인하도록 할 때 사용, <a href="https://accounts.kakao.com/weblogin/create_account" target="_blank">카카오계정 가입 페이지</a>로 이동 후, 카카오계정 가입 완료 후 동의 화면 출력<br><code>select_account</code>: <a href="#request-code-prompt-select-account">카카오계정 간편로그인</a>을 요청할 때 사용, 브라우저에 카카오계정 로그인 세션이 있을 경우 자동 로그인 또는 계정 선택 화면 출력<br><br><strong>참고</strong>: <a href="#additional-feature">추가 기능</a></td>
  <td>X</td>
  </tr>
  <tr>
  <td>login_hint</td>
  <td><code>String</code></td>
  <td><a href="#request-code-login-hint">로그인 힌트 주기</a> 요청 시 사용<br>카카오계정 로그인 페이지의 ID란에 자동 입력할 값<br><br><strong>비고</strong>: <a href="../kakaologin/common#intro-id-fill-in-process">로그인 힌트 주기 상세 동작 과정</a> 확인 권장<br><strong>참고</strong>: 카카오계정 로그인 시 이메일, 전화번호, 카카오메일 ID를 ID에 입력하여 로그인 가능</td>
  <td>X</td>
  </tr>
  <tr>
  <td>service_terms</td>
  <td><code>String</code></td>
  <td><a href="#request-code-terms">서비스 약관 선택해 동의 받기</a> 요청 시 사용<br>동의받을 서비스 약관 태그 목록<br>서비스 약관 태그는 [내 애플리케이션] &gt; [간편가입]에서 확인 가능<br>쉼표(,)로 구분된 문자열 값 목록으로 전달</td>
  <td>X</td>
  </tr>
  <tr>
  <td>state</td>
  <td><code>String</code></td>
  <td>카카오 로그인 과정 중 동일한 값을 유지하는 임의의 문자열(정해진 형식 없음)<br><a href="https://en.wikipedia.org/wiki/Cross-site_request_forgery" target="_blank">Cross-Site Request Forgery(CSRF)</a> 공격으로부터 카카오 로그인 요청을 보호하기 위해 사용<br>각 사용자의 로그인 요청에 대한 <code>state</code> 값은 고유해야 함<br>인가 코드 요청, 인가 코드 응답, 토큰 발급 요청의 <code>state</code> 값 일치 여부로 요청 및 응답 유효성 확인 가능</td>
  <td>X</td>
  </tr>
  <tr>
  <td>nonce</td>
  <td><code>String</code></td>
  <td><a href="../kakaologin/common#oidc">OpenID Connect</a>를 통해 ID 토큰을 함께 발급받을 경우, <a href="https://en.wikipedia.org/wiki/Replay_attack" target="_blank">ID 토큰 재생</a> 공격을 방지하기 위해 사용<br><a href="../kakaologin/common#oidc-id-token-verify">ID 토큰 유효성 검증</a> 시 대조할 임의의 문자열(정해진 형식 없음)</td>
  <td>X</td>
  </tr>
  </tbody></table>
        <h1>응답</h1>
        <p>인가 코드 받기 요청의 응답은 HTTP 302 리다이렉트되어, redirect_uri에 GET 요청으로 전달됩니다. 해당 요청은 아래와 같은 쿼리 파라미터를 포함합니다.</p>
        <h2>쿼리 파라미터</h2>
        <table>
  <thead>
  <tr>
  <th>이름</th>
  <th>타입</th>
  <th>설명</th>
  <th>필수</th>
  </tr>
  </thead>
  <tbody><tr>
  <td>code</td>
  <td><code>String</code></td>
  <td><a href="#request-token">토큰 받기</a> 요청에 필요한 인가 코드</td>
  <td>X</td>
  </tr>
  <tr>
  <td>error</td>
  <td><code>String</code></td>
  <td>인증 실패 시 반환되는 에러 코드</td>
  <td>X</td>
  </tr>
  <tr>
  <td>error_description</td>
  <td><code>String</code></td>
  <td>인증 실패 시 반환되는 에러 메시지</td>
  <td>X</td>
  </tr>
  <tr>
  <td>state</td>
  <td><code>String</code></td>
  <td>요청 시 전달한 <code>state</code> 값과 동일한 값</td>
  <td>X</td>
  </tr>
  </tbody>
  </table>
  <h1>예제</h1>
  <h2>요청</h2>
  <code class="language-http hljs">https://kauth.kakao.com/oauth/authorize?response_type=code&amp;client_id=<span class="hljs-variable">${REST_API_KEY}</span>&amp;redirect_uri=<span class="hljs-variable">${REDIRECT_URI}</span>
  </code>
  
  <h2>응답: 사용자가 [동의하고 계속하기] 선택, 로그인 진행</h2>
  <pre>
  <code class="language-http hljs"><span class="hljs-meta">HTTP/1.1</span> <span class="hljs-number">302</span> Found
  <span class="hljs-attribute">Content-Length</span><span class="hljs-punctuation">: </span>0
  <span class="hljs-attribute">Location</span><span class="hljs-punctuation">: </span>${REDIRECT_URI}?code=${AUTHORIZE_CODE}
  </code>
  </pre>
  
  <h2>응답:로그인 취소</h2>
  <pre>
  <code class="language-http hljs"><span class="hljs-meta">HTTP/1.1</span><span class="hljs-number">302</span> Found
  <span class="hljs-attribute">Content-Length</span><span class="hljs-punctuation">: </span>0
  <span class="hljs-attribute">Location</span><span class="hljs-punctuation">: </span>${REDIRECT_URI}?error=access_denied&amp;error_description=User%20denied%20access
  </code>
  </pre>
  <div class="end"> .</div>
      </div>
  
  
  
  
  
      </div>
    
  </template>
  
  <script>
   import { defineComponent } from "vue";
    
    export default defineComponent({
      name: "ApiKey",
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
  
  
  <style scoped>    
  .home {
  
    height: 100vh; /* 화면 전체 높이에 맞추기 */
    background-color:#333539;
  
  }
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 250px;
      height: 100%;
      background-color: #1f1f1f;
      border-right: 1px solid #a0a1a2;
    
  }
  
  
  
  .frame-parent {
    position: relative;
    width: 100%;
    height: 21.94rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10%;
    text-align: center;
    font-size: var(--font-size-8xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  
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
  .yupik {
    margin: 0 !important;
    position: absolute;
    left: 0rem;
    width: 15.6rem;
    height: 5rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    z-index: 1;
    border-bottom:1px solid#a0a1a2;
    
  }
    
  .yu-pik {
      position: relative;
      display: flex;
      align-items: center;
      width: 29.7rem;
      height: 3.5rem;
      margin-left: 7rem;
      color:#ffffff;
      font-size: 36px;
      cursor:pointer;
  }
  
  .list-chat {
    position: relative;
    color:#ffffff;
    align-items: center;
  }
  
  .list1 {
      align-self: stretch;
      border-radius: 13px;
     
      overflow: hidden;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: var(--padding-lg) var(--padding-13xl);
      cursor: pointer;
     
      border: 1px solid #bfbfc0;
      font-size: 27px;
      margin-left:5%;
      margin-right:5%;
      height: 20%;
      margin-top:5%;
    }
    
  .list2 {
    align-self: stretch;
      border-radius: 13px;
      overflow: hidden;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: var(--padding-lg) var(--padding-13xl);
      cursor: pointer;
      border: 1px solid #bfbfc0;
      font-size: 27px;
      margin-left:5%;
      margin-right:5%;
      height: 20%;
      background-color: #00c3a4;
    }
  
    .list3 {
      align-self: stretch;
      border-radius: 13px;
     
      overflow: hidden;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: var(--padding-lg) var(--padding-13xl);
      cursor: pointer;
     
      border: 1px solid #bfbfc0;
      font-size: 27px;
      margin-left:5%;
      margin-right:5%;
      height: 20%;
      margin-top:5%;
    }
    .list4 {
      align-self: stretch;
      border-radius: 13px;
     
      overflow: hidden;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: var(--padding-lg) var(--padding-13xl);
      cursor: pointer;
     
      border: 1px solid #bfbfc0;
      font-size: 27px;
      margin-left:5%;
      margin-right:5%;
      height: 20%;
      margin-top:5%;
    }
    .blackAndWhiteCollection11 {
        position: absolute;
        top:5%;
        left: 10%;
        overflow: hidden;
        cursor: pointer;
      }
  
    
      .blackspace{
        height: 5rem;
        border-bottom: solid 1px #a0a1a2;
        background-color: #1f1f1f;
      }
  
      .mainspace{
        
        margin-top: 50px;
        background-color: #333539;
      }
  
  
      .api1 {
      font-size: 30px;
      color:#ffffff;
    }
  
    pre {
      
    margin-right: 110px;
     
    }
    code {
    padding: 8px;
    background-color: #2d2d2d;
    border-radius: 4px;
    color: #d4d4d4;
    font-family: 'Courier New', monospace;
  }
  
  pre code.hljs {
    display: block;
    overflow-x: auto;
    padding: 1em;
    background-color: #1e1e1e;
    border-radius: 8px;
  }
  
  /* 코드 블록의 가독성을 향상하기 위해 추가한 스타일 */
  .hljs {
    white-space: pre-wrap;
  }
  
  /* 코드 블록에 라인 넘버를 추가하기 위한 스타일 */
  
  
  .language-http{
    margin-left: 300px;
  }
  
  .hljs-attribute {
      color: #9cdcfe;
  }
  .hljs-meta{
      color: #9b9b9b;
  }
  .hljs-number {
      color: #b8d7a3;
  }
  
  .hljs-template-variable, .hljs-variable {
      color: #bd63c5;
  }
  
      .list1:hover{
        background-color: #00c3a4;
      }
  
      .list2:hover{
        background-color: #00c3a4;
      }
      .list3:hover{
        background-color: #00c3a4;
      }
      .list4:hover{
        background-color: #00c3a4;
      }
      .additional-content{
        display:none;
      }
  
      h1,p,h2{
        color:#ffffff;
        margin-left: 300px;
      }
  
      table{
        margin-left: 300px;
        margin-right: 100px;
        border-spacing: 0;
      }
  
      table td {
      padding: 12px;
      border-top: 1px solid #e5e5e5;
      border-collapse: collapse;
      border-spacing: 0;
      border-left: 1px solid #e5e5e5;
      
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 0px;
      text-align: left;
      vertical-align: top;
      min-width: 50px;
      padding: 14px 20px;
      color:#ffffff;
      }
  
      table td:first-child{
        border-left:none;
      }
  
      table th {
      border-right: 1px solid #e5e5e5;
      border-left: 1px solid #e5e5e5;
      border-top: 1px solid #e5e5e5;
      padding: 14px 20px;
      font-weight: normal;
      padding: 8px 12px;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 0px;
      background-color: #878787;
      text-align: left;
      vertical-align: middle;
      color:#ffffff;
    }
    
    table th:first-child,
    table th:nth-child(2),
    table th:nth-child(3) {
    border-right: none;
    
  }
  
   @media (max-width: 768px) {
    .rectangleDiv,
    .mainmainBChild1,
    .icon,
    .chatModel1,
    .mainmainBChild2,
    .mainmainBChild3,
    .mainmainBChild4,
    .mainmainBChild5,
    .mainmainBChild6,
    .mainmainBChild7,
    .mainmainBChild8 {
      display: none;
    }
  
    .navbarcontent .frame-group {
      display: none; /* 네비게이션 바의 일반 항목 숨기기 */
    }
    .yupik{
      border-bottom: hidden;
    }
    .additional-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      height: 300px;
    }
    /* 네비게이션 바 스타일 수정 */
    .navbar {
      width: 100%; /* 화면 전체 너비로 설정 */
    }
   
  
  
    /* 다른 스타일이 필요한 경우 추가 */
   }
  </style>
  
  