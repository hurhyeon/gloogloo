<script>
// import { useWindowScroll } from '@vueuse/core';

export default {
  data() {
    return {
      selectedDropdownItem: '',
      selectedDropdownItem1: '',
      selectedDropdownItem2: '',
      selectedDropdownItem3: '',
      selectedDropdownItem4: '',
      webName: "",
      ph_text: "",
      system_role:'',
      apiKey: '',
      output:'',
      jsonData:'',

      showDropdown: false,
      dropdownItems: [
        { id: 1, name: 'docs_search' },
        { id: 2, name: 'search_summary' },
      ],
      showDropdown1: false,
      dropdownItems1: [
        { id: 3, name: '1' },
        { id: 4, name: '2' },
        { id: 5, name: '3' },
        { id: 6, name: '4' },
        { id: 7, name: '5' },

      ],
      showDropdown2: false,
      dropdownItems2: [
        { id: 8, name: 'gpt-4-1106-preview' },
        { id: 9, name: 'gpt-3.5-turbo-1106' },
        { id: 10, name: 'gpt-3.5-turbo' },
      ],
      showDropdown3: false,
      dropdownItems3: [
        { id: 11, name: '1024' },
        { id: 12, name: '2048' },
        { id: 13, name: '4096' },
      ],
      showDropdown4: false,
      dropdownItems4: [
        { id: 14, name: '0' },
        { id: 15, name: '0.2' },
        { id: 16, name: '0.4' },
        { id: 17, name: '0.6' },
        { id: 18, name: '0.8' },
        { id: 19, name: '1' }

      ],
    };
  },
  
  mounted(){
    this.loadLocalJson();
  },
  methods: {
    async loadLocalJson() {
      try {
        const response = await fetch('/static/data.json');
        const data = await response.json();
        this.jsonData = data;
        this.loaded = true;
        console.log("json data : ", data)
      } catch (error) {
        console.error('로컬 JSON 파일을 불러오는 중 에러 발생:', error);
      }
      this.initializePage();
    },
    initializePage(){
      this.selectedDropdownItem = this.jsonData["docsRetriever"];
      this.selectedDropdownItem1 = this.jsonData["n_docs"];
      this.selectedDropdownItem2 = this.jsonData["model"];
      this.selectedDropdownItem3 = this.jsonData["max_token"];
      this.selectedDropdownItem4 = this.jsonData["temp"];

      document.getElementById('ph_text').value = this.jsonData["ph_text"];
      document.getElementById('webName').value = this.jsonData["webName"];

      document.getElementById('system_role').value = this.jsonData["system_role"];
      document.getElementById('apiKey').value = this.jsonData["apiKey"];
    },
    toggleDropdown() {
      console.log('Dropdown 토글됨');
      console.log('드롭다운 표시1:', this.showDropdown);
      this.showDropdown = !this.showDropdown;
      console.log('드롭다운 표시2:', this.showDropdown);
    },
    toggleDropdownOne() {
      console.log('Dropdown 토글됨');
      this.showDropdown1 = !this.showDropdown1;
    },
    toggleDropdownTwo() {
      console.log('Dropdown 토글됨');
      this.showDropdown2 = !this.showDropdown2;
    },
    toggleDropdownThr() {
      console.log('Dropdown 토글됨');
      this.showDropdown3 = !this.showDropdown3;
    },
    toggleDropdownFou() {
      console.log('Dropdown 토글됨');
      this.showDropdown4 = !this.showDropdown4;
    },
    selectDropdownItem(item) {
      console.log('선택된 아이템:', item);
      this.selectedDropdownItem = item.name; // 선택한 아이템을 변수에 저장
    },
    selectDropdownItem1(item) {
      console.log('선택된 아이템:', item);
      this.selectedDropdownItem1 = item.name; // 선택한 아이템을 변수에 저장
    },
    selectDropdownItem2(item) {
      console.log('선택된 아이템:', item);
      this.selectedDropdownItem2 = item.name; // 선택한 아이템을 변수에 저장
    },
    selectDropdownItem3(item) {
      console.log('선택된 아이템:', item);
      this.selectedDropdownItem3 = item.name; // 선택한 아이템을 변수에 저장
    },
    selectDropdownItem4(item) {
      console.log('선택된 아이템:', item);
      this.selectedDropdownItem4 = item.name; // 선택한 아이템을 변수에 저장
    },
    RunServeRun(){
      const jsonData = 
      {
        ph_text: document.getElementById('ph_text').value,
        webName: document.getElementById('webName').value,
        docsRetriever: this.selectedDropdownItem,
        n_docs: this.selectedDropdownItem1,
        system_role: document.getElementById('system_role').value,
        apiKey: document.getElementById('apiKey').value,
        model: this.selectedDropdownItem2,
        max_token: this.selectedDropdownItem3,
        temp: this.selectedDropdownItem4
      };
      fetch('http://118.36.189.70:8000/save', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
          })
            .then(response => {
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
              return response.json();
            })
            .then(data => {
              console.log('서버 응답:', data);
            })
            .catch(error => {
              console.error('에러 발생:', error);
            });
      this.$router.push('/ChainBuilder');
    }
  }
};
</script>

