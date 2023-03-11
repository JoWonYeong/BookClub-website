# 📗BookClub-website-Frontend

<br />

## 🛠추리소설 동아리 웹사이트 보수하기

현재 브랜치의 코드들은 처음 HTML, CSS, JavaScript를 배우고 한 개인 프로젝트 입니다. <br/>이후에 보니 수정할 부분이 많이 보여서 **main 브랜치**에 보수를 할 예정입니다. 첨부된 사진은 모두 보수 전 입니다.

---
1. [다양한 크기의 뷰포트에서 배치 비율 동일하게 보이게 수정 ](#💡-1.-다양한-크기의-뷰포트에서-배치-비율-동일하게-보이게-수정)
2. [뷰포트의 가로길이에 따라 반응형으로 요소 배치](#-뷰포트의-가로길이에-따라-반응형으로-요소-배치)
3. [글자에 적용된 투명도 수정](#-글자에-적용된-투명도-수정)
4. [`<table>`로 짠 부분 레이아웃 수정](#-`<table>`로-짠-부분-레이아웃-수정)
5. [웹접근성 고려하기](#-웹접근성-고려하기)

<br />

## 💡 1. 다양한 크기의 뷰포트에서 배치 비율 동일하게 보이게 수정

- 첫 코딩을 13인치로 해서 그 이상 크기의 모니터에서는 요소 크기가 원하는대로 표현되지 않았습니다.
- 이를 어떤 모니터에서 봐도 다 동일한 크기로 설정되게 수정할 예정입니다.

<br />

### 💻 작은 화면으로 볼 때

### 📄 index.html

![README1-1-1](https://user-images.githubusercontent.com/92977925/224243094-468dd62c-6605-4af7-957c-d7a23d3a5be0.png)

<br />

### 💻큰 화면으로 볼 때

### 📄index.html

![README1-1](https://user-images.githubusercontent.com/92977925/224241792-1a25b27a-7cef-400a-99fa-a20093287902.png)

### 📄 introduceClub.html

![README1-2](https://user-images.githubusercontent.com/92977925/224243553-83716f9f-d558-4c23-8a53-a0cd7e80a1d6.png)

### 📄 bestBook.html

![README1-3](https://user-images.githubusercontent.com/92977925/224245930-90d0189a-e849-4528-a33b-4c1877f5a723.png)

### 📄 rentalBook.html

![README1-4](https://user-images.githubusercontent.com/92977925/224246337-443785a4-0cae-42ba-b8dd-594a13d3687c.png)

<br />

## 💡 2. 뷰포트의 가로길이에 따라 반응형으로 요소 배치

- 뷰포트의 가로길이가 줄어들 때 배치가 깔끔하지 못합니다.
- 뷰포트의 길이에 따라 배치를 수정해 반응형으로 수정할 예정입니다. (글자크기도 반응형으로 설정할 예정😊)

### 📄 뷰포트 가로길이 줄어들 때

![README2](https://user-images.githubusercontent.com/92977925/224288785-fd2e5f59-69c3-4546-a274-02c0e83e720b.gif)

<br />

## 💡 3. 글자에 적용된 투명도 수정

- 배경만 투명도를 주고 싶었는데 글자까지 투명해지는 현상 해결할 예정입니다.

### 📄 index.html

![README3-1](https://user-images.githubusercontent.com/92977925/224254111-c170b560-92be-4c4a-baed-e96f4a8eb85b.png)

### 📄 bestBook.html

![README3-2](https://user-images.githubusercontent.com/92977925/224254272-7d85696b-9399-45b2-a8ae-2ccf63bc858e.png)

<br />

## 💡 4. `<table>`로 짠 부분 레이아웃 수정

- `<table>`로 짠 부분을 `grid` 나 `flex`를 활용해 반응형으로 책 목록을 배치할 예정입니다.

### 📄 rentalBook.html

![README4](https://user-images.githubusercontent.com/92977925/224255375-af2e2377-d2b6-4bac-aada-636b88c7cfd5.png)

<br />

## 💡5. 웹접근성 고려하기

- 웹 접근성을 고려해 `<h1>`, `<h2>`... 사용해 구조를 잡을 예정입니다.
- `tab` 활용해서 원하는 순서로 포커스 가게 설정할 예정입니다.
- 예시로 `index.html` 이미지만 있지만, 모든 페이지가 이렇다는 사실...😱

### 📄 보수 전 index.html 헤더 구조 ( 엉망진창💣 )

![README5](https://user-images.githubusercontent.com/92977925/224257578-c6a0e2b0-c2bf-48f4-8070-f657c6ee9d2f.png)
<br />
`참고:  https://www.daleseo.com/html-tabindex/`
