# ⏳ SsocoTimer

**👉 배포 페이지 : https://alittlekitten.github.io/SsocoTimer/**

**최신 업데이트 날짜 : `2022.02.24`**

**최신 릴리즈 버전 : `ver 1.0.3`**

![Honeycam 2022-02-16 02-56-45](https://user-images.githubusercontent.com/14370441/154123927-34d5656d-6cfe-4ff3-b9a0-edd6d16b8e2c.gif)

- React와 CRA를 이용해서 간단한 스탑워치를 만들어보는 연습용 레포지토리입니다.
- React의 기본적인 동작 방식을 익히고 있습니다.
- CSS in JS 중에서도 Emotion을 사용하고 있습니다.
- 클릭을 유지하면 점점 빠르게 count가 변동합니다.
- 전역에서 관리가 필요한 상태를 처리하기 위해 Redux를 사용합니다.
- 함수형 컴포넌트와 React hooks를 적극적으로 사용합니다.

<br />

## 🔧 Tools

<div>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/Create React App-09D3AC?style=flat-square&logo=Create React App&logoColor=white"/>
  <img src="https://img.shields.io/badge/Emotion-C865B9?style=flat-square&logo=Emotion&logoColor=white"/>
  <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"/>
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
- [x] 버튼들 기능 구현
- [x] 일시정지, 정지 버튼 추가
- [x] 빠르게 클릭하면 여러번 setTimeout잡히는 현상 수정
- [x] input창에 수동으로 숫자입력 가능

### `22.01.27`

- [x] 시간 3초남았을 때부터 네이비즘처럼 색변화

### `22.01.31`

- [x] 중간에 데이터를 수정하게 된다면 재생이 일시정지로 바뀌게 설정
- [x] 현재 상태가 play라면 play 버튼의 색상이 빨간색으로 변해있도록 설정
- [x] 타이머와 스톱워치 탭으로 구분하기
- [x] Redux 적용

### `22.02.01`

- [x] 시, 분, 초로 나누기
- [x] 0초가 되자마자 재생버튼 검은색으로 변경하기
- [x] 타이머 랩타임 기능 만들기
- [x] 타이머 +- 버튼 수정하기

### `22.02.02`

- [x] 타이머가 재생상태가 아니라면 화면이 빨간색으로 변하지 않도록 수정
- [x] 스톱워치로 0.001초까지 구분하기
- [x] 스톱워치 랩타임 기능 만들기
- [x] 스톱워치 시간 정확도 개선하기 (로직변경)
- [x] 스톱워치를 Date방식으로 변환하면서 생기는 각종 시간 계산 버그들 수정
- [x] 시간 CSS가 고정되어있지 않아서 흔들리는 현상 수정
- [x] 타이머도 Date방식으로 변환
- [x] increase/decrease 버튼을 눌렀을 때 정상적으로 시간이 멈추지 않는 버그 수정

### `22.02.12`

- [x] 배포(https://alittlekitten.github.io/reactStopwatch/)

### `22.02.14`

- [x] 개발자 정보 추가 (깃허브 페이지와 티스토리 페이지 링크 버튼 생성)
- [x] 버튼 크기 변경으로 인한 요소 위치변화 버그 제거 [👉 issue링크](https://github.com/alittlekitten/SsocoTimer/issues/1)
- [x] 버튼에 transition적용
- [x] 메타데이터 추가 (head의 로고와 타이틀, 설명 수정)
- [x] 도메인명 변경 (reactStopwatch -> SsocoTimer)
- [x] 배포 주소 변경 (https://alittlekitten.github.io/SsocoTimer/)

### `22.02.15`

- [x] 타이머가 끝났을 때 알람 소리(꼬꼬댁)가 나게 하는 기능 추가
- [x] 토글 버튼을 통해 알람 소리를 켜고 끌 수 있는 기능을 추가 
- [x] 제작자에게 메일을 보낼 수 있는 버튼 추가
- [x] `Timer` 00:00:00인 상태에서 -버튼을 누르면 -1:59:59로 변하는 버그 수정 [👉 issue링크](https://github.com/alittlekitten/SsocoTimer/issues/20)
- [x] `Timer` 재생 상태에서 +-버튼에서 마우스를 올렸다가 떼는 순간 재생이 멈추는 버그 수정 [👉 issue링크](https://github.com/alittlekitten/SsocoTimer/issues/21)

### `22.02.24`

- [x] +- 버튼을 눌렀을 때 초가 증감하는 속도에 따라 버튼 색이 진해지는 버튼 디자인 추가
- [x] `Timer` -버튼을 누르고 있었을 때 0초가 되면 speed가 초기화되지 않는 버그 수정 [👉 issue링크](https://github.com/alittlekitten/SsocoTimer/issues/25)


<br />

## 🗝 고민한 점

### 어떻게 증감이 빨라지는 버튼을 만들었는가

- setTimeout의 두 번째 인자를 점차 감소하게 만들었습니다.
- 재귀를 통해 꾹 누르고 있으면 계속해서 count가 동작하게 구현했습니다.
- 마우스의 클릭과 클릭해제는 `onMouseDown`, `onMouseUp`으로 구현했습니다.
- 예외사항 처리를 위해 `onMouseLeave`와 `onChange`이벤트를 사용했습니다.

### input에 입력받기

- 아무 글자나 우선 입력받고, input의 value가 변할 때마다 `onChange` 이벤트로 감시합니다.
- 입력받은 값에서 숫자를 제외한 값은 전부 regex를 이용해서 추출했습니다.
- input값은 text형태로 받으므로 number형태로 바꿔서 time에 적용했습니다.

### 숫자 감소가 0에서 멈추게 하기

- repeatCount 함수 내에서 setTime 함수가 작동할 때 조건문을 걸었습니다.
- 만약 시간이 감소해서 0이 되는 경우 더이상 감소하지 않도록 예외처리했습니다.

### svg 버튼 호버와 클릭시 효과 넣기

- `{ ReactComponent as Plus }`를 사용하여 svg파일을 컴포넌트처럼 사용했습니다.

### 조건부 스타일 적용하기

- 기존에는 useState만으로 time을 관리했지만, setTimeout의 재귀를 사용하다보니 실시간으로 time이 바뀌지 않는 문제가 발생했습니다.
  - 이 문제를 해결하기 위해 임시로 전역에 nowTime이라는 변수를 만들었습니다. (추후 로직 변경을 통해 전역변수를 없앴습니다.)
- 이렇게 변화한 상태를 props에 담은 후 Emotion문법을 사용하여 만든 CSS in JS Component에 전달했습니다.
- props로 받은 nowTime값을 삼항연산자의 Chaining을 이용해서 조건을 적용한 후에 스타일에 반영했습니다.

### useEffect 활용

- 기존에는 setState 안에서 prev => 를 통해 내부 상태값을 확인하고 변경하는 방식을 사용했습니다.
  - 하지만 time으로 관리했던 시간 상태가 second, minute, hour로 나눠지면서 상태들이 연결되기 시작했습니다.
  - 기존 prev를 이용하여 상태값을 변경하는 방식은 setState 안에서 또 다시 setState를 하는 경우 중복해서 state를 변경시키는 문제를 야기했습니다. (렌더링 되기 전에 state를 한번에 처리하기 때문에 문제 발생)
- useEffect를 사용하여 렌더링이 된 이후에 state를 관리해주는 방식으로 문제를 해결할 수 있었습니다.

### useCallback 활용

- useEffect를 활용하면서 중복된 코드들을 밖에 선언하고 안에서 가져다 쓰는 방식을 사용하게 되었습니다.
  - 이 과정에서 함수를 의존성 배열 안에 넣다보니 리렌더링이 될 때마다 함수가 새로 생성이 되는 문제가 발생했습니다.
- useCallback을 사용하여 의존성 배열 안에 들어간 요소가 바뀌지 않으면 기존에 있던 함수를 재사용하도록 구현하였습니다.

### setTimeout / setInterval의 딜레이 문제 해결

- setTimeout과 setInterval은 정확한 시간에 동작하지 않고 조금 더 딜레이 되는 현상이 발생할 수 있습니다.
- 이 문제를 해결하고 더 정확한 시간 계산을 위해서 Date() 객체를 사용하였습니다.
- Stopwatch는 Date로 지나간 시간을 측정하는 방식을 사용하였습니다.
- Timer는 설정한 시간을 Date객체로 만든 후에 Date로 지나간 시간을 빼 주는 방식을 사용하였습니다.

### transform 속성

- 기존에는 버튼의 width와 height를 직접 변경하여 hover로 인한 크기 변화가 있으면 다른 요소들이 위치 정보에 영향을 받았습니다.
- 그래서 position: absolute까지 써가면서 변경을 막았었습니다.
- 이제는 css에 있는 transform과 scale을 이용하면 다른 요소에 영향을 끼치지 않고 버튼의 크기 변경이 가능하도록 구현하였습니다.
- transition 속성과 함께 적용하여 보다 자연스럽고 부드러운 UI/UX를 만들 수 있었습니다.

### 알람 재생 / useMemo 활용

- Timer에서 사용하는 알람기능 상태관리를 위해 ./src/store 폴더 내부에 soundReducer를 만들고, 같은 폴더의 index.js에서 combineReducers를 사용해서 기존의 리듀서와 함께 사용할 수 있도록 만들었습니다.
- Title에서 현재 tap 상태가 Timer일 때만 알람 버튼이 나오도록 설정하였습니다.
- Timer.jsx에서는 new Audio()를 이용해서 음원파일을 불러옵니다.
  - 매번 새롭게 불러오지 않고 한번만 불러오기 위해서 useMemo를 이용해서 Memoization을 하였습니다.
  - 타이머가 재생중에 00:00:00이 되면 Audio의 play 메서드를 실행하는 `playAlarm`함수를 실행하도록 로직을 구현했습니다.

### 버튼 클릭시 속도에 따른 버튼 색 변화

- 기존에는 hover를 했을 때 고정된 색상이 나오도록 설정했었습니다.
- 이 부분을 속도에 따라 달라지게 만들기 위해 speed 상태를 props로 전달하고, 16진수 코드를 rgba형식으로 바꾼 후 speed에 따라 변화할 수 있도록 계산식을 부여했습니다.

<br />

## 🎞 움짤

### ver 1.0.3

![Honeycam 2022-02-24 04-00-01](https://user-images.githubusercontent.com/14370441/155389223-78847bc6-c6d7-46d8-9b04-a5b0f2a783d7.gif)

### ver 1.0.2

![Honeycam 2022-02-16 02-56-45](https://user-images.githubusercontent.com/14370441/154123905-faca3462-1775-4ea7-a242-e0d3633502c7.gif)

### ver 1.0.1

![Honeycam 2022-02-15 00-42-34](https://user-images.githubusercontent.com/14370441/153896373-6e561530-d9bb-4896-80be-556c8a12ba0a.gif)

### ver 0.2.0

![Honeycam 2022-02-03 02-33-35](https://user-images.githubusercontent.com/14370441/152206600-60ad7dd7-a6f5-40ae-a649-3fb82dd46214.gif)

### ver 0.1.1

![Honeycam 2022-02-02 07-47-45](https://user-images.githubusercontent.com/14370441/152064440-ef007f4b-bed2-4321-a698-e338b24de2bd.gif)

### ver 0.1.0

![Honeycam 2022-02-01 04-44-01](https://user-images.githubusercontent.com/14370441/151861680-30f19156-b347-4106-b5bd-e7c2ffd1af7c.gif)

### ver 0.0.1

![Honeycam 2022-01-28 04-20-06](https://user-images.githubusercontent.com/14370441/151429636-543529b3-052f-474f-ab2e-ae49b78f07d7.gif)

### ver 0.0.0

![Honeycam 2022-01-25 03-44-43](https://user-images.githubusercontent.com/14370441/150844648-a5d95396-1f4a-42a1-b11d-5c3f8a2b6304.gif)