<template>
  <div class="chain1">
    <!-- Header Section-->
    <header class="headline1">
      <div class="group1">
        <!-- <button type="button" class="backhome" @click="backhome"> -->
          <!-- <img :src="require('../assets/name.svg')" class="backhome"/> -->
        <!-- </button> -->
        <b class="securityyou">New Service</b>
        <!-- <button type="button" class="add" @click="startad"> -->
          <!-- <img :src="require('../assets/연필.svg')" class="add"/> -->
        <!-- </button> -->
      </div>
      <div class="group2">
        <!-- <button type="button" class="runserve" @click="RunServeRun"> -->
          <!-- <img :src="require('../assets/Group 225.svg')" class="runserve" @click="RunServeRun"/> -->
        <!-- </button> -->
        <!-- <button type="button" class="restart" @click="StartAgain"> -->
          <!-- <img :src="require('../assets/엑스.svg')" class="restart"/> -->
        <!-- </button> -->
      </div>
  </header>
  <!-- <img :src="require('../assets/Group 231.svg')" class="lastdance"/> -->
    <main class="templets">
      <div class="searchhmodule">
        <div class="seahead">
          <!-- <img :src="require('../assets/Group 230.svg')" class="search"/> -->
          <b class="title1">Document Search</b>
        </div>
        <div class="input">
          <b class="input1">inputs</b>
        </div>
        <div class="list1">
          <b class="role">DocsRetriever</b>
          <div class="dropdown-toggle" @click="toggleDropdown"> {{ this.selectedDropdownItem || "문서 검색기 선택"}}
            <div v-if="showDropdown" class="dropdown-content">
              <ul class="ulstyle">
                <li v-for="item in dropdownItems" :key="item.id" @click="selectDropdownItem(item)">{{ item.name }}</li>
              </ul>
            </div>
          </div>
          <b class="role1"> n_docs</b>
          <div class="dropdown-toggle1" @click="toggleDropdownOne">{{ this.selectedDropdownItem1 || "사용할 문서의 수"}}
            <div v-if="showDropdown1" class="dropdown-content1">
              <ul class="ulstyle">
                <li v-for="item in dropdownItems1" :key="item.id1" @click="selectDropdownItem1(item)">{{ item.name }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="output">
          <b class="output1">outputs</b>
        </div>
      </div>

      <div class="promptemodule">
        <div class="seahead">
          <!-- <img :src="require('../assets/Group 230.svg')" class="search"/> -->
          <b class="title1">Prompt Node</b>
        </div>
        <div class="input">
          <b class="input1">inputs</b>
        </div>
        <div class="list2">
          <b class="role">system_role</b>
          <input type="text" id="system_role" placeholder="text를 적어주세요." class="box"/>
        </div>
        <div class="output">
          <b class="output1">outputs</b>
        </div>
      </div>

      <div class="llmmodule">
        <div class="seahead">
          <!-- <img :src="require('../assets/Group 230.svg')" class="search"/> -->
          <b class="title1">LLM Node</b>
        </div>
        <div class="input">
          <b class="input1">inputs</b>
        </div>
        <div class="list2">
          <b class="role">API_Key</b>
          <input type="text" id="apiKey" placeholder="text를 적어주세요." class="box"/>
          <b class="role2">model</b>
          <div class="dropdown-toggle4" @click="toggleDropdownTwo">{{ this.selectedDropdownItem2 || "LLM 모델 선택"}}
            <div v-if="showDropdown2" class="dropdown-content2">
              <ul class="ulstyle">
                <li v-for="item in dropdownItems2" :key="item.id2" @click="selectDropdownItem2(item)">{{ item.name }}</li>
              </ul>
            </div>
          </div>
          <b class="role3">max_token</b>
          <div class="dropdown-toggle2" @click="toggleDropdownThr">{{ this.selectedDropdownItem3 || "최대 출력 token 수"}}
            <div v-if="showDropdown3" class="dropdown-content3">
              <ul class="ulstyle">
                <li v-for="item in dropdownItems3" :key="item.id3" @click="selectDropdownItem3(item)">{{ item.name }}</li>
              </ul>
            </div>
          </div>
          <b class="role4">temp</b>
          <div class="dropdown-toggle3" @click="toggleDropdownFou" >{{ this.selectedDropdownItem4 || "모델의 자유도 설정"}}
            <div v-if="showDropdown4" class="dropdown-content4">
              <ul class="ulstyle">
                <li v-for="item in dropdownItems4" :key="item.id4" @click="selectDropdownItem4(item)">{{ item.name }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="output3">
          <b class="output1">outputs</b>
        </div>
      </div>

      <div class="outputmodule">
        <div class="seahead">
          <!-- <img :src="require('../assets/Group 230.svg')" class="search"/> -->
          <b class="title1">Result output</b>
        </div>
        <div class="input">
          <b class="input1">inputs</b>
        </div>
        <div class="list4">
          <b class="role">Ph_Text</b>
          <input type="text" id="ph_text" placeholder="text를 적어주세요." class="box"/>
          <b class="role1">Web_Name</b>
          <input type="text" id="webName" placeholder="text를 적어주세요." class="box1"/>
        </div>
        <div class="output">
          <b class="output1">outputs</b>
        </div>
      </div>
    </main>
  </div>

</template>

<style scoped>

/* @font-face {
  font-family: 'semibold';
  src:url('../../public/fonts/Pretendard-SemiBold.ttf')
}
@font-face {
  font-family: 'regular';
  src:url('../../public/fonts/Pretendard-Regular.ttf')
}
@font-face {
  font-family: 'medium';
  src:url('../../public/fonts/Pretendard-Medium.ttf')
}
@font-face {
  font-family: 'bold';
  src:url('../../public/fonts/Pretendard-Bold.ttf')
} */
.chain1 {
  margin-left: 17rem;
  margin-top:5rem;
  border-radius: 13px;
  background-color: #1F1F1d;
  border: 1px solid #bfbfc0;
  box-sizing: border-box;
  height: 700px;
  width: 1350px;
}
.headline1 {
  border-radius: 13px 13px 0px 0px;
  background: #1f1f1f;
  border: 1px solid #bfbfc0;
  height: 70px;
  widows: 1150px;
  justify-content: center;


}
.group1 {
  position: relative;
  widows: 500px;
  height: 40px;
  left: 20px;

}
.backhome {
  color:#1F1F1d;
  align-items: center;
  position: relative;
  width:40px;
  height: 40px;
  top: 5px;
}
.securityyou {
  position: relative;
  color: white;
  font-family: 'bold';
  font-size: 30px;
  left: 16px;
}
.add {
  position: relative;
  left: 30px;
  top: 5px;
  width: 40px;
  height: 40px;
}
.group2 {
  position: relative;
  widows: 100px;
  height: 40px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  display: flex;
  right: 30px;
  bottom: 25px;
}
.runserve {
  widows: 50px;
  height: 50px;
  position: relative;
  right: 10px;

}
.restart {
  position: relative;
  width: 50px;
  height: 50px;
  ;

}
.templets {
  position: relative;
  height: 628px;
  border-radius: 0px 0px 13px 13px;
  border: 1px solid #bfbfc0;
  /* background: #7d7d7d; */
}
.searchhmodule {
  position: absolute;
  top: 200px;
  right: 400px;
  /* left: 50px; */
  width: 250px;
  height: 400px;
  border: 1px solid #bfbfc0;
  border-radius: 13px;
  background-color: #23262D;
}
.promptemodule {
  position: absolute;
  top: 10px;
  left: 400px;
  width: 250px;
  height: 300px;
  border: 1px solid #bfbfc0;
  border-radius: 13px;
  background-color: #23262D;

}

.llmmodule {
  position: absolute;
  top: 40px;
  /* right: 400px; */
  left: 50px;
  width: 250px;
  height: 550px;
  border: 1px solid #bfbfc0;
  border-radius: 13px;
  background-color: #23262D;
}

.outputmodule {
  position: absolute;
  top: 30px;
  right: 50px;
  width: 250px;
  height: 400px;
  /* border: 1px solid #bfbfc0; */
  border-radius: 13px;
  background-color: #23262D;

}
.seahead {
  position: relative;
  /* border: 1px solid #bfbfc0; */
  border-radius: 13px 13px 0px 0px ;
  height: 50px;
}
.search { /*이미지 좀 구린가? 뒤에 원 넣어야하나?*/
  position: relative;
  top: 10px;
  left: 20px;
  width: 30px;
  height: 30px;
}
.title1 {
  position: relative;
  color: white;
  font-family: 'bold';
  font-size: 20px;
  left: 30px;
  text-align: center;

}
.input {
  position: relative;
  background: #333539 ;
  height: 40px;
  
}
.input1,
.output1 {
  position: relative;
  color: white;
  text-align: center;
  font-family: 'regular';
  font-size: 15px;
  top: 8px;
  left: 100px;
  z-index: 0;

}

.list1 {
  position: relative;
  /* background: #dcdcdc; */
  text-align: center;
  height: 220px;
}
.list2 {
  position: relative;
  /* background: #dcdcdc; */
  /* text-align: center; */
  height: 120px;
}
.list4 {
  position: relative;
  /* background: #dcdcdc; */
  /* text-align: center; */
  height: 220px;
}
.output {
  position: relative;
  background: #333539 ;
  height: 50px;
  z-index: 0;
  
}
.output3 {
  position: relative;
  background: #333539 ; 
  height: 50px;
  top: 250px;
  
}

.role {
  position: absolute;
  color: white;
  font-family: 'regular';
  font-size: 14px;
  top: 20px;
  left: 15px;
}
.role1 {
  position: absolute;
  color: white;
  font-family: 'regular';
  font-size: 14px;
  top: 120px;
  left: 15px;
}
.role2 {
  position: absolute;
  color: white;
  font-family: 'regular';
  font-size: 14px;
  top: 100px;
  left: 15px;
}
.role3 {
  position: absolute;
  color: white;
  font-family: 'regular';
  font-size: 14px;
  top: 175px;
  left: 15px;
}
.role4 {
  position: absolute;
  color: white;
  font-family: 'regular';
  font-size: 14px;
  top: 250px;
  left: 15px;
}
.box {
  position: absolute;
  background-color: #333539;
  border-radius: 10px;
  top: 50px;
  left: 20px;
  width: 210px;
  height: 40px;
  color: #fff;
  font-size: 15px;
  font-family: 'regular';
}
.box1 {
  position: absolute;
  background-color: #333539;
  border-radius: 10px;
  top: 150px;
  left: 20px;
  width: 210px;
  height: 40px;
  color: #fff;
  font-size: 15px;
  font-family: 'regular';

}
.dropdown-toggle {
  position: relative;
  background-color: #333539;
  border-radius: 10px;
  top: 50px;
  left: 20px;
  width: 210px;
  height: 30px;
  color: #fff;
  font-size: 15px;
  text-align: center;
  font-family: 'regular';
  padding-top: 15px;
}
.dropdown-toggle1 {
  position: relative;
  background-color: #333539;
  border-radius: 10px;
  top: 100px;
  left: 20px;
  width: 210px;
  height: 30px;
  color: #fff;
  font-size: 15px;
  text-align: center;
  font-family: 'regular';
  padding-top: 15px;
}
.dropdown-toggle2 {
  position: relative;
  background-color: #333539;
  border-radius: 10px;
  top: 150px;
  left: 20px;
  width: 210px;
  height: 30px;
  color: #fff;
  font-size: 15px;
  text-align: center;
  font-family: 'regular';
  padding-top: 15px;
}
.dropdown-toggle3 {
  position: relative;
  background-color: #333539;
  border-radius: 10px;
  top: 180px;
  left: 20px;
  width: 210px;
  height: 30px;
  color: #fff;
  font-size: 15px;
  text-align: center;
  font-family: 'regular';
  padding-top: 15px;
}
.dropdown-toggle4 {
  position: relative;
  background-color: #333539;
  border-radius: 10px;
  top: 120px;
  left: 20px;
  width: 210px;
  height: 30px;
  color: #fff;
  font-size: 15px;
  text-align: center;
  font-family: 'regular';
  padding-top: 15px;
}
.lastdance {
  position: absolute;
  width: 770px;
  height: 400px;
  top: 370px;
  left: 560px;
  
}
.dropdown-content {
  position: relative;
  background-color: #595C61;
  border-radius: 13px;
  z-index: 1;
}

.dropdown-content1 {
  position: relative;
  background-color: #595C61;
  border-radius: 13px;
  z-index: 1;
}

.dropdown-content2 {
  position: relative;
  background-color: #595C61;
  border-radius: 13px;
  z-index: 1;
}
.dropdown-content3 {
  position: relative;
  background-color: #595C61;
  border-radius: 13px;
  z-index: 1;
}
.dropdown-content4 {
  position: relative;
  background-color: #595C61;
  border-radius: 13px;
  z-index: 1;
}
.bold {
    color: white;
    font-size: 16px;
    font-family: 'bold';
  }
  .ulstyle {
    list-style-type: none;

  }
  /*.dropdown-content
  .dropdown-content1
  .dropdown-content2
  .dropdown-content3{
    position: relative;
    background-color: #595C61;
    border-radius: 13px;
    left: 20px;
    width: 210px;
    height: 50px;
    color: white;
    font-size: 15px;
  }*/
  li {
  border: 1px solid #ffffff;
  border-left: hidden;
  border-right: hidden;
  border-bottom: 1px solid ;
  margin-right: 30px;
  padding-bottom: 10px; 
}

li:first-child {
  border-top: hidden;
}

li:last-child {
  border-bottom: hidden;
}
</style>