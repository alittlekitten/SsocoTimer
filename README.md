## ⏳ ReactStopwatch

**최신 업데이트 날짜 : `2022.01.24`**

- React와 CRA를 이용해서 간단한 스탑워치를 만들어보는 연습용 레포지토리입니다.
- React의 기본적인 동작 방식을 익히고 있습니다.
- CSS in JS 중에서도 Emotion을 사용하고 있습니다.
- 클릭을 유지하면 점점 빠르게 count가 변동합니다.

<br />

## 🔧 Tools

<div>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/Create React App-09D3AC?style=flat-square&logo=Create React App&logoColor=white"/>
  <img src="https://img.shields.io/badge/Emotion-C865B9?style=flat-square&logo=Emotion&logoColor=white"/>
</div>

<br />

## 📜 개발 로그

### `22.01.23`

- [x] CRA, emotion 적용
- [x] 클릭시 시간 변화
- [x] 꾹 누르고 있으면 점차 빠르게 증감

### `22.01.24`

- [x] 0초 미만으로 내려가지 않음
- [x] 클릭시 버튼색 변화
- [] 시간 3초남았을 때부터 네이비즘처럼 색변화
- [x] 버튼들 기능 구현
- [x] 일시정지, 정지 버튼 추가
- [x] 빠르게 클릭하면 여러번 setTimeout잡히는 현상 수정
- [x] input창에 수동으로 숫자입력 가능

<br />

## 🗝 고민한 점

### 어떻게 증감이 빨라지는 버튼을 만들었는가

- setTimeout의 두 번째 인자를 점차 감소하게 만듦
- 재귀를 통해 꾹 누르고 있으면 계속해서 count가 동작하게 구현
- 마우스의 클릭과 클릭해제는 `onMouseDown`, `onMouseUp`으로 구현
- 예외사항 처리를 위해 `onMouseLeave`와 `onChange`이벤트도 사용

### input에 입력받기

- 아무 글자나 우선 입력받고, input의 value가 변할 때마다 `onChange` 이벤트로 감시
- 입력받은 값에서 숫자를 제외한 값은 전부 regex를 이용해서 추출
- input값은 text형태로 받으므로 number형태로 바꿔서 time에 적용

### 숫자 감소가 0에서 멈추게 하기

- repeatCount 함수 내에서 setTime 함수가 작동할 때 조건문을 걸어줌
- 만약 시간이 감소해서 0이 되는 경우 더이상 감소하지 않도록 예외처리

### svg 버튼 호버와 클릭시 효과 넣기

- `{ ReactComponent as Plus }`를 사용하여 svg파일을 컴포넌트처럼 사용

<br />

## 🎞 움짤

![Honeycam 2022-01-25 03-44-43](https://user-images.githubusercontent.com/14370441/150844648-a5d95396-1f4a-42a1-b11d-5c3f8a2b6304.gif)
