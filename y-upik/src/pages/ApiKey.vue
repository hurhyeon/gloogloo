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
      <p>이 문서는 Security Assistant, Search Summary Engine, Privacy Decetor에서 사용한 모듈의 API를 안내합니다.</p>

      <hr style="width: 70rem; margin: 20px 0; margin-left:300px ;">

      <h1>Security Assistant</h1>

      <h2>/get_prompt/{k}</h2>
        <p> 클라이언트에서 LLM을 활용하기 위한 보안 자료 및 프롬프트 서비스 API</p>
      <h3>Request 쿼리 파라미터</h3>

      <table>
<thead>
<tr>
<th>이름</th>
<th>타입</th>
<th>설명</th>
<th>필수</th>
</tr>
</thead>
<tbody>
  <tr>
    <td>k</td>
    <td><code>Integer</code></td>
    <td>질의에 활용할 문서의 개수</td>
    <td>O</td>
    </tr>
  <tr>
<td>q</td>
<td><code>String</code></td>
<td>프롬프트 생성을 위한 질문</td>
<td>O</td>
</tr>
<tr>
<td>category</td>
<td><code>String</code></td>
<td>검색할 문서 리트리버 <br>사용 가능 리트리버 : CVE, CWE, OWASP, KISA_VUL, MITRE2<br>default : KISA_VUL</td>
<td>X</td>
</tr>
</tbody>
</table>

      <h2>Response</h2>
      <p>API응답은 String 형태로 제공되며, 다음과 같은 정보들을 포함합니다.</p>
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
<tbody>
  <tr>
    <td>prompt</td>
    <td><code>String</code></td>
    <td>API에 활용할 프롬프트</td>
    <td>O</td>
    </tr>
  <tr>
    <td>Question</td>
    <td><code>String</code></td>
    <td>사용자가 질의한 질문</td>
    <td>O</td>
    </tr>
  <tr>
    <td>Context</td>
    <td><code>String</code></td>
    <td>리트리버를 통해 검색된 문서의 내용 </td>
    <td>O</td>
  </tr>
</tbody>
</table>
<h1>예제</h1>
<h2>요청</h2>
<code class="language-http hljs">http://yupik.com/get_prompt/1?q=sql%20injection&amp;category=OWASP
</code>

<h2>응답: 프롬프트 생성 및 문서 추출</h2>
<pre>
<code class="language-http hljs">
  <span class="hljs-attribute">Prompt</span>: You are an assistant for question-answering tasks. Use the following pieces of retrieved context to answer the question. If you don't know the answer or question is not question's format, just said you don't know . You should add the source of contents in metadata as a last of answer. Be sure to answer in Korean and use polite language.
  <span class="hljs-attribute">Question</span>: sql injection
  <span class="hljs-attribute">Context</span>: {'ids': [['e092b39d-7674-11ee-b992-c87f54adf3e8']], 'distances': [[0.3309985399246216]], 'metadatas': [[{'ID': 'OWASP_A03', 'category': 'OWASP', 'source': 'data_source/owasp_top_10/OWASP_A03.txt'}]], 'embeddings': None, 'documents': [[<span class="hljs-attribute">document contents</span>]]}\n    Answer:\n    "

</code>
</pre>

      <hr style="width: 70rem; margin: 20px 0; margin-left:300px ;">

      <h1>Security Assistant</h1>

      <h2>/docs_search/{k}</h2>
        <p> 클라이언트에서 LLM을 활용하기 위한 보안 자료 검색 서비스 API</p>
      <h3>Request 쿼리 파라미터</h3>

      <table>
<thead>
<tr>
<th>이름</th>
<th>타입</th>
<th>설명</th>
<th>필수</th>
</tr>
</thead>
<tbody>
  <tr>
    <td>k</td>
    <td><code>Integer</code></td>
    <td>질의에 활용할 문서의 개수</td>
    <td>O</td>
    </tr>
  <tr>
<td>q</td>
<td><code>String</code></td>
<td>문서 검색을 위한 질문</td>
<td>O</td>
</tr>
<tr>
<td>category</td>
<td><code>String</code></td>
<td>검색할 문서 리트리버 <br>사용 가능 리트리버 : CVE, CWE, OWASP, KISA_VUL, MITRE2<br>default : KISA_VUL</td>
<td>X</td>
</tr>
</tbody>
</table>
      <h2>Response</h2>
      <p>응답은 JSON 형태로 제공되며, 다음과 같은 정보들을 포함합니다.</p>
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
<tbody>
  <tr>
    <td>ids</td>
    <td><code>List of String</code></td>
    <td>검색된 문서의 인덱스</td>
    <td>O</td>
    </tr>
  <tr>
    <td>distances</td>
    <td><code>List of String</code></td>
    <td>검색된 문서와 질의의 거리</td>
    <td>O</td>
    </tr>
  <tr>
    <td>metadatas</td>
    <td><code>List of JSON</code></td>
    <td>검색된 문서의 메타데이터</td>
    <td>O</td>
  </tr>
  <tr>
    <td>embeddings</td>
    <td><code>String</code></td>
    <td>임베딩 방식 </td>
    <td>X</td>
  </tr>
  <tr>
    <td>documents</td>
    <td><code>List of String</code></td>
    <td>리트리버를 통해 검색된 문서의 내용 </td>
    <td>O</td>
  </tr>
