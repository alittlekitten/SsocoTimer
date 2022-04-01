# ⏳ SsocoTimer

---

```
📢 SsocoTimer는 24시간 영업중입니다!! 😁

💡 사용하시다가 추가하고 싶은 기능이나 발견하신 오류가 있다면 언제든지 아낌없이 issue를 날려주세요 😊
💡 현재 1주일에 1회 이상 주기적으로 기능 업데이트 및 버그 픽스 중에 있습니다 😄
```

---
</br>
<div align="center">
  <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/alittlekitten/SsocoTimer&count_bg=%233D61C8&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/>
</div>
</br>
  
**👉 배포 페이지 : https://alittlekitten.github.io/SsocoTimer/**

**최신 업데이트 날짜 : `2022.04.01`**

**최신 릴리즈 버전 : `ver 1.5.0`**

![Honeycam 2022-03-24 02-10-55](https://user-images.githubusercontent.com/14370441/159756812-272b28a4-2281-4769-88fb-9e57795b6de7.gif)

- `React`와 `CRA`를 이용해서 간단한 스탑워치를 만들어보는 연습용 레포지토리입니다.
- React의 기본적인 동작 방식을 익히고 있습니다.
- CSS in JS 중에서도 `Emotion`을 사용하고 있습니다.
- 클릭을 유지하면 점점 빠르게 count가 변동합니다.
- 전역에서 관리가 필요한 상태를 처리하기 위해 `Redux`를 사용합니다.
- 함수형 컴포넌트와 `React hooks`를 적극적으로 사용합니다.
- 기존 `JavaScript` 기반의 프로젝트를 `TypeScript` 기반 프로젝트로 마이그레이션했습니다.

<br />

## 🔧 Tools

<div>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
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

### `22.02.12` - `v1.0.0`

- [x] 배포(https://alittlekitten.github.io/reactStopwatch/)

### `22.02.14` - `v1.0.1`

- [x] 개발자 정보 추가 (깃허브 페이지와 티스토리 페이지 링크 버튼 생성)
- [x] 버튼 크기 변경으로 인한 요소 위치변화 버그 제거 [👉 issue링크](https://github.com/alittlekitten/SsocoTimer/issues/1)
- [x] 버튼에 transition적용
- [x] 메타데이터 추가 (head의 로고와 타이틀, 설명 수정)
- [x] 도메인명 변경 (reactStopwatch -> SsocoTimer)
- [x] 배포 주소 변경 (https://alittlekitten.github.io/SsocoTimer/)

### `22.02.15` - `v1.0.2`

- [x] 타이머가 끝났을 때 알람 소리(꼬꼬댁)가 나게 하는 기능 추가
- [x] 토글 버튼을 통해 알람 소리를 켜고 끌 수 있는 기능을 추가
- [x] 제작자에게 메일을 보낼 수 있는 버튼 추가
- [x] `Timer` 00:00:00인 상태에서 -버튼을 누르면 -1:59:59로 변하는 버그 수정 [👉 issue링크](https://github.com/alittlekitten/SsocoTimer/issues/20)
- [x] `Timer` 재생 상태에서 +-버튼에서 마우스를 올렸다가 떼는 순간 재생이 멈추는 버그 수정 [👉 issue링크](https://github.com/alittlekitten/SsocoTimer/issues/21)

### `22.02.24` - `v1.0.3`

- [x] +- 버튼을 눌렀을 때 초가 증감하는 속도에 따라 버튼 색이 진해지는 버튼 디자인 추가
- [x] `Timer` -버튼을 누르고 있었을 때 0초가 되면 speed가 초기화되지 않는 버그 수정 [👉 issue링크](https://github.com/alittlekitten/SsocoTimer/issues/25)

### `22.02.25` - `v1.1.0`

- [x] 현재 시간을 나타내는 탭 추가 (시, 분, 초, 밀리초 표시)
- [x] 상단 헤더에 버전정보 추가

### `22.02.26` - `v1.1.1`

- [x] `Clock` 연월일 추가
- [x] `Clock` 밀리초 단위 사용자가 볼 수 없도록 삭제
- [x] `Clock` 12시간제, 24시간제를 선택할 수 있는 버튼 추가
- [x] 구글 서치콘솔 등록

### `22.03.03` - `v1.2.0`

- [x] 타입스크립트 마이그레이션

### `22.03.14` - `v1.2.1`

- [x] 커스텀 훅을 이용한 관심사 분리 (비즈니스 로직 분리)
- [x] svg 파일 불러올 때 인식하지 못하는 문제를 해결하기 위한 레퍼런스 설정 변경 (react-scripts 타입 의존성 가져오기)
- [x] 기타 환경설정 변경 및 메타데이터 변경

### `22.03.24` - `v1.3.0`

#### Special Thx To my mentor [yeon52](https://github.com/yeon52), [pyo-sh](https://github.com/pyo-sh)

- [x] 12시간제 시계에서 12시가 00시로 표시되는 오류 수정 [👉 issue 링크](https://github.com/alittlekitten/SsocoTimer/issues/34)
- [x] `+ - 버튼` 마우스 커서 pointer로 바꾸기 [👉 issue 링크](https://github.com/alittlekitten/SsocoTimer/issues/35)
- [x] craco 적용을 통한 `JSX pragma` 제거
- [x] craco 적용을 통한 절대경로 설정
- [x] 필요없는 logo.svg파일 삭제
- [x] `padStart`를 통한 코드 리팩토링
- [x] `eslint`, `prettier` 적용 및 `@typescript-eslint` 적용
- [x] eslint 설정으로부터 발견된 미비한 타입 및 인터페이스 관련 문제 및 오류 해소, any type 제거
- [x] 재생 버튼과 일시정지 버튼을 조건부 렌더링으로 화면에 띄워서 UI/UX 개선

### `22.03.31` - `v1.4.0`

#### Special Thx To my mentor [yeon52](https://github.com/yeon52), [jyo-jyo](https://github.com/jyo-jyo), [pyo-sh](https://github.com/pyo-sh)

- [x] 상태값 저장 - 타이머와 스톱워치가 동시에 돌 수 있도록 구현하기
- [x] 타이머 랩하고 스톱워치 랩 데이터가 통일이 안되어있어서 불편
- [x] 타이머 위아래로 시 분 초에 모두 + - 버튼 달기
- [x] 분과 초에서 59가 넘는 숫자를 입력하면 강제로 59로 놓기
- [x] 최솟값이랑 최댓값일 때 더하기 빼기 버튼 비활성화된것처럼 보이게 하기

### `22.04.01` - `v1.5.0`

- [x] 다크모드 구현
- [x] util버튼들의 hover 효과 변경 (rotate)
- [x] Timer: 3초 이내로 남았을 때 작은 범위만 색칠됐던 것을 화면 전체로 확대
- [x] 다크모드에 사용할 색들을 palette에 담아서 변수처리해서 사용 (emotion의 `themeProvider`, `useTheme` 사용)
- [x] 절대경로 일부 개선
- [x] 로컬스토리지에 다크모드 상태값을 저장하여 브라우저를 종료하고 다시 켜도 해당 상태값 불러와서 바로 적용할 수 있도록 구현
- [x] `react-router-dom`을 이용한 라우팅처리
- [x] 활성화된 기능에 따라 브라우저 탭의 이름 변경

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
- 해당 컴포넌트에 className을 부여하고 원하는 설정값으로 바꾸는 방식을 이용했습니다.

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

### setTimeout으로 매 초마다 시간을 불러올 때 생기는 초기 딜레이

- 처음에는 복잡하게 밀리초까지 받아올 필요가 있을까 싶어서 초까지만 구현을 하려고 했습니다.
  - useEffect안에 setTimeout을 이용해서 1000ms 후에 새로운 시간으로 렌더링되도록 만들었는데, 이렇게 구현하니 초기 1초 딜레이가 발생하게 되었습니다.
- 해당 딜레이 현상을 막기 위해 밀리초 상태를 만들고, 밀리초단위로 상태값을 변경할 수 있도록 만들었습니다.
- 리렌더링을 위한 ms 상태부분은 사용자에게 보여지지 않도록 변경하였고, 리렌더링에 영향을 끼치지 않도록 `display:none` 처리를 했습니다.

### 연월일 추가

- 시계 UX 개선을 위해 연월일을 추가하였습니다.
- 미리 잡아놓은 범위 내에서 연월일을 추가하고 싶었기 때문에 기존 시분초의 바로 윗부분에 자리를 만들어주었습니다.
- `position:relation` 상태인 부모 엘리먼트의 아래에 있는 자식 컴포넌트는 `position:absolute`를 하게 되면 해당 상위 엘리먼트를 기준으로 offset 속성이 적용된다는 점을 이용하여 배치하였습니다.

### TypeScript 마이그레이션

- 기존 JS 기반의 프로젝트를 TS 기반으로 마이그레이션했습니다.
- tsconfig.json을 생성하고, allowJS 옵션을 이용해서 점진적으로 ts/tsx로 변환하였습니다.
- any사용을 최소화 하기 위해서 noImplicitAny 옵션을 true로 바꾸고, 타입 추론이 어려울 수 있는 상태값들에 대해 타입을 명시적으로 지정하였습니다.
- 각 컴포넌트에서 사용하는 인터페이스 중에서 중복되는 요소들을 정리할 예정에 있습니다.
- redux에서 `string`형태로 관리되는 action type을 실제 문자열 값으로 추론되도록 변경할 예정에 있습니다.
- 공통되는 type과 interface를 모아두는 폴더를 만들지, 필요한 컴포넌트에서 바로 선언하고 사용하는 방법을 사용할 지 고민중입니다.

### 커스텀 훅 사용

- 하나의 컴포넌트가 비즈니스 로직과 출력 부분을 모두 가지고 있다보니 가독성이 떨어지고 너무 길어지는 문제가 발생했습니다.
- 그래서 비즈니스 로직의 재사용성 확보와 가독성 확보를 위해서 비즈니스 로직과 출력 부분을 분리해야겠다고 마음먹었고, 이 과정에서 커스텀 훅을 사용했습니다.
- 각각의 비즈니스 로직을 해당 컴포넌트 이름 앞에 use를 붙인 형태로 만든 커스텀 훅 파일로 옮겼습니다.
  - 이 과정을 통해 컴포넌트는 출력 부분, 커스텀 훅은 로직 부분을 담당하는 관심사 분리가 보다 명확하게 이루어질 수 있었습니다.
- 또한 재사용이 가능한 Time Management와 관련된 부분을 별도로 커스텀 훅으로 뽑아내서 hooks 폴더의 utils 폴더 안에 넣었습니다. (커스텀 훅 2단 분리)
  - 그렇게 빼낸 useTimeManage 커스텀 훅은 각각의 컴포넌트 담당 커스텀 훅에서 사용했습니다.
- 현재까지 가장 큰 3개의 기능단위인 Timer, Stopwatch, Clock에 대한 비즈니스 로직 분리를 완료했습니다.
  - 다만 각각의 비즈니스 로직 단위도 다소 큰 부분이 있어서 조금 더 세세하게 나눌 예정입니다.
- 추가로 전역 store에서 useSelector로 가져오는 상태를 래핑하는 커스텀 훅을 생성해서 사용할 예정입니다.

### craco 도입

- CRA 환경에서는 babel이나 webpack을 따로 설정하지 않아도 알아서 설정해주기 때문에 굉장히 편리합니다.
- 하지만 그만큼 세세한 설정을 할 수 없다는 단점이 존재합니다.
- eject를 할 수 있지만, eject를 하게 되면 CRA를 쓴 의미가 퇴색될 수 있다고 판단하였습니다.
- babel 옵션 변경 및 절대경로 설정 변경을 위해서는 우회할 수 있는 다른 방법이 필요했고, 그 방법들 중 `craco`를 선택했습니다.
- `craco`를 사용하여 babel 설정을 변경하여 CRA, typescript 환경에서 JSX Pragma를 제거하는 과정을 https://ssocoit.tistory.com/257에 자세히 남겨두었습니다.

### 상태 관리 방법에 대한 고민

- 처음에는 redux에서 상태를 선언하고, 여기서 상태를 관리하려고 했습니다.
- 그런데 생각해보니 Reducer를 이용해서만 상태값을 변경시킬 수 있는데, stopwatch의 경우 시간의 차로 계산을 하기 때문에 밀리초가 지나갈 때 딱 .000초를 맞추지 못하는 경우가 발생했습니다.
  - 이런 문제로 인해 정상적으로 +1 -1하는 방식을 사용할 수가 없게 되어서 다른 방법을 찾아야했습니다.
- useReducer를 사용해서 value를 dispatch하는 방식도 생각했지만, store의 본질적인 등장 원인인 props drilling 해결이 현재 레포지토리 구조와 같이 얕은 앱에서는 큰 메리트가 없다고 생각하게 되었습니다.
- 그래서 부모 요소(app.tsx)에 선언해놓고 자식요소로 전달하는 방식을 사용하기로 결정했습니다.
- 다만 현재 구조는 자식 요소에 위치했던 상태값들이 부모 요소로 넘어와서 관리되면서 발생하는 문제인 과도한 리렌더링이 발생할 수 있는 가능성이 존재하므로 추후에 구조 개선 예정에 있습니다.

### Date 함수를 사용한 시간 계산

- useTimer 커스텀 훅 내부의 useEffect에서 매 렌더링마다 Date함수를 사용해서 시간을 계산하다보니 브라우저의 렌더링 한계(크롬 기준 약 4ms)에 막혀 정확하게 0 hours 0 minutes 0 seconds 0 ms 상태에 걸리지 않아서 시간이 부자연스럽게 증가하는 문제가 발생했습니다.
- 해당 문제를 Date 내부에 들어가는 변수값에 음수가 들어가지 않도록 Math.max를 사용하는 방향으로 개선할 수 있었습니다.

### 다크모드 구현

- 기존에는 일반적인 상수값의 색상이 들어갔지만, light와 dark의 상태에 따라 색상이 달라져야 했기 때문에 굉장히 많은 선택적 렌더링이 발생하게 되었습니다.
- 해당 문제를 해결하고자 palette라는 파일을 만들어서 상태에 따라 다른 색상 변수를 선언하고, 해당 변수를 각 컴포넌트에 사용함으로써 색상을 변경하는 등의 관리해야 할 일이 있을 때 편리하게 관리할 수 있게 되었습니다.
- 변수 형태로 사용하기 위한 방법으로는 emotion의 `ThemeProvider`, `useTheme`을 사용했습니다.
  - ThemeProvider는 theme 요소를 context API와 같은 방식으로 Provider 안쪽의 컴포넌트에 전달하고, useTheme을 통해서 해당 요소를 가져온 후에 props에 전달할 수 있습니다.
- 또한 브라우저의 로컬스토리지에 상태값을 담아두어서 브라우저를 껐다 켜도 해당 상태가 유지될 수 있도록 구현하였습니다.
  - 처음 이 기능을 적용했을 때 paint가 된 이후에 상태값이 바뀌어서 다크모드 사용시 색이 변화하는 모습이 보이는 문제가 있었는데, `useLayoutEffect`를 사용해서 상태값을 변경한 후에 paint가 되도록 설정함으로써 UX를 개선하였습니다.

### 라우팅 처리

- 현재 구조에서는 라우팅이 크게 필요하지 않은 형태였지만, 개인프로젝트이기 때문에 학습용도로 작년 가을에 새롭게 업데이트된 `react-router-dom v6`를 사용했습니다.
- SPA의 특성상 임의의 주소로 라우팅처리가 된 부분의 경우 새로고침시 정상적으로 렌더링하지 못하는 현상이 발생합니다. 이를 막기 위해서 가장 메인이 되는 Timer 컴포넌트에 `/*` 형태의 path를 달아서 임의의 주소로 연결하게 되면 Timer 컴포넌트로 이동하도록 구현했습니다.

<br />

## 🎞 움짤

### ver 1.5.0

![Honeycam 2022-04-01 19-43-02](https://user-images.githubusercontent.com/14370441/161248542-bbbb5415-cd88-4a04-a8b8-c1dff3e719d4.gif)

### ver 1.4.0

![Honeycam 2022-04-01 10-22-02](https://user-images.githubusercontent.com/14370441/161176484-1717f825-8356-4de7-8a5c-f9550368e016.gif)

### ver 1.3.0

![Honeycam 2022-03-24 02-10-55](https://user-images.githubusercontent.com/14370441/159756849-bb103bcf-d5dc-4ac2-ac0f-7b731aef522a.gif)

### ver 1.1.1

![Honeycam 2022-02-26 03-44-57](https://user-images.githubusercontent.com/14370441/155770559-87298367-0722-44cc-b0b2-450e0c50b77a.gif)

### ver 1.1.0

![Honeycam 2022-02-25 02-39-36](https://user-images.githubusercontent.com/14370441/155578669-cc970193-b256-4686-b0c5-4a06fd3aec01.gif)

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
