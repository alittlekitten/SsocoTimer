/// <reference types="react-scripts" />
/// <reference types="@emotion/react/types/css-prop" />
// react-scripts라는 dependency를 불러와서 사용한다는 의미

declare module "*.mp3" {
  const src: string;
  export default src;
}