</tbody>
</table>
<h1>예제</h1>
<h2>요청</h2>
<code class="language-http hljs">http://yupik.com/docs_search/1?q=sql%20injection&amp;category=OWASP
</code>

<h2>응답: 프롬프트 생성 및 문서 추출</h2>
<pre>
<code class="language-http hljs">
  {
    <span class="hljs-attribute">"ids"</span>: [
      [
        "e092b39d-7674-11ee-b992-c87f54adf3e8"
      ]
    ],
    <span class="hljs-attribute">"distances"</span>: [
      [
        0.3309985399246216
      ]
    ],
    <span class="hljs-attribute">"metadatas"</span>: [
      [
        {
          "ID": "OWASP_A03",
          "category": "OWASP",
          "source": "data_source/owasp_top_10/OWASP_A03.txt"
        }
      ]
    ],
    <span class="hljs-attribute">"embeddings"</span>: null,
    <span class="hljs-attribute">"documents"</span>: [
      [
        "검색된 문서의 내용"
      ]
    ]
  }
</code>
</pre>


<hr style="width: 70rem; margin: 20px 0; margin-left:300px ;">

<h1>Security Assistant</h1>

<h2>/seatriever_selector</h2>
  <p> 질의에 대해 적절한 문서 리트리버를 찾아주는 API</p>
<h3>Request 쿼리 파라미터</h3>
<table>
<thead>
<tr>
<th>이름</th>
<th>타입</th>
<th>설명</th>
<th>필수</th>
</tr>
</thead>
<tbody>
<tr>
<td>q</td>
<td><code>String</code></td>
<td>문서 검색을 위한 질문</td>
<td>O</td>
</tr>
</tbody>
</table>

<h2>Response</h2>
<p>응답은 String 형태로 제공되며, 다음과 같은 정보들을 포함합니다.</p>
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
<tbody>
<tr>
<td>Retriever filter</td>
<td><code>String</code></td>
<td>문서를 검색할 리트리버 필터</td>
<td>O</td>
</tr>
</tbody>
</table>
<h1>예제</h1>
<h2>요청</h2>
<code class="language-http hljs">http://yupik.com/retriever_selector?q=sql%20injection
</code>

<h2>응답: 문서 검색 리트리버 필터</h2>
<pre>
<code class="language-http hljs">"KISA_VUL"
</code>
</pre>


<hr style="width: 70rem; margin: 20px 0; margin-left:300px ;">

<h1>Search Summary Engine</h1>

<h2>/search_summary/{n}</h2>
  <p> 웹에서 키워드를 검색하고 해당 페이지의 내용을 프롬프트와 함께 제공하는 API</p>
<h3>Request 쿼리 파라미터</h3>
<table>
<thead>
<tr>
<th>이름</th>
<th>타입</th>
<th>설명</th>
<th>필수</th>
</tr>
</thead>
<tbody>
<tr>
<td>n</td>
<td><code>Integer</code></td>
<td>검색할 웹 페이지의 수</td>
<td>O</td>
</tr>
<tr>
  <td>q</td>
  <td><code>String</code></td>
  <td>검색을 위한 키워드</td>
  <td>O</td>
  </tr>
</tbody>
</table>

<h2>Response</h2>
<p>응답은 String 형태로 제공되며, 다음과 같은 정보들을 포함합니다.</p>
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
<tbody>
<tr>
<td>Retriever filter</td>
<td><code>String</code></td>
<td>문서를 검색할 리트리버 필터</td>
<td>O</td>
</tr>
</tbody>
</table>
<h1>예제</h1>
<h2>요청</h2>
<code class="language-http hljs">http://yupik.com/search_summary/1?q=KISIA
</code>

<h2>응답: 문서 검색 리트리버 필터</h2>
<pre>
<code class="language-http hljs">
  [
    {
      <span class="hljs-attribute">'url'</span>: 'https://www.kisia.or.kr/', 
      <span class="hljs-attribute">'content'</span>: '웹 컨텐츠'
    }
  ]
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

