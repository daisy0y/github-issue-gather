# github-issue-gather
>pc,mobile 어디서든, 자주 방문하는 repository를 즐겨찾기하고 issue를 모아보세요!

<p align='center'>
  <img src='https://user-images.githubusercontent.com/61371367/138706355-ff93522a-51e1-4375-b04a-af5364d98489.png' width='400'/>
</p>

### 기술 스택 및 라이브러리
1. React js
2. redux, redux saga
3. typescript
4. octokit/core.js
5. antd
6. styled-components

### 구현 기능
1. github API를 이용한 repository 검색, issue 불러오기 기능
2. 로컬 스토리지를 활용한 repository 북마크 기능 (최대 4개)
3. 로컬 스토리지를 활용한 최근 검색어 기능 (최대10개, 밀어내기 형식)

### 설치 방법

소스코드 다운로드하여 프로젝트 환경 구성하기

1. github repository 우측 상단의 녹색 버튼을 누른 후 'Download Zip' 버튼을 눌러 코드를 다운 받은 후 원하는곳에 압축을 해제합니다.
2. ```npm install``` 터미널에서 해당 명령어를 입력해 필요한 패키지를 인스톨합니다.
3. ```npm start``` 터미널에 해당 명령어를 입력해 프로젝트를 실행합니다.
4. 프로젝트가 실행되면 [http://localhost:3000/github-issue-gather](http://localhost:3000/github-issue-gather) 페이지로 이동합니다.

Git Clone으로 프로젝트 환경 구성하기

1. github repository 우측 상단의 녹색 버튼을 누른 후 'Clone with HTTPS'의 repository 주소를 복사합니다.
2. 원하는곳에서 터미널에 ```git clone https://github.com/daisy0y/github-issue-gather.git``` 명령어를 입력해 코드를 내려 받습니다.
3. ```npm install``` 터미널에서 해당 명령어를 입력해 필요한 패키지를 인스톨합니다.
4. ```npm start``` 터미널에 해당 명령어를 입력해 프로젝트를 실행합니다.
5. 프로젝트가 실행되면 [http://localhost:3000/github-issue-gather](http://localhost:3000/github-issue-gather) 페이지로 이동합니다.

### 사용 방법
<p align='center'>
  <img src='https://user-images.githubusercontent.com/61371367/138714981-169288a9-6911-420a-bac7-f71dd31e2b7b.gif' width='400' />
</p>
1. 상단의 Input 형태의 버튼을 누르면 검색 모달이 토글됩니다.
2. 검색 모달에서 원하는 repository명을 검색하면 관련 된 이름의 repository 목록이 생성됩니다. list는 한번에 10개씩 호출 됩니다.
3. issue를 모아보기 원하는 repository를 북마크 버튼을 누르면 북마크에 저장됩니다. repository 이름을 클릭하면 해당 페이지로 이동됩니다.
4. 메인 페이지로 돌아오면 해당 repository의 이슈들을 get 해옵니다. issuse title을 클릭하면 해당 페이지로 이동됩니다.

<p align='center'>
  <img src='https://user-images.githubusercontent.com/61371367/138715527-d49f0446-58c1-4ac7-b60a-43d6dee20aa3.gif' width='400' />
</p>

5. 최대 10개의 최근 검색어가 저장됩니다.
6. 10개가 초과 될 경우 가장 먼저 저장 된 검색어가 제거되며 최근 검색어가 저장됩니다.
7. 검색어를 누르면 해당 검색어 결과 페이지로 이동합니다.

<p align='center'>
  <img src='https://user-images.githubusercontent.com/61371367/138716319-060e75d3-4dd6-4753-9dfc-2957daf5d722.gif' width='400' />
</p>

8. 최대 4개의 북마크를 저장 할 수 있습니다.
9. 북마크 해제시 issue 리스트를 새롭게 렌더링합니다.
